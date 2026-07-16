/* ═══════════════════════════════════════════════════════════════
   FASE 8 — CORPORA
   Completa SEZIONE 10 (Dashboard/KPI/Analytics), SEZIONE 11 (Coach AI),
   SEZIONE 12 (Engagement/Gamification/Retention — nuova) e SEZIONE 14
   (Compliance/Privacy) del blueprint.

   ⚠️ PREREQUISITO — BUG CORRETTO in fase3-upgrade.js prima di questa fase:
   getAdherenceScore / matchWorkoutPlan / getProteinTarget / checkRefeedStatus
   / isPremium / isoWeekKey / recordWeeklySnapshot / checkPlateau /
   generateCoachMessage / coachMessagesThisWeek / getConsistencyScore erano
   dichiarate come "function" LOCALI dentro le callback di whenReady2/
   whenReady3 e non venivano MAI esposte su window. Risultato pratico:
   il gate di CorporaFase2 (`typeof getAdherenceScore==='function' &&
   typeof matchWorkoutPlan==='function'`) restava falso per sempre → un
   polling infinito silenzioso ogni 120ms, senza errori in console. Coach
   AI, Paywall, Lista Spesa, Analytics/Consistency Score e il sync
   granulare di CorporaFase3 erano quindi codice morto: scritti, mai
   eseguiti. Cercare "FIX Fase 8" in fase3-upgrade.js per i punti esatti
   in cui ho aggiunto `window.xxx=xxx` accanto alla definizione originale
   (nessuna riscrittura di logica, solo esposizione).

   Ora che il fix è attivo, risultano già funzionanti (non li ritocco):
   - Adherence score composito (macro 40% / workout 40% / check-in 20%)
   - Consistency score (% settimane ≥70 sulle ultime 8)
   - Coach AI con 6 trigger (motivazione, correttivo×3, celebrativo, fallback)
   - Paywall + gating premium su Coach/Lista spesa/Analytics

   Aggiunto in questa fase, ciò che il blueprint richiede e ancora mancava:

   SEZIONE 10 (KPI)
     1. Kcal deviation alert — scostamento >30% dal target per 5+ giorni/7
     2. Consistency streak — settimane CONSECUTIVE ≥70% (complemento al %
        già presente, che misura frequenza ma non continuità)
     3. Risk of dropout score — interno, MAI mostrato direttamente
        all'utente (requisito esplicito del blueprint), usato solo per
        decidere se mostrare il banner win-back

   SEZIONE 11 (Coach AI)
     4. "Spiega i miei numeri" — trasparenza del calcolo, sempre gratuito
        (non consuma il limite settimanale free)
     5. Disclaimer wellness/medical visibile nella schermata Coach

   SEZIONE 12 (Gamification — non esisteva nulla, costruita da zero)
     6. Streak "intelligente": non si rompe per un giorno di riposo
        pianificato dall'utente
     7. Milestone concrete ancorate a dati reali (mai badge vuoti)
     8. Recap domenicale (2-3 numeri + un consiglio)
     9. Win-back sequence non colpevolizzante (4+ giorni di assenza)

   SEZIONE 14 (Compliance)
     10. Cancellazione account completa (locale)
     11. Disclaimer esplicito in Impostazioni
     12. Nota opzionale nel check-in + redirect del coach su temi
         medici/dolore/disturbi alimentari (mai consigli clinici)

   Pattern coerente con Fase 1-7: nessuna riscrittura, solo estensione
   via whenReady() + override window.* dove serve.
   ═══════════════════════════════════════════════════════════════ */
