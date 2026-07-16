# Fase 9 — Premium server-side: istruzioni di deploy

## Perché

Oggi `S.settings.premium` è un flag in localStorage: da console browser
`S.settings.premium=true` sblocca tutto gratis. Con questa fase il premium
diventa una verifica reale contro un database che solo il tuo backend può
scrivere, dopo un pagamento Stripe confermato.

## Cosa fa ogni pezzo

| File | Dove va | Cosa fa |
|---|---|---|
| `corpora-schema-fase9.sql` | Supabase → SQL Editor | Crea la tabella `subscriptions`, leggibile da tutti, scrivibile solo dal service role |
| `stripe-webhook-worker.js` | Cloudflare Workers | Riceve i pagamenti Stripe, li verifica, aggiorna Supabase |
| `fase9-premium-server.js` | Repo GitHub (root, insieme agli altri fase*.js) | Sostituisce `isPremium()` demo con la verifica reale |
| `index.html` (già aggiornato) | Repo GitHub | Carica il nuovo file |

## Passi

**1. Supabase**
Se non hai già un progetto Supabase configurato, creane uno (gratuito) e
attiva la sync da Impostazioni → Sync nell'app, come già fai. Poi:
- SQL Editor → incolla ed esegui `corpora-schema-fase9.sql`
- Settings → API → copia la **service_role key** (diversa dalla anon key
  che usi già nell'app — questa non va MAI nel client, solo nel Worker)

**2. Stripe**
- Dashboard Stripe → Prodotti → crea "Corpora Premium" con due prezzi
  ricorrenti: 7,90€/mese e 59€/anno → copia i due `price_id`
- Developers → API keys → copia la **secret key** (sk_live_... o
  sk_test_... per le prove)
- Developers → Webhooks → Aggiungi endpoint → URL: lo saprai dopo il passo
  3 (sarà `https://tuo-worker.workers.dev/webhook`) → eventi da ascoltare:
  `checkout.session.completed`, `customer.subscription.updated`,
  `customer.subscription.created`, `customer.subscription.deleted` → copia
  il **webhook signing secret** (whsec_...)

**3. Cloudflare Worker**
- Cloudflare dashboard → Workers & Pages → Crea Worker → incolla il
  contenuto di `stripe-webhook-worker.js`
- Settings → Variables → aggiungi come **secret** (non plaintext):
  - `STRIPE_SECRET_KEY`
  - `STRIPE_WEBHOOK_SECRET`
  - `STRIPE_PRICE_MONTHLY`
  - `STRIPE_PRICE_YEARLY`
  - `SUPABASE_URL`
  - `SUPABASE_SERVICE_ROLE_KEY`
  - `APP_URL` (es. `https://mysticaoracoli.it` o l'URL GitHub Pages di Corpora — solo dominio, senza slash finale)
- Deploy. Copia l'URL del Worker (es. `https://corpora-premium.tuonome.workers.dev`)
- Torna su Stripe → incolla `<url-worker>/webhook` come endpoint webhook

**4. Collega il Worker al client**
- Apri `fase9-premium-server.js`, riga `const WORKER_URL = ...`, sostituisci
  con l'URL reale del Worker copiato al passo 3
- Carica su GitHub: `index.html` aggiornato, `fase9-premium-server.js`,
  insieme ai file già consegnati nella Fase 10 (`sw.js`, `app.js`)
- Bump di `CACHE_VERSION` in `sw.js` (workflow standard, come sempre)

**5. Test**
- Usa le chiavi Stripe di **test** (sk_test_/price di test) prima di andare
  in produzione, con le carte di test di Stripe (es. 4242 4242 4242 4242)
- Verifica: paga → redirect di successo → il toast "Premium attivo" appare
  entro pochi secondi → prova anche `S.settings.premium=true` da console:
  non deve più avere alcun effetto, perché `isPremium()` ora legge solo la
  cache sincronizzata da Supabase

## Nota su chi non ha Supabase configurato

Se un utente non attiva la sync Supabase, `refreshPremiumStatus()` non ha
modo di verificare un pagamento reale — è una scelta voluta: meglio
"nessun premium verificabile" che un flag locale bypassabile. In pratica,
per vendere Premium sul serio, la sync Supabase dovrebbe diventare
obbligatoria (o comunque richiesta) al momento dell'acquisto, non più
opzionale come oggi.
