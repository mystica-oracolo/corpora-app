/* ═══════════════════════════════════════════════════════════════
   FASE 13 — CORPORA — "LA MIA SCHEDA" (vista settimanale rapida)

   Si affianca al catalogo SCHEDE_DB esistente (Full Body/PPL/ecc.),
   non lo sostituisce. Obiettivo: una vista quotidiana pulita —
   7 giorni, riquadri con parte del corpo/reps/peso/tempo, editabile
   al volo — pensata per essere aperta e letta in 2 secondi in
   palestra, non per essere "esplorata" come il catalogo.

   Riempimento: può partire vuota (compilazione manuale) oppure
   importare i giorni di un programma da SCHEDE_DB, distribuendoli
   sui giorni della settimana in base alla frequenza — poi tutto
   resta liberamente modificabile.

   Dati: S.miaScheda = {Lun:[blocco,...], Mar:[...], ... Dom:[...]}
   blocco = {id, parte, esercizio, reps, peso, tempo, done}

   Pattern coerente con le fasi precedenti: nessuna modifica ad
   app.js, solo estensione via whenReady() + window.* e wrap non
   invasivo di showSchede per aggiungere il punto d'ingresso.
   ═══════════════════════════════════════════════════════════════ */
(function CorporaFase13(){

  const GIORNI=['Lun','Mar','Mer','Gio','Ven','Sab','Dom'];
  const GIORNI_LABEL={Lun:'Lunedì',Mar:'Martedì',Mer:'Mercoledì',Gio:'Giovedì',Ven:'Venerdì',Sab:'Sabato',Dom:'Domenica'};

  function whenReady(fn){
    if(typeof S!=='undefined'&&typeof saveState==='function'&&typeof showToast==='function'
       &&typeof MUSCLE_GROUPS!=='undefined'&&typeof SCHEDE_DB!=='undefined'&&typeof showSchede==='function'){
      fn();
    }else{
      setTimeout(()=>whenReady(fn),120);
    }
  }

  whenReady(function(){

    if(!S.miaScheda)S.miaScheda={};
    GIORNI.forEach(g=>{if(!S.miaScheda[g])S.miaScheda[g]=[];});

    function uid(){return 'b'+Date.now().toString(36)+Math.random().toString(36).slice(2,7);}
    function muscleInfo(nome){return MUSCLE_GROUPS.find(m=>m.name===nome)||{name:nome,emoji:'🏋️',color:'#555',bg:'#f2f2f2',border:'#ddd'};}

    /* ────────────────────────────────────────
       1. PUNTO D'INGRESSO — banner sopra il catalogo esistente
       ──────────────────────────────────────── */
    const _origShowSchede=window.showSchede;
    window.showSchede=function(fb){
      _origShowSchede(fb);
      const scr=document.getElementById('screen');
      const banner=document.createElement('div');
      banner.style.cssText='margin:12px 16px;padding:14px 16px;background:var(--ink,#1a1a2e);color:#fff;border-radius:var(--rk,10px);cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:10px';
      banner.innerHTML=`<div>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:700">📋 LA MIA SCHEDA</div>
          <div style="font-size:11px;opacity:.7;margin-top:2px">Vista settimanale rapida — pulita, a portata di mano</div>
        </div><div style="font-size:20px;opacity:.8">›</div>`;
      banner.onclick=()=>{snd();navPush(showMiaScheda);};
      scr.insertBefore(banner, scr.firstChild.nextSibling||null);
    };

    /* ────────────────────────────────────────
       2. VISTA SETTIMANALE
       ──────────────────────────────────────── */
    window.showMiaScheda=function(fb){
      resetScreen();setHdr('LA MIA SCHEDA','SETTIMANA',true);
      const totBlocchi=GIORNI.reduce((a,g)=>a+S.miaScheda[g].length,0);
      let html=`<div style="padding:12px 16px 4px;display:flex;gap:8px">
        <button class="big-btn outline" style="margin:0;flex:1;font-size:11px" onclick="snd();openImportProgram()">📥 IMPORTA DA PROGRAMMA</button>
      </div>`;
      if(totBlocchi===0){
        html+=`<div style="padding:30px 24px;text-align:center;color:var(--ink3)">
          <div style="font-size:32px;margin-bottom:8px">🗓️</div>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;line-height:1.8">
            Scheda vuota.<br>Importa un programma esistente o aggiungi un esercizio a un giorno qui sotto.
          </div>
        </div>`;
      }
      GIORNI.forEach(g=>{
        const blocchi=S.miaScheda[g];
        html+=`<div class="card" style="margin:10px 16px">
          <div class="card-hdr" style="display:flex;justify-content:space-between;align-items:center">
            <span>${GIORNI_LABEL[g]}</span>
            <button onclick="snd();openEditBlocco(null,'${g}')" style="background:none;border:none;color:inherit;font-size:18px;cursor:pointer;padding:0 4px">＋</button>
          </div>
          <div class="card-body" style="padding:${blocchi.length?'10px':'14px'}">
            ${blocchi.length===0?`<div style="font-size:11px;color:var(--ink3);text-align:center;padding:6px 0">Giorno di riposo</div>`:
              blocchi.map((b,i)=>renderBlocco(b,g,i)).join('')}
          </div>
        </div>`;
      });
      document.getElementById('screen').innerHTML=html;
    };

    function renderBlocco(b,g,i){
      const m=muscleInfo(b.parte);
      return `<div style="display:flex;align-items:center;gap:10px;padding:9px 8px;margin-bottom:6px;background:${m.bg};border:1.5px solid ${m.border};border-radius:8px;${b.done?'opacity:.55':''}" onclick="event.stopPropagation();toggleBlocco('${g}',${i})">
        <div style="font-size:20px;flex-shrink:0">${m.emoji}</div>
        <div style="flex:1;min-width:0">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;color:${m.color};${b.done?'text-decoration:line-through':''}">${b.esercizio||b.parte}</div>
          <div style="font-size:10.5px;color:var(--ink3);margin-top:2px">
            ${b.reps?`🔁 ${b.reps}`:''}${b.peso?`  ·  🏋️ ${b.peso}kg`:''}${b.tempo?`  ·  ⏱ ${b.tempo}`:''}
          </div>
        </div>
        <button onclick="event.stopPropagation();snd();openEditBlocco(${i},'${g}')" style="background:none;border:none;font-size:15px;cursor:pointer;padding:4px;flex-shrink:0">✏️</button>
      </div>`;
    }

    window.toggleBlocco=function(g,i){
      const b=S.miaScheda[g][i];if(!b)return;
      b.done=!b.done;saveState();showMiaScheda();
    };

    /* ────────────────────────────────────────
       3. AGGIUNTA / MODIFICA BLOCCO
       ──────────────────────────────────────── */
    window.openEditBlocco=function(idx,giorno){
      const isNew=idx===null||idx===undefined;
      const b=isNew?{id:uid(),parte:MUSCLE_GROUPS[0].name,esercizio:'',reps:'',peso:'',tempo:''}:S.miaScheda[giorno][idx];
      const giornoOpts=GIORNI.map(g=>`<option value="${g}" ${g===giorno?'selected':''}>${GIORNI_LABEL[g]}</option>`).join('');
      const parteOpts=MUSCLE_GROUPS.map(m=>`<option value="${m.name}" ${m.name===b.parte?'selected':''}>${m.emoji} ${m.name}</option>`).join('');
      document.getElementById('modal-box').innerHTML=`
        <div class="modal-handle"></div>
        <div class="modal-title">${isNew?'➕ Nuovo esercizio':'✏️ Modifica esercizio'}</div>
        <div style="padding:4px 16px 0">
          <label style="font-size:10px;color:var(--ink3);font-family:'IBM Plex Mono',monospace">GIORNO</label>
          <select id="mb-giorno" class="gram-inp" style="width:100%;margin-bottom:10px">${giornoOpts}</select>

          <label style="font-size:10px;color:var(--ink3);font-family:'IBM Plex Mono',monospace">PARTE DEL CORPO</label>
          <select id="mb-parte" class="gram-inp" style="width:100%;margin-bottom:10px">${parteOpts}</select>

          <label style="font-size:10px;color:var(--ink3);font-family:'IBM Plex Mono',monospace">ESERCIZIO (opzionale)</label>
          <input id="mb-esercizio" class="gram-inp" style="width:100%;margin-bottom:10px" placeholder="es. Squat, Panca piana…" value="${(b.esercizio||'').replace(/"/g,'&quot;')}">

          <div style="display:flex;gap:8px;margin-bottom:10px">
            <div style="flex:1"><label style="font-size:10px;color:var(--ink3);font-family:'IBM Plex Mono',monospace">RIPETIZIONI</label>
              <input id="mb-reps" class="gram-inp" style="width:100%" placeholder="es. 4×12" value="${(b.reps||'').replace(/"/g,'&quot;')}"></div>
            <div style="flex:1"><label style="font-size:10px;color:var(--ink3);font-family:'IBM Plex Mono',monospace">PESO (kg)</label>
              <input id="mb-peso" class="gram-inp" type="number" inputmode="decimal" style="width:100%" value="${b.peso||''}"></div>
          </div>

          <label style="font-size:10px;color:var(--ink3);font-family:'IBM Plex Mono',monospace">TEMPO</label>
          <input id="mb-tempo" class="gram-inp" style="width:100%;margin-bottom:14px" placeholder="es. 45s riposo, 20min" value="${(b.tempo||'').replace(/"/g,'&quot;')}">
        </div>
        <div style="display:flex;gap:8px;padding:0 16px 16px">
          ${!isNew?`<button class="big-btn outline" style="margin:0;flex:1;color:var(--red);border-color:var(--red)" onclick="snd();deleteBlocco('${giorno}',${idx})">🗑 Elimina</button>`:''}
          <button class="big-btn success" style="margin:0;flex:2" onclick="snd('confirm');saveBlocco('${b.id}','${giorno}',${isNew?'null':idx})">💾 Salva</button>
        </div>`;
      document.getElementById('modal').classList.add('open');
    };

    window.saveBlocco=function(id,giornoOriginale,idx){
      const nuovoGiorno=document.getElementById('mb-giorno').value;
      const blocco={
        id,
        parte:document.getElementById('mb-parte').value,
        esercizio:document.getElementById('mb-esercizio').value.trim(),
        reps:document.getElementById('mb-reps').value.trim(),
        peso:document.getElementById('mb-peso').value.trim(),
        tempo:document.getElementById('mb-tempo').value.trim(),
        done:false
      };
      if(idx===null){
        S.miaScheda[nuovoGiorno].push(blocco);
      }else{
        S.miaScheda[giornoOriginale].splice(idx,1);
        S.miaScheda[nuovoGiorno].push(blocco);
      }
      saveState();closeModal();showToast('✅ Salvato');showMiaScheda();
    };

    window.deleteBlocco=function(giorno,idx){
      S.miaScheda[giorno].splice(idx,1);
      saveState();closeModal();showToast('🗑 Rimosso');showMiaScheda();
    };

    /* ────────────────────────────────────────
       4. IMPORTA DA UN PROGRAMMA ESISTENTE
       Distribuisce i giorni del programma sui giorni della
       settimana in base alla frequenza, poi tutto è modificabile.
       ──────────────────────────────────────── */
    const PATTERN_FREQ={
      1:['Lun'],2:['Lun','Gio'],3:['Lun','Mer','Ven'],
      4:['Lun','Mar','Gio','Ven'],5:['Lun','Mar','Mer','Gio','Ven'],
      6:['Lun','Mar','Mer','Gio','Ven','Sab'],7:GIORNI
    };

    window.openImportProgram=function(){
      document.getElementById('modal-box').innerHTML=`
        <div class="modal-handle"></div>
        <div class="modal-title">📥 Importa da un programma</div>
        <div class="modal-sub">I giorni verranno distribuiti sulla settimana in base alla frequenza. Sostituisce la scheda attuale.</div>
        <div style="padding:8px 16px 16px">
          ${SCHEDE_DB.map(s=>`<button class="big-btn outline" style="margin:0 0 8px;text-align:left" onclick="snd('confirm');importProgram(${s.id})">${s.emoji} ${s.name} <span style="opacity:.6;font-size:10px">(${s.freq}×/sett.)</span></button>`).join('')}
        </div>`;
      document.getElementById('modal').classList.add('open');
    };

    window.importProgram=function(schedaId){
      const s=SCHEDE_DB.find(x=>x.id===schedaId);if(!s)return;
      const pattern=PATTERN_FREQ[Math.min(7,s.freq)]||PATTERN_FREQ[3];

      // reset pulito prima di importare
      GIORNI.forEach(g=>{S.miaScheda[g]=[];});

      pattern.forEach((giorno,i)=>{
        const day=s.days[i % s.days.length];
        day.exs.forEach(e=>{
          const ex=(typeof EXDB!=='undefined')?EXDB.find(x=>x.id===e.id):null;
          S.miaScheda[giorno].push({
            id:uid(),
            parte:ex?ex.muscle:'Altro',
            esercizio:ex?ex.name:('Esercizio #'+e.id),
            reps:e.reps||'',
            peso:'',
            tempo:e.rest||'',
            done:false
          });
        });
      });

      saveState();closeModal();showToast('✅ '+s.name+' importato');showMiaScheda();
    };

  });

})();
