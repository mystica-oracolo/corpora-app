/* ═══════════════════════════════════════════════════════════════
   CORPORA — FASE 9: CLOUDFLARE WORKER (premium server-side)

   Due endpoint:
   - POST /create-checkout-session  → crea una Stripe Checkout
     Session per lo slug richiesto, ritorna l'URL a cui reindirizzare
   - POST /webhook                  → riceve gli eventi Stripe,
     verifica la firma, aggiorna la tabella "subscriptions" su
     Supabase con la service_role key

   VARIABILI D'AMBIENTE DA CONFIGURARE (Cloudflare dashboard →
   Worker → Settings → Variables, come "secret" quelle sensibili):
     STRIPE_SECRET_KEY          sk_live_... (o sk_test_... in test)
     STRIPE_WEBHOOK_SECRET      whsec_... (generato quando crei il
                                 webhook endpoint su dashboard Stripe)
     STRIPE_PRICE_MONTHLY       price_... (7,90€/mese)
     STRIPE_PRICE_YEARLY        price_... (59€/anno)
     SUPABASE_URL                https://xxxx.supabase.co
     SUPABASE_SERVICE_ROLE_KEY   (Supabase → Settings → API →
                                 service_role — NON la anon key)
     APP_URL                     https://tuodominio.it (o l'URL
                                 GitHub Pages di Corpora)
   ═══════════════════════════════════════════════════════════════ */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS per le chiamate dal client (solo dal tuo dominio in produzione)
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(env) });
    }

    try {
      if (url.pathname === '/create-checkout-session' && request.method === 'POST') {
        return await handleCreateCheckout(request, env);
      }
      if (url.pathname === '/webhook' && request.method === 'POST') {
        return await handleWebhook(request, env);
      }
      return new Response('Not found', { status: 404 });
    } catch (err) {
      console.error('Worker error:', err);
      return new Response('Internal error', { status: 500 });
    }
  }
};

function corsHeaders(env) {
  return {
    'Access-Control-Allow-Origin': env.APP_URL || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}

/* ─────────────────────────────────────────
   1. CREA CHECKOUT SESSION
   Il client manda { slug, plan: 'monthly'|'yearly' }.
   Il Worker crea la sessione Stripe con client_reference_id=slug
   (così il webhook sa a quale profilo collegare l'abbonamento)
   e ritorna l'URL della pagina di pagamento Stripe.
   ───────────────────────────────────────── */
async function handleCreateCheckout(request, env) {
  const { slug, plan } = await request.json();

  if (!slug || !/^[a-z0-9_]{1,30}$/.test(slug)) {
    return new Response(JSON.stringify({ error: 'slug non valido' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(env) }
    });
  }

  const priceId = plan === 'yearly' ? env.STRIPE_PRICE_YEARLY : env.STRIPE_PRICE_MONTHLY;

  const params = new URLSearchParams({
    'mode': 'subscription',
    'line_items[0][price]': priceId,
    'line_items[0][quantity]': '1',
    'client_reference_id': slug,
    'success_url': `${env.APP_URL}/?premium=success`,
    'cancel_url': `${env.APP_URL}/?premium=cancel`
  });

  const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params.toString()
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error('Stripe checkout error:', errText);
    return new Response(JSON.stringify({ error: 'Errore creazione sessione' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(env) }
    });
  }

  const session = await res.json();
  return new Response(JSON.stringify({ url: session.url }), {
    headers: { 'Content-Type': 'application/json', ...corsHeaders(env) }
  });
}

/* ─────────────────────────────────────────
   2. WEBHOOK STRIPE
   Verifica la firma (obbligatorio: senza questo, chiunque potrebbe
   chiamare l'endpoint e attivarsi il premium gratis), poi aggiorna
   Supabase in base al tipo di evento.
   ───────────────────────────────────────── */
async function handleWebhook(request, env) {
  const signature = request.headers.get('stripe-signature');
  const body = await request.text();

  const isValid = await verifyStripeSignature(body, signature, env.STRIPE_WEBHOOK_SECRET);
  if (!isValid) {
    return new Response('Firma non valida', { status: 400 });
  }

  const event = JSON.parse(body);

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      const slug = session.client_reference_id;
      if (slug) {
        await upsertSubscription(env, {
          slug,
          stripe_customer_id: session.customer,
          stripe_subscription_id: session.subscription,
          status: 'active',
          plan: null, // aggiornato al prossimo evento subscription.updated
          current_period_end: null
        });
      }
      break;
    }

    case 'customer.subscription.updated':
    case 'customer.subscription.created': {
      const sub = event.data.object;
      const slug = await findSlugByCustomer(env, sub.customer);
      if (slug) {
        const priceId = sub.items?.data?.[0]?.price?.id;
        const plan = priceId === env.STRIPE_PRICE_YEARLY ? 'yearly' : 'monthly';
        await upsertSubscription(env, {
          slug,
          stripe_customer_id: sub.customer,
          stripe_subscription_id: sub.id,
          status: sub.status, // active | trialing | past_due | canceled...
          plan,
          current_period_end: new Date(sub.current_period_end * 1000).toISOString()
        });
      }
      break;
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object;
      const slug = await findSlugByCustomer(env, sub.customer);
      if (slug) {
        await upsertSubscription(env, {
          slug,
          stripe_customer_id: sub.customer,
          stripe_subscription_id: sub.id,
          status: 'canceled',
          plan: null,
          current_period_end: null
        });
      }
      break;
    }
  }

  return new Response('ok', { status: 200 });
}

/* ─────────────────────────────────────────
   Helpers Supabase (usano la service_role key:
   bypassa le RLS, quindi va usata SOLO qui, mai nel client)
   ───────────────────────────────────────── */
async function upsertSubscription(env, row) {
  const res = await fetch(`${env.SUPABASE_URL}/rest/v1/subscriptions`, {
    method: 'POST',
    headers: {
      'apikey': env.SUPABASE_SERVICE_ROLE_KEY,
      'Authorization': `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates'
    },
    body: JSON.stringify({ ...row, updated_at: new Date().toISOString() })
  });
  if (!res.ok) {
    console.error('Supabase upsert error:', await res.text());
  }
}

async function findSlugByCustomer(env, customerId) {
  const res = await fetch(
    `${env.SUPABASE_URL}/rest/v1/subscriptions?stripe_customer_id=eq.${encodeURIComponent(customerId)}&select=slug&limit=1`,
    {
      headers: {
        'apikey': env.SUPABASE_SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`
      }
    }
  );
  if (!res.ok) return null;
  const rows = await res.json();
  return rows[0]?.slug || null;
}

/* ─────────────────────────────────────────
   Verifica firma webhook Stripe (HMAC SHA-256),
   implementata con Web Crypto perché il Worker non ha l'SDK Node di Stripe.
   ───────────────────────────────────────── */
async function verifyStripeSignature(payload, signatureHeader, secret) {
  if (!signatureHeader) return false;

  const parts = Object.fromEntries(
    signatureHeader.split(',').map((p) => p.split('='))
  );
  const timestamp = parts.t;
  const signature = parts.v1;
  if (!timestamp || !signature) return false;

  const signedPayload = `${timestamp}.${payload}`;
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(signedPayload));
  const expectedHex = [...new Uint8Array(sig)]
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  return expectedHex === signature;
}
