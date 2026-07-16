/* ═══════════════════════════════════════════════════════════════
   FASE 6 — CORPORA
   Completa SEZIONE 7 del blueprint (Database — schema logico).

   La Fase 3 aveva già introdotto il sync relazionale best-effort
   (profiles, checkins, adherence_snapshots) ma citava un file
   corpora-schema.sql che non esisteva ancora: eccolo (vedi
   corpora-schema.sql) insieme al resto delle tabelle previste dal
   blueprint. Questa fase estende il sync granulare alle entità
   introdotte da Fase 4/5 che finora vivevano solo in localStorage:

     1. Profilo antropometrico + preferenze alimentari
     2. Schede allenamento generate (workout_plans)
     3. Sessioni svolte + set log per esercizio (progressione/PR)
     4. Ricette utente
     5. AI insights (messaggi coach)

   ATTENZIONE — LEGGERE PRIMA DI ATTIVARE:
   Esegui corpora-schema.sql nel tuo progetto Supabase (una volta
   sola, in aggiunta — non alternativa — allo script mostrato in
   Impostazioni → Sync). Senza queste tabelle il sync granulare
   fallisce in silenzio: l'app continua a funzionare in locale.

   Pattern: stesso approccio "diff su lunghezza/hash + fallimento
   silenzioso" di Fase 3, nessuna riscrittura di codice esistente.
   ═══════════════════════════════════════════════════════════════ */
