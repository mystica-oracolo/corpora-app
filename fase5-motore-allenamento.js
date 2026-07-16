/* ═══════════════════════════════════════════════════════════════
   FASE 5 — CORPORA
   Completa SEZIONE 6 del blueprint (Motore Allenamento
   Intelligente). Fase 1 aveva già il "matching" su SCHEDE_DB
   curato — qui aggiungiamo la vera GENERAZIONE ALGORITMICA più
   tutto ciò che ancora mancava:

     1. Generazione scheda per obiettivo/livello/giorni/attrezzatura
        con split automatico (full body / upper-lower / PPL)
     2. Progressione settimanale (+2.5% carico se RPE≤7) via log
        peso/RPE per esercizio
     3. Deload automatico ogni 5 settimane (-40% volume)
     4. Fallback quick workout dopo 2 sessioni saltate
     5. Quick workout 10/20/30 min generati dalla libreria esistente
     6. Sostituzione esercizio per limitazione (stesso gruppo,
        pattern/attrezzo diverso)
     7. Dashboard performance: volume settimanale, PR, recovery score

   Pattern coerente con Fase 1-4: nessuna riscrittura, solo
   estensione via whenReady() + override window.* dove serve.
   ═══════════════════════════════════════════════════════════════ */
(function CorporaFase5(){

  function whenReady(fn){
    if(typeof S!=='undefined'&&typeof saveState==='function'&&typeof showToast==='function'&&typeof EXDB!=='undefined'){
      fn();
    }else{
      setTimeout(()=>whenReady(fn),120);
    }
  }

  whenReady(function(){

    const DIFF_RANK={p:['p'],i:['p','i'],a:['p','i','a']};
    const GOAL_SCHEME={
      forza:{sets:4,setsMax:5,reps:'3-6',rest:'150s',rpeTarget:'8-9'},
      ipertrofia:{sets:3,setsMax:4,reps:'8-12',rest:'75s',rpeTarget:'7-8'},
      dimagrimento:{sets:3,setsMax:3,reps:'12-15',rest:'40s',rpeTarget:'6-7'}
    };
    const SPLIT_MUSCLES={
      full:[['Petto','Schiena','Gambe','Spalle','Addome']],
      upperlower:[['Petto','Schiena','Spalle','Bicipiti','Tricipiti'],['Gambe','Glutei','Polpacci','Addome'],
                  ['Petto','Schiena','Spalle','Bicipiti','Tricipiti'],['Gambe','Glutei','Polpacci','Addome']],
      ppl:[['Petto','Spalle','Tricipiti'],['Schiena','Bicipiti','Addome'],['Gambe','Glutei','Polpacci'],
           ['Petto','Spalle','Tricipiti'],['Schiena','Bicipiti','Addome'],['Gambe','Glutei','Polpacci']]
    };
    const DAY_LABELS={full:['Full Body A','Full Body B','Full Body C'],
      upperlower:['Upper A','Lower A','Upper B','Lower B'],
      ppl:['Push A','Pull A','Legs A','Push B','Pull B','Legs B']};

    function ensureProfileExt5(){
      if(!S.profile.durataSessione)S.profile.durataSessione=45;
      if(!S.generatedPlan)S.generatedPlan=null;
      if(!S.setLogs)S.setLogs=[]; // {date,exId,kg,reps,rpe}
    }

    /* ────────────────────────────────────────
       1. GENERAZIONE ALGORITMICA SCHEDA
       ──────────────────────────────────────── */
    function pickSplit(giorni){
      if(giorni<=3)return 'full';
      if(giorni===4)return 'upperlower';
      return 'ppl';
    }
    function goalKeyFromObiettivo(obiettivo,focus){
      if(focus)return focus;
      return obiettivo==='dimagrimento'?'dimagrimento':obiettivo==='massa'?'ipertrofia':'ipertrofia';
    }
    function formatSets(n){return String(n);}

    window.generateWorkoutPlan=function(focus){
      ensureProfileExt5();
      const p=S.profile;
      const giorni=Math.min(6,Math.max(2,p.giorniSett||3));
      const splitType=pickSplit(giorni);
      const muscleSets=SPLIT_MUSCLES[splitType];
      const labels=DAY_LABELS[splitType];
      const goalKey=goalKeyFromObiettivo(p.obiettivo,focus);
      const scheme=GOAL_SCHEME[goalKey];
      const diffOk=DIFF_RANK[p.livello==='Avanzato'?'a':p.livello==='Intermedio'?'i':'p'];
      const equipOk=ex=>p.luogo==='Casa'?ex.equip==='Corpo Libero':true;

      // ripete/estende i gruppi muscolari fino a coprire i giorni richiesti
      const daysPlan=[];
      for(let d=0;d<giorni;d++){
        const muscles=muscleSets[d%muscleSets.length];
        const used=new Set();
        const exs=[];
        muscles.forEach(mg=>{
          // fallback a cascata: 1) livello+attrezzatura ok  2) ignora livello  3) ignora attrezzatura
          // (la libreria esistente non copre "Corpo Libero" per tutti i gruppi, es. Schiena/Spalle/Bicipiti —
          // meglio proporre l'esercizio più vicino con una nota, che saltare il gruppo muscolare)
          let pool=EXDB.filter(ex=>ex.muscle===mg&&diffOk.includes(ex.diff)&&equipOk(ex)&&!used.has(ex.id));
          let equipRelaxed=false;
          if(pool.length===0)pool=EXDB.filter(ex=>ex.muscle===mg&&equipOk(ex)&&!used.has(ex.id));
          if(pool.length===0){pool=EXDB.filter(ex=>ex.muscle===mg&&!used.has(ex.id));equipRelaxed=true;}
          if(pool.length===0)return;
          const ex=pool[Math.floor(Math.random()*pool.length)];
          used.add(ex.id);
          exs.push({id:ex.id,sets:formatSets(scheme.sets),reps:scheme.reps,rest:scheme.rest,rpeTarget:scheme.rpeTarget,equipRelaxed:equipRelaxed&&p.luogo==='Casa'});
        });
        daysPlan.push({name:labels[d%labels.length]+(d>=labels.length?' '+(Math.floor(d/labels.length)+1):''),exs});
      }

      const plan={
        id:'gen',source:'algoritmico',
        name:'Scheda Generata · '+({forza:'Forza',ipertrofia:'Ipertrofia',dimagrimento:'Dimagrimento/Resistenza'}[goalKey]),
        emoji:'🤖',level:p.livello||'Principiante',freq:giorni,goal:goalKey,splitType,
        startDate:new Date().toISOString().slice(0,10),
        days:daysPlan
      };
      S.generatedPlan=plan;
      S.weeklyMissed=0;
      saveState();
      return plan;
    };

    /* Settimana corrente e deload (ogni 5 settimane, -40% volume) */
    function getPlanWeekInfo(){
      if(!S.generatedPlan)return null;
      const start=new Date(S.generatedPlan.startDate);
      const now=new Date();
      const weekNum=Math.floor((now-start)/(7*86400000))+1;
      const deload=weekNum%5===0;
      return{weekNum,deload};
    }
    function applyDeload(setsStr){
      const n=parseInt(setsStr)||3;
      return String(Math.max(1,Math.round(n*0.6)));
    }

    /* ────────────────────────────────────────
       2. SCHERMATA GENERAZIONE + DETTAGLIO
       ──────────────────────────────────────── */
    window.showGeneraScheda=function(fb){
      ensureProfileExt5();
      resetScreen();setHdr('SCHEDA ALGORITMICA','Generata su misura',true);
      const p=S.profile;
      document.getElementById('screen').innerHTML=`
        <div class="card"><div class="card-hdr">⚙️ PARAMETRI ATTUALI</div>
          <div class="card-body" style="font-size:12px;color:var(--ink2);line-height:2">
            Livello: <b>${p.livello||'Principiante'}</b><br>
            Giorni/settimana: <b>${p.giorniSett||3}</b><br>
            Dove: <b>${p.luogo||'Palestra'}</b><br>
            Obiettivo: <b>${p.obiettivo||'mantenimento'}</b>
            <div style="font-size:10px;color:var(--ink3);margin-top:6px">Modificabile in Impostazioni → Profilo Allenamento</div>
          </div>
        </div>
        <div class="card"><div class="card-hdr">🎯 FOCUS SCHEDA</div>
          <div class="card-body" style="display:flex;flex-direction:column;gap:8px">
            <button class="big-btn" onclick="snd('confirm');navPush(()=>{generateWorkoutPlan('forza');showPianoGenerato();})">💪 Forza (3-6 rip, recuperi lunghi)</button>
            <button class="big-btn" onclick="snd('confirm');navPush(()=>{generateWorkoutPlan('ipertrofia');showPianoGenerato();})">🏗 Ipertrofia (8-12 rip)</button>
            <button class="big-btn" onclick="snd('confirm');navPush(()=>{generateWorkoutPlan('dimagrimento');showPianoGenerato();})">🔥 Dimagrimento/Resistenza (12-15 rip)</button>
          </div>
        </div>`;
    };

    window.showPianoGenerato=function(fb){
      ensureProfileExt5();
      if(!S.generatedPlan){navPush(showGeneraScheda);return;}
      resetScreen();setHdr(S.generatedPlan.name.toUpperCase(),'Piano generato',true);
      const wi=getPlanWeekInfo();
      const plan=S.generatedPlan;
      let html=`<div class="card"><div class="card-hdr">📅 SETTIMANA ${wi.weekNum}${wi.deload?' · 🟣 DELOAD':''}</div>
        <div class="card-body" style="font-size:11px;color:var(--ink2)">
          ${wi.deload?'Settimana di scarico: volume ridotto del 40% per favorire il recupero.':'Progressione attiva: +2.5% carico se il RPE dell\u2019ultima sessione è stato ≤7.'}
        </div></div>`;
      plan.days.forEach((day,di)=>{
        html+=`<div class="card"><div class="card-hdr">${day.name}</div><div class="card-body">
          ${day.exs.map(item=>{
            const ex=EXDB.find(e=>e.id===item.id);if(!ex)return'';
            const sets=wi.deload?applyDeload(item.sets):item.sets;
            return `<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #ede8dc">
              <span style="font-size:18px">${ex.emoji}</span>
              <div style="flex:1">
                <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:700">${ex.name}</div>
                <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3)">${sets}×${item.reps} · rec. ${item.rest} · RPE ${item.rpeTarget}${item.equipRelaxed?` · ⚠️ richiede ${ex.equip}`:''}</div>
              </div>
              <button class="log-del" style="background:none" onclick="event.stopPropagation();snd();navPush(()=>showEsercizio(${ex.id}))">ℹ️</button>
            </div>`;
          }).join('')}
          <button class="conf-btn green-btn" style="margin-top:10px" onclick="snd('confirm');avviaSessioneGenerata(${di})">▶ AVVIA GIORNO</button>
        </div></div>`;
      });
      html+=`<div style="padding:0 12px 4px"><button class="big-btn" onclick="snd();navPush(showGeneraScheda)">🔄 RIGENERA SCHEDA</button></div>`;
      document.getElementById('screen').innerHTML=html;
    };

    /* ────────────────────────────────────────
       3. AVVIO SESSIONE — LOG KG/RPE + PROGRESSIONE
       ──────────────────────────────────────── */
    function lastLogFor(exId){
      const logs=(S.setLogs||[]).filter(l=>l.exId===exId).sort((a,b)=>a.date.localeCompare(b.date));
      return logs.slice(-1)[0]||null;
    }
    window.suggestedLoad=function(exId){
      const last=lastLogFor(exId);
      if(!last)return null;
      if(last.rpe<=7)return{kg:+(last.kg*1.025).toFixed(1),reps:last.reps,note:'+2.5% (RPE ultima sessione ≤7)'};
      return{kg:last.kg,reps:last.reps,note:'Mantieni carico (RPE alto)'};
    };

    window.avviaSessioneGenerata=function(dayIdx){
      const plan=S.generatedPlan;if(!plan)return;
      const day=plan.days[dayIdx];
      document.getElementById('modal-box').innerHTML=`
        <div class="modal-handle"></div>
        <div class="modal-title">${day.name}</div>
        <div class="modal-sub" style="margin-bottom:10px">Inserisci carico e RPE per ogni esercizio (opzionale ma consigliato per la progressione)</div>
        <div id="sess-ex-list" style="max-height:45vh;overflow-y:auto">
        ${day.exs.map((item,i)=>{
          const ex=EXDB.find(e=>e.id===item.id);if(!ex)return'';
          const sug=suggestedLoad(ex.id);
          return `<div style="padding:8px 0;border-bottom:1px solid #ede8dc">
            <div style="font-size:12px;font-weight:600;margin-bottom:4px">${ex.emoji} ${ex.name}</div>
            ${sug?`<div style="font-size:9px;color:var(--green);margin-bottom:4px">💡 Suggerito: ${sug.kg}kg — ${sug.note}</div>`:''}
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px">
              <input class="form-inp" id="sk-${i}" type="number" step="0.5" placeholder="kg" inputmode="decimal" value="${sug?sug.kg:''}">
              <input class="form-inp" id="sr-${i}" type="number" placeholder="rip" inputmode="numeric" value="${sug?sug.reps:''}">
              <select class="form-sel" id="srpe-${i}"><option value="">RPE</option>${[5,6,7,8,9,10].map(v=>`<option value="${v}">${v}</option>`).join('')}</select>
            </div>
          </div>`;
        }).join('')}
        </div>
        <button class="conf-btn green-btn" style="margin-top:10px" onclick="snd('confirm');completaSessioneGenerata(${dayIdx})">✓ COMPLETA SESSIONE</button>`;
      document.getElementById('modal').classList.add('open');
    };

    window.completaSessioneGenerata=function(dayIdx){
      ensureProfileExt5();
      const plan=S.generatedPlan;const day=plan.days[dayIdx];
      const date=TODAY;let volume=0,rpeSum=0,rpeN=0;
      day.exs.forEach((item,i)=>{
        const kg=parseFloat(document.getElementById('sk-'+i)?.value);
        const reps=parseFloat(document.getElementById('sr-'+i)?.value);
        const rpe=parseFloat(document.getElementById('srpe-'+i)?.value);
        if(kg&&reps){
          const sets=parseInt(item.sets)||3;
          volume+=kg*reps*sets;
          S.setLogs.push({date,exId:item.id,kg,reps,rpe:rpe||null,sets});
          if(rpe){rpeSum+=rpe;rpeN++;}
        }
      });
      if(!S.workouts[date])S.workouts[date]=[];
      const kgPeso=S.profile.entries?.slice(-1)[0]?.peso||70;
      const dur=day.exs.length*8;
      const burned=(typeof calcBurnedKcal==='function')?calcBurnedKcal('Forza',dur,kgPeso):dur*6;
      S.workouts[date].push({name:day.name,type:'Forza',duration:dur,burned,sets:day.exs.length,reps:'-',notes:`[Scheda Generata: ${plan.name}]`,volume,rpeMedia:rpeN?+(rpeSum/rpeN).toFixed(1):null});
      S.weeklyMissed=0;
      saveState();closeModal();
      showToast('✅ Sessione registrata — volume '+Math.round(volume)+'kg totali','green');
      navGoHome();
    };

    /* ────────────────────────────────────────
       4. FALLBACK SESSIONI SALTATE
       ──────────────────────────────────────── */
    window.checkMissedSessions=function(){
      if(!S.generatedPlan)return{missed:0};
      const target=S.generatedPlan.freq||3;
      const now=new Date();
      const dayOfWeek=now.getDay()||7; // 1=lun..7=dom (approx settimana in corso)
      const doneThisWeek=Object.keys(S.workouts||{}).filter(ds=>{
        const dd=new Date(ds);
        return (now-dd)/86400000<7 && (S.workouts[ds]||[]).some(w=>(w.notes||'').includes('Scheda Generata'));
      }).length;
      const expectedByNow=Math.round((dayOfWeek/7)*target);
      const missed=Math.max(0,expectedByNow-doneThisWeek);
      return{missed,doneThisWeek,target};
    };

    /* ────────────────────────────────────────
       5. QUICK WORKOUT 10/20/30 MIN
       ──────────────────────────────────────── */
    window.generateQuickWorkout=function(minuti,zona){
      let pool=EXDB.filter(ex=>ex.equip==='Corpo Libero');
      if(zona&&zona!=='Full Body')pool=pool.filter(ex=>ex.muscle===zona||ex.sec.includes(zona));
      const n=Math.max(3,Math.min(8,Math.round(minuti/4)));
      const shuffled=[...pool].sort(()=>Math.random()-0.5);
      const chosen=shuffled.slice(0,n);
      return chosen.map(ex=>({id:ex.id,sets:'3',reps:'12-15',rest:'30s'}));
    };

    window.showQuickWorkoutPicker=function(fb){
      resetScreen();setHdr('QUICK WORKOUT','Senza attrezzi, tempo libero',true);
      document.getElementById('screen').innerHTML=`
        <div class="card"><div class="card-hdr">⏱ DURATA</div>
          <div class="card-body" style="display:flex;gap:8px">
            ${[10,20,30].map(m=>`<button class="big-btn" style="flex:1" onclick="snd();navPush(()=>showQuickWorkoutResult(${m},document.getElementById('qw-zona').value))">${m} min</button>`).join('')}
          </div>
        </div>
        <div class="card"><div class="card-hdr">🎯 ZONA</div>
          <div class="card-body">
            <select class="form-sel" id="qw-zona">
              <option value="Full Body">Full Body</option>
              <option value="Petto">Petto</option><option value="Schiena">Schiena</option>
              <option value="Gambe">Gambe</option><option value="Glutei">Glutei</option>
              <option value="Addome">Addome</option>
            </select>
          </div>
        </div>`;
    };
    window.showQuickWorkoutResult=function(minuti,zona){
      const exs=generateQuickWorkout(minuti,zona);
      resetScreen();setHdr('QUICK WORKOUT '+minuti+' MIN',zona,true);
      let html=`<div class="card"><div class="card-body">
        ${exs.map(item=>{const ex=EXDB.find(e=>e.id===item.id);if(!ex)return'';
          return `<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #ede8dc">
            <span style="font-size:18px">${ex.emoji}</span>
            <div><div style="font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:700">${ex.name}</div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3)">${item.sets}×${item.reps} · rec. ${item.rest}</div></div>
          </div>`;}).join('')}
        <button class="conf-btn green-btn" style="margin-top:10px" onclick="snd('confirm');aggiungiQuickADiario(${minuti},'${zona}')">✓ AGGIUNGI AL DIARIO</button>
      </div></div>`;
      document.getElementById('screen').innerHTML=html;
      window._lastQuickExs=exs;
    };
    window.aggiungiQuickADiario=function(minuti,zona){
      const exs=window._lastQuickExs||[];
      if(!S.workouts[TODAY])S.workouts[TODAY]=[];
      const kgPeso=S.profile.entries?.slice(-1)[0]?.peso||70;
      const burned=(typeof calcBurnedKcal==='function')?calcBurnedKcal('Forza',minuti,kgPeso):minuti*6;
      S.workouts[TODAY].push({name:'Quick Workout '+minuti+'min',type:'Forza',duration:minuti,burned,sets:exs.length,reps:'-',notes:`[Quick Workout · ${zona}]`});
      S.weeklyMissed=0;
      saveState();showToast('✅ Quick workout aggiunto!','green');navGoHome();
    };

    /* ────────────────────────────────────────
       6. SOSTITUZIONE ESERCIZIO (limitazione/infortunio)
       ──────────────────────────────────────── */
    window.findExerciseSubstitute=function(exId,maxRes){
      maxRes=maxRes||4;
      const ex=EXDB.find(e=>e.id===exId);if(!ex)return[];
      let pool=EXDB.filter(e=>e.id!==exId&&e.muscle===ex.muscle&&e.equip!==ex.equip);
      if(pool.length<maxRes)pool=pool.concat(EXDB.filter(e=>e.id!==exId&&e.muscle===ex.muscle&&e.equip===ex.equip&&!pool.includes(e)));
      return pool.slice(0,maxRes);
    };
    window.showExerciseSubstitutes=function(exId){
      const ex=EXDB.find(e=>e.id===exId);if(!ex)return;
      const subs=findExerciseSubstitute(exId);
      document.getElementById('modal-box').innerHTML=`
        <div class="modal-handle"></div>
        <div class="modal-title">🔄 Alternative a ${ex.name}</div>
        <div class="modal-sub" style="margin-bottom:10px">Stesso gruppo muscolare, attrezzo/pattern diverso — utile in caso di limitazioni o infortuni</div>
        ${subs.length===0?'<div style="font-size:12px;color:var(--ink2)">Nessuna alternativa disponibile.</div>':subs.map(s=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #eee2d0">
            <span style="font-size:22px">${s.emoji}</span>
            <div style="flex:1"><div style="font-size:13px;font-weight:600">${s.name}</div>
            <div style="font-size:10px;color:var(--ink3)">${s.equip} · ${s.sets}×${s.reps}</div></div>
            <button class="add-btn" style="padding:6px 12px;font-size:11px" onclick="snd();closeModal();navPush(()=>showEsercizio(${s.id}))">VEDI</button>
          </div>`).join('')}
        <button class="conf-btn" style="margin-top:12px;background:var(--paper);color:var(--ink);border:1.5px solid var(--ink)" onclick="closeModal()">CHIUDI</button>`;
      document.getElementById('modal').classList.add('open');
    };
    // Aggancia pulsante sostituzioni alla schermata dettaglio esercizio
    const _origShowEsercizio=window.showEsercizio;
    if(typeof _origShowEsercizio==='function'){
      window.showEsercizio=function(id,fb){
        _origShowEsercizio(id,fb);
        const scr=document.getElementById('screen');
        if(!scr)return;
        const btn=document.createElement('div');
        btn.style.cssText='padding:8px 14px 16px';
        btn.innerHTML=`<button class="big-btn" onclick="snd();showExerciseSubstitutes(${id})">🔄 VEDI SOSTITUZIONI (limitazioni/infortuni)</button>`;
        scr.appendChild(btn);
      };
    }

    /* ────────────────────────────────────────
       7. DASHBOARD PERFORMANCE
       ──────────────────────────────────────── */
    window.calcVolumeSettimanale=function(){
      const cutoff=new Date();cutoff.setDate(cutoff.getDate()-7);
      return (S.setLogs||[]).filter(l=>new Date(l.date)>=cutoff).reduce((a,l)=>a+l.kg*l.reps*(l.sets||1),0);
    };
    window.calcPR=function(){
      const byEx={};
      (S.setLogs||[]).forEach(l=>{
        if(!byEx[l.exId]||l.kg>byEx[l.exId].kg)byEx[l.exId]=l;
      });
      return Object.entries(byEx).map(([exId,l])=>({ex:EXDB.find(e=>e.id===+exId),...l})).filter(x=>x.ex)
        .sort((a,b)=>b.kg-a.kg).slice(0,5);
    };
    window.calcRecoveryScore=function(){
      const cutoff=new Date();cutoff.setDate(cutoff.getDate()-7);
      const logs=(S.setLogs||[]).filter(l=>new Date(l.date)>=cutoff&&l.rpe);
      const avgRpe=logs.length?logs.reduce((a,l)=>a+l.rpe,0)/logs.length:7;
      const trainDays=new Set(Object.keys(S.workouts||{}).filter(ds=>(new Date()-new Date(ds))/86400000<7)).size;
      const restRatio=Math.max(0,1-(trainDays/7));
      const score=Math.round(Math.max(0,Math.min(100,(10-avgRpe)*10*0.6+restRatio*100*0.4)));
      return{score,avgRpe:+avgRpe.toFixed(1),trainDays};
    };
    window.showPerformanceDashboard=function(fb){
      resetScreen();setHdr('PERFORMANCE','Volume · PR · Recupero',true);
      const vol=calcVolumeSettimanale();
      const pr=calcPR();
      const rec=calcRecoveryScore();
      const col=rec.score>=70?'#16a34a':rec.score>=40?'#d97706':'#dc2626';
      document.getElementById('screen').innerHTML=`
        <div class="card"><div class="card-hdr">🏋️ VOLUME SETTIMANALE</div>
          <div class="card-body" style="text-align:center;padding:10px 0">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:32px;font-weight:700">${Math.round(vol).toLocaleString('it-IT')}</div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3)">kg totali (kg×serie×rip) · ultimi 7gg</div>
          </div>
        </div>
        <div class="card"><div class="card-hdr">😴 RECOVERY SCORE</div>
          <div class="card-body" style="text-align:center;padding:10px 0">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:32px;font-weight:700;color:${col}">${rec.score}</div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3)">RPE medio ${rec.avgRpe} · ${rec.trainDays} giorni allenati/7</div>
          </div>
        </div>
        <div class="card"><div class="card-hdr">🏆 RECORD PERSONALI (PR)</div>
          <div class="card-body">
            ${pr.length===0?'<div style="font-size:12px;color:var(--ink2)">Registra sessioni con carico per vedere i tuoi PR.</div>':pr.map(x=>`
              <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #ede8dc;font-size:12px">
                <span>${x.ex.emoji} ${x.ex.name}</span><b>${x.kg}kg × ${x.reps}</b>
              </div>`).join('')}
          </div>
        </div>`;
    };

    /* ────────────────────────────────────────
       BANNER HOME: sessioni saltate → quick workout
       ──────────────────────────────────────── */
    const _origShowHome5=window.showHome;
    if(typeof _origShowHome5==='function'){
      window.showHome=function(fromBack){
        _origShowHome5(fromBack);
        ensureProfileExt5();
        const scr=document.getElementById('screen');
        if(!scr||!S.generatedPlan)return;
        const m=checkMissedSessions();
        if(m.missed>=2){
          const wrap=document.createElement('div');
          wrap.innerHTML=`<div style="background:#eff6ff;border:1.5px solid #93c5fd;border-radius:var(--r);padding:10px 12px;margin:0 12px 10px;font-size:12px;color:var(--ink2)">
            💡 Hai saltato ${m.missed} sessioni questa settimana. Niente panico — prova un <b>quick workout da 15-20 min</b> invece di annullare la settimana. <button style="display:block;margin-top:6px" class="add-btn" onclick="snd();navPush(showQuickWorkoutPicker)">VAI AL QUICK WORKOUT</button>
          </div>`;
          scr.insertBefore(wrap,scr.firstChild);
        }
      };
    }

    /* ────────────────────────────────────────
       HOOK MENU — Scheda generata, Quick workout, Performance
       ──────────────────────────────────────── */
    const _origShowMoreMenu5=window.showMoreMenu;
    if(typeof _origShowMoreMenu5==='function'){
      window.showMoreMenu=function(fromBack){
        _origShowMoreMenu5(fromBack);
        const grid=document.querySelector('#screen .meal-grid');
        if(!grid)return;
        grid.insertAdjacentHTML('beforeend',`
          <div class="meal-btn col" onclick="snd();navPush(S.generatedPlan?showPianoGenerato:showGeneraScheda)" style="padding:16px 12px 14px;gap:6px">
            <div class="meal-ico" style="font-size:28px">🤖</div>
            <div class="meal-lbl" style="font-size:10px;font-weight:700">Scheda AI</div>
            <div class="meal-n" style="font-size:9px;opacity:.7;line-height:1.3;text-align:center">Generata su misura</div>
          </div>
          <div class="meal-btn exe" onclick="snd();navPush(showQuickWorkoutPicker)" style="padding:16px 12px 14px;gap:6px">
            <div class="meal-ico" style="font-size:28px">⚡</div>
            <div class="meal-lbl" style="font-size:10px;font-weight:700">Quick Workout</div>
            <div class="meal-n" style="font-size:9px;opacity:.7;line-height:1.3;text-align:center">10/20/30 min senza attrezzi</div>
          </div>
          <div class="meal-btn col" onclick="snd();navPush(showPerformanceDashboard)" style="padding:16px 12px 14px;gap:6px">
            <div class="meal-ico" style="font-size:28px">📈</div>
            <div class="meal-lbl" style="font-size:10px;font-weight:700">Performance</div>
            <div class="meal-n" style="font-size:9px;opacity:.7;line-height:1.3;text-align:center">Volume · PR · Recupero</div>
          </div>`);
      };
    }

    ensureProfileExt5();
    console.log('%c[Corpora Fase 5] ✅ Generazione algoritmica scheda · progressione RPE · deload · quick workout · sostituzioni · performance dashboard','color:#0891b2;font-weight:bold;font-size:11px');

  });
})();