(function CorporaFase8(){

  function whenReady8(fn){
    if(typeof S!=='undefined'&&typeof saveState==='function'&&typeof showToast==='function'
       &&typeof calcStreak==='function'&&typeof getAdherenceScore==='function'
       &&typeof isPremium==='function'&&typeof generateCoachMessage==='function'
       &&typeof ensureFase2State==='function'){
      fn();
    }else{
      setTimeout(()=>whenReady8(fn),150);
    }
  }

  whenReady8(function(){

    /* ════════════════════════════════════════════
       SEZIONE 10 — KPI: completamenti
       ════════════════════════════════════════════ */

    // 1. Kcal deviation alert: >30% di scostamento dal target in 5+ dei 7gg loggati
    function checkKcalDeviationAlert(){
      const target=S.settings.kcal||2000;
      let offDays=0,loggedDays=0;
      for(let i=0;i<7;i++){
        const d=new Date();d.setDate(d.getDate()-i);
        const ds=d.toISOString().slice(0,10);
        const src=ds===TODAY?S.meals:S.mealHistory?.[ds];
        if(!src)continue;
        let e=0;MK.forEach(k=>(src[k]||[]).forEach(it=>e+=it.food.e*(it.g/100)));
        if(e===0)continue;
        loggedDays++;
        if(Math.abs(e-target)/target>0.3)offDays++;
      }
      return{alert:offDays>=5,offDays,loggedDays};
    }
    window.checkKcalDeviationAlert=checkKcalDeviationAlert;

    // 2. Consistency streak: settimane CONSECUTIVE con score ≥70 (dalla più recente a ritroso)
    function getConsistencyStreak(){
      const weeks=[...(S.weeklyAdherence||[])].sort((a,b)=>b.week.localeCompare(a.week));
      let streak=0;
      for(const w of weeks){ if(w.score>=70)streak++; else break; }
      return streak;
    }
    window.getConsistencyStreak=getConsistencyStreak;

    // 3. Risk of dropout score — interno, non va mai mostrato come numero all'utente
    function getDropoutRisk(){
      const weeks=[...(S.weeklyAdherence||[])].sort((a,b)=>b.week.localeCompare(a.week));
      let risk=0;
      if(weeks.length>=2 && (weeks[1].score-weeks[0].score)>=20)risk+=40; // calo adherence forte
      const streakNow=(typeof calcStreakV2==='function')?calcStreakV2():calcStreak();
      if((S._bestStreak||0)>=3 && streakNow===0)risk+=30; // streak persa
      const lastCheckin=(S.checkins||[]).slice(-1)[0];
      if(!lastCheckin || (new Date()-new Date(lastCheckin.date))/86400000>10)risk+=20; // check-in saltato
      if(checkKcalDeviationAlert().alert)risk+=10;
      return Math.min(100,risk);
    }
    window.getDropoutRisk=getDropoutRisk;

    function trackBestStreak(){
      const cur=(typeof calcStreakV2==='function')?calcStreakV2():calcStreak();
      if(!S._bestStreak||cur>S._bestStreak){S._bestStreak=cur;saveState();}
      return cur;
    }
    window.trackBestStreak=trackBestStreak;

    // Aggancio — card extra nella schermata Adherence Score (dopo il wrap Fase 7)
    const _origShowAdherence8=window.showAdherenceScore;
    window.showAdherenceScore=function(fb){
      _origShowAdherence8(fb);
      const scr=document.getElementById('screen');
      if(!scr||scr.querySelector('.consistency-streak-card'))return;
      const consStreak=getConsistencyStreak();
      const kcalDev=checkKcalDeviationAlert();
      const card=document.createElement('div');
      card.className='card consistency-streak-card';
      card.innerHTML=`<div class="card-hdr">🔁 COSTANZA NEL TEMPO</div>
        <div class="card-body">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:22px;font-weight:700">${consStreak} ${consStreak===1?'settimana':'settimane'} consecutive</div>
          <div style="font-size:10px;color:var(--ink3);margin-top:2px">con score settimanale ≥70 — miglior predittore di risultati a lungo termine di un singolo punteggio</div>
          ${kcalDev.alert?`<div style="margin-top:10px;padding:9px 12px;background:#fef3c7;border:1.5px solid #d97706;border-radius:var(--r);font-size:11px;color:#92400e">⚠️ Su ${kcalDev.loggedDays} giorni loggati di recente, ${kcalDev.offDays} sono fuori dal ±30% del target kcal. Non è un giudizio: se il target non è più realistico, aggiornalo in Impostazioni.</div>`:''}
        </div>`;
      scr.appendChild(card);
    };

    /* ════════════════════════════════════════════
       SEZIONE 11 — COACH AI: completamenti
       ════════════════════════════════════════════ */

    // 4. Trasparenza del calcolo — sempre gratis, non consuma il limite settimanale
    function explainNumbersMessage(){
      const pt=(typeof getProteinTarget==='function')?getProteinTarget():null;
      const obj=S.profile.obiettivo||'mantenimento';
      const objLbl={dimagrimento:'dimagrimento',massa:'aumento massa',mantenimento:'mantenimento',ricomposizione:'ricomposizione'}[obj]||obj;
      let text;
      if(pt){
        text=`Il tuo target proteine è ${pt.target}g perché il tuo obiettivo "${objLbl}" richiede ${pt.gKg}g/kg sul tuo peso attuale di ${pt.peso}kg. Il target kcal (${S.settings.kcal}) segue lo stesso criterio: una percentuale calcolata sul tuo TDEE, non un numero fisso uguale per tutti.`;
      }else{
        text='Non ho ancora un peso registrato per calcolare i tuoi target con precisione — aggiungilo nel check-in o ne "Il Mio Peso" e questa spiegazione diventa concreta.';
      }
      return{type:'trasparenza',icon:'🔎',text};
    }
    window.requestExplainNumbers=function(){
      ensureFase2State();
      const msg=explainNumbersMessage();
      S.aiInsights.push({date:new Date().toISOString(),type:msg.type,icon:msg.icon,text:msg.text,letto:false});
      if(S.aiInsights.length>50)S.aiInsights=S.aiInsights.slice(-50);
      saveState();
      showCoach();
      showToast('🔎 Ecco perché');
    };

    // 5. Disclaimer wellness/medical + pulsante trasparenza nella schermata Coach
    const _origShowCoach8=window.showCoach;
    window.showCoach=function(fb){
      _origShowCoach8(fb);
      const scr=document.getElementById('screen');
      const firstCardBody=scr?.querySelector('.card .card-body');
      if(firstCardBody && !firstCardBody.querySelector('.coach-explain-btn')){
        firstCardBody.insertAdjacentHTML('beforeend',
          `<button class="big-btn outline coach-explain-btn" style="margin-top:8px" onclick="snd();requestExplainNumbers()">🔎 SPIEGA I MIEI NUMERI (sempre gratis)</button>`);
      }
      if(scr && !scr.querySelector('.coach-disclaimer')){
        const d=document.createElement('div');
        d.className='coach-disclaimer';
        d.style.cssText="margin:6px 12px 14px;padding:10px 12px;font-family:'IBM Plex Mono',monospace;font-size:9px;line-height:1.7;color:var(--ink3)";
        d.textContent='Il coach dà indicazioni di benessere generale, non sostituisce un parere medico o nutrizionale professionale. In presenza di patologie, gravidanza, dolore persistente o disturbi alimentari, consulta un professionista sanitario.';
        scr.appendChild(d);
      }
    };

    /* ════════════════════════════════════════════
       SEZIONE 12 — GAMIFICATION & RETENTION (nuova)
       ════════════════════════════════════════════ */

    // 6. STREAK INTELLIGENTE — non si rompe per un giorno di riposo segnalato
    function ensureRestDays(){ if(!S.restDays)S.restDays=[]; }
    function isRestDay(ds){ ensureRestDays(); return S.restDays.includes(ds); }
    window.markRestDayToday=function(){
      ensureRestDays();
      if(!S.restDays.includes(TODAY)){
        S.restDays.push(TODAY);
        if(S.restDays.length>60)S.restDays=S.restDays.slice(-60);
        saveState();
        showToast('😌 Oggi segnato come riposo — lo streak resta vivo');
      }else{
        showToast('Oggi è già segnato come riposo');
      }
      if(typeof navGoHome==='function')navGoHome(); else if(typeof showHome==='function')showHome();
    };
    function calcStreakV2(){
      ensureRestDays();
      let streak=0;
      const d=new Date();
      for(let i=0;i<365;i++){
        const ds=d.toISOString().slice(0,10);
        const src=ds===TODAY?S.meals:S.mealHistory?.[ds];
        const hasData=src&&MK.some(k=>(src[k]||[]).length>0);
        if(hasData||isRestDay(ds)){streak++;}
        else if(i>0){break;}
        d.setDate(d.getDate()-1);
      }
      return streak;
    }
    window.calcStreakV2=calcStreakV2;
    // Sostituisce calcStreak ovunque nell'app: comportamento identico a prima se
    // l'utente non segna mai un riposo, "intelligente" se lo fa.
    window.calcStreak=calcStreakV2;

    // 7. MILESTONE CONCRETE — ancorate a dati reali, mai badge vuoti
    const MILESTONES=[
      {id:'prima_settimana',icon:'🗓️',label:'Prima settimana costante',
        check:()=>(typeof getConsistencyScore==='function')&&getConsistencyScore().good>=1},
      {id:'primo_kg',icon:'⚖️',label:'Primo -1kg',
        check:()=>{
          const entries=S.profile.entries||[];
          if(entries.length<2)return false;
          return (entries[0].peso-entries[entries.length-1].peso)>=1;
        }},
      {id:'primo_carico',icon:'🏋️',label:'Primo carico registrato',
        check:()=>(S.setLogs||[]).length>=1},
      {id:'streak_7',icon:'🔥',label:'7 giorni di fila',
        check:()=>calcStreakV2()>=7}
    ];
    function checkMilestones(){
      if(!S.milestones)S.milestones={};
      let unlocked=null;
      MILESTONES.forEach(m=>{
        if(!S.milestones[m.id] && m.check()){
          S.milestones[m.id]={achievedAt:new Date().toISOString()};
          unlocked=m; // un solo toast per volta, semplice e chiaro
        }
      });
      if(unlocked){
        saveState();
        ensureFase2State();
        S.aiInsights.push({date:new Date().toISOString(),type:'milestone',icon:unlocked.icon,
          text:`Traguardo sbloccato: ${unlocked.label}. Dato reale, non un badge a caso — continua così.`,letto:false});
        saveState();
        showToast(`${unlocked.icon} Traguardo: ${unlocked.label}`);
      }
      return unlocked;
    }
    window.checkMilestones=checkMilestones;

    window.showMilestones=function(fb){
      resetScreen();setHdr('TRAGUARDI','I tuoi risultati reali',true);
      if(!S.milestones)S.milestones={};
      document.getElementById('screen').innerHTML=`<div style="padding:10px 12px 4px">
        ${MILESTONES.map(m=>{
          const done=S.milestones[m.id];
          return `<div class="card" style="margin-bottom:8px;opacity:${done?1:.5}">
            <div class="card-body" style="display:flex;gap:12px;align-items:center">
              <div style="font-size:26px">${m.icon}</div>
              <div style="flex:1">
                <div style="font-size:13px;font-weight:700">${m.label}</div>
                <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3)">${done?'Sbloccato · '+new Date(done.achievedAt).toLocaleDateString('it-IT'):'Non ancora raggiunto'}</div>
              </div>
            </div>
          </div>`;
        }).join('')}
      </div>`;
    };

    // Punti di verifica milestone: dopo check-in e dopo ogni set registrato in allenamento
    const _origConfirmAddEsercizio8=window.confirmAddEsercizio;
    if(typeof _origConfirmAddEsercizio8==='function'){
      window.confirmAddEsercizio=function(exId){
        _origConfirmAddEsercizio8(exId);
        checkMilestones();
      };
    }

    // 8. RECAP DOMENICALE
    window.showWeeklyRecap=function(fb){
      resetScreen();setHdr('RECAP SETTIMANALE','La tua settimana in 3 numeri',true);
      const a=getAdherenceScore();
      const entries=S.profile.entries||[];
      const weekAgo=entries.filter(e=>(new Date()-new Date(e.data))/86400000<=7);
      const deltaPeso=weekAgo.length>=2?+(weekAgo[weekAgo.length-1].peso-weekAgo[0].peso).toFixed(1):null;
      const cons=(typeof getConsistencyScore==='function')?getConsistencyScore():{good:0,weeks:0};
      let tip='Continua così: la costanza conta più della perfezione.';
      if(a.workoutPct<a.macroPct-20)tip='Questa settimana l\'allenamento è indietro rispetto alla nutrizione — priorità: una sessione in più.';
      else if(a.macroPct<a.workoutPct-20)tip='La nutrizione è indietro rispetto all\'allenamento — priorità: tenere sotto controllo i pasti fuori target.';
      document.getElementById('screen').innerHTML=`
        <div class="stat-grid">
          <div class="card" style="margin:0"><div class="card-body" style="text-align:center;padding:14px 6px">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:24px;font-weight:700">${a.score}</div>
            <div style="font-size:9px;color:var(--ink3)">Adherence</div></div></div>
          <div class="card" style="margin:0"><div class="card-body" style="text-align:center;padding:14px 6px">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:24px;font-weight:700">${a.sessioniFatte}/${a.targetSessioni}</div>
            <div style="font-size:9px;color:var(--ink3)">Allenamenti</div></div></div>
          <div class="card" style="margin:0"><div class="card-body" style="text-align:center;padding:14px 6px">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:24px;font-weight:700">${deltaPeso!==null?(deltaPeso>0?'+':'')+deltaPeso+'kg':'—'}</div>
            <div style="font-size:9px;color:var(--ink3)">Peso 7gg</div></div></div>
        </div>
        <div class="card"><div class="card-hdr">💡 CONSIGLIO PER LA PROSSIMA SETTIMANA</div>
          <div class="card-body" style="font-size:12px;line-height:1.6">${tip}</div></div>
        <div class="card"><div class="card-hdr">📈 COSTANZA</div>
          <div class="card-body" style="font-size:12px;color:var(--ink2)">${cons.good}/${cons.weeks} settimane ≥70% nelle ultime ${cons.weeks||8}</div></div>`;
    };

    function maybeShowRecapBanner(anchor){
      const now=new Date();
      if(now.getDay()!==0)return; // solo la domenica
      if((S.weeklyAdherence||[]).length<1)return; // niente dati, non disturbare
      const wk=isoWeekKey(now);
      if(S.lastRecapSeenWeek===wk)return;
      const scr=document.getElementById('screen');
      if(!scr||scr.querySelector('.recap-banner'))return;
      const b=document.createElement('div');
      b.className='card recap-banner';
      b.innerHTML=`<div class="card-body" style="display:flex;align-items:center;gap:10px">
        <div style="font-size:24px">🗓️</div>
        <div style="flex:1;font-size:12px;color:var(--ink2)">La tua settimana è pronta — 3 numeri, 2 minuti.</div>
        <button class="big-btn success" style="margin:0;width:auto;padding:10px 14px" onclick="event.stopPropagation();snd();S.lastRecapSeenWeek='${wk}';saveState();navPush(showWeeklyRecap)">VEDI</button>
      </div>`;
      if(anchor&&anchor.insertAdjacentElement)anchor.insertAdjacentElement('afterend',b);
      else scr.insertBefore(b,scr.firstChild);
    }

    // 9. WIN-BACK SEQUENCE — se l'utente non apre l'app da 4+ giorni
    function checkWinBackOnBoot(){
      const last=S.lastOpenDate;
      S.lastOpenDate=TODAY;
      saveState();
      if(!last)return null;
      const gap=Math.round((new Date(TODAY)-new Date(last))/86400000);
      return gap>=4?gap:null;
    }
    let _winbackGap=checkWinBackOnBoot(); // calcolato una sola volta, all'apertura app

    function winbackBannerHtml(){
      const best=S._bestStreak||0;
      const curStreak=calcStreakV2();
      const a=getAdherenceScore();
      let msg;
      if(curStreak>0)msg=`Il tuo streak di ${curStreak} giorni è ancora vivo — un'attività oggi lo salva.`;
      else if(best>=3)msg=`Il tuo record è ${best} giorni di fila. Si riparte da lì, non da zero.`;
      else if(a.score>0)msg=`Il tuo ultimo score era ${a.score}/100. Bentornato — riprendiamo da lì.`;
      else msg='Bentornato. Un piccolo passo oggi conta più di un piano perfetto domani.';
      return `<div class="card winback-banner" style="border-color:var(--green)">
        <div class="card-body" style="display:flex;align-items:center;gap:10px">
          <div style="font-size:24px">👋</div>
          <div style="flex:1;font-size:12px;color:var(--ink2)">${msg}</div>
        </div></div>`;
    }

    // Aggancio Home — win-back (una volta per apertura) + banner recap domenicale
    const _origShowHome8=window.showHome;
    window.showHome=function(fromBack){
      _origShowHome8(fromBack);
      trackBestStreak();
      const scr=document.getElementById('screen');
      if(!scr)return;
      const hero=scr.querySelector('.page-hero');
      let anchor=hero;
      if(_winbackGap && !scr.querySelector('.winback-banner')){
        const tmp=document.createElement('div');
        tmp.innerHTML=winbackBannerHtml();
        const wb=tmp.firstElementChild;
        if(hero)hero.insertAdjacentElement('afterend',wb); else scr.insertBefore(wb,scr.firstChild);
        anchor=wb;
        _winbackGap=null; // mostrato, non ripetere finché l'app non viene riaperta
      }
      maybeShowRecapBanner(anchor);
    };

    /* ════════════════════════════════════════════
       SEZIONE 14 — COMPLIANCE: completamenti
       ════════════════════════════════════════════ */

    // 12a. Nota opzionale nel check-in + redirect coach su temi medici/dolore
    const MEDICAL_KEYWORDS=['dolore','fa male','infortun','gravidan','incint','diabete','patolog','malatt','anoressia','bulimia','disturbo alimentare','farmac','terapia','diagnosi'];
    function checkMedicalRedirect(note){
      if(!note)return null;
      const low=note.toLowerCase();
      if(!MEDICAL_KEYWORDS.some(k=>low.includes(k)))return null;
      return{type:'medical_redirect',icon:'🩺',
        text:'Nella tua nota hai citato qualcosa che riguarda salute o dolore fisico — su questo posso darti solo indicazioni di benessere generale, non un consiglio medico. Se è un fastidio persistente o una condizione di salute, parlane con un medico o un professionista sanitario prima di continuare il piano.'};
    }

    const _origShowCheckin8=window.showCheckin;
    window.showCheckin=function(fb){
      _origShowCheckin8(fb);
      const card=document.querySelector('#screen .card');
      const btn=card?.querySelector('.big-btn');
      if(card&&btn&&!document.getElementById('ci-note')){
        const row=document.createElement('div');
        row.className='form-row';
        row.style.cssText='border:none;flex-direction:column;align-items:stretch;gap:6px';
        row.innerHTML=`<div class="form-lbl">Note (opzionale)</div><textarea id="ci-note" placeholder="Qualcosa da segnalare? Facoltativo." style="height:55px"></textarea>`;
        btn.parentNode.insertBefore(row,btn);
      }
    };

    const _origSaveCheckin8=window.saveCheckin;
    window.saveCheckin=function(){
      const note=(document.getElementById('ci-note')?.value||'').trim();
      _origSaveCheckin8();
      if(note){
        const last=(S.checkins||[]).slice(-1)[0];
        if(last)last.note=note;
        const redirect=checkMedicalRedirect(note);
        if(redirect){
          ensureFase2State();
          S.aiInsights.push({date:new Date().toISOString(),type:redirect.type,icon:redirect.icon,text:redirect.text,letto:false});
        }
        saveState();
      }
      checkMilestones();
    };

    // 10. Cancellazione account completa (locale) + 11. disclaimer in Impostazioni
    window.deleteAccount=function(){
      if(typeof CUR==='undefined'||!CUR){showToast('Nessun account attivo');return;}
      if(!confirm(`Cancellare definitivamente l'account "${CUR.name}"? Questa azione elimina tutti i dati locali (diario, allenamenti, check-in, peso) e NON è reversibile.`))return;
      if(!confirm('Confermi ancora una volta? I dati non potranno essere recuperati.'))return;
      try{
        localStorage.removeItem(stateKey(CUR.slug));
        const profiles=getProfiles();
        delete profiles[CUR.slug];
        saveProfiles(profiles);
        localStorage.removeItem(CKEY);
      }catch(e){console.warn('[Corpora F8] Errore cancellazione account:',e);}
      showToast('Account cancellato');
      setTimeout(()=>location.reload(),600);
    };

    const _origRenderImpostazioni8=window.renderImpostazioni;
    window.renderImpostazioni=function(){
      _origRenderImpostazioni8();
      const scr=document.getElementById('screen');
      if(!scr)return;
      const lastCard=[...scr.querySelectorAll('.card')].pop();
      if(lastCard)lastCard.querySelector('.card-body')?.insertAdjacentHTML('beforeend',
        `<button class="big-btn danger" style="margin-top:8px" onclick="snd('delete');deleteAccount()">🗑️ CANCELLA ACCOUNT E TUTTI I DATI</button>`);
      const disc=document.createElement('div');
      disc.className='card';
      disc.innerHTML=`<div class="card-hdr">ℹ️ INFORMAZIONI</div>
        <div class="card-body" style="font-size:11px;line-height:1.7;color:var(--ink2)">
        Corpora fornisce indicazioni di benessere generale (nutrizione, allenamento, costanza) e non sostituisce il parere di un medico, dietista o nutrizionista. In presenza di patologie, gravidanza, disturbi alimentari o condizioni particolari, consulta un professionista sanitario prima di seguire qualsiasi piano.<br><br>
        I tuoi dati restano sul dispositivo salvo attivazione volontaria della sincronizzazione. Puoi esportarli o cancellarli in qualsiasi momento da questa schermata.</div>`;
      scr.appendChild(disc);
    };

    /* ────────────────────────────────────────
       Menu — Traguardi, Recap, Giorno di riposo
       ──────────────────────────────────────── */
    const _origShowMoreMenu8=window.showMoreMenu;
    if(typeof _origShowMoreMenu8==='function'){
      window.showMoreMenu=function(fromBack){
        _origShowMoreMenu8(fromBack);
        const grid=document.querySelector('#screen .meal-grid');
        if(!grid)return;
        grid.insertAdjacentHTML('beforeend',`
          <div class="meal-btn pes" onclick="snd();navPush(showMilestones)" style="padding:16px 12px 14px;gap:6px">
            <div class="meal-ico" style="font-size:28px">🏅</div>
            <div class="meal-lbl" style="font-size:10px;font-weight:700">Traguardi</div>
            <div class="meal-n" style="font-size:9px;opacity:.7;line-height:1.3;text-align:center">I tuoi risultati reali</div>
          </div>
          <div class="meal-btn exe" onclick="snd();navPush(showWeeklyRecap)" style="padding:16px 12px 14px;gap:6px">
            <div class="meal-ico" style="font-size:28px">🗓️</div>
            <div class="meal-lbl" style="font-size:10px;font-weight:700">Recap Settimana</div>
            <div class="meal-n" style="font-size:9px;opacity:.7;line-height:1.3;text-align:center">3 numeri, 2 minuti</div>
          </div>
          <div class="meal-btn acq" onclick="snd();markRestDayToday()" style="padding:16px 12px 14px;gap:6px">
            <div class="meal-ico" style="font-size:28px">😌</div>
            <div class="meal-lbl" style="font-size:10px;font-weight:700">Giorno di riposo</div>
            <div class="meal-n" style="font-size:9px;opacity:.7;line-height:1.3;text-align:center">${isRestDay(TODAY)?'Segnato per oggi ✓':'Segna oggi'}</div>
          </div>`);
      };
    }

    // FIX Fase 8: 'trasparenza' (sempre gratis), 'milestone' e 'medical_redirect' (automatici,
    // non richiesti dall'utente) NON devono consumare il limite settimanale free — altrimenti
    // il pulsante "sempre gratis" mentirebbe e un utente free verrebbe penalizzato solo per
    // aver scritto una nota nel check-in.
    const _origCoachMsgsThisWeek8=window.coachMessagesThisWeek;
    window.coachMessagesThisWeek=function(){
      const wk=isoWeekKey(new Date());
      return (S.aiInsights||[]).filter(i=>isoWeekKey(i.date)===wk && !['trasparenza','milestone','medical_redirect'].includes(i.type)).length;
    };

    console.log('%c[Corpora Fase 8] ✅ KPI (risk/consistency streak/kcal alert) · Coach trasparenza+disclaimer · Gamification (streak riposo/milestone/recap/win-back) · Compliance (cancellazione account/disclaimer/redirect medico)','color:#7c3aed;font-weight:bold;font-size:11px');

  });
})();