(function CorporaFase6(){

  function whenReady6(fn){
    if(typeof S!=='undefined'&&typeof SB!=='undefined'&&typeof sbRequest==='function'&&typeof CUR!=='undefined'){
      fn();
    }else{
      setTimeout(()=>whenReady6(fn),150);
    }
  }

  whenReady6(function(){

    function ensureFase6State(){
      if(!S._sync6)S._sync6={workoutSessions:0,setLogs:0,aiInsights:0,recipes:0,profiloHash:null,prefHash:null,planStart:null};
    }

    // Riusa la riga profilo creata da Fase 3; se Fase 3 non è
    // caricata (ordine script alterato), duplica la stessa logica.
    async function getProfileRow(){
      if(!SB.enabled||!CUR)return null;
      if(typeof window.ensureProfileRow==='function')return window.ensureProfileRow();
      const existing=await sbRequest('GET','profiles?slug=eq.'+encodeURIComponent(CUR.slug)+'&limit=1');
      if(existing&&existing.length)return existing[0];
      await sbRequest('POST','profiles',{slug:CUR.slug,nome:CUR.name||CUR.slug,role:S.profile.role||'client'});
      const created=await sbRequest('GET','profiles?slug=eq.'+encodeURIComponent(CUR.slug)+'&limit=1');
      return created&&created.length?created[0]:null;
    }

    function hash(obj){try{return JSON.stringify(obj);}catch(e){return null;}}

    /* ────────────────────────────────────────
       1. PROFILO ANTROPOMETRICO + PREFERENZE
       ──────────────────────────────────────── */
    async function syncProfiloEPreferenze(){
      if(!SB.enabled)return;
      ensureFase6State();
      const p=S.profile;
      const profiloSnap={sesso:p.sesso,eta:p.eta,altezza:p.altezza,pesoObiettivo:S.settings.pesoTarget,
        obiettivo:p.obiettivo,attivita:p.attivita,livello:p.livello,giorniSett:p.giorniSett,luogo:p.luogo,
        durataSessione:p.tempoSessione||p.durataSessione,oreSonno:p.oreSonno,stress:p.stress,motivazione:p.motivazione};
      const prefSnap={tipoDieta:p.preferenzaAlim,allergie:p.allergie||[],cibiNonGraditi:p.cibiNonGraditi||'',pastiGiorno:p.pastiGiorno};
      const h1=hash(profiloSnap),h2=hash(prefSnap);
      if(h1===S._sync6.profiloHash&&h2===S._sync6.prefHash)return;
      try{
        const profile=await getProfileRow();if(!profile)return;
        if(h1!==S._sync6.profiloHash){
          await sbRequest('POST','profilo_dati',{profile_id:profile.id,sesso:p.sesso,eta:p.eta,altezza:p.altezza,
            peso_obiettivo:S.settings.pesoTarget,obiettivo:p.obiettivo,attivita:p.attivita,livello:p.livello,
            giorni_sett:p.giorniSett,luogo:p.luogo,durata_sessione:p.tempoSessione||p.durataSessione,ore_sonno:p.oreSonno,
            stress:p.stress,motivazione:p.motivazione});
          S._sync6.profiloHash=h1;
        }
        if(h2!==S._sync6.prefHash){
          await sbRequest('POST','preferenze',{profile_id:profile.id,tipo_dieta:p.preferenzaAlim,
            allergie:p.allergie||[],cibi_esclusi:p.cibiNonGraditi||'',n_pasti_giorno:p.pastiGiorno});
          S._sync6.prefHash=h2;
        }
      }catch(e){console.warn('[Corpora F6] sync profilo/preferenze fallito:',e);}
    }

    /* ────────────────────────────────────────
       2. SCHEDA ALLENAMENTO GENERATA
       ──────────────────────────────────────── */
    async function syncWorkoutPlan(){
      if(!SB.enabled||!S.generatedPlan)return;
      ensureFase6State();
      if(S._sync6.planStart===S.generatedPlan.startDate)return; // già sincronizzata questa versione
      try{
        const profile=await getProfileRow();if(!profile)return;
        const plan=S.generatedPlan;
        await sbRequest('POST','workout_plans',{profile_id:profile.id,source:plan.source,name:plan.name,
          level:plan.level,freq:plan.freq,goal:plan.goal,split_type:plan.splitType,start_date:plan.startDate,days:plan.days});
        S._sync6.planStart=plan.startDate;
      }catch(e){console.warn('[Corpora F6] sync scheda fallito:',e);}
    }

    /* ────────────────────────────────────────
       3. SESSIONI SVOLTE + SET LOG
       ──────────────────────────────────────── */
    async function syncSessioniESetLog(){
      if(!SB.enabled)return;
      ensureFase6State();
      const allSessions=[];
      Object.keys(S.workouts||{}).forEach(d=>(S.workouts[d]||[]).forEach(w=>allSessions.push({date:d,...w})));
      const setLogs=S.setLogs||[];
      if(allSessions.length<=S._sync6.workoutSessions&&setLogs.length<=S._sync6.setLogs)return;
      try{
        const profile=await getProfileRow();if(!profile)return;
        for(const w of allSessions.slice(S._sync6.workoutSessions)){
          await sbRequest('POST','workout_sessions',{profile_id:profile.id,data:w.date,nome:w.name,tipo:w.type,
            durata:w.duration,kcal_bruciate:w.burned,volume:w.volume||null,rpe_media:w.rpeMedia||null,note:w.notes||null});
        }
        S._sync6.workoutSessions=allSessions.length;
        for(const l of setLogs.slice(S._sync6.setLogs)){
          await sbRequest('POST','set_logs',{profile_id:profile.id,data:l.date,ex_id:l.exId,kg:l.kg,reps:l.reps,rpe:l.rpe,sets:l.sets});
        }
        S._sync6.setLogs=setLogs.length;
      }catch(e){console.warn('[Corpora F6] sync sessioni/set log fallito:',e);}
    }

    /* ────────────────────────────────────────
       4. RICETTE
       ──────────────────────────────────────── */
    async function syncRicette(){
      if(!SB.enabled)return;
      ensureFase6State();
      const recipes=S.recipes||[];
      if(recipes.length===S._sync6.recipes)return; // best-effort: cattura aggiunte, non modifiche in-place
      try{
        const profile=await getProfileRow();if(!profile)return;
        for(const r of recipes.slice(S._sync6.recipes)){
          await sbRequest('POST','ricette',{profile_id:profile.id,name:r.name,emoji:r.emoji,portions:r.portions||1,ingredients:r.ingredients||[]});
        }
        S._sync6.recipes=recipes.length;
      }catch(e){console.warn('[Corpora F6] sync ricette fallito:',e);}
    }

    /* ────────────────────────────────────────
       5. AI INSIGHTS (messaggi coach)
       ──────────────────────────────────────── */
    async function syncAiInsights(){
      if(!SB.enabled)return;
      ensureFase6State();
      const insights=S.aiInsights||[];
      if(insights.length<=S._sync6.aiInsights)return;
      try{
        const profile=await getProfileRow();if(!profile)return;
        for(const i of insights.slice(S._sync6.aiInsights)){
          await sbRequest('POST','ai_insights',{profile_id:profile.id,data:i.date,tipo:i.type,testo:i.text,letto:!!i.letto});
        }
        S._sync6.aiInsights=insights.length;
      }catch(e){console.warn('[Corpora F6] sync AI insights fallito:',e);}
    }

    /* ────────────────────────────────────────
       ORCHESTRAZIONE — un giro di sync granulare, throttled.
       Agganciato a saveState() come Fase 3, ma con un debounce più
       largo (8s) perché qui copriamo più tabelle per giro e
       saveState() viene chiamato molto di frequente durante l'uso.
       ──────────────────────────────────────── */
    let syncTimer=null;
    function scheduleGranularSync(){
      if(!SB.enabled)return;
      if(syncTimer)return;
      syncTimer=setTimeout(async()=>{
        syncTimer=null;
        await syncProfiloEPreferenze();
        await syncWorkoutPlan();
        await syncSessioniESetLog();
        await syncRicette();
        await syncAiInsights();
      },8000);
    }

    const _origSaveState6=window.saveState;
    if(typeof _origSaveState6==='function'){
      window.saveState=function(){
        _origSaveState6();
        ensureFase6State();
        scheduleGranularSync();
      };
    }

    ensureFase6State();
    console.log('%c[Corpora Fase 6] ✅ Schema relazionale completo · sync granulare profilo/schede/sessioni/set log/ricette/coach','color:#b45309;font-weight:bold;font-size:11px');

  });
})();
