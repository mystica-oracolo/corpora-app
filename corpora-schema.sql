-- ═══════════════════════════════════════════════════════════════
-- CORPORA — SCHEMA RELAZIONALE (Sezione 7 del blueprint)
-- Da eseguire UNA VOLTA nel SQL Editor del tuo progetto Supabase.
--
-- Rapporto con lo schema logico del blueprint:
-- questo è lo schema "semplificato" richiamato in Sezione 7,
-- adattato alla forma dati reale già usata dall'app (S.profile,
-- S.workouts, S.setLogs, S.recipes, S.aiInsights...) invece di
-- essere un DDL teorico scollegato dal codice. Non sostituisce
-- la tabella legacy a blob singolo (nutritrack_data, creata da
-- Impostazioni → Sync → Attiva) che resta il fallback minimo:
-- questo schema aggiunge sync granulare best-effort (Fase 3+6).
--
-- Sicurezza: l'app usa PIN locale, non Supabase Auth, quindi le
-- policy sono permissive (using true) esattamente come la tabella
-- legacy. Va bene per uso personale/demo; per un vero multi-utente
-- pubblico servirebbe Supabase Auth + policy per riga (out of
-- scope per l'MVP, vedi Sezione 14 compliance del blueprint).
-- ═══════════════════════════════════════════════════════════════

-- ─────────────────────────────────────────
-- 1. PROFILES (radice — un profilo per slug/PIN locale)
-- ─────────────────────────────────────────
create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  nome text not null,
  role text default 'client',        -- 'client' | 'pt'
  pt_slug text,                      -- se seguito da un PT (area professionisti, Fase 3)
  created_at timestamptz default now()
);
create index if not exists idx_profiles_slug on profiles(slug);
create index if not exists idx_profiles_pt_slug on profiles(pt_slug);

-- ─────────────────────────────────────────
-- 2. PROFILO ANTROPOMETRICO + OBIETTIVI (Sezione 4/5 onboarding)
-- Una riga per profilo, sovrascritta ad ogni sync (snapshot corrente).
-- ─────────────────────────────────────────
create table if not exists profilo_dati (
  profile_id uuid primary key references profiles(id) on delete cascade,
  sesso text,
  eta int,
  altezza numeric,
  peso_obiettivo numeric,
  obiettivo text,                    -- dimagrimento | massa | ricomposizione | mantenimento | benessere
  attivita text,                     -- livello attività quotidiana (fattore TDEE)
  livello text,                      -- Principiante | Intermedio | Avanzato (allenamento)
  giorni_sett int,
  luogo text,                        -- Casa | Palestra
  durata_sessione int,
  ore_sonno numeric,
  stress int,
  motivazione text,
  updated_at timestamptz default now()
);

-- ─────────────────────────────────────────
-- 3. PREFERENZE ALIMENTARI (Sezione 4 step 6, Sezione 5)
-- ─────────────────────────────────────────
create table if not exists preferenze (
  profile_id uuid primary key references profiles(id) on delete cascade,
  tipo_dieta text,                   -- onnivoro | vegetariano | vegano | altro
  allergie jsonb default '[]',
  cibi_esclusi jsonb default '[]',
  n_pasti_giorno int,
  updated_at timestamptz default now()
);

-- ─────────────────────────────────────────
-- 4. CHECK-IN SETTIMANALI (= progress_logs del blueprint)
-- Già scritta da Fase 3 (syncCheckinToBackend) — schema invariato.
-- ─────────────────────────────────────────
create table if not exists checkins (
  id bigint generated always as identity primary key,
  profile_id uuid references profiles(id) on delete cascade,
  data date not null,
  peso numeric,
  vita numeric,
  energia int,
  created_at timestamptz default now()
);
create index if not exists idx_checkins_profile on checkins(profile_id, data);

-- ─────────────────────────────────────────
-- 5. ADHERENCE SCORE SETTIMANALE (= adherence_logs del blueprint)
-- Già scritta da Fase 3 (syncAdherenceToBackend) — schema invariato.
-- ─────────────────────────────────────────
create table if not exists adherence_snapshots (
  id bigint generated always as identity primary key,
  profile_id uuid references profiles(id) on delete cascade,
  week text not null,                -- lunedì ISO della settimana, YYYY-MM-DD
  score int,
  macro_pct numeric,
  workout_pct numeric,
  checkin_pct numeric,
  created_at timestamptz default now()
);
create index if not exists idx_adherence_profile on adherence_snapshots(profile_id, week);

