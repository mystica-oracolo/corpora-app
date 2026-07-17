/* ═══════════════════════════════════════════════════════════════
   FASE 16 — CORPORA — TRACKING MICRONUTRIENTI (vitamine/minerali)

   MOTORE + UI, dati per-alimento da popolare in seguito (decisione
   esplicita: costruire prima il motore, i valori nutrizionali dopo).

   Perché in due tempi: il database `DB` (app.js) ha 853 alimenti con
   solo kcal/macro/fibre/sodio. Inventare valori di vitamine/minerali
   per centinaia di alimenti da fonti non verificate avrebbe rischiato
   di mostrare dati sbagliati come se fossero precisi — peggio di non
   mostrarli affatto, specie per chi monitora una carenza reale.

   Come si aggiungono i dati in futuro (NESSUNA modifica di codice
   richiesta): basta aggiungere ai singoli oggetti di `DB` in app.js
   uno o più dei campi elencati in MICRO_DEFS qui sotto, per 100g,
   es. {..., vitC:9.1, ferro:2.7, calcio:0} — il motore li rileva
   automaticamente con un semplice `typeof === 'number'`.

   Valori di riferimento: NRV (Nutrient Reference Values) UE standard
   per adulti — gli stessi stampati per legge sulle etichette dei
   prodotti alimentari confezionati (Reg. UE 1169/2011, Allegato XIII).
   Sono valori generici informativi, non calibrati su età/sesso/
   condizioni specifiche — non sostituiscono il parere di un medico
   o nutrizionista (stesso principio del disclaimer già in Fase 8).

   Pattern coerente con le fasi precedenti: nessuna modifica ad
   app.js, solo estensione via whenReady() + window.*, wrap non
   invasivo di showMoreMenu.
   ═══════════════════════════════════════════════════════════════ */
