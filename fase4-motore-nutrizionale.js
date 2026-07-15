/* ═══════════════════════════════════════════════════════════════
   FASE 4 — CORPORA
   Completa SEZIONE 5 del blueprint (Motore di Personalizzazione
   Nutrizionale): tutti i punti già coperti da Fase 1 (refeed,
   fibre/acqua dinamiche) non vengono ritoccati qui. Questo modulo
   aggiunge le estensioni ancora mancanti:

     1. Deficit/surplus dinamico (% invece di kcal fisse)
     2. Sostituzioni intelligenti per equivalenza (±5% kcal/proteine)
     3. Alert anti-noia / varietà (stesso alimento >4 volte/7gg)
     4. Scoring qualità piano (0-100: varietà + aderenza + fibre)
     5. Alert piano troppo restrittivo (<1.2×BMR per 2+ settimane)
     6. Messaggio budget residuo giornata su modifica pasto manuale

   Pattern coerente con Fase 1/2/3: nessuna riscrittura, solo
   estensione via whenReady() + override window.* dove serve.
   ═══════════════════════════════════════════════════════════════ */
(function CorporaFase4(){

  function whenReady(fn){
    if(typeof S!=='undefined'&&typeof saveState==='function'&&typeof showToast==='function'&&typeof getDB==='function'){
      fn();
    }else{
      setTimeout(()=>whenReady(fn),120);
    }
  }

  whenReady(function(){

    /* ────────────────────────────────────────
       1. DEFICIT/SURPLUS DINAMICO (percentuale)
       -20% dimagrimento, +12.5% massa (range
       10-15% da blueprint), TDEE puro mantenimento.
       Sostituisce i -500/+300 kcal fissi.
       ──────────────────────────────────────── */
    window.KCAL_PCT={dimagrimento:-0.20,massa:0.125,mantenimento:0};

    window.calcKcalObiettivo=function(tdee,obiettivo){
      const pct=KCAL_PCT[obiettivo]??0;
      const k=Math.round((tdee*(1+pct))/5)*5;
      return Math.max(1200,k);
    };

    window.getDeficitInfo=function(tdee,obiettivo){
      const kObj=calcKcalObiettivo(tdee,obiettivo);
      const diff=tdee-kObj; // positivo=deficit, negativo=surplus
      const pct=Math.abs(Math.round((diff/tdee)*100));
      const kgSett=+((diff*7)/7700).toFixed(2);
      return{kObj,diff,pct,kgSett};
    };

    // Patch dei 3 punti in app.js che calcolavano il target con offset fisso
    const _origFinishOnboarding=window.finishOnboarding;
    if(typeof _origFinishOnboarding==='function'){
      window.finishOnboarding=function(){
        _origFinishOnboarding();
        // ricalcola con logica percentuale (l'originale usa ancora -500/+300)
        const p=S.profile;
        if(p.altezza&&p.eta){
          const last=p.entries?.slice(-1)[0];
          if(last){
            const fAtt={sedentario:1.2,leggera:1.375,moderata:1.55,intensa:1.725,estrema:1.9};
            const bmr=p.sesso==='m'?10*last.peso+6.25*p.altezza-5*p.eta+5:10*last.peso+6.25*p.altezza-5*p.eta-161;
            const tdee=Math.round(bmr*(fAtt[p.attivita]||1.55));
            S.settings.kcal=calcKcalObiettivo(tdee,p.obiettivo);
            saveState();
          }
        }
      };
    }

    // Card "APPLICA COME OBIETTIVO" nel Profilo — sostituisce il calcolo fisso
    const _origRenderProfilo=window.renderProfilo;
    if(typeof _origRenderProfilo==='function'){
      window.renderProfilo=function(){
        _origRenderProfilo();
        const p=S.profile,last=p.entries?.slice(-1)[0];
        const card=document.querySelector('#screen .card:has(.card-hdr)');
        // individua la card "TDEE CALCOLATO" già renderizzata dall'originale e la corregge
        const hdrs=document.querySelectorAll('#screen .card-hdr');
        hdrs.forEach(h=>{
          if(h.textContent.includes('TDEE CALCOLATO')&&p.altezza&&p.eta&&last){
            const f={sedentario:1.2,leggera:1.375,moderata:1.55,intensa:1.725,estrema:1.9};
            const bmr=p.sesso==='m'?10*last.peso+6.25*p.altezza-5*p.eta+5:10*last.peso+6.25*p.altezza-5*p.eta-161;
            const tdee=Math.round(bmr*(f[p.attivita]||1.55));
            const info=getDeficitInfo(tdee,p.obiettivo);
            const body=h.nextElementSibling;
            if(body){
              body.innerHTML=`BMR: ${Math.round(bmr)} kcal/gg<br>TDEE: ${tdee} kcal/gg<br><b>Obiettivo (${p.obiettivo}): <span style="color:var(--green)">${info.kObj} kcal/gg</span></b><br><span style="font-size:10px;opacity:.7">${info.diff>0?'Deficit':info.diff<0?'Surplus':'Mantenimento'} ${info.pct}% · ~${Math.abs(info.kgSett)}kg/settimana</span><button class="big-btn success" style="margin:10px 0 0" onclick="snd('confirm');applyTDEE(${info.kObj})">APPLICA COME OBIETTIVO</button>`;
            }
          }
        });
      };
    }

    /* ────────────────────────────────────────
       2. SOSTITUZIONI INTELLIGENTI
       Equivalenza calorica/proteica ±5% (allarga
       progressivamente se non trova abbastanza
       alternative nella categoria).
       ──────────────────────────────────────── */
    window.findSostituzioni=function(alimento,maxRes){
      maxRes=maxRes||5;
      const db=getDB().filter(f=>f.id!==alimento.id&&f.cat===alimento.cat);
      let tol=0.05,res=[];
      while(res.length<3&&tol<=0.30){
        res=db.filter(f=>{
          const dE=Math.abs(f.e-alimento.e)/(alimento.e||1);
          const dP=Math.abs(f.p-alimento.p)/(alimento.p||1);
          return dE<=tol&&dP<=tol;
        });
        tol+=0.05;
      }
      res.sort((a,b)=>Math.abs(a.e-alimento.e)-Math.abs(b.e-alimento.e));
      return res.slice(0,maxRes);
    };

    window.showSostituzioni=function(mk,i){
      const it=S.meals[mk]&&S.meals[mk][i];if(!it)return;
      const f=it.food;
      const subs=findSostituzioni(f);
      document.getElementById('modal-box').innerHTML=`
        <div class="modal-handle"></div>
        <div class="modal-title">🔄 Sostituzioni per ${f.name}</div>
        <div class="modal-sub" style="margin-bottom:10px">Equivalenti per kcal e proteine (±5-30%)</div>
        ${subs.length===0?'<div style="font-size:12px;color:var(--ink2);padding:8px 0">Nessuna alternativa trovata nella stessa categoria.</div>':subs.map(s=>`
          <div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid #eee2d0">
            <span style="font-size:24px">${s.emoji||'🍽'}</span>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:600">${s.name}</div>
              <div style="font-size:11px;color:var(--ink3)">${s.e} kcal · P:${s.p}g /100g</div>
            </div>
            <button class="add-btn" style="padding:6px 12px;font-size:11px" onclick="snd('confirm');applySostituzione('${mk}',${i},${s.id})">USA</button>
          </div>`).join('')}
        <button class="conf-btn" style="margin-top:12px;background:var(--paper);color:var(--ink);border:1.5px solid var(--ink)" onclick="closeModal()">CHIUDI</button>`;
      document.getElementById('modal').classList.add('open');
    };

    window.applySostituzione=function(mk,i,newFoodId){
      const it=S.meals[mk]&&S.meals[mk][i];if(!it)return;
      const nf=getDB().find(f=>f.id===newFoodId);if(!nf)return;
      it.food=nf;
      saveState();showToast('✅ Sostituito con '+nf.name,'green');closeModal();
      if(typeof renderPasto==='function')renderPasto(mk);else if(typeof showHome==='function')showHome();
    };

    // Aggiunge pulsante "Sostituzioni" + messaggio budget residuo nel modal di modifica pasto
    const _origEditMealItem=window.editMealItem;
    if(typeof _origEditMealItem==='function'){
      window.editMealItem=function(mk,i){
        _origEditMealItem(mk,i);
        const box=document.getElementById('modal-box');
        if(!box)return;
        // 6. Regola: budget residuo giornata, non piano intero
        let e=0,p=0;
        MK.forEach(k=>(S.meals[k]||[]).forEach(x=>{e+=x.food.e*(x.g/100);p+=x.food.p*(x.g/100);}));
        const kcalRes=Math.max(0,Math.round((S.settings.kcal||2000)-e));
        const pt=(typeof getProteinTarget==='function')?getProteinTarget():null;
        const protRes=pt?Math.max(0,+(pt.target-p).toFixed(1)):null;
        const budgetMsg=document.createElement('div');
        budgetMsg.style.cssText='font-size:11px;color:var(--ink2);background:var(--paper);border-radius:8px;padding:8px 10px;margin-top:8px';
        budgetMsg.textContent=`Ok, ti restano ${kcalRes} kcal`+(protRes!==null?` e ${protRes}g proteine`:'')+' per oggi.';
        box.appendChild(budgetMsg);
        const subBtn=document.createElement('button');
        subBtn.className='conf-btn';
        subBtn.style.cssText='margin-top:8px;background:var(--paper);color:var(--ink);border:1.5px solid var(--ink)';
        subBtn.textContent='🔄 SOSTITUZIONI';
        subBtn.onclick=()=>{snd();showSostituzioni(mk,i);};
        box.appendChild(subBtn);
      };
    }

    /* ────────────────────────────────────────
       3. ANTI-NOIA / VARIETÀ
       Alert se stesso alimento ripetuto >4 volte
       negli ultimi 7 giorni.
       ──────────────────────────────────────── */
    window.checkVarietaAlert=function(){
      const freq={};
      for(let i=0;i<7;i++){
        const d=new Date();d.setDate(d.getDate()-i);
        const ds=d.toISOString().slice(0,10);
        const src=ds===TODAY?S.meals:S.mealHistory?.[ds];
        if(!src)continue;
        MK.forEach(k=>(src[k]||[]).forEach(it=>{
          freq[it.food.id]=freq[it.food.id]||{count:0,food:it.food};
          freq[it.food.id].count++;
        }));
      }
      return Object.values(freq).filter(f=>f.count>4).sort((a,b)=>b.count-a.count);
    };

    /* ────────────────────────────────────────
       4. SCORING QUALITÀ PIANO (0-100)
       Varietà 40% + aderenza macro 40% + fibre 20%
       ──────────────────────────────────────── */
    window.calcPlanQualityScore=function(){
      // varietà: alimenti distinti negli ultimi 7gg, target=15 per punteggio pieno
      const distinct=new Set();
      let fibreDaysOk=0,fibreDaysTot=0;
      const fibreTarget=(typeof getFibreTarget==='function')?getFibreTarget():28;
      for(let i=0;i<7;i++){
        const d=new Date();d.setDate(d.getDate()-i);
        const ds=d.toISOString().slice(0,10);
        const src=ds===TODAY?S.meals:S.mealHistory?.[ds];
        if(!src)continue;
        let dayFibre=0,hasData=false;
        MK.forEach(k=>(src[k]||[]).forEach(it=>{
          distinct.add(it.food.id);
          dayFibre+=(it.food.fi||0)*(it.g/100);
          hasData=true;
        }));
        if(hasData){fibreDaysTot++;if(dayFibre>=fibreTarget*0.8)fibreDaysOk++;}
      }
      const varietaScore=Math.min(40,Math.round((distinct.size/15)*40));
      const macroPct=(typeof getAdherenceScore==='function')?getAdherenceScore().macroPct:0;
      const macroScore=Math.round(macroPct*0.4);
      const fibreScore=fibreDaysTot>0?Math.round((fibreDaysOk/fibreDaysTot)*20):0;
      const total=Math.min(100,varietaScore+macroScore+fibreScore);
      return{total,varietaScore,macroScore,fibreScore,distinctFoods:distinct.size};
    };

    /* ────────────────────────────────────────
       5. ALERT PIANO TROPPO RESTRITTIVO
       kcal target < 1.2×BMR per 2+ settimane
       consecutive → warning + suggerimento
       professionista (compliance/wellness safety).
       ──────────────────────────────────────── */
    function getBMR(){
      const p=S.profile,last=p.entries?.slice(-1)[0];
      if(!p.altezza||!p.eta||!last)return null;
      return p.sesso==='m'?10*last.peso+6.25*p.altezza-5*p.eta+5:10*last.peso+6.25*p.altezza-5*p.eta-161;
    }
    window.checkPianoRestrittivo=function(){
      const bmr=getBMR();
      if(!bmr)return{restrittivo:false};
      const soglia=Math.round(bmr*1.2);
      const sotto=(S.settings.kcal||2000)<soglia;
      if(!sotto){S.restrictiveStreak=0;return{restrittivo:false,soglia};}
      // incrementa lo streak una sola volta a settimana (agganciato al check-in)
      return{restrittivo:(S.restrictiveStreak||0)>=2,soglia,streak:S.restrictiveStreak||0};
    };
    // Aggancio allo streak: ogni check-in settimanale (Fase 1) verifica ed incrementa
    const _origSaveCheckin=window.saveCheckin;
    if(typeof _origSaveCheckin==='function'){
      window.saveCheckin=function(){
        _origSaveCheckin();
        const bmr=getBMR();
        if(bmr){
          const soglia=Math.round(bmr*1.2);
          S.restrictiveStreak=(S.settings.kcal||2000)<soglia?(S.restrictiveStreak||0)+1:0;
          saveState();
        }
      };
    }

    /* ────────────────────────────────────────
       BANNER HOME: varietà + piano restrittivo
       + badge qualità piano
       ──────────────────────────────────────── */
    const _origShowHome=window.showHome;
    if(typeof _origShowHome==='function'){
      window.showHome=function(fromBack){
        _origShowHome(fromBack);
        const scr=document.getElementById('screen');
        if(!scr)return;
        const alerts=[];
        const varieta=checkVarietaAlert();
        if(varieta.length>0){
          alerts.push(`<div style="background:#fff7ed;border:1.5px solid #fde68a;border-radius:var(--r);padding:10px 12px;margin:0 12px 10px;font-size:12px;color:var(--ink2)">🔁 <b>${varieta[0].food.name}</b> ricorre spesso negli ultimi 7 giorni (${varieta[0].count}×). Un po' di varietà aiuta l'aderenza.</div>`);
        }
        const restr=checkPianoRestrittivo();
        if(restr.restrittivo){
          alerts.push(`<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:var(--r);padding:10px 12px;margin:0 12px 10px;font-size:12px;color:var(--ink2)">⚠️ Il tuo target calorico è sotto 1.2×BMR da almeno 2 settimane. Valuta di parlarne con un professionista prima di continuare.</div>`);
        }
        if(alerts.length){
          const wrap=document.createElement('div');
          wrap.innerHTML=alerts.join('');
          scr.insertBefore(wrap,scr.firstChild);
        }
      };
    }

    // Badge qualità piano nella schermata Score (Fase 1)
    const _origShowAdherenceScore=window.showAdherenceScore;
    if(typeof _origShowAdherenceScore==='function'){
      window.showAdherenceScore=function(fb){
        _origShowAdherenceScore(fb);
        const scr=document.getElementById('screen');
        if(!scr)return;
        const q=calcPlanQualityScore();
        const col=q.total>=80?'#16a34a':q.total>=50?'#d97706':'#dc2626';
        const card=document.createElement('div');
        card.className='card';
        card.innerHTML=`<div class="card-hdr">✨ QUALITÀ DEL PIANO</div>
          <div class="card-body" style="text-align:center;padding:6px 0 10px">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:32px;font-weight:700;color:${col}">${q.total}</div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3);text-transform:uppercase;margin-bottom:8px">su 100 · varietà + aderenza + fibre</div>
          </div>
          ${mBar('Varietà ('+q.distinctFoods+' alimenti/7gg)',q.varietaScore,40,'#7c3aed')}
          ${mBar('Aderenza macro',q.macroScore,40,'#16a34a')}
          ${mBar('Fibre raggiunte',q.fibreScore,20,'#d97706')}`;
        // inserisce subito dopo la card Adherence Score principale
        const firstCard=scr.querySelector('.card');
        if(firstCard&&firstCard.nextSibling)firstCard.parentNode.insertBefore(card,firstCard.nextSibling);
        else scr.appendChild(card);
      };
    }

    console.log('%c[Corpora Fase 4] ✅ Deficit dinamico % · sostituzioni intelligenti · anti-noia · quality score piano · alert restrittivo','color:#dc2626;font-weight:bold;font-size:11px');

  });
})();
