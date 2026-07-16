-- ═══════════════════════════════════════════════════════════════
-- CORPORA — FASE 9: PREMIUM SERVER-SIDE
-- Da eseguire nel SQL Editor del progetto Supabase (una volta sola)
--
-- Perché una tabella a parte e non un campo su "profiles":
-- così le policy RLS possono essere granulari — lettura pubblica
-- (serve al client per sapere se mostrare i contenuti premium),
-- scrittura NEGATA a chiunque usi l'anon key. Solo il Cloudflare
-- Worker (con la service_role key, che bypassa sempre le RLS) può
-- scrivere qui dopo aver verificato un evento Stripe autentico.
-- ═══════════════════════════════════════════════════════════════

create table if not exists subscriptions (
  slug text primary key,                    -- stesso slug usato per il profilo locale (PIN)
  stripe_customer_id text,
  stripe_subscription_id text,
  status text default 'inactive',           -- 'active' | 'trialing' | 'past_due' | 'canceled' | 'inactive'
  plan text,                                -- 'monthly' | 'yearly'
  current_period_end timestamptz,
  updated_at timestamptz default now()
);

create index if not exists idx_subscriptions_stripe_customer
  on subscriptions(stripe_customer_id);

alter table subscriptions enable row level security;

-- Lettura: pubblica. Non è un dato sensibile (solo "attivo sì/no" +
-- scadenza), e il client deve poterlo leggere con l'anon key per
-- sapere se sbloccare i contenuti premium.
create policy "subscriptions_select_public"
  on subscriptions for select
  using (true);

-- NESSUNA policy di insert/update/delete per anon/authenticated:
-- di default, senza policy dedicata, RLS blocca la scrittura.
-- Solo la service_role key (usata esclusivamente dal Worker,
-- MAI esposta nel client) può scrivere, perché bypassa le RLS.