(function CorporaFase16(){

  function whenReady(fn){
    if(typeof S!=='undefined'&&typeof saveState==='function'&&typeof showToast==='function'
       &&typeof navPush==='function'&&typeof resetScreen==='function'&&typeof setHdr==='function'
       &&typeof snd==='function'&&typeof showMoreMenu==='function'&&typeof DB!=='undefined'
       &&typeof MK!=='undefined'&&typeof mBar==='function'&&typeof TODAY!=='undefined'
       &&typeof fmtDate==='function'){
      fn();
    }else{
      setTimeout(()=>whenReady(fn),120);
    }
  }

  whenReady(function(){

    /* ────────────────────────────────────────
       1. DEFINIZIONI — NRV UE standard adulti
       ──────────────────────────────────────── */
    const MICRO_DEFS=[
      {key:'vitA',    label:'Vitamina A',              unit:'µg', nrv:800,  emoji:'🥕'},
      {key:'vitD',    label:'Vitamina D',               unit:'µg', nrv:5,    emoji:'☀️'},
      {key:'vitE',    label:'Vitamina E',               unit:'mg', nrv:12,   emoji:'🌰'},
      {key:'vitC',    label:'Vitamina C',               unit:'mg', nrv:80,   emoji:'🍊'},
      {key:'vitB1',   label:'Vitamina B1 (Tiamina)',    unit:'mg', nrv:1.1,  emoji:'🌾'},
      {key:'vitB2',   label:'Vitamina B2 (Riboflavina)',unit:'mg', nrv:1.4,  emoji:'🥛'},
      {key:'vitB3',   label:'Vitamina B3 (Niacina)',    unit:'mg', nrv:16,   emoji:'🍗'},
      {key:'vitB6',   label:'Vitamina B6',              unit:'mg', nrv:1.4,  emoji:'🍌'},
      {key:'folato',  label:'Folati (B9)',              unit:'µg', nrv:200,  emoji:'🥬'},
      {key:'vitB12',  label:'Vitamina B12',             unit:'µg', nrv:2.5,  emoji:'🥩'},
      {key:'calcio',  label:'Calcio',                   unit:'mg', nrv:800,  emoji:'🦴'},
      {key:'ferro',   label:'Ferro',                    unit:'mg', nrv:14,   emoji:'🩸'},
      {key:'magnesio',label:'Magnesio',                 unit:'mg', nrv:375,  emoji:'💪'},
      {key:'zinco',   label:'Zinco',                    unit:'mg', nrv:10,   emoji:'🛡️'},
      {key:'potassio',label:'Potassio',                 unit:'mg', nrv:2000, emoji:'🍌'},
      {key:'iodio',   label:'Iodio',                    unit:'µg', nrv:150,  emoji:'🐟'},
      {key:'selenio', label:'Selenio',                  unit:'µg', nrv:55,   emoji:'🥜'}
    ];
    window.MICRO_DEFS=MICRO_DEFS;

    /* ────────────────────────────────────────
       2. MOTORE — aggregazione con copertura dati onesta
       ──────────────────────────────────────── */
    // Somma i micronutrienti di un oggetto "meals" ({colazione:[...],...}) e,
    // per ciascun nutriente, quanti grammi di cibo consumato avevano davvero
    // quel dato disponibile — per non far passare "nessun dato" per "zero assunto".
    function microTotalsFor(mealsObj){
      const sums={}, coveredGrams={};
      MICRO_DEFS.forEach(m=>{sums[m.key]=0;coveredGrams[m.key]=0;});
      let totalGrams=0;
      MK.forEach(mk=>{
        (mealsObj&&mealsObj[mk]||[]).forEach(it=>{
          const food=it.food||{};
          const g=it.g||0;
          const r=g/100;
          totalGrams+=g;
          MICRO_DEFS.forEach(m=>{
            if(typeof food[m.key]==='number'){
              sums[m.key]+=food[m.key]*r;
              coveredGrams[m.key]+=g;
            }
          });
        });
      });
      return {sums,coveredGrams,totalGrams};
    }
    window.microTotalsFor=microTotalsFor;
    window.getMicroToday=function(){return microTotalsFor(S.meals);};
    window.getMicroForDate=function(dateStr){
      if(dateStr===TODAY)return microTotalsFor(S.meals);
      const snap=(S.mealHistory||{})[dateStr];
      return microTotalsFor(snap||{});
    };
    // Quanti alimenti del database hanno almeno un valore di micronutriente —
    // indicatore di avanzamento del popolamento dati, utile in fase di sviluppo.
    window.microDbCoverage=function(){
      const withData=DB.filter(f=>MICRO_DEFS.some(m=>typeof f[m.key]==='number')).length;
      return {withData,total:DB.length};
    };

    /* ────────────────────────────────────────
       3. PUNTO D'INGRESSO — voce nel menu ALTRO
       ──────────────────────────────────────── */
    const _origShowMoreMenu16=window.showMoreMenu;
    window.showMoreMenu=function(fromBack){
      _origShowMoreMenu16(fromBack);
      const grid=document.querySelector('#screen .meal-grid');
      if(!grid)return;
      grid.insertAdjacentHTML('beforeend',`
        <div class="meal-btn exe" onclick="snd();navPush(showMicronutrienti)" style="padding:16px 12px 14px;gap:6px">
          <div class="meal-ico" style="font-size:28px">🧬</div>
          <div class="meal-lbl" style="font-size:10px;font-weight:700">Micronutrienti</div>
          <div class="meal-n" style="font-size:9px;opacity:.7;line-height:1.3;text-align:center">Vitamine & minerali</div>
        </div>`);
    };

    /* ────────────────────────────────────────
       4. DASHBOARD
       ──────────────────────────────────────── */
    window.showMicronutrienti=function(fb){
      resetScreen();setHdr('🧬 MICRONUTRIENTI','Vitamine & minerali — oggi',true);
      const scr=document.getElementById('screen');
      const {sums,coveredGrams,totalGrams}=getMicroToday();
      const cov=microDbCoverage();

      let html=`<div style="padding:12px 16px 4px">
        <div class="card" style="margin:0 0 10px">
          <div class="card-body" style="font-size:11px;line-height:1.7;color:var(--ink2)">
            Valori di riferimento (NRV) UE standard per adulti — informativi, non calibrati sul singolo profilo e non sostituiscono il parere di un medico o nutrizionista.
          </div>
        </div>
      </div>`;

      if(totalGrams===0){
        html+=`<div style="padding:30px 24px;text-align:center;color:var(--ink3)">
          <div style="font-size:32px;margin-bottom:8px">🍽️</div>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;line-height:1.8">
            Non hai ancora registrato pasti oggi.<br>Aggiungi alimenti per vedere qui l'apporto di vitamine e minerali.
          </div>
        </div>`;
      }else{
        const anyDataToday=MICRO_DEFS.some(m=>coveredGrams[m.key]>0);
        if(!anyDataToday){
          html+=`<div style="padding:20px 20px 4px;text-align:center;color:var(--ink3)">
            <div style="font-size:28px;margin-bottom:6px">🧪</div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;line-height:1.8">
              Nessuno degli alimenti registrati oggi ha ancora dati su vitamine/minerali nel database.<br>
              I dati vengono aggiunti progressivamente — questa sezione si popolerà da sola.
            </div>
          </div>`;
        }else{
          html+=`<div style="padding:0 16px">`;
          MICRO_DEFS.forEach(m=>{
            const covered=coveredGrams[m.key];
            if(covered===0){
              html+=`<div style="margin-bottom:10px;padding:8px 10px;background:var(--card);border:1.5px dashed #e8e3d8;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
                <span style="font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:700;color:var(--ink3)">${m.emoji} ${m.label}</span>
                <span style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3);text-transform:uppercase">N/D</span>
              </div>`;
            }else{
              const val=+(sums[m.key].toFixed(1));
              const partial=covered<totalGrams;
              const lbl=`${m.emoji} ${m.label} <span style="opacity:.6;font-weight:400">${m.unit}${partial?' · parziale':''}</span>`;
              html+=mBar(lbl, val, m.nrv, '#7c3aed');
            }
          });
          html+=`</div>`;
        }
      }

      html+=`<div style="padding:16px 16px 24px;text-align:center;font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3)">
        📊 Database: ${cov.withData}/${cov.total} alimenti con dati vitamine/minerali
      </div>`;

      scr.className='screen anim-in';
      scr.innerHTML=html;
    };

    console.log('%c[Corpora Fase 16] ✅ Micronutrienti — motore + dashboard (NRV UE), copertura dati onesta, in attesa di popolamento valori per alimento','color:#7c3aed;font-weight:bold;font-size:11px');

  });
})();
