# corpora-app
App premium nutrizione e allenamento

## Stato — Fasi completate (Sezioni blueprint)
1-2. Adherence score, check-in, matching scheda, Coach AI, paywall, lista spesa, analytics (fase3-upgrade.js)
4. Motore nutrizionale esteso (fase4-motore-nutrizionale.js)
5. Motore allenamento algoritmico (fase5-motore-allenamento.js)
6. Database/schema relazionale (fase6-database.js, corpora-schema.sql)
7. Design system — badge adherence, heatmap streak (fase7-design-system.js)
8. KPI avanzati (risk score, consistency streak, kcal alert) · Coach AI (trasparenza + disclaimer)
   · Gamification (streak con riposo, milestone, recap domenicale, win-back) · Compliance
   (cancellazione account, disclaimer, redirect medico) — fase8-kpi-gamification-compliance.js

## Bug critico corretto in Fase 8
Diverse funzioni chiave (`getAdherenceScore`, `matchWorkoutPlan`, `getProteinTarget`,
`isPremium`, `generateCoachMessage`, ecc.) erano dichiarate come `function` locali dentro
closure innestate e MAI esposte su `window`. Il gate `whenReady` di CorporaFase2 (Coach AI,
Paywall, Lista Spesa, Analytics) restava quindi in polling infinito e non si attivava mai —
funzionalità scritte ma di fatto morte. Corretto aggiungendo `window.xxx=xxx` nei punti di
definizione (vedi commenti `FIX` in fase3-upgrade.js). Verificato con test funzionale
end-to-end in Node.

## Bug hunt successivo — riscontro sistematico su tutte le fasi
Rianalisi statica (script di controllo cross-closure) + test di fumo dinamico (tutte le
schermate principali richiamate in un harness Node con DOM simulato). Trovati e corretti:
1. `ensureExLog` locale a NutriTrackPRO, usata (non protetta) da `getVolumeTrend()` in
   CorporaFase2 → **ReferenceError reale, riprodotto**: la schermata Analytics per utenti
   Premium andava in errore. Corretto esponendola su `window`.
2. `getFibreTarget`/`getWaterTargetMl`/`getWaterTargetBicchieri`/`ensureProfileExt` locali a
   CorporaFase1, mai raggiungibili da Fase 4 (guardate con `typeof`, quindi degradavano in
   silenzio): il target fibre "dinamico su kcal" (Sezione 5) non scattava mai, restava
   sempre fisso a 28g. Corretto esponendole.
3. `renderPasto` — refuso: funzione mai esistita in nessun file. Il fallback difensivo
   evitava il crash ma rimandava sempre l'utente alla Home invece di aggiornare il pasto
   appena modificato dopo una sostituzione alimento intelligente. Corretto sostituendo con
   `showMeal(mk)` (il pattern reale usato ovunque nell'app).
4. Regressione introdotta dalla stessa Fase 8: i nuovi tipi di messaggio coach
   (`trasparenza`, `milestone`, `medical_redirect`) finivano nello stesso conteggio
   settimanale (`coachMessagesThisWeek`) dei messaggi a limite, contraddicendo la UI che
   promette "sempre gratis" per la trasparenza e penalizzando un utente free per aver
   scritto una nota nel check-in. Corretto escludendo questi tipi dal conteggio.

Verificati inoltre (nessun problema): tutte le catene di wrap `window.showHome`/`showCoach`/
`showAdherenceScore`/`showMoreMenu`/`saveCheckin`/`showCheckin`/`renderImpostazioni`/
`confirmAddEsercizio` (fino a 5 livelli di override in cascata) chiamano correttamente la
versione precedente; nessuna funzione richiamata da `onclick`/`onchange` nell'HTML generato
risulta non esposta su `window`; ordine di caricamento script in `index.html` è sincrono
(nessun `defer`/`async`), quindi l'ordine di risoluzione dei vari `whenReady()` è deterministico.

## Sezioni blueprint 15-17 (Roadmap, Stack tecnico, Prompt finale)
Sono documentazione strategica, non richiedono implementazione — restano come da
Corpora-Blueprint-Prodotto-1.md.