-- ─────────────────────────────────────────
-- 6. SCHEDE ALLENAMENTO GENERATE (Sezione 6 / Fase 5)
-- Una riga per scheda attiva (rigenerare = nuova riga, days come jsonb
-- perché la struttura è già validata lato client da generateWorkoutPlan).
-- ─────────────────────────────────────────
create table if not exists workout_plans (
  id bigint generated always as identity primary key,
  profile_id uuid references profiles(id) on delete cascade,
  source text default 'algoritmico',
  name text,
  level text,
  freq int,
  goal text,                         -- forza | ipertrofia | dimagrimento
  split_type text,                   -- full | upperlower | ppl
  start_date date,
  days jsonb,
  created_at timestamptz default now()
);
create index if not exists idx_workout_plans_profile on workout_plans(profile_id, start_date desc);

-- ─────────────────────────────────────────
-- 7. SESSIONI DI ALLENAMENTO SVOLTE (= workout_sessions del blueprint)
-- ─────────────────────────────────────────
create table if not exists workout_sessions (
  id bigint generated always as identity primary key,
  profile_id uuid references profiles(id) on delete cascade,
  data date not null,
  nome text,
  tipo text,
  durata int,
  kcal_bruciate int,
  volume numeric,                    -- kg × serie × rip
  rpe_media numeric,
  note text,
  created_at timestamptz default now()
);
create index if not exists idx_workout_sessions_profile on workout_sessions(profile_id, data desc);

-- ─────────────────────────────────────────
-- 8. SET LOG PER ESERCIZIO (progressione RPE, PR, volume — Fase 5)
-- ─────────────────────────────────────────
create table if not exists set_logs (
  id bigint generated always as identity primary key,
  profile_id uuid references profiles(id) on delete cascade,
  data date not null,
  ex_id int not null,
  kg numeric,
  reps int,
  rpe numeric,
  sets int,
  created_at timestamptz default now()
);
create index if not exists idx_set_logs_profile_ex on set_logs(profile_id, ex_id, data desc);

-- ─────────────────────────────────────────
-- 9. RICETTE UTENTE
-- ─────────────────────────────────────────
create table if not exists ricette (
  id bigint generated always as identity primary key,
  profile_id uuid references profiles(id) on delete cascade,
  name text,
  emoji text,
  portions int default 1,
  ingredients jsonb default '[]',    -- [{alimento_id, quantità_g}]
  updated_at timestamptz default now()
);
create index if not exists idx_ricette_profile on ricette(profile_id);

-- ─────────────────────────────────────────
-- 10. LISTA SPESA (generata on-demand lato client oggi; tabella pronta
-- per quando si vorrà persistere/condividere la lista tra dispositivi)
-- ─────────────────────────────────────────
create table if not exists liste_spesa (
  id bigint generated always as identity primary key,
  profile_id uuid references profiles(id) on delete cascade,
  settimana text,                    -- lunedì ISO della settimana
  items jsonb default '[]',
  created_at timestamptz default now()
);
create index if not exists idx_liste_spesa_profile on liste_spesa(profile_id, settimana);

-- ─────────────────────────────────────────
-- 11. AI INSIGHTS (messaggi coach — Sezione 11)
-- ─────────────────────────────────────────
create table if not exists ai_insights (
  id bigint generated always as identity primary key,
  profile_id uuid references profiles(id) on delete cascade,
  data timestamptz default now(),
  tipo text,                         -- motivazionale | correttivo | celebrativo
  testo text,
  letto boolean default false
);
create index if not exists idx_ai_insights_profile on ai_insights(profile_id, data desc);

-- ─────────────────────────────────────────
-- ROW LEVEL SECURITY — permissiva (coerente con auth via PIN locale,
-- non Supabase Auth). Vedi nota in testa al file.
-- ─────────────────────────────────────────
do $$
declare t text;
begin
  foreach t in array array['profiles','profilo_dati','preferenze','checkins',
    'adherence_snapshots','workout_plans','workout_sessions','set_logs',
    'ricette','liste_spesa','ai_insights']
  loop
    execute format('alter table %I enable row level security;', t);
    execute format('drop policy if exists "public read write" on %I;', t);
    execute format('create policy "public read write" on %I for all using (true) with check (true);', t);
  end loop;
end $$;
