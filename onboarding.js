/* ═══════════════════════════════════════════════════════════════
   CORPORA — ONBOARDING PREMIUM v2 (Fase 4)
   Implementa SEZIONE 4 del blueprint: wizard a 10 step, un-due
   campi per schermata, barra di progresso, reveal finale.
   Sostituisce l'onboarding legacy a 3 card (showOnboarding in
   app.js) mantenendo la stessa integrazione con checkOnboarding()
   e gli stessi campi di stato consumati da Fase 3
   (S.profile.livello / giorniSett / luogo → matchWorkoutPlan).
   Carica DOPO app.js e fase3-upgrade.js.
   ═══════════════════════════════════════════════════════════════ */
(function(){

  function whenReady(fn){
    if(typeof S!=='undefined'&&typeof saveState==='function'&&typeof resetScreen==='function'&&typeof setHdr==='function'&&typeof snd==='function'){
      fn();
    }else{
      setTimeout(()=>whenReady(fn),120);
    }
  }

  whenReady(function(){

    const TOTAL=10;
    const STEP_TITLES=[
      'INIZIAMO DA TE','DATI CORPO','DOVE VUOI ARRIVARE','QUANTO TI MUOVI',
      'IL TUO ALLENAMENTO','COME MANGI','OBIETTIVO PRIMARIO',
      'MOTIVAZIONE E STILE DI VITA','CONSENSI','IL TUO PIANO'
    ];

    let ob={};

    function initObState(){
      const p=S.profile||{};
      ob={
        step:1,
        sesso:p.sesso||'m',
        peso:p.entries?.slice(-1)[0]?.peso||'',
        altezza:p.altezza||'',
        eta:p.eta||'',
        pesoObiettivo:S.settings.pesoTarget||'',
        attivita:p.attivita||'moderata',
        livello:p.livello||'Principiante',
        giorniSett:p.giorniSett||3,
        tempoSessione:p.tempoSessione||45,
        luogo:p.luogo||'Palestra',
        attrezzatura:p.attrezzatura||[],
        preferenzaAlim:p.preferenzaAlim||'Onnivoro',
        allergie:p.allergie||[],
        cibiNonGraditi:p.cibiNonGraditi||'',
        pastiGiorno:p.pastiGiorno||5,
        obiettivo:p.obiettivo||'mantenimento',
        oreSonno:p.oreSonno||7,
        stress:p.stress||3,
        motivazione:p.motivazione||'',
        consPrivacy:false,
        consSalute:false
      };
    }

    /* ═════ HELPERS UI ═════ */
    function card(hdr,body){
      return `<div class="card"><div class="card-hdr">${hdr}</div><div class="card-body">${body}</div></div>`;
    }
    function err(msg){
      return `<div id="ob-err" style="color:var(--red);font-family:'IBM Plex Mono',monospace;font-size:11px;min-height:16px;text-align:center;padding:0 12px">${msg||''}</div>`;
    }
    // pulsante grande a card (single select)
    function bigOpt(field,val,cur,ico,lbl,desc){
      const on=cur===val;
      return `<button onclick="obSetSingle('${field}','${val}')" style="width:100%;text-align:left;padding:14px;margin-bottom:8px;border:2px solid ${on?'var(--green)':'#e8e3d8'};background:${on?'var(--greenl)':'var(--card)'};border-radius:var(--rk);cursor:pointer;transition:all .15s">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:700;color:var(--ink)">${ico} ${lbl}</div>
        ${desc?`<div style="font-size:11px;color:var(--ink3);margin-top:3px">${desc}</div>`:''}
      </button>`;
    }
    // chip piccolo (single o multi select)
    function chip(field,val,cur,lbl,multi){
      const on=multi?(cur||[]).includes(val):cur==val;
      const fn=multi?`obToggleMulti('${field}','${val}')`:`obSetSingle('${field}','${val}')`;
      return `<button onclick="${fn}" style="padding:9px 13px;border:2px solid ${on?'var(--green)':'#e8e3d8'};background:${on?'var(--greenl)':'var(--card)'};border-radius:20px;font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:700;color:var(--ink);cursor:pointer;transition:all .15s">${lbl}</button>`;
    }
    function chipRow(items){
      return `<div style="display:flex;flex-wrap:wrap;gap:8px;padding:12px">${items}</div>`;
    }
    function progressBar(){
      const pct=Math.round((ob.step-1)/(TOTAL-1)*100);
      return `<div style="padding:14px 16px 0">
        <div class="goal-progress"><div class="goal-progress-fill" style="width:${pct}%"></div></div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--ink3);margin-top:6px;text-align:right">STEP ${ob.step}/${TOTAL}</div>
      </div>`;
    }
    function microRecap(txt){
      return `<div style="margin:14px 12px 0;padding:12px 14px;background:var(--ink);color:#fff;border-radius:var(--rk);font-family:'IBM Plex Mono',monospace;font-size:11px;line-height:1.6;opacity:.9">💭 ${txt}</div>`;
    }
    function navButtons(){
      return `<div style="padding:14px 12px 8px;display:flex;gap:8px">
        ${ob.step>1?`<button class="big-btn outline" style="margin:0;flex:1" onclick="snd();obBack()">← INDIETRO</button>`:''}
        <button class="big-btn success" style="margin:0;flex:2" onclick="snd('confirm');obNext()">${ob.step===TOTAL?'🚀 INIZIA ORA':'AVANTI →'}</button>
      </div>`;
    }

    /* ═════ STEP CONTENT ═════ */
    function step1(){
      return card('👋 SESSO BIOLOGICO','<div style="font-size:12px;color:var(--ink3);margin-bottom:12px">Serve per calcolare correttamente il tuo fabbisogno calorico (formula Mifflin-St Jeor).</div>'+
        `<div style="display:flex;gap:8px">
          <button onclick="obSetSingle('sesso','m')" style="flex:1;padding:16px;border:2px solid ${ob.sesso==='m'?'var(--green)':'#ccc'};background:${ob.sesso==='m'?'var(--greenl)':'var(--paper)'};border-radius:var(--rk);font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:700;cursor:pointer">♂ UOMO</button>
          <button onclick="obSetSingle('sesso','f')" style="flex:1;padding:16px;border:2px solid ${ob.sesso==='f'?'var(--green)':'#ccc'};background:${ob.sesso==='f'?'var(--greenl)':'var(--paper)'};border-radius:var(--rk);font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:700;cursor:pointer">♀ DONNA</button>
        </div>`)+
        microRecap('Iniziamo a calibrare il tuo fabbisogno energetico...');
    }

    function step2(){
      return card('⚖️ IL TUO CORPO OGGI',
        `<div class="form-row"><div class="form-lbl">Peso</div><input class="form-inp" id="ob-peso" type="number" inputmode="decimal" placeholder="es. 75" value="${ob.peso}" oninput="obField('peso',this.value)"> <span style="font-size:11px;color:var(--ink3)">kg</span></div>
         <div class="form-row"><div class="form-lbl">Altezza</div><input class="form-inp" id="ob-h" type="number" inputmode="numeric" placeholder="es. 175" value="${ob.altezza}" oninput="obField('altezza',this.value)"> <span style="font-size:11px;color:var(--ink3)">cm</span></div>
         <div class="form-row" style="border:none"><div class="form-lbl">Età</div><input class="form-inp" id="ob-eta" type="number" inputmode="numeric" placeholder="es. 35" value="${ob.eta}" oninput="obField('eta',this.value)"></div>`)
        +err(ob._err2);
    }

    function step3(){
      const diff=(ob.pesoObiettivo&&ob.peso)?(+ob.pesoObiettivo-+ob.peso):null;
      const diffTxt=diff===null?'':diff===0?'Mantenimento — nessuna variazione':diff>0?`+${diff.toFixed(1)} kg da guadagnare`:`${diff.toFixed(1)} kg da perdere`;
      return card('🎯 DOVE VUOI ARRIVARE',
        `<div class="form-row" style="border:none"><div class="form-lbl">Peso obiettivo</div><input class="form-inp" id="ob-pt" type="number" inputmode="decimal" placeholder="es. 70" value="${ob.pesoObiettivo}" oninput="obField('pesoObiettivo',this.value);obRefreshLive()"> <span style="font-size:11px;color:var(--ink3)">kg</span></div>
         <div id="ob-diff-live" style="text-align:center;font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:700;color:var(--green);padding:6px 0 2px">${diffTxt}</div>`);
    }

    function step4(){
      const opts=[['sedentario','🪑','SEDENTARIO','Lavoro d\'ufficio, poco movimento'],['leggera','🚶','LEGGERA','Camminate, 1-2 allenamenti/sett.'],['moderata','🏃','MODERATA','3-4 allenamenti a settimana'],['intensa','🔥','INTENSA','5-6 allenamenti a settimana'],['estrema','⚡','ESTREMA','Allenamento quotidiano intenso']];
      return card('🏃 QUANTO TI MUOVI OGNI GIORNO',opts.map(([k,ico,lbl,desc])=>bigOpt('attivita',k,ob.attivita,ico,lbl,desc)).join(''));
    }

    function step5(){
      let html=card('💪 LIVELLO ESPERIENZA',chipRow(['Principiante','Intermedio','Avanzato'].map(v=>chip('livello',v,ob.livello,v)).join('')));
      html+=card('📅 GIORNI DISPONIBILI A SETTIMANA',chipRow([1,2,3,4,5,6].map(v=>chip('giorniSett',v,ob.giorniSett,v+'')).join('')));
      html+=card('⏱️ TEMPO PER SESSIONE',chipRow([15,30,45,60,90].map(v=>chip('tempoSessione',v,ob.tempoSessione,v+' min')).join('')));
      html+=card('📍 DOVE TI ALLENI',chipRow(['Casa','Palestra'].map(v=>chip('luogo',v,ob.luogo,v)).join('')));
      html+=card('🏋️ ATTREZZATURA DISPONIBILE',chipRow(['Nessuna','Manubri','Bilanciere','Panca','Elastici','Cardio'].map(v=>chip('attrezzatura',v,ob.attrezzatura,v,true)).join('')));
      return html;
    }

    function step6(){
      let html=card('🍽️ PREFERENZA ALIMENTARE',chipRow(['Onnivoro','Vegetariano','Vegano','Altro'].map(v=>chip('preferenzaAlim',v,ob.preferenzaAlim,v)).join('')));
      html+=card('⚠️ ALLERGIE / INTOLLERANZE',chipRow(['Glutine','Lattosio','Frutta secca','Uova','Pesce/crostacei','Soia','Nessuna'].map(v=>chip('allergie',v,ob.allergie,v,true)).join('')));
      html+=card('🚫 CIBI NON GRADITI (opzionale)',`<input class="form-inp" style="width:100%" id="ob-cng" type="text" placeholder="es. frattaglie, olive..." value="${ob.cibiNonGraditi}" oninput="obField('cibiNonGraditi',this.value)">`);
      html+=card('🍴 PASTI AL GIORNO',chipRow([3,4,5,6].map(v=>chip('pastiGiorno',v,ob.pastiGiorno,v+'')).join('')));
      return html;
    }

    function step7(){
      const opts=[['dimagrimento','🔥','DIMAGRIMENTO','Perdere peso e grasso corporeo'],['massa','💪','AUMENTO MASSA','Costruire muscolo e forza'],['ricomposizione','⚙️','RICOMPOSIZIONE','Perdere grasso e guadagnare muscolo insieme'],['mantenimento','⚖️','MANTENIMENTO','Restare stabile sul peso attuale'],['benessere','🌱','BENESSERE GENERALE','Energia, salute, meno focus sul numero']];
      return card('🎯 IL TUO OBIETTIVO PRIMARIO',opts.map(([k,ico,lbl,desc])=>bigOpt('obiettivo',k,ob.obiettivo,ico,lbl,desc)).join(''));
    }

    function step8(){
      let html=card('😴 ORE DI SONNO MEDIE',
        `<div style="padding:6px 4px 2px">
          <input type="range" min="4" max="10" step="0.5" value="${ob.oreSonno}" style="width:100%" oninput="obField('oreSonno',this.value);document.getElementById('ob-sonno-v').textContent=this.value">
          <div id="ob-sonno-v" style="text-align:center;font-family:'IBM Plex Mono',monospace;font-size:16px;font-weight:700;color:var(--ink);margin-top:4px">${ob.oreSonno}</div>
          <div style="text-align:center;font-size:10px;color:var(--ink3)">ore a notte</div>
        </div>`);
      html+=card('😰 STRESS PERCEPITO',
        `<div style="padding:6px 4px 2px">
          <input type="range" min="1" max="5" step="1" value="${ob.stress}" style="width:100%" oninput="obField('stress',this.value);document.getElementById('ob-stress-v').textContent=this.value">
          <div id="ob-stress-v" style="text-align:center;font-family:'IBM Plex Mono',monospace;font-size:16px;font-weight:700;color:var(--ink);margin-top:4px">${ob.stress}</div>
          <div style="text-align:center;font-size:10px;color:var(--ink3)">1 = rilassato · 5 = molto stressato</div>
        </div>`);
      html+=card('🔥 MOTIVAZIONE PREVALENTE',chipRow(['Salute','Estetica','Performance','Energia','Altro'].map(v=>chip('motivazione',v,ob.motivazione,v)).join('')));
      return html;
    }

    function step9(){
      return card('🔒 PRIVACY E CONSENSI',
        `<label style="display:flex;gap:10px;align-items:flex-start;padding:10px 0;cursor:pointer">
          <input type="checkbox" id="ob-cons-priv" style="margin-top:2px;width:18px;height:18px;flex-shrink:0" ${ob.consPrivacy?'checked':''} onchange="obField('consPrivacy',this.checked)">
          <span style="font-size:12px;line-height:1.5;color:var(--ink2)">Ho letto e accetto la <b>Privacy Policy</b>. <span style="color:var(--red)">*obbligatorio</span></span>
        </label>
        <label style="display:flex;gap:10px;align-items:flex-start;padding:10px 0;border-top:1px solid #ede8dc;cursor:pointer">
          <input type="checkbox" id="ob-cons-salute" style="margin-top:2px;width:18px;height:18px;flex-shrink:0" ${ob.consSalute?'checked':''} onchange="obField('consSalute',this.checked)">
          <span style="font-size:12px;line-height:1.5;color:var(--ink2)">Acconsento al trattamento dei <b>dati relativi alla salute</b> (peso, misure, allenamenti) per personalizzare il piano. Facoltativo — puoi revocarlo in qualsiasi momento dalle Impostazioni.</span>
        </label>`)
        +err(ob._err9);
    }

    function step10(){
      // calcolo TDEE/macro con la stessa formula già in uso nell'app
      const peso=+ob.peso,h=+ob.altezza,eta=+ob.eta;
      const fAtt={sedentario:1.2,leggera:1.375,moderata:1.55,intensa:1.725,estrema:1.9};
      const bmr=ob.sesso==='m'?10*peso+6.25*h-5*eta+5:10*peso+6.25*h-5*eta-161;
      const tdee=Math.round(bmr*(fAtt[ob.attivita]||1.55));
      const kcalMap={dimagrimento:tdee-500,massa:tdee+300,ricomposizione:tdee-200,mantenimento:tdee,benessere:tdee};
      const kcalObj=Math.max(1200,kcalMap[ob.obiettivo]??tdee);
      const gKgMap={massa:2.2,dimagrimento:2.0,ricomposizione:2.2,mantenimento:1.8,benessere:1.6};
      const protG=Math.round(peso*(gKgMap[ob.obiettivo]||1.8));
      const fatG=Math.round(peso*0.9);
      const protKcal=protG*4,fatKcal=fatG*9;
      const carbG=Math.max(0,Math.round((kcalObj-protKcal-fatKcal)/4));
      const bmi=+(peso/(h/100)**2).toFixed(1);
      const bmiL=bmi<18.5?'Sottopeso':bmi<25?'Normopeso':bmi<30?'Sovrappeso':'Obeso';
      const obLabel={dimagrimento:'🔥 Dimagrimento',massa:'💪 Aumento massa',ricomposizione:'⚙️ Ricomposizione',mantenimento:'⚖️ Mantenimento',benessere:'🌱 Benessere'};
      // salva per finishObWizard()
      ob._calc={peso,h,eta,tdee,kcalObj,protG,carbG,fatG,bmi};
      return `
        <div style="background:var(--ink);color:#fff;padding:20px 16px;text-align:center">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;opacity:.6;margin-bottom:6px">OBIETTIVO CALORICO GIORNALIERO</div>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:52px;font-weight:700;color:#86efac">${kcalObj}</div>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;opacity:.6">kcal/giorno · ${obLabel[ob.obiettivo]||''}</div>
        </div>
        <div class="stat-grid">
          <div class="stat-cell"><div class="stat-val" style="color:var(--green)">${peso}</div><div class="stat-unit">kg</div><div class="stat-lbl">PESO</div></div>
          <div class="stat-cell"><div class="stat-val" style="color:#2563eb">${bmi}</div><div class="stat-unit">${bmiL}</div><div class="stat-lbl">BMI</div></div>
          <div class="stat-cell"><div class="stat-val" style="color:#d97706">${tdee}</div><div class="stat-unit">kcal</div><div class="stat-lbl">TDEE</div></div>
        </div>
        ${card('🍽️ MACRO DEL TUO PRIMO GIORNO',
          `<div style="display:flex;justify-content:space-around;text-align:center;padding:6px 0">
            <div><div style="font-family:'IBM Plex Mono',monospace;font-size:18px;font-weight:700;color:var(--ink)">${protG}g</div><div style="font-size:10px;color:var(--ink3)">PROTEINE</div></div>
            <div><div style="font-family:'IBM Plex Mono',monospace;font-size:18px;font-weight:700;color:var(--ink)">${carbG}g</div><div style="font-size:10px;color:var(--ink3)">CARBOIDRATI</div></div>
            <div><div style="font-family:'IBM Plex Mono',monospace;font-size:18px;font-weight:700;color:var(--ink)">${fatG}g</div><div style="font-size:10px;color:var(--ink3)">GRASSI</div></div>
          </div>
          <div style="font-size:11px;color:var(--ink3);margin-top:8px;line-height:1.6">Basato su ${ob.pastiGiorno} pasti/giorno, preferenza <b>${ob.preferenzaAlim}</b>${ob.allergie.length&&!ob.allergie.includes('Nessuna')?`, escludendo <b>${ob.allergie.join(', ')}</b>`:''}.</div>`)}
        ${card('🏋️ IL TUO ALLENAMENTO',
          `<div style="font-size:12px;line-height:1.8;color:var(--ink2)">Livello <b>${ob.livello}</b> · <b>${ob.giorniSett}</b> giorni/settimana · ${ob.tempoSessione} min/sessione · presso <b>${ob.luogo}</b>.<br>Ti abbineremo la scheda più adatta appena entri nell'app.</div>`)}
        <div class="card"><div class="card-body" style="font-size:12px;line-height:1.7;color:var(--ink2)">
          ${ob.obiettivo==='dimagrimento'?`Con <b>${kcalObj} kcal/giorno</b> sei in un deficit di 500 kcal. Perderai circa <b>0,5 kg a settimana</b> in modo sano.`:
            ob.obiettivo==='massa'?`Con <b>${kcalObj} kcal/giorno</b> sei in un surplus di 300 kcal. Con l'allenamento giusto guadagnerai muscolo in modo controllato.`:
            ob.obiettivo==='ricomposizione'?`Con <b>${kcalObj} kcal/giorno</b> e proteine alte (${protG}g) puoi perdere grasso e mantenere/costruire muscolo contemporaneamente.`:
            ob.obiettivo==='benessere'?`Con <b>${kcalObj} kcal/giorno</b> mantieni energia stabile: qui il focus non è il numero sulla bilancia ma sonno, costanza e qualità del movimento.`:
            `Con <b>${kcalObj} kcal/giorno</b> mantieni il tuo peso attuale. Puoi cambiare obiettivo in qualsiasi momento dalle Impostazioni.`}
        </div></div>`;
    }

    /* ═════ VALIDAZIONE ═════ */
    function validateStep(){
      ob._err2='';ob._err9='';
      if(ob.step===2){
        const peso=+ob.peso,h=+ob.altezza,eta=+ob.eta;
        if(!peso||!h||!eta){ob._err2='⚠ Inserisci peso, altezza ed età';renderStep();return false;}
        if(peso<30||peso>300){ob._err2='⚠ Peso non valido';renderStep();return false;}
        if(h<100||h>250){ob._err2='⚠ Altezza non valida';renderStep();return false;}
        if(eta<10||eta>120){ob._err2='⚠ Età non valida';renderStep();return false;}
      }
      if(ob.step===9){
        if(!ob.consPrivacy){ob._err9='⚠ Devi accettare la Privacy Policy per continuare';renderStep();return false;}
      }
      return true;
    }

    /* ═════ RENDER / NAV ═════ */
    const STEP_FN=[null,step1,step2,step3,step4,step5,step6,step7,step8,step9,step10];

    function renderStep(){
      resetScreen();
      setHdr('CONFIGURAZIONE',STEP_TITLES[ob.step-1],false);
      const el=document.getElementById('screen');
      el.innerHTML=progressBar()+STEP_FN[ob.step]()+navButtons();
    }

    window.obField=function(field,val){ob[field]=val;};
    window.obSetSingle=function(field,val){ob[field]=val;renderStep();};
    window.obToggleMulti=function(field,val){
      let arr=ob[field]||[];
      if(val==='Nessuna'||val==='Nessuna intolleranza'){arr=arr.includes(val)?[]:[val];}
      else{
        arr=arr.filter(v=>v!=='Nessuna');
        if(arr.includes(val))arr=arr.filter(v=>v!==val);else arr=[...arr,val];
      }
      ob[field]=arr;renderStep();
    };
    window.obRefreshLive=function(){
      const diff=(ob.pesoObiettivo&&ob.peso)?(+ob.pesoObiettivo-+ob.peso):null;
      const t=document.getElementById('ob-diff-live');
      if(t)t.textContent=diff===null?'':diff===0?'Mantenimento — nessuna variazione':diff>0?`+${diff.toFixed(1)} kg da guadagnare`:`${diff.toFixed(1)} kg da perdere`;
    };
    window.obBack=function(){ if(ob.step>1){ob.step--;renderStep();} };
    window.obNext=function(){
      if(!validateStep())return;
      if(ob.step<TOTAL){ob.step++;renderStep();return;}
      finishObWizard();
    };

    function finishObWizard(){
      const c=ob._calc;
      const p=S.profile;
      p.altezza=c.h;p.eta=c.eta;p.sesso=ob.sesso;p.obiettivo=ob.obiettivo;p.attivita=ob.attivita;
      p.livello=ob.livello;p.giorniSett=+ob.giorniSett;p.tempoSessione=+ob.tempoSessione;p.luogo=ob.luogo;
      p.attrezzatura=ob.attrezzatura;p.preferenzaAlim=ob.preferenzaAlim;p.allergie=ob.allergie;
      p.cibiNonGraditi=ob.cibiNonGraditi;p.pastiGiorno=+ob.pastiGiorno;
      p.oreSonno=+ob.oreSonno;p.stress=+ob.stress;p.motivazione=ob.motivazione;
      p.consensoPrivacy=true;p.consensoSalute=!!ob.consSalute;p.consensoTimestamp=new Date().toISOString();
      p.nome=CUR.name;
      if(!p.entries.some(e=>e.date===TODAY)){
        p.entries.push({date:TODAY,peso:c.peso,vita:'',fianchi:'',grasso:'',note:'Inserimento iniziale'});
        p.entries.sort((a,b)=>a.date.localeCompare(b.date));
      }
      S.settings.kcal=c.kcalObj;
      if(ob.pesoObiettivo)S.settings.pesoTarget=+ob.pesoObiettivo;
      saveState();
      navGoHome();
      showToast('Piano personalizzato attivato! 🚀','success');
    }

    /* ═════ ENTRY POINT — sostituisce l'onboarding legacy ═════ */
    window.showOnboarding=function(){
      initObState();
      renderStep();
    };

    console.log('%c[Corpora] ✅ Onboarding Premium v2 (Sezione 4 blueprint) — wizard 10 step attivo','color:#7c3aed;font-weight:bold;font-size:11px');

  });

})();
