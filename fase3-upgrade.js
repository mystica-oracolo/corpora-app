/* ═══════════════════════════════════════════════════════════════
   NUTRITRACK PRO — UPGRADE INTEGRATO (Claude Edition v2)
   Fix: banner sincrono · badge carico inline · storico accessibile
   ═══════════════════════════════════════════════════════════════ */
(function NutriTrackPRO(){

  function whenReady(fn){
    if(typeof S!=='undefined'&&typeof saveState==='function'&&typeof showToast==='function'){
      fn();
    }else{
      setTimeout(()=>whenReady(fn),120);
    }
  }

  whenReady(function(){

    /* ════════════════════════════════════════════
       1. PROGRESSIVE OVERLOAD — TRACKING CARICHI
       ════════════════════════════════════════════ */

    function ensureExLog(){
      if(!S.exerciseLog)S.exerciseLog={};
    }
    window.ensureExLog=ensureExLog; // FIX: usata da getVolumeTrend() in CorporaFase2 — causava ReferenceError in Analytics premium

    function getLastSession(name){
      ensureExLog();
      const log=(S.exerciseLog[name]||[]).filter(e=>e.date<TODAY);
      return log.length?log[log.length-1]:null;
    }

    function saveExSession(name,sets,reps,load){
      ensureExLog();
      if(!S.exerciseLog[name])S.exerciseLog[name]=[];
      S.exerciseLog[name]=S.exerciseLog[name].filter(e=>e.date!==TODAY);
      S.exerciseLog[name].push({date:TODAY,sets:+sets||0,reps:+reps||0,load:+load||0});
      if(S.exerciseLog[name].length>60)S.exerciseLog[name]=S.exerciseLog[name].slice(-60);
    }

    function overloadTag(prev,curLoad,curReps){
      if(!prev||!prev.load)return '<span style="font-family:\'IBM Plex Mono\',monospace;font-size:9px;background:#f3f4f6;color:#6b7280;padding:2px 7px;border-radius:4px">PRIMA VOLTA</span>';
      if(+curLoad>+prev.load) return '<span style="font-family:\'IBM Plex Mono\',monospace;font-size:9px;background:#dcfce7;color:#16a34a;padding:2px 7px;border-radius:4px;font-weight:700">↑ PESO</span>';
      if(+curReps>+prev.reps&&+curLoad>=+prev.load) return '<span style="font-family:\'IBM Plex Mono\',monospace;font-size:9px;background:#eff6ff;color:#2563eb;padding:2px 7px;border-radius:4px;font-weight:700">↑ REPS</span>';
      return '<span style="font-family:\'IBM Plex Mono\',monospace;font-size:9px;background:#fef3c7;color:#92400e;padding:2px 7px;border-radius:4px">STABILE</span>';
    }

    function overloadTagText(prev,curLoad,curReps){
      return overloadTag(prev,curLoad,curReps).replace(/<[^>]+>/g,'').trim();
    }

    function lastSessionLine(name){
      const prev=getLastSession(name);
      if(!prev)return '';
      const parts=[];
      if(prev.load)parts.push(prev.load+'kg');
      if(prev.sets)parts.push(prev.sets+'×');
      if(prev.reps)parts.push(prev.reps+' reps');
      return`<div style="background:#f0fdf4;border:1px solid #86efac;border-radius:6px;padding:6px 10px;margin-bottom:10px;font-family:'IBM Plex Mono',monospace;font-size:10px;color:#166534">
        💾 ULTIMA SESSIONE (${prev.date.slice(5).replace('-','/')}): ${parts.join(' · ')||'—'}
      </div>`;
    }

    /* ── Override addWoModal — campo CARICO KG ── */
    window.addWoModal=function(){
      const pw=S.profile.entries&&S.profile.entries.length?S.profile.entries[S.profile.entries.length-1].peso||'':'';
      document.getElementById('modal-box').innerHTML=`
        <div class="modal-handle"></div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:700;margin-bottom:14px;text-transform:uppercase">Nuovo Allenamento</div>
        <div style="margin-bottom:10px">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">SPORT / TIPO *</div>
          <select class="meal-sel" id="wtp" style="width:100%;margin-bottom:8px" onchange="updWoBurn()">${WT.filter(t=>t!=='Tutti').map(t=>`<option value="${t}">${WI[t]||''} ${t}</option>`).join('')}</select>
        </div>
        <div style="margin-bottom:10px">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">NOME (opzionale)</div>
          <input class="gram-inp" id="wn" placeholder="es. Squat 5×5" style="width:100%;text-align:left;font-size:14px">
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
          <div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">DURATA (MIN) *</div>
            <input class="gram-inp" id="wdur" type="number" inputmode="decimal" style="width:100%;text-align:left;font-size:14px;padding:10px 12px" oninput="updWoBurn()" placeholder="45">
          </div>
          <div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">PESO CORPO KG</div>
            <input class="gram-inp" id="wwkg" type="number" inputmode="decimal" style="width:100%;text-align:left;font-size:14px;padding:10px 12px" value="${pw}" placeholder="70" oninput="updWoBurn()">
          </div>
        </div>
        <div id="wo-burn-prev" style="background:#fef3c7;border:1px solid #d97706;border-radius:var(--r);padding:10px 12px;font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;color:#92400e;margin-bottom:10px;text-align:center;display:none"></div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:10px">
          <div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">SERIE</div>
            <input class="gram-inp" id="ws" type="number" inputmode="decimal" style="width:100%;text-align:left;font-size:14px;padding:10px 12px" oninput="updWoBurn()">
          </div>
          <div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">N. RIPETIZ.</div>
            <input class="gram-inp" id="wr" type="number" inputmode="decimal" style="width:100%;text-align:left;font-size:14px;padding:10px 12px" oninput="updWoBurn()">
          </div>
          <div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">CARICO KG</div>
            <input class="gram-inp" id="wload" type="number" inputmode="decimal" style="width:100%;text-align:left;font-size:14px;padding:10px 12px" placeholder="0" oninput="updWoBurn()">
          </div>
        </div>
        <div style="margin-bottom:10px">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">NOTE</div>
          <textarea id="wno" style="height:50px" placeholder="Carico usato, sensazioni..."></textarea>
        </div>
        <button class="conf-btn" onclick="snd('confirm');saveWo()">✓ SALVA ALLENAMENTO</button>`;
      document.getElementById('modal').classList.add('open');
      setTimeout(()=>updWoBurn(),100);
    };

    /* ── Override saveWo — salva load in exerciseLog ── */
    window.saveWo=function(){
      const type=document.getElementById('wtp').value;
      const dur=document.getElementById('wdur').value;
      const sets=document.getElementById('ws').value||'';
      const reps=document.getElementById('wr').value||'';
      const load=document.getElementById('wload').value||'';
      const isStrength=(type==='Forza'||type==='Stretching'||type==='Pilates'||type==='Yoga');
      // Durata obbligatoria solo se non pesistica con serie/ripetizioni
      if(!dur&&!(isStrength&&sets&&reps)){showToast('⚠ Inserisci la durata o le serie/ripetizioni','red');return;}
      const kg=parseFloat(document.getElementById('wwkg').value)||null;
      const burned=calcBurnedKcal(type,dur,kg,sets,reps,load);
      const nameFld=(document.getElementById('wn').value||'').trim();
      const wo={name:nameFld||type,type,duration:dur,burned,sets,reps,load,notes:document.getElementById('wno').value};
      if(!S.workouts[_wd])S.workouts[_wd]=[];
      S.workouts[_wd].push(wo);
      let toastSuffix='';
      if(nameFld&&(load||reps)){
        const prev=getLastSession(nameFld);
        saveExSession(nameFld,sets,reps,load);
        toastSuffix=' — '+overloadTagText(prev,load,reps);
      }
      saveState();closeModal();
      showToast('✅ '+wo.name+toastSuffix,'green');
      renderWo();
    };

    /* ── Override addEsercizioToWorkout — carico + ultima sessione ── */
    window.addEsercizioToWorkout=function(exId){
      const ex=EXDB.find(e=>e.id===exId);
      if(!ex)return;
      const setsDefault=ex.sets.includes('-')?ex.sets.split('-')[0]:ex.sets.replace(/[^0-9]/g,'')||'3';
      const repsDefault=ex.reps.split('×').pop().split('-')[0].replace(/[^0-9]/g,'')||'10';
      const prev=getLastSession(ex.name);
      const lastLine=lastSessionLine(ex.name);
      const loadDefault=prev&&prev.load?prev.load:'';
      document.getElementById('modal-box').innerHTML=`
        <div class="modal-handle"></div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:700;margin-bottom:4px">${ex.emoji} ${ex.name}</div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3);margin-bottom:10px">${ex.muscle} · ${ex.equip}</div>
        ${lastLine}
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:10px">
          <div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">SERIE</div>
            <input class="gram-inp" id="ex-sets" type="number" inputmode="numeric" value="${setsDefault}" style="width:100%;text-align:center;padding:10px">
          </div>
          <div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">N. RIPETIZ.</div>
            <input class="gram-inp" id="ex-reps" type="number" inputmode="numeric" value="${repsDefault}" style="width:100%;text-align:center;padding:10px">
          </div>
          <div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">CARICO KG</div>
            <input class="gram-inp" id="ex-load" type="number" inputmode="decimal" value="${loadDefault}" style="width:100%;text-align:center;padding:10px" placeholder="0">
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
          <div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">DURATA (MIN)</div>
            <input class="gram-inp" id="ex-dur" type="number" inputmode="numeric" value="45" style="width:100%;text-align:center;padding:10px" oninput="updWoBurnEx()">
          </div>
          <div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">PESO CORPO KG</div>
            <input class="gram-inp" id="ex-kg" type="number" inputmode="decimal" value="${S.profile.entries?.slice(-1)[0]?.peso||70}" style="width:100%;text-align:center;padding:10px" oninput="updWoBurnEx()">
          </div>
        </div>
        <div id="ex-burn-prev" style="background:#fef3c7;border:1px solid #d97706;border-radius:var(--r);padding:8px 12px;font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:700;color:#92400e;margin-bottom:10px;text-align:center"></div>
        <div style="margin-bottom:10px">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">NOTE</div>
          <textarea id="ex-note" style="height:50px" placeholder="Carico usato, sensazioni..."></textarea>
        </div>
        <button class="conf-btn green-btn" onclick="snd('confirm');confirmAddEsercizio(${exId})">✓ AGGIUNGI AL DIARIO</button>`;
      document.getElementById('modal').classList.add('open');
      setTimeout(()=>{
        const kg=parseFloat(document.getElementById('ex-kg').value)||70;
        const dur=parseFloat(document.getElementById('ex-dur').value)||45;
        document.getElementById('ex-burn-prev').textContent=`🔥 Stima: ${calcBurnedKcal('Forza',dur,kg)} kcal bruciate`;
      },50);
    };

    /* ── Override confirmAddEsercizio — salva log + badge ── */
    window.confirmAddEsercizio=function(exId){
      const ex=EXDB.find(e=>e.id===exId);if(!ex)return;
      const dur=document.getElementById('ex-dur').value||'45';
      const kg=parseFloat(document.getElementById('ex-kg').value)||null;
      const burned=calcBurnedKcal('Forza',dur,kg);
      const sets=document.getElementById('ex-sets').value||'';
      const reps=document.getElementById('ex-reps').value||'';
      const load=document.getElementById('ex-load').value||'';
      const note=document.getElementById('ex-note').value;
      const wo={name:ex.name,type:'Forza',duration:dur,burned,sets,reps,load,notes:note+(note?' · ':'')+`[${ex.muscle}]`};
      if(!S.workouts[TODAY])S.workouts[TODAY]=[];
      S.workouts[TODAY].push(wo);
      const prev=getLastSession(ex.name);
      saveExSession(ex.name,sets,reps,load);
      saveState();closeModal();
      showToast('✅ '+ex.name+' — '+overloadTagText(prev,load,reps),'green');
    };

    /* ════════════════════════════════════════════════════════
       2. RENDERWO — OVERRIDE COMPLETO
       Load badge inline nel HTML (non post-DOM) + quick button
       storico carichi. Indice reale usato per rmWo e badge.
       ════════════════════════════════════════════════════════ */

    window.renderWo=function(){
      const wos=(S.workouts[_wd]||[]);
      const filtered=_wt==='Tutti'?wos:wos.filter(w=>w.type===_wt);
      // Map filtered back to real indices in wos (needed for rmWo)
      const filteredWithIdx=filtered.map(w=>({w,realIdx:wos.indexOf(w)}));

      const totBurned=wos.reduce((a,w)=>a+calcBurnedKcal(w.type,w.duration,null,w.sets,w.reps,w.load),0);
      const totMin=wos.reduce((a,w)=>a+(parseFloat(w.duration)||0),0);

      let html=`
      <div style="background:var(--ink);color:#fff;padding:14px 16px 12px">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:10px">
          <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#f87171,#dc2626);display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0">🏋️</div>
          <div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:24px;font-weight:700">🔥 ${totBurned} <span style="font-size:12px;font-weight:400;opacity:.5">kcal</span></div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;opacity:.45;margin-top:2px">${wos.length} allenamenti · ${totMin} minuti totali</div>
          </div>
        </div>
        <button onclick="snd();addWoModal()" style="width:100%;padding:12px;background:var(--green);border:none;border-radius:10px;font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;color:#fff;letter-spacing:.8px;cursor:pointer;text-transform:uppercase">+ Aggiungi Allenamento</button>
      </div>
      <div style="padding:8px 12px 4px;font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;letter-spacing:1.5px;color:var(--ink3);background:var(--paper);text-transform:uppercase">Strumenti Palestra</div>
      <div class="wo-quick-grid">
        <div class="wo-quick-btn" onclick="snd();navPush(showLibreriaEsercizi)"><div class="wo-quick-ico-wrap" style="background:linear-gradient(135deg,#f87171,#dc2626)">💪</div><div class="wo-quick-lbl">Libreria<br>Esercizi</div></div>
        <div class="wo-quick-btn" onclick="snd();navPush(showSchede)"><div class="wo-quick-ico-wrap" style="background:linear-gradient(135deg,#60a5fa,#2563eb)">📋</div><div class="wo-quick-lbl">Schede<br>Allenamento</div></div>
        <div class="wo-quick-btn" onclick="snd();navPush(showMuscleGroups)"><div class="wo-quick-ico-wrap" style="background:linear-gradient(135deg,#c084fc,#7c3aed)">🫀</div><div class="wo-quick-lbl">Muscoli<br>&amp; Anatomia</div></div>
        <div class="wo-quick-btn" onclick="snd();navPush(showWorkoutStorico)"><div class="wo-quick-ico-wrap" style="background:linear-gradient(135deg,#94a3b8,#1a1a2e)">📜</div><div class="wo-quick-lbl">Storico<br>Workout</div></div>
        <div class="wo-quick-btn" onclick="snd();showStoricoCarichiMenu()"><div class="wo-quick-ico-wrap" style="background:linear-gradient(135deg,#34d399,#16a34a)">📈</div><div class="wo-quick-lbl">Storico<br>Carichi</div></div>
      </div>
      <div style="padding:8px 14px 4px;font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;letter-spacing:1.5px;color:var(--ink3);background:var(--paper);border-top:1px solid #ede8dc;text-transform:uppercase">Allenamenti di Oggi — ${new Date().toLocaleDateString('it-IT',{weekday:'long',day:'numeric',month:'short'})}</div>`;

      if(!filteredWithIdx.length){
        html+=`<div class="empty"><div class="empty-ico">🏋️</div><div class="empty-txt">NESSUN ALLENAMENTO<br>REGISTRATO</div></div>`;
      }else{
        filteredWithIdx.forEach(({w,realIdx})=>{
          const burned=calcBurnedKcal(w.type,w.duration,null,w.sets,w.reps,w.load);
          // Controlla se ha storico carichi per questo esercizio
          const hasHist=S.exerciseLog&&S.exerciseLog[w.name]&&S.exerciseLog[w.name].length>1;
          html+=`<div class="wo-card">
            <div class="wo-card-hdr">
              <span class="wo-card-nm">${WI[w.type]||'🏅'} ${w.name}</span>
              <div style="display:flex;align-items:center;gap:8px">
                <span class="wo-card-tp">${w.type}</span>
                <button class="wo-del" onclick="snd('delete');rmWo(${realIdx})">✕</button>
              </div>
            </div>
            <div class="wo-card-body">
              ${w.duration?`<div class="wo-badge">⏱ ${w.duration} min</div>`:''}
              ${burned?`<div class="wo-badge" style="background:#fef3c7;border-color:#d97706;color:#92400e">🔥 ${burned} kcal</div>`:''}
              ${w.load?`<div class="wo-badge" style="background:#f0fdf4;border-color:#86efac;color:#16a34a;font-weight:700">🏋️ ${w.load} kg</div>`:''}
              ${w.sets?`<div class="wo-badge">📋 ${w.sets} serie</div>`:''}
              ${w.reps?`<div class="wo-badge">🔁 ${w.reps} rip.</div>`:''}
              ${w.sets?`<button class="wo-badge" style="background:var(--ink);color:#fff;border-color:var(--ink);cursor:pointer;margin-left:auto" onclick="snd();startRestTimer(90,'${w.name.replace(/'/g,'')}')">⏱ RECUPERO</button>`:''}
              ${hasHist?`<button class="wo-badge" style="background:#eff6ff;border-color:#93c5fd;color:#1d4ed8;cursor:pointer" onclick="snd();showStoricoCarichiEx('${w.name.replace(/'/g,'')}')">📈 storico</button>`:''}
              ${w.notes?`<div style="width:100%;font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--ink3);padding-top:4px">📝 ${w.notes}</div>`:''}
            </div>
          </div>`;
        });
      }
      document.getElementById('screen').innerHTML=html;
      fabShow('workout');
    };

    /* ════════════════════════════════════════════
       3. STORICO CARICHI — ACCESSIBILE DAL MENU
       showStoricoCarichiMenu: lista esercizi con log
       showStoricoCarichiEx: dettaglio per esercizio
       ════════════════════════════════════════════ */

    window.showStoricoCarichiMenu=function(){
      ensureExLog();
      const keys=Object.keys(S.exerciseLog).filter(k=>S.exerciseLog[k].length>0).sort();
      if(!keys.length){
        showToast('Nessun esercizio tracciato ancora — aggiungi carichi!');
        return;
      }
      document.getElementById('modal-box').innerHTML=`
        <div class="modal-handle"></div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:700;margin-bottom:14px">📈 STORICO CARICHI</div>
        <div style="max-height:65vh;overflow-y:auto">
          ${keys.map(k=>{
            const log=S.exerciseLog[k];
            const last=log[log.length-1];
            const prev=log.length>1?log[log.length-2]:null;
            const badge=prev?overloadTag(prev,last.load,last.reps):'';
            return`<div onclick="snd();closeModal();setTimeout(()=>showStoricoCarichiEx('${k.replace(/'/g,'')}'),80)" style="padding:10px 4px;border-bottom:1px solid #ede8dc;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:8px">
              <div style="flex:1;min-width:0">
                <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${k}</div>
                <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3);margin-top:2px">${log.length} sessioni · ultima ${last.date.slice(5).replace('-','/')}</div>
              </div>
              <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
                ${last.load?`<span style="font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:700;color:#16a34a">${last.load}kg</span>`:''}
                ${badge}
              </div>
            </div>`;
          }).join('')}
        </div>
        <button class="conf-btn" onclick="closeModal()" style="margin-top:12px">✓ CHIUDI</button>`;
      document.getElementById('modal').classList.add('open');
    };

    window.showStoricoCarichiEx=function(exName){
      ensureExLog();
      const log=(S.exerciseLog[exName]||[]).slice().reverse();
      if(!log.length){showToast('Nessuno storico per '+exName);return;}
      document.getElementById('modal-box').innerHTML=`
        <div class="modal-handle"></div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;margin-bottom:14px">${exName}</div>
        <div style="max-height:60vh;overflow-y:auto">
          ${log.map((e,i)=>{
            const next=log[i+1]; // "next" in reverse = previous in time
            const badge=next?overloadTag(next,e.load,e.reps):'';
            return`<div style="padding:9px 0;border-bottom:1px solid #ede8dc;display:flex;align-items:center;justify-content:space-between">
              <div>
                <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:700">${e.date.slice(5).replace('-','/')}</div>
                <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--ink3)">${e.sets?e.sets+'×':''} ${e.reps?e.reps+' reps':''} ${e.load?'· '+e.load+'kg':''}</div>
              </div>
              ${badge}
            </div>`;
          }).join('')}
        </div>
        <div style="display:flex;gap:8px;margin-top:12px">
          <button class="conf-btn" style="flex:1" onclick="closeModal();setTimeout(()=>showStoricoCarichiMenu(),80)">← LISTA</button>
          <button class="conf-btn green-btn" style="flex:1" onclick="closeModal()">✓ CHIUDI</button>
        </div>`;
      document.getElementById('modal').classList.add('open');
    };

    /* Aggiunge bottone "📈 Storico" nella pagina dettaglio esercizio */
    const _origShowEsercizio=window.showEsercizio;
    window.showEsercizio=function(id,fb){
      _origShowEsercizio(id,fb);
      // Aggancia dopo il render sincrono della pagina
      const ex=EXDB.find(e=>e.id===id);
      if(!ex)return;
      ensureExLog();
      const hasLog=S.exerciseLog[ex.name]&&S.exerciseLog[ex.name].length>0;
      if(!hasLog)return;
      // Trova la griglia dei bottoni (+ WORKOUT / RECUPERO) e aggiungi STORICO
      const scrEl=document.getElementById('screen');
      if(!scrEl)return;
      const btnGrid=scrEl.querySelector('[style*="grid-template-columns:1fr 1fr"]');
      if(!btnGrid)return;
      const histBtn=document.createElement('button');
      histBtn.className='big-btn outline';
      histBtn.style.cssText='margin:0;border-radius:var(--rk);grid-column:1/-1';
      histBtn.innerHTML=`📈 STORICO CARICHI (${S.exerciseLog[ex.name].length} sessioni)`;
      histBtn.onclick=()=>{ snd(); showStoricoCarichiEx(ex.name); };
      btnGrid.parentNode.insertBefore(histBtn,btnGrid.nextSibling);
    };

    /* ════════════════════════════════════════════
       4. MACRO TARGET g/kg — BANNER SINCRONO
       Nessun setTimeout: showHome setta innerHTML
       in modo sincrono, quindi injectMacroBanner
       può girare subito dopo senza race condition.
       ════════════════════════════════════════════ */

    function getProteinTarget(){
      const peso=S.profile.entries?.slice(-1)[0]?.peso;
      if(!peso)return null;
      const obj=S.profile.obiettivo||'mantenimento';
      const gKg=obj==='massa'?2.2:obj==='dimagrimento'?2.0:1.8;
      return{target:Math.round(peso*gKg),gKg,peso};
    }

    function getMacroTargets(){
      const peso=S.profile.entries?.slice(-1)[0]?.peso;
      const kcal=S.settings.kcal||2000;
      if(!peso)return null;
      const pt=getProteinTarget();
      const protKcal=pt.target*4;
      const fatG=Math.round(peso*0.9);
      const carbG=Math.max(0,Math.round((kcal-protKcal-fatG*9)/4));
      return{prot:pt.target,fat:fatG,carb:carbG,gKg:pt.gKg};
    }
    window.getProteinTarget=getProteinTarget; // FIX Fase 8: era locale a questa closure (NutriTrackPRO), mai raggiungibile da Fase 2/4/8
    window.getMacroTargets=getMacroTargets; // FIX Fase 8: idem

    function injectMacroBanner(){
      const old=document.getElementById('nt-macro-banner');
      if(old)old.remove();
      const pt=getProteinTarget();
      if(!pt)return;
      const scrEl=document.getElementById('screen');
      if(!scrEl)return;
      // Verifica che siamo nella home (cerca il ring kcal o il day strip)
      if(!scrEl.querySelector('.kcal-ring-wrap')&&!scrEl.querySelector('[id^="day-"]')&&!scrEl.innerHTML.includes('kcal-ring'))return;

      const tot=totDay();
      const mt=getMacroTargets();
      const pctP=Math.min(100,pt.target>0?Math.round(tot.p/pt.target*100):0);
      const pctC=mt&&mt.carb>0?Math.min(100,Math.round(tot.c/mt.carb*100)):0;
      const pctF=mt&&mt.fat>0?Math.min(100,Math.round(tot.f/mt.fat*100)):0;
      const colP=pctP>=100?'#16a34a':pctP>=70?'#d97706':'#dc2626';

      let msgProt='';
      if(pctP>=100) msgProt='<div style="font-family:\'IBM Plex Mono\',monospace;font-size:10px;color:#16a34a;font-weight:700;text-align:center;margin-top:8px;padding-top:8px;border-top:1px solid #e8e3d8">✅ TARGET PROTEINE RAGGIUNTO!</div>';
      else if(pctP>=70) msgProt=`<div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:#d97706;font-weight:700;text-align:center;margin-top:8px;padding-top:8px;border-top:1px solid #e8e3d8">💪 Mancano ${pt.target-Math.round(tot.p)}g di proteine</div>`;
      else msgProt=`<div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:#dc2626;font-weight:700;text-align:center;margin-top:8px;padding-top:8px;border-top:1px solid #e8e3d8">⚠ Target proteico basso — mancano ${pt.target-Math.round(tot.p)}g</div>`;

      const banner=document.createElement('div');
      banner.id='nt-macro-banner';
      banner.style.cssText='margin:10px 12px 0;border:1.5px solid #e8e3d8;border-radius:12px;background:var(--card);overflow:hidden';
      banner.innerHTML=`
        <div style="background:var(--ink);color:#fff;padding:8px 12px;display:flex;align-items:center;justify-content:space-between">
          <span style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;opacity:.6">TARGET MACRO</span>
          <span style="font-family:'IBM Plex Mono',monospace;font-size:9px;opacity:.4">${pt.gKg}g/kg · ${pt.peso}kg</span>
        </div>
        <div style="padding:10px 12px">
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;text-align:center">
            <div>
              <div style="font-family:'IBM Plex Mono',monospace;font-size:15px;font-weight:700;color:${colP}">${tot.p}g</div>
              <div style="font-family:'IBM Plex Mono',monospace;font-size:8px;color:var(--ink3)">/ ${pt.target}g PROT</div>
              <div style="height:3px;background:#e8e3d8;border-radius:2px;margin-top:3px;overflow:hidden"><div style="width:${pctP}%;height:100%;background:${colP};border-radius:2px"></div></div>
            </div>
            <div>
              <div style="font-family:'IBM Plex Mono',monospace;font-size:15px;font-weight:700;color:#d97706">${tot.c}g</div>
              <div style="font-family:'IBM Plex Mono',monospace;font-size:8px;color:var(--ink3)">/ ${mt?mt.carb:'—'}g CARB</div>
              <div style="height:3px;background:#e8e3d8;border-radius:2px;margin-top:3px;overflow:hidden"><div style="width:${pctC}%;height:100%;background:#d97706;border-radius:2px"></div></div>
            </div>
            <div>
              <div style="font-family:'IBM Plex Mono',monospace;font-size:15px;font-weight:700;color:#dc2626">${tot.f}g</div>
              <div style="font-family:'IBM Plex Mono',monospace;font-size:8px;color:var(--ink3)">/ ${mt?mt.fat:'—'}g GRAS</div>
              <div style="height:3px;background:#e8e3d8;border-radius:2px;margin-top:3px;overflow:hidden"><div style="width:${pctF}%;height:100%;background:#dc2626;border-radius:2px"></div></div>
            </div>
          </div>
          ${msgProt}
        </div>`;

      const firstCard=scrEl.querySelector('.card');
      if(firstCard)firstCard.parentNode.insertBefore(banner,firstCard);
      else scrEl.prepend(banner);
    }

    /* FIX: chiamata sincrona, zero setTimeout */
    const _origShowHome=window.showHome;
    window.showHome=function(fromBack){
      _origShowHome(fromBack);
      injectMacroBanner(); // DOM già aggiornato qui — nessun delay necessario
    };

    /* ════════════
       INIT
       ════════════ */
    ensureExLog();
    injectMacroBanner(); // Per il caso in cui home sia già aperta al caricamento

    console.log('%c[NutriTrack PRO v2] ✅ Caricato: progressive overload · macro g/kg · MET corretto · storico carichi','color:#16a34a;font-weight:bold;font-size:11px');

  });
})();

/* ═══════════════════════════════════════════════════════════════
   FASE 1 MVP — CORPORA
   Estensioni: fibre/acqua dinamiche, adherence score, check-in
   settimanale, matching scheda allenamento intelligente.
   Pattern coerente con NutriTrackPRO() sopra: nessuna riscrittura,
   solo estensione via whenReady() + override window.* dove serve.
   ═══════════════════════════════════════════════════════════════ */
(function CorporaFase1(){

  function whenReady2(fn){
    if(typeof S!=='undefined'&&typeof saveState==='function'&&typeof showToast==='function'&&typeof SCHEDE_DB!=='undefined'){
      fn();
    }else{
      setTimeout(()=>whenReady2(fn),120);
    }
  }

  whenReady2(function(){

    /* ────────────────────────────────────────
       1. ESTENSIONE PROFILO (workout config)
       ──────────────────────────────────────── */
    function ensureProfileExt(){
      if(!S.profile.livello)S.profile.livello='Principiante';
      if(!S.profile.giorniSett)S.profile.giorniSett=3;
      if(!S.profile.luogo)S.profile.luogo='Palestra';
      if(!S.checkins)S.checkins=[];
    }
    window.ensureProfileExt=ensureProfileExt; // FIX Fase 8

    /* ────────────────────────────────────────
       2. MOTORE NUTRIZIONALE ESTESO
       ──────────────────────────────────────── */
    function getFibreTarget(){
      const kcal=S.settings.kcal||2000;
      return Math.max(25,Math.min(35,Math.round(kcal/1000*14)));
    }
    function getWaterTargetMl(){
      const peso=S.profile.entries?.slice(-1)[0]?.peso||70;
      return Math.round(peso*33);
    }
    function getWaterTargetBicchieri(){
      return Math.round(getWaterTargetMl()/250);
    }
    // FIX: getFibreTarget era usata (guardata da typeof, quindi mai un errore visibile) da
    // Fase 4 per il target fibre dinamico — ma non essendo mai raggiungibile, il fallback
    // fisso a 28 scattava SEMPRE. Il target fibre "dinamico su kcal" (Sezione 5) non
    // funzionava mai in pratica. Esposte anche le due funzioni acqua per coerenza/uso futuro.
    window.getFibreTarget=getFibreTarget;
    window.getWaterTargetMl=getWaterTargetMl;
    window.getWaterTargetBicchieri=getWaterTargetBicchieri;

    /* Refeed: deficit medio >15% per 3+ settimane consecutive */
    function checkRefeedStatus(){
      const kcalTarget=S.settings.kcal||2000;
      const days=Object.keys(S.mealHistory||{}).sort().slice(-21);
      if(days.length<21)return{needed:false,reason:'Dati insufficienti (servono 21 giorni di storico)'};
      let deficits=[];
      days.forEach(d=>{
        const src=S.mealHistory[d];
        let e=0;MK.forEach(k=>(src[k]||[]).forEach(it=>e+=it.food.e*(it.g/100)));
        deficits.push((kcalTarget-e)/kcalTarget);
      });
      const avgDeficit=deficits.reduce((a,b)=>a+b,0)/deficits.length;
      const needed=avgDeficit>0.15;
      return{needed,avgDeficitPct:Math.round(avgDeficit*100),reason:needed?'Deficit medio >15% da 3 settimane — considera un refeed a mantenimento.':'Nessun refeed necessario al momento.'};
    }

    /* ────────────────────────────────────────
       3. ADHERENCE SCORE (composito settimanale)
       ──────────────────────────────────────── */
    function getAdherenceScore(){
      ensureProfileExt();
      const kcalTarget=S.settings.kcal||2000;
      const pt=(typeof getProteinTarget==='function')?getProteinTarget():null;

      // --- Macro adherence (40%): media 7gg, kcal entro ±15% + proteine >=80% target ---
      let macroDays=0,macroHit=0;
      for(let i=0;i<7;i++){
        const d=new Date();d.setDate(d.getDate()-i);
        const ds=d.toISOString().slice(0,10);
        const src=ds===TODAY?S.meals:S.mealHistory?.[ds];
        if(!src)continue;
        let e=0,p=0;
        MK.forEach(k=>(src[k]||[]).forEach(it=>{e+=it.food.e*(it.g/100);p+=it.food.p*(it.g/100);}));
        if(e===0)continue;
        macroDays++;
        const kcalOk=Math.abs(e-kcalTarget)/kcalTarget<=0.15;
        const protOk=!pt||p>=pt.target*0.8;
        if(kcalOk&&protOk)macroHit++;
      }
      const macroPct=macroDays>0?Math.round(macroHit/macroDays*100):0;

      // --- Workout completion (40%): sessioni registrate negli ultimi 7gg vs target giorniSett ---
      const targetSessioni=S.profile.giorniSett||3;
      const doneDates=new Set();
      Object.keys(S.workouts||{}).forEach(ds=>{
        const dd=new Date(ds),now=new Date();
        if((now-dd)/86400000<=7 && (S.workouts[ds]||[]).length>0)doneDates.add(ds);
      });
      const workoutPct=Math.min(100,Math.round(doneDates.size/targetSessioni*100));

      // --- Check-in completion (20%): check-in questa settimana? ---
      const lastCheckin=(S.checkins||[]).slice(-1)[0];
      let checkinPct=0;
      if(lastCheckin){
        const days=(new Date()-new Date(lastCheckin.date))/86400000;
        checkinPct=days<=7?100:0;
      }

      const score=Math.round(macroPct*0.4+workoutPct*0.4+checkinPct*0.2);
      return{score,macroPct,workoutPct,checkinPct,targetSessioni,sessioniFatte:doneDates.size};
    }
    window.getAdherenceScore=getAdherenceScore; // FIX Fase 8: era locale, mai visibile fuori da questa closure

    /* ────────────────────────────────────────
       4. MATCHING SCHEDA ALLENAMENTO
       (usa SCHEDE_DB curato invece di generare da
       zero — più affidabile per MVP, generazione
       algoritmica pura è prevista in V1)
       ──────────────────────────────────────── */
    function matchWorkoutPlan(){
      ensureProfileExt();
      const liv=S.profile.livello, giorni=S.profile.giorniSett, obiettivo=S.profile.obiettivo, luogo=S.profile.luogo;
      const levelMap={'Principiante':['Principiante','Tutti i livelli'],'Intermedio':['Intermedio','Tutti i livelli'],'Avanzato':['Avanzato','Intermedio','Tutti i livelli']};
      const goalMap={'dimagrimento':['Fitness Generale','Ipertrofia'],'massa':['Forza & Massa','Ipertrofia','Forza Massimale'],'mantenimento':['Fitness Generale','Forza & Massa']};
      let best=null,bestScore=-1;
      SCHEDE_DB.forEach(s=>{
        let score=0;
        if((levelMap[liv]||[]).includes(s.level))score+=3;
        score-=Math.abs(s.freq-giorni); // penalizza distanza frequenza
        if((goalMap[obiettivo]||[]).includes(s.goal))score+=2;
        if(luogo==='Casa'&&s.name.toLowerCase().includes('casa'))score+=3;
        if(luogo==='Casa'&&!s.name.toLowerCase().includes('casa'))score-=2;
        if(score>bestScore){bestScore=score;best=s;}
      });
      return best;
    }
    window.matchWorkoutPlan=matchWorkoutPlan; // FIX Fase 8: idem — mai visibile fuori da questa closure
    window.checkRefeedStatus=checkRefeedStatus; // FIX Fase 8: idem, per coerenza — usata da showAdherenceScore internamente ma utile anche fuori

    /* ────────────────────────────────────────
       5. SCHERMATA CHECK-IN SETTIMANALE
       ──────────────────────────────────────── */
    window.showCheckin=function(fb){
      ensureProfileExt();
      resetScreen();setHdr('CHECK-IN SETTIMANALE','Fai il punto della settimana',true);
      const lastPeso=S.profile.entries?.slice(-1)[0]?.peso||'';
      document.getElementById('screen').innerHTML=`
        <div class="card"><div class="card-hdr">📊 IL TUO PUNTO SETTIMANALE</div>
          <div class="card-body" style="font-size:11px;color:var(--ink2);line-height:1.6;margin-bottom:10px">
            2 minuti. Questi dati aggiornano il tuo adherence score e ricalibrano i consigli.
          </div>
          <div class="form-row"><div class="form-lbl">Peso (kg)</div><input class="form-inp" id="ci-peso" type="number" inputmode="decimal" value="${lastPeso}"></div>
          <div class="form-row"><div class="form-lbl">Vita (cm)</div><input class="form-inp" id="ci-vita" type="number" inputmode="decimal" placeholder="opzionale"></div>
          <div class="form-row" style="border:none"><div class="form-lbl">Energia percepita</div>
            <select class="form-sel" id="ci-energia">
              <option value="1">1 — Molto bassa</option>
              <option value="2">2 — Bassa</option>
              <option value="3" selected>3 — Normale</option>
              <option value="4">4 — Buona</option>
              <option value="5">5 — Ottima</option>
            </select>
          </div>
          <button class="big-btn success" style="margin-top:10px" onclick="snd('confirm');saveCheckin()">✓ SALVA CHECK-IN</button>
        </div>`;
    };

    window.saveCheckin=function(){
      const peso=parseFloat(document.getElementById('ci-peso').value);
      const vita=parseFloat(document.getElementById('ci-vita').value)||null;
      const energia=parseInt(document.getElementById('ci-energia').value);
      if(!peso){showToast('⚠️ Inserisci almeno il peso','red');return;}
      ensureProfileExt();
      S.checkins.push({date:new Date().toISOString(),peso,vita,energia});
      if(!S.profile.entries)S.profile.entries=[];
      S.profile.entries.push({data:TODAY,peso});
      saveState();
      showToast('✅ Check-in salvato');
      navPush(showAdherenceScore);
    };

    /* ────────────────────────────────────────
       6. SCHERMATA ADHERENCE SCORE + SUGGERIMENTI
       ──────────────────────────────────────── */
    window.showAdherenceScore=function(fb){
      ensureProfileExt();
      resetScreen();setHdr('IL TUO SCORE','Aderenza & suggerimenti',true);
      const a=getAdherenceScore();
      const fibre=getFibreTarget(),acqua=getWaterTargetBicchieri();
      const refeed=checkRefeedStatus();
      const plan=matchWorkoutPlan();
      const col=a.score>=80?'#16a34a':a.score>=50?'#d97706':'#dc2626';
      document.getElementById('screen').innerHTML=`
        <div class="card"><div class="card-hdr">🎯 ADHERENCE SCORE</div>
          <div class="card-body" style="text-align:center;padding:10px 0">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:42px;font-weight:700;color:${col}">${a.score}</div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3);text-transform:uppercase;letter-spacing:1px">su 100 · ultimi 7 giorni</div>
          </div>
          ${mBar('Nutrizione (40%)',a.macroPct,100,'#16a34a')}
          ${mBar('Allenamento (40%) — '+a.sessioniFatte+'/'+a.targetSessioni+' sessioni',a.workoutPct,100,'#2563eb')}
          ${mBar('Check-in (20%)',a.checkinPct,100,'#d97706')}
        </div>
        <div class="card"><div class="card-hdr">🥗 TARGET ESTESI</div>
          <div class="card-body" style="font-family:'IBM Plex Mono',monospace;font-size:12px;line-height:2">
            Fibre: <b>${fibre}g/giorno</b><br>
            Acqua: <b>${acqua} bicchieri</b> (~${getWaterTargetMl()}ml)
          </div>
        </div>
        <div class="card"><div class="card-hdr">🔄 REFEED</div>
          <div class="card-body" style="font-size:12px;color:var(--ink2);line-height:1.6">${refeed.reason}</div>
        </div>
        <div class="card"><div class="card-hdr">💪 SCHEDA CONSIGLIATA PER TE</div>
          <div class="card-body">
            ${plan?`<div style="font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;margin-bottom:6px">${plan.emoji} ${plan.name}</div>
            <div style="font-size:11px;color:var(--ink2);margin-bottom:10px">${plan.level} · ${plan.freq}×/sett. · ${plan.goal}</div>
            <button class="big-btn" onclick="snd();navPush(()=>showSchedaDetail(${plan.id}))">VEDI SCHEDA</button>`
            :'<div style="font-size:11px;color:var(--ink2)">Configura profilo allenamento in Impostazioni per un match più preciso.</div>'}
          </div>
        </div>
        <div style="padding:0 12px 4px">
          <button class="big-btn" onclick="snd();navPush(showCheckin)">📊 NUOVO CHECK-IN</button>
        </div>`;
    };

    /* ────────────────────────────────────────
       7. CONFIG PROFILO ALLENAMENTO (in Impostazioni)
       ──────────────────────────────────────── */
    const _origRenderImpostazioni = window.renderImpostazioni || renderImpostazioni;
    window.renderImpostazioni = function(){
      _origRenderImpostazioni();
      ensureProfileExt();
      const scr=document.getElementById('screen');
      const card=document.createElement('div');
      card.className='card';
      card.innerHTML=`
        <div class="card-hdr">💪 PROFILO ALLENAMENTO</div>
        <div class="form-row"><div class="form-lbl">Livello</div>
          <select class="form-sel" onchange="S.profile.livello=this.value;saveState()">
            <option value="Principiante" ${S.profile.livello==='Principiante'?'selected':''}>Principiante</option>
            <option value="Intermedio" ${S.profile.livello==='Intermedio'?'selected':''}>Intermedio</option>
            <option value="Avanzato" ${S.profile.livello==='Avanzato'?'selected':''}>Avanzato</option>
          </select>
        </div>
        <div class="form-row"><div class="form-lbl">Giorni/settimana</div>
          <input class="form-inp" type="number" min="1" max="7" value="${S.profile.giorniSett}" oninput="S.profile.giorniSett=parseInt(this.value)||3;saveState()">
        </div>
        <div class="form-row" style="border:none"><div class="form-lbl">Dove ti alleni</div>
          <select class="form-sel" onchange="S.profile.luogo=this.value;saveState()">
            <option value="Palestra" ${S.profile.luogo==='Palestra'?'selected':''}>Palestra</option>
            <option value="Casa" ${S.profile.luogo==='Casa'?'selected':''}>Casa</option>
          </select>
        </div>`;
      scr.appendChild(card);
    };

    /* ────────────────────────────────────────
       8. HOOK MENU — Check-in & Score
       ──────────────────────────────────────── */
    const _origShowMoreMenu = window.showMoreMenu || showMoreMenu;
    window.showMoreMenu = function(fromBack){
      _origShowMoreMenu(fromBack);
      const grid=document.querySelector('#screen .meal-grid');
      if(!grid)return;
      grid.insertAdjacentHTML('beforeend',`
        <div class="meal-btn col" onclick="snd();navPush(showCheckin)" style="padding:16px 12px 14px;gap:6px">
          <div class="meal-ico" style="font-size:28px">📊</div>
          <div class="meal-lbl" style="font-size:10px;font-weight:700">Check-in</div>
          <div class="meal-n" style="font-size:9px;opacity:.7;line-height:1.3;text-align:center">Punto settimanale</div>
        </div>
        <div class="meal-btn exe" onclick="snd();navPush(showAdherenceScore)" style="padding:16px 12px 14px;gap:6px">
          <div class="meal-ico" style="font-size:28px">🎯</div>
          <div class="meal-lbl" style="font-size:10px;font-weight:700">Il Tuo Score</div>
          <div class="meal-n" style="font-size:9px;opacity:.7;line-height:1.3;text-align:center">Adherence & consigli</div>
        </div>`);
    };

    ensureProfileExt();
    console.log('%c[Corpora Fase 1] ✅ Adherence score · check-in settimanale · matching scheda · fibre/acqua dinamiche','color:#16a34a;font-weight:bold;font-size:11px');

  });
})();


/* ═══════════════════════════════════════════════════════════════
   FASE 2 — CORPORA
   Coach AI con trigger automatici, lista spesa automatica,
   analytics avanzate (consistency score, volume trend),
   paywall premium strutturato.
   ═══════════════════════════════════════════════════════════════ */
(function CorporaFase2(){

  function whenReady3(fn){
    if(typeof S!=='undefined'&&typeof getAdherenceScore==='function'&&typeof matchWorkoutPlan==='function'){
      fn();
    }else{
      setTimeout(()=>whenReady3(fn),120);
    }
  }

  whenReady3(function(){

    /* ────────────────────────────────────────
       0. PREMIUM GATING
       ──────────────────────────────────────── */
    function ensureFase2State(){
      if(!S.aiInsights)S.aiInsights=[];
      if(!S.weeklyAdherence)S.weeklyAdherence=[];
      if(!S.groceryChecked)S.groceryChecked={};
      if(S.settings.premium===undefined)S.settings.premium=false;
    }
    function isPremium(){return S.settings.premium===true;}
    window.ensureFase2State=ensureFase2State; // FIX Fase 8
    window.isPremium=isPremium; // FIX Fase 8: CorporaFase3 (sync granulare) aspettava questa per sempre

    /* ────────────────────────────────────────
       1. COACH AI — MOTORE TRIGGER
       ──────────────────────────────────────── */
    function isoWeekKey(d){
      const dt=new Date(d);
      const day=(dt.getDay()+6)%7; // lunedì=0
      dt.setDate(dt.getDate()-day);
      return dt.toISOString().slice(0,10);
    }

    function recordWeeklySnapshot(){
      ensureFase2State();
      const wk=isoWeekKey(new Date());
      if(S.weeklyAdherence.some(w=>w.week===wk))return;
      const a=getAdherenceScore();
      S.weeklyAdherence.push({week:wk,score:a.score});
      if(S.weeklyAdherence.length>26)S.weeklyAdherence=S.weeklyAdherence.slice(-26);
      saveState();
    }

    function checkPlateau(){
      const ci=(S.checkins||[]).slice(-4);
      if(ci.length<3)return false;
      const pesi=ci.map(c=>c.peso);
      const span=(new Date(ci[ci.length-1].date)-new Date(ci[0].date))/86400000;
      const delta=Math.max(...pesi)-Math.min(...pesi);
      return span>=18 && delta<=0.4; // ~3 settimane, peso stabile ±0.4kg
    }

    /* Genera UN messaggio coach in base al trigger più rilevante al momento */
    function generateCoachMessage(){
      ensureFase2State();
      const a=getAdherenceScore();
      const lastCheckin=(S.checkins||[]).slice(-1)[0];
      const today_e=(()=>{let e=0;MK.forEach(k=>(S.meals[k]||[]).forEach(it=>e+=it.food.e*(it.g/100)));return e;})();
      const kcalTarget=S.settings.kcal||2000;

      let msg=null;

      // 1. Bassa motivazione dichiarata nell'ultimo check-in
      if(lastCheckin && lastCheckin.energia<=2){
        msg={type:'motivazione',icon:'💬',text:'Hai segnato energia bassa nell\'ultimo check-in. Non serve strafare questa settimana — anche solo mantenere la routine minima conta. Cosa ti pesa di più in questo momento?'};
      }
      // 2. Allenamenti saltati (2+ sessioni sotto target)
      else if(a.sessioniFatte<=a.targetSessioni-2){
        const plan=matchWorkoutPlan();
        msg={type:'correttivo',icon:'💪',text:`Questa settimana hai fatto ${a.sessioniFatte}/${a.targetSessioni} allenamenti. Invece di recuperare tutto, prova una sessione breve da 15-20 minuti oggi${plan?' — la tua scheda "'+plan.name+'" ha varianti compatte':''}. Meglio poco che niente.`};
      }
      // 3. Sgarro singolo oggi
      else if(today_e>kcalTarget*1.2 && today_e>0){
        const overshoot=Math.round(today_e-kcalTarget);
        msg={type:'correttivo',icon:'🍽️',text:`Oggi sei a +${overshoot} kcal sul target. Non è un problema isolato — domani si torna al piano, senza compensare con un giorno troppo restrittivo dopo.`};
      }
      // 4. Plateau peso
      else if(checkPlateau()){
        msg={type:'correttivo',icon:'📉',text:'Il peso è stabile da circa 3 settimane. È normale, non un fallimento: il corpo si adatta. Valuta un refeed a mantenimento o una piccola revisione del target — controlla la sezione Refeed nel tuo Score.'};
      }
      // 5. Check-in positivo / adherence alta
      else if(a.score>=80){
        msg={type:'celebrativo',icon:'🎉',text:`Score ${a.score}/100 questa settimana — nutrizione e allenamento sono allineati. Questo è il ritmo che porta risultati, continua così.`};
      }
      // 6. Fallback generico ma concreto
      else{
        msg={type:'motivazione',icon:'📊',text:`Score attuale: ${a.score}/100. Nutrizione al ${a.macroPct}%, allenamento al ${a.workoutPct}%. Concentrati sul numero più basso dei due questa settimana.`};
      }

      S.aiInsights.push({date:new Date().toISOString(),type:msg.type,icon:msg.icon,text:msg.text,letto:false});
      if(S.aiInsights.length>50)S.aiInsights=S.aiInsights.slice(-50);
      saveState();
      return msg;
    }

    function coachMessagesThisWeek(){
      const wk=isoWeekKey(new Date());
      return (S.aiInsights||[]).filter(i=>isoWeekKey(i.date)===wk).length;
    }
    // FIX Fase 8: queste erano tutte locali alla closure, mai raggiungibili da fuori
    window.isoWeekKey=isoWeekKey;
    window.recordWeeklySnapshot=recordWeeklySnapshot;
    window.checkPlateau=checkPlateau;
    window.generateCoachMessage=generateCoachMessage;
    window.coachMessagesThisWeek=coachMessagesThisWeek;

    /* ────────────────────────────────────────
       2. SCHERMATA COACH AI
       ──────────────────────────────────────── */
    window.showCoach=function(fb){
      ensureFase2State();
      resetScreen();setHdr('COACH AI','Consigli contestuali',true);
      const limit=isPremium()?Infinity:2;
      const usati=coachMessagesThisWeek();
      const canGenerate=usati<limit;
      const insights=[...(S.aiInsights||[])].reverse().slice(0,20);
      document.getElementById('screen').innerHTML=`
        <div class="card">
          <div class="card-hdr">🤖 IL TUO COACH</div>
          <div class="card-body">
            ${!isPremium()?`<div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3);margin-bottom:8px">${usati}/2 messaggi gratuiti questa settimana</div>`:''}
            <button class="big-btn ${canGenerate?'success':''}" ${canGenerate?'':'disabled style="opacity:.5"'} onclick="snd('confirm');requestCoachMessage()">
              ${canGenerate?'💬 CHIEDI AL COACH':'🔒 LIMITE SETTIMANALE RAGGIUNTO — PREMIUM PER ILLIMITATI'}
            </button>
          </div>
        </div>
        <div style="padding:10px 12px 4px">
          ${insights.length?insights.map(i=>`
            <div class="card" style="margin-bottom:8px">
              <div class="card-body" style="display:flex;gap:10px;align-items:flex-start">
                <div style="font-size:22px">${i.icon}</div>
                <div>
                  <div style="font-size:12px;line-height:1.5;color:var(--ink)">${i.text}</div>
                  <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3);margin-top:4px">${new Date(i.date).toLocaleDateString('it-IT',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})}</div>
                </div>
              </div>
            </div>`).join(''):'<div style="text-align:center;padding:30px 12px;color:var(--ink3);font-size:12px">Nessun messaggio ancora. Chiedi al coach per iniziare.</div>'}
        </div>`;
    };

    window.requestCoachMessage=function(){
      ensureFase2State();
      const limit=isPremium()?Infinity:2;
      if(coachMessagesThisWeek()>=limit){showToast('Limite settimanale raggiunto');return;}
      generateCoachMessage();
      showCoach();
      showToast('💬 Nuovo consiglio dal coach');
    };

    /* ────────────────────────────────────────
       3. LISTA SPESA AUTOMATICA
       ──────────────────────────────────────── */
    function generateGroceryList(){
      const db=getDB();
      const items={}; // cat -> {name: gTotal}
      for(let i=0;i<7;i++){
        const d=new Date();d.setDate(d.getDate()+i);
        const ds=d.toISOString().slice(0,10);
        const plan=S.calPlans?.[ds];
        if(!plan)continue;
        MK.forEach(k=>(plan[k]||[]).forEach(it=>{
          const food=db.find(f=>f.id===it.foodId);
          if(!food)return;
          const cat=food.cat||'Altro';
          if(!items[cat])items[cat]={};
          items[cat][food.name]=(items[cat][food.name]||0)+it.g;
        }));
      }
      return items;
    }

    window.showGroceryList=function(fb){
      ensureFase2State();
      resetScreen();setHdr('LISTA SPESA','Prossimi 7 giorni',true);
      const list=generateGroceryList();
      const cats=Object.keys(list);
      if(!cats.length){
        document.getElementById('screen').innerHTML=`<div style="text-align:center;padding:40px 20px;color:var(--ink3);font-size:12px">Nessun pasto pianificato per i prossimi 7 giorni.<br>Aggiungi alimenti al tuo Piano per generare la lista.</div>`;
        return;
      }
      if(!isPremium()){
        const preview=cats.slice(0,1);
        document.getElementById('screen').innerHTML=`
          <div class="card"><div class="card-hdr">🥬 ANTEPRIMA (${preview[0]})</div>
            <div class="card-body">
              ${Object.entries(list[preview[0]]).map(([n,g])=>`<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #ede8dc;font-size:12px"><span>${n}</span><span style="font-family:'IBM Plex Mono',monospace;color:var(--ink3)">${Math.round(g)}g</span></div>`).join('')}
            </div>
          </div>
          <div class="card"><div class="card-body" style="text-align:center;padding:20px 12px">
            <div style="font-size:12px;color:var(--ink2);margin-bottom:10px">Lista completa (${cats.length} categorie) disponibile con Premium.</div>
            <button class="big-btn success" onclick="snd();navPush(showPaywall)">🔓 SBLOCCA PREMIUM</button>
          </div></div>`;
        return;
      }
      let html='';
      cats.forEach(cat=>{
        html+=`<div class="card"><div class="card-hdr">🛒 ${cat.toUpperCase()}</div><div class="card-body">`;
        Object.entries(list[cat]).forEach(([name,g])=>{
          const key=cat+'|'+name;
          const checked=S.groceryChecked[key]?'checked':'';
          html+=`<label style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #ede8dc;font-size:12px;cursor:pointer">
            <input type="checkbox" ${checked} onchange="S.groceryChecked['${key.replace(/'/g,"\\'")}']=this.checked;saveState()">
            <span style="flex:1">${name}</span>
            <span style="font-family:'IBM Plex Mono',monospace;color:var(--ink3)">${Math.round(g)}g</span>
          </label>`;
        });
        html+='</div></div>';
      });
      document.getElementById('screen').innerHTML=html;
    };

    /* ────────────────────────────────────────
       4. ANALYTICS AVANZATE
       ──────────────────────────────────────── */
    function getConsistencyScore(){
      const weeks=(S.weeklyAdherence||[]).slice(-8);
      if(!weeks.length)return{pct:0,weeks:0,good:0};
      const good=weeks.filter(w=>w.score>=70).length;
      return{pct:Math.round(good/weeks.length*100),weeks:weeks.length,good};
    }
    window.getConsistencyScore=getConsistencyScore; // FIX Fase 8

    function getVolumeTrend(){
      // aggrega volume (peso*serie*rip) per settimana dagli ultimi 8 settimane di exerciseLog
      ensureExLog();
      const byWeek={};
      Object.values(S.exerciseLog||{}).forEach(logArr=>{
        logArr.forEach(e=>{
          const wk=isoWeekKey(e.date);
          const vol=(e.load||0)*(e.sets||0)*(e.reps||0);
          byWeek[wk]=(byWeek[wk]||0)+vol;
        });
      });
      return Object.entries(byWeek).sort().slice(-8).map(([wk,vol])=>({week:wk,vol:Math.round(vol)}));
    }

    window.showAnalytics=function(fb){
      ensureFase2State();
      recordWeeklySnapshot();
      resetScreen();setHdr('ANALYTICS','Trend a lungo termine',true);
      const cons=getConsistencyScore();
      if(!isPremium()){
        document.getElementById('screen').innerHTML=`
          <div class="card"><div class="card-hdr">📈 CONSISTENCY SCORE</div>
            <div class="card-body" style="text-align:center;padding:14px 0">
              <div style="font-family:'IBM Plex Mono',monospace;font-size:36px;font-weight:700;color:${cons.pct>=70?'#16a34a':'#d97706'}">${cons.pct}%</div>
              <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3)">${cons.good}/${cons.weeks} settimane con score ≥70</div>
            </div>
          </div>
          <div class="card"><div class="card-body" style="text-align:center;padding:20px 12px">
            <div style="font-size:12px;color:var(--ink2);margin-bottom:10px">Volume di allenamento, trend storico e report estesi disponibili con Premium.</div>
            <button class="big-btn success" onclick="snd();navPush(showPaywall)">🔓 SBLOCCA PREMIUM</button>
          </div></div>`;
        return;
      }
      const vol=getVolumeTrend();
      const maxVol=Math.max(1,...vol.map(v=>v.vol));
      document.getElementById('screen').innerHTML=`
        <div class="card"><div class="card-hdr">📈 CONSISTENCY SCORE</div>
          <div class="card-body" style="text-align:center;padding:14px 0">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:36px;font-weight:700;color:${cons.pct>=70?'#16a34a':'#d97706'}">${cons.pct}%</div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3)">${cons.good}/${cons.weeks} settimane con score ≥70</div>
          </div>
        </div>
        <div class="card"><div class="card-hdr">🏋️ VOLUME ALLENAMENTO (8 settimane)</div>
          <div class="card-body">
            ${vol.length?vol.map(v=>`
              <div style="margin-bottom:8px">
                <div style="display:flex;justify-content:space-between;font-family:'IBM Plex Mono',monospace;font-size:10px;margin-bottom:2px"><span>${v.week}</span><span>${v.vol.toLocaleString('it-IT')} kg</span></div>
                <div class="bar-wrap"><div class="bar-fill" style="width:${Math.round(v.vol/maxVol*100)}%;background:#2563eb"></div></div>
              </div>`).join(''):'<div style="font-size:11px;color:var(--ink3);text-align:center;padding:10px">Nessun dato di allenamento registrato ancora.</div>'}
          </div>
        </div>`;
    };

    /* ────────────────────────────────────────
       5. PAYWALL PREMIUM (struttura base)
       ──────────────────────────────────────── */
    window.showPaywall=function(fb){
      resetScreen();setHdr('PREMIUM','Corpora Premium',true);
      document.getElementById('screen').innerHTML=`
        <div class="card"><div class="card-hdr">🔓 COSA SBLOCCHI</div>
          <div class="card-body" style="font-size:12px;line-height:2.2">
            💬 Coach AI illimitato (vs 2 messaggi/settimana)<br>
            🛒 Lista spesa completa auto-generata<br>
            📈 Analytics avanzate & volume trend storico<br>
            📊 Storico adherence oltre 7 giorni
          </div>
        </div>
        <div class="card"><div class="card-body" style="text-align:center;padding:16px 12px">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:20px;font-weight:700;margin-bottom:4px">7,90€/mese</div>
          <div style="font-size:10px;color:var(--ink3);margin-bottom:14px">oppure 59€/anno</div>
          <button class="big-btn success" onclick="snd('confirm');activatePremiumDemo()">ATTIVA PREMIUM</button>
          <div style="font-size:9px;color:var(--ink3);margin-top:8px">TODO integrazione pagamento reale (Stripe) — questo è un toggle demo per test locale</div>
        </div></div>`;
    };
    window.activatePremiumDemo=function(){
      ensureFase2State();
      S.settings.premium=true;saveState();
      showToast('✅ Premium attivo (demo)');
      navGoHome();
    };

    /* ────────────────────────────────────────
       6. HOOK MENU — Coach, Lista Spesa, Analytics
       ──────────────────────────────────────── */
    const _origShowMoreMenu2 = window.showMoreMenu;
    window.showMoreMenu = function(fromBack){
      _origShowMoreMenu2(fromBack);
      const grid=document.querySelector('#screen .meal-grid');
      if(!grid)return;
      const unread=(S.aiInsights||[]).filter(i=>!i.letto).length;
      grid.insertAdjacentHTML('beforeend',`
        <div class="meal-btn pran" onclick="snd();navPush(showCoach)" style="padding:16px 12px 14px;gap:6px;position:relative">
          <div class="meal-ico" style="font-size:28px">🤖</div>
          <div class="meal-lbl" style="font-size:10px;font-weight:700">Coach AI</div>
          <div class="meal-n" style="font-size:9px;opacity:.7;line-height:1.3;text-align:center">Consigli su misura</div>
        </div>
        <div class="meal-btn cena" onclick="snd();navPush(showGroceryList)" style="padding:16px 12px 14px;gap:6px">
          <div class="meal-ico" style="font-size:28px">🛒</div>
          <div class="meal-lbl" style="font-size:10px;font-weight:700">Lista Spesa</div>
          <div class="meal-n" style="font-size:9px;opacity:.7;line-height:1.3;text-align:center">Auto-generata 7gg</div>
        </div>
        <div class="meal-btn mer" onclick="snd();navPush(showAnalytics)" style="padding:16px 12px 14px;gap:6px">
          <div class="meal-ico" style="font-size:28px">📈</div>
          <div class="meal-lbl" style="font-size:10px;font-weight:700">Analytics</div>
          <div class="meal-n" style="font-size:9px;opacity:.7;line-height:1.3;text-align:center">Consistency & volume</div>
        </div>
        ${!isPremium()?`<div class="meal-btn acq" onclick="snd();navPush(showPaywall)" style="padding:16px 12px 14px;gap:6px">
          <div class="meal-ico" style="font-size:28px">🔓</div>
          <div class="meal-lbl" style="font-size:10px;font-weight:700">Premium</div>
          <div class="meal-n" style="font-size:9px;opacity:.7;line-height:1.3;text-align:center">Sblocca tutto</div>
        </div>`:''}`);
    };

    /* Hook: registra snapshot settimanale anche dopo un check-in */
    const _origSaveCheckin2 = window.saveCheckin;
    window.saveCheckin = function(){
      _origSaveCheckin2();
      recordWeeklySnapshot();
    };

    ensureFase2State();
    recordWeeklySnapshot();
    console.log('%c[Corpora Fase 2] ✅ Coach AI · lista spesa auto · analytics avanzate · paywall premium','color:#2563eb;font-weight:bold;font-size:11px');

  });
})();


/* ═══════════════════════════════════════════════════════════════
   FASE 3 — CORPORA
   Backend relazionale (via Supabase, affianca il blob esistente),
   import wearable manuale (Apple Health / Google Fit export),
   area professionisti (dashboard PT multi-cliente).

   ATTENZIONE — LEGGERE PRIMA DI ATTIVARE:
   1) Esegui corpora-schema.sql nel tuo progetto Supabase (una
      volta sola). Senza queste tabelle, sync granulare e
      dashboard PT falliscono silenziosamente (fallback locale).
   2) Google Fit "live sync" qui sotto è uno SCAFFOLD non
      funzionante: serve un tuo progetto Google Cloud con OAuth
      client ID configurato (redirect URI, consent screen). Il
      pulsante mostra dove intervenire, non finge di funzionare.
   3) Apple HealthKit non è raggiungibile da una PWA/web app per
      restrizione di piattaforma Apple — per questo l'unica strada
      reale è l'import manuale del file export.xml, che invece
      è implementato e funzionante qui sotto.
   ═══════════════════════════════════════════════════════════════ */
(function CorporaFase3(){

  function whenReady4(fn){
    if(typeof S!=='undefined'&&typeof isPremium==='function'&&typeof SB!=='undefined'){
      fn();
    }else{
      setTimeout(()=>whenReady4(fn),120);
    }
  }

  whenReady4(function(){

    function ensureFase3State(){
      if(!S.profile.role)S.profile.role='client';
      if(!S.profile.ptSlug)S.profile.ptSlug=null;
      if(!S.wearableSteps)S.wearableSteps={};
      if(!S.wearableImports)S.wearableImports=[];
    }

    /* ────────────────────────────────────────
       1. SYNC GRANULARE → TABELLE RELAZIONALI
       (best-effort: se le tabelle non esistono o
       Supabase non è configurato, fallisce in
       silenzio senza rompere il salvataggio locale)
       ──────────────────────────────────────── */
    async function ensureProfileRow(){
      if(!SB.enabled||!CUR)return null;
      const existing=await sbRequest('GET','profiles?slug=eq.'+encodeURIComponent(CUR.slug)+'&limit=1');
      if(existing&&existing.length)return existing[0];
      await sbRequest('POST','profiles',{slug:CUR.slug,nome:CUR.name||CUR.slug,role:S.profile.role||'client'});
      const created=await sbRequest('GET','profiles?slug=eq.'+encodeURIComponent(CUR.slug)+'&limit=1');
      return created&&created.length?created[0]:null;
    }
    // Esposta per riuso da Fase 6 (sync tabelle aggiuntive) — stessa istanza,
    // evita di duplicare la logica di lookup/creazione riga profilo.
    window.ensureProfileRow=ensureProfileRow;

    async function syncCheckinToBackend(checkin){
      if(!SB.enabled)return;
      try{
        const profile=await ensureProfileRow();
        if(!profile)return;
        await sbRequest('POST','checkins',{profile_id:profile.id,data:checkin.date,peso:checkin.peso,vita:checkin.vita,energia:checkin.energia});
      }catch(e){console.warn('[Corpora F3] sync checkin fallito (tabelle non pronte?):',e);}
    }

    async function syncAdherenceToBackend(snapshot){
      if(!SB.enabled)return;
      try{
        const profile=await ensureProfileRow();
        if(!profile)return;
        await sbRequest('POST','adherence_snapshots',{profile_id:profile.id,week:snapshot.week,score:snapshot.score,macro_pct:snapshot.macroPct||null,workout_pct:snapshot.workoutPct||null,checkin_pct:snapshot.checkinPct||null});
      }catch(e){console.warn('[Corpora F3] sync adherence fallito:',e);}
    }

    // Hook: dopo ogni check-in, sync granulare in background (non blocca la UI)
    const _origSaveCheckin3=window.saveCheckin;
    window.saveCheckin=function(){
      const before=(S.checkins||[]).length;
      _origSaveCheckin3();
      const last=(S.checkins||[]).slice(-1)[0];
      if(last)syncCheckinToBackend(last);
    };

    // Hook: dopo lo snapshot settimanale, sync granulare
    if(typeof recordWeeklySnapshot==='function'){
      const _origSnap=recordWeeklySnapshot;
      window.recordWeeklySnapshot=function(){
        const before=(S.weeklyAdherence||[]).length;
        _origSnap();
        const last=(S.weeklyAdherence||[]).slice(-1)[0];
        if(last&&(S.weeklyAdherence||[]).length>before)syncAdherenceToBackend(last);
      };
    }

    /* ────────────────────────────────────────
       2. IMPORT WEARABLE MANUALE
       Apple Health: export.xml (dal Health app →
       Profilo → Esporta tutti i dati → export.xml)
       Google Fit: file JSON da Google Takeout
       ──────────────────────────────────────── */
    function parseAppleHealthXML(xmlText){
      const parser=new DOMParser();
      const doc=parser.parseFromString(xmlText,'text/xml');
      const records=doc.getElementsByTagName('Record');
      const weights=[],steps={};
      for(let i=0;i<records.length;i++){
        const r=records[i];
        const type=r.getAttribute('type');
        const val=parseFloat(r.getAttribute('value'));
        const date=(r.getAttribute('startDate')||'').slice(0,10);
        if(!date||isNaN(val))continue;
        if(type==='HKQuantityTypeIdentifierBodyMass'){
          weights.push({date,peso:val});
        }else if(type==='HKQuantityTypeIdentifierStepCount'){
          steps[date]=(steps[date]||0)+val;
        }
      }
      return{weights,steps};
    }

    function parseGoogleFitJSON(jsonText){
      // Formato Google Takeout varia; gestiamo il caso più comune
      // (array di sessioni/aggregate con campo startTime + value)
      try{
        const data=JSON.parse(jsonText);
        const steps={};
        const arr=Array.isArray(data)?data:(data.bucket||data.records||[]);
        arr.forEach(item=>{
          const date=(item.startTime||item.date||'').slice(0,10);
          const val=item.steps||item.value||0;
          if(date)steps[date]=(steps[date]||0)+(+val||0);
        });
        return{weights:[],steps};
      }catch(e){return{weights:[],steps:{}}}
    }

    window.showWearableImport=function(fb){
      ensureFase3State();
      resetScreen();setHdr('IMPORT WEARABLE','Apple Health / Google Fit',true);
      document.getElementById('screen').innerHTML=`
        <div class="card"><div class="card-hdr">📲 APPLE HEALTH</div>
          <div class="card-body" style="font-size:11px;color:var(--ink2);line-height:1.6">
            Impossibile sincronizzare in automatico: HealthKit non è accessibile da una web app (limite di piattaforma Apple, non nostro). Importa manualmente:<br><br>
            <b>1.</b> App Salute → tocca la tua foto profilo → "Esporta tutti i dati"<br>
            <b>2.</b> Estrai lo zip, trova <code>export.xml</code><br>
            <b>3.</b> Carica qui sotto (peso e passi verranno importati)
          </div>
          <input type="file" id="ah-file" accept=".xml" style="margin-top:10px;font-size:11px">
          <button class="big-btn" style="margin-top:8px" onclick="snd();importAppleHealthFile()">IMPORTA EXPORT.XML</button>
        </div>
        <div class="card"><div class="card-hdr">⌚ GOOGLE FIT</div>
          <div class="card-body" style="font-size:11px;color:var(--ink2);line-height:1.6">
            Opzione A — import manuale (funziona subito): scarica i tuoi dati da <a href="https://takeout.google.com" target="_blank" style="color:var(--green)">Google Takeout</a> → Google Fit, carica il JSON qui.<br><br>
            Opzione B — sync live via OAuth: richiede un tuo progetto Google Cloud con Fitness API abilitata (non attivabile da qui, vedi sotto).
          </div>
          <input type="file" id="gf-file" accept=".json" style="margin-top:10px;font-size:11px">
          <button class="big-btn" style="margin-top:8px" onclick="snd();importGoogleFitFile()">IMPORTA JSON TAKEOUT</button>
          <button class="big-btn" style="margin-top:8px;opacity:.6" onclick="snd();showInfoModal('Google Fit — sync live','Richiede: 1) un progetto su console.cloud.google.com, 2) un OAuth client ID configurato con i tuoi redirect URI, 3) consenso Fitness API. Non attivabile senza queste credenziali — questo pulsante è un placeholder.','🔌')">🔌 COLLEGA GOOGLE FIT (LIVE — richiede setup)</button>
        </div>
        <div class="card"><div class="card-hdr">📋 IMPORT RECENTI</div>
          <div class="card-body" id="wearable-import-log" style="font-size:11px;color:var(--ink2)">
            ${(S.wearableImports||[]).length?(S.wearableImports||[]).slice(-5).reverse().map(w=>`${w.source} — ${new Date(w.imported_at).toLocaleDateString('it-IT')} — ${w.giorni_importati} giorni`).join('<br>'):'Nessun import ancora.'}
          </div>
        </div>`;
    };

    window.importAppleHealthFile=function(){
      const input=document.getElementById('ah-file');
      const file=input.files[0];
      if(!file){showToast('⚠️ Seleziona il file export.xml','red');return;}
      const reader=new FileReader();
      reader.onload=e=>{
        try{
          const{weights,steps}=parseAppleHealthXML(e.target.result);
          ensureFase3State();
          weights.forEach(w=>{
            if(!S.profile.entries)S.profile.entries=[];
            if(!S.profile.entries.some(x=>x.data===w.date))S.profile.entries.push({data:w.date,peso:w.peso});
          });
          Object.assign(S.wearableSteps,steps);
          S.wearableImports.push({source:'apple_health',imported_at:new Date().toISOString(),giorni_importati:weights.length+Object.keys(steps).length});
          saveState();
          showToast(`✅ Importati ${weights.length} pesi, ${Object.keys(steps).length} giorni di passi`);
          showWearableImport();
        }catch(err){showToast('❌ Errore lettura file: '+err.message+' — verifica che sia il file export.xml corretto.','red');}
      };
      reader.readAsText(file);
    };

    window.importGoogleFitFile=function(){
      const input=document.getElementById('gf-file');
      const file=input.files[0];
      if(!file){showToast('⚠️ Seleziona il file JSON di Google Takeout','red');return;}
      const reader=new FileReader();
      reader.onload=e=>{
        try{
          const{steps}=parseGoogleFitJSON(e.target.result);
          ensureFase3State();
          Object.assign(S.wearableSteps,steps);
          S.wearableImports.push({source:'google_fit',imported_at:new Date().toISOString(),giorni_importati:Object.keys(steps).length});
          saveState();
          showToast(`✅ Importati ${Object.keys(steps).length} giorni di passi`);
          showWearableImport();
        }catch(err){showToast('❌ Errore lettura file: '+err.message,'red');}
      };
      reader.readAsText(file);
    };

    /* ────────────────────────────────────────
       3. AREA PROFESSIONISTI (dashboard PT)
       ──────────────────────────────────────── */
    window.showAreaProfessionista=function(fb){
      ensureFase3State();
      resetScreen();setHdr('AREA PROFESSIONISTA','Dashboard clienti',true);
      if(!isPremium()){
        document.getElementById('screen').innerHTML=`<div class="card"><div class="card-body" style="text-align:center;padding:30px 12px">
          <div style="font-size:12px;color:var(--ink2);margin-bottom:10px">L'area professionista è una funzione Premium (piano B2B, Sezione 13).</div>
          <button class="big-btn success" onclick="snd();navPush(showPaywall)">🔓 SBLOCCA PREMIUM</button>
        </div></div>`;
        return;
      }
      if(S.profile.role!=='pt'){
        document.getElementById('screen').innerHTML=`<div class="card"><div class="card-body">
          <div style="font-size:12px;color:var(--ink2);margin-bottom:10px">Il tuo profilo è impostato come "cliente". Se sei un professionista (PT/nutrizionista), attiva la modalità professionista.</div>
          <button class="big-btn" onclick="snd();S.profile.role='pt';saveState();showAreaProfessionista()">DIVENTA PROFESSIONISTA (demo)</button>
        </div></div>`;
        return;
      }
      if(!SB.enabled){
        document.getElementById('screen').innerHTML=`<div class="card"><div class="card-body">
          <div style="font-size:12px;color:var(--ink2);line-height:1.6">La dashboard PT richiede Supabase attivo (serve leggere i dati di più clienti da un backend condiviso — impossibile con solo localStorage). Configura Supabase in Impostazioni ed esegui <code>corpora-schema.sql</code> prima di continuare.</div>
        </div></div>`;
        return;
      }
      loadClientsDashboard();
    };

    async function loadClientsDashboard(){
      const scr=document.getElementById('screen');
      scr.innerHTML=`<div style="text-align:center;padding:30px;color:var(--ink3);font-size:12px">Caricamento clienti...</div>`;
      try{
        const myProfile=await ensureProfileRow();
        if(!myProfile){scr.innerHTML=`<div class="card"><div class="card-body" style="font-size:12px;color:var(--ink2)">Impossibile leggere il profilo dal backend. Verifica che corpora-schema.sql sia stato eseguito.</div></div>`;return;}
        const clients=await sbRequest('GET','profiles?pt_id=eq.'+myProfile.id);
        if(!clients||!clients.length){
          scr.innerHTML=`<div class="card"><div class="card-body">
            <div style="font-size:12px;color:var(--ink2);margin-bottom:10px">Nessun cliente collegato ancora. Per collegare un cliente, esegui nel SQL editor di Supabase:</div>
            <div style="background:var(--ink);color:#86efac;padding:10px;border-radius:8px;font-family:'IBM Plex Mono',monospace;font-size:9px;overflow-x:auto">update profiles set pt_id='${myProfile.id}' where slug='SLUG_CLIENTE';</div>
          </div></div>`;
          return;
        }
        let html='';
        for(const c of clients){
          const adh=await sbRequest('GET','adherence_snapshots?profile_id=eq.'+c.id+'&order=week.desc&limit=1');
          const lastCi=await sbRequest('GET','checkins?profile_id=eq.'+c.id+'&order=data.desc&limit=1');
          const score=adh&&adh.length?adh[0].score:null;
          const col=score===null?'var(--ink3)':score>=80?'#16a34a':score>=50?'#d97706':'#dc2626';
          html+=`<div class="card"><div class="card-body" style="display:flex;justify-content:space-between;align-items:center">
            <div>
              <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700">${c.nome||c.slug}</div>
              <div style="font-size:10px;color:var(--ink3)">${lastCi&&lastCi.length?'Ultimo check-in: '+new Date(lastCi[0].data).toLocaleDateString('it-IT'):'Nessun check-in'}</div>
            </div>
            <div style="font-family:'IBM Plex Mono',monospace;font-size:22px;font-weight:700;color:${col}">${score===null?'—':score}</div>
          </div></div>`;
        }
        scr.innerHTML=html;
      }catch(e){
        scr.innerHTML=`<div class="card"><div class="card-body" style="font-size:12px;color:var(--ink2)">Errore caricamento dashboard: ${e.message}. Verifica connessione Supabase e schema tabelle.</div></div>`;
      }
    }

    /* ────────────────────────────────────────
       4. HOOK MENU
       ──────────────────────────────────────── */
    const _origShowMoreMenu3=window.showMoreMenu;
    window.showMoreMenu=function(fromBack){
      _origShowMoreMenu3(fromBack);
      const grid=document.querySelector('#screen .meal-grid');
      if(!grid)return;
      grid.insertAdjacentHTML('beforeend',`
        <div class="meal-btn spu" onclick="snd();navPush(showWearableImport)" style="padding:16px 12px 14px;gap:6px">
          <div class="meal-ico" style="font-size:28px">⌚</div>
          <div class="meal-lbl" style="font-size:10px;font-weight:700">Wearable</div>
          <div class="meal-n" style="font-size:9px;opacity:.7;line-height:1.3;text-align:center">Importa Health/Fit</div>
        </div>
        <div class="meal-btn pes" onclick="snd();navPush(showAreaProfessionista)" style="padding:16px 12px 14px;gap:6px">
          <div class="meal-ico" style="font-size:28px">👨‍⚕️</div>
          <div class="meal-lbl" style="font-size:10px;font-weight:700">Area Pro</div>
          <div class="meal-n" style="font-size:9px;opacity:.7;line-height:1.3;text-align:center">Dashboard clienti (PT)</div>
        </div>`);
    };

    ensureFase3State();
    console.log('%c[Corpora Fase 3] ✅ Sync relazionale (best-effort) · import wearable manuale · area professionista','color:#7c3aed;font-weight:bold;font-size:11px');

  });
})();

