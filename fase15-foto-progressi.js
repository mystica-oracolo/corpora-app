/* ═══════════════════════════════════════════════════════════════
   FASE 15 — CORPORA — FOTO PROGRESSI NEL TEMPO

   Galleria di foto corpo datate (fronte/lato/retro), con peso e
   nota opzionali, + confronto "prima/dopo" tra due date qualsiasi.

   Decisione di storage: le immagini NON entrano in S (localStorage).
   S._savedAt/saveState() serializza sempre l'intero oggetto S e lo
   rimanda pari pari a Supabase ad ogni save (sbSave → JSON.stringify(S))
   — foto in base64 dentro S farebbero esplodere sia il limite
   localStorage (con relativo pruning già esistente su mealHistory/
   workouts) sia ogni sync remoto. Le immagini (compresse via canvas,
   JPEG ~900px) vivono quindi in un IndexedDB dedicato per profilo
   (corpora_photos_<slug>), mentre in S.progressPhotos resta solo il
   metadato leggero {id, date, angle, peso, note} — piccolo, sincronizzabile,
   coerente col resto dell'app.

   Pattern coerente con le fasi precedenti: nessuna modifica ad app.js,
   solo estensione via whenReady() + window.*, wrap non invasivo di
   showMoreMenu, uso di showConfirm (Fase 14) invece di confirm() nativo.
   ═══════════════════════════════════════════════════════════════ */
(function CorporaFase15(){

  const STORE='photos';
  const FREE_LIMIT=4;

  function whenReady(fn){
    if(typeof S!=='undefined'&&typeof saveState==='function'&&typeof showToast==='function'
       &&typeof navPush==='function'&&typeof resetScreen==='function'&&typeof setHdr==='function'
       &&typeof snd==='function'&&typeof showMoreMenu==='function'&&typeof CUR!=='undefined'
       &&typeof TODAY!=='undefined'&&typeof fmtDate==='function'&&typeof showConfirm==='function'
       &&typeof showPaywall==='function'){
      fn();
    }else{
      setTimeout(()=>whenReady(fn),120);
    }
  }

  whenReady(function(){

    if(!S.progressPhotos)S.progressPhotos=[];

    function isPremiumUser(){
      return typeof window.isPremium==='function' ? window.isPremium() : (S.settings&&S.settings.premium===true);
    }
    function uid(){return 'ph'+Date.now().toString(36)+Math.random().toString(36).slice(2,7);}
    function fmtDateShort(ds){try{return new Date(ds+'T12:00:00').toLocaleDateString('it-IT',{day:'2-digit',month:'short'});}catch{return ds;}}
    const ANGLE_LBL={fronte:'Fronte',lato:'Lato',retro:'Retro'};

    /* ────────────────────────────────────────
       1. INDEXEDDB — storage immagini separato da S
       ──────────────────────────────────────── */
    let _dbPromise=null;
    function dbName(){return 'corpora_photos_'+((CUR&&CUR.slug)||'default');}
    function openDb(){
      if(_dbPromise)return _dbPromise;
      _dbPromise=new Promise((resolve,reject)=>{
        if(!('indexedDB' in window)){reject(new Error('IndexedDB non disponibile'));return;}
        const req=indexedDB.open(dbName(),1);
        req.onupgradeneeded=()=>{
          const db=req.result;
          if(!db.objectStoreNames.contains(STORE))db.createObjectStore(STORE,{keyPath:'id'});
        };
        req.onsuccess=()=>resolve(req.result);
        req.onerror=()=>reject(req.error);
      });
      return _dbPromise;
    }
    function idbPut(rec){
      return openDb().then(db=>new Promise((res,rej)=>{
        const tx=db.transaction(STORE,'readwrite');
        tx.objectStore(STORE).put(rec);
        tx.oncomplete=()=>res(true);
        tx.onerror=()=>rej(tx.error);
      }));
    }
    function idbGet(id){
      return openDb().then(db=>new Promise((res,rej)=>{
        const tx=db.transaction(STORE,'readonly');
        const rq=tx.objectStore(STORE).get(id);
        rq.onsuccess=()=>res(rq.result||null);
        rq.onerror=()=>rej(rq.error);
      }));
    }
    function idbDelete(id){
      return openDb().then(db=>new Promise((res,rej)=>{
        const tx=db.transaction(STORE,'readwrite');
        tx.objectStore(STORE).delete(id);
        tx.oncomplete=()=>res(true);
        tx.onerror=()=>rej(tx.error);
      }));
    }

    /* ────────────────────────────────────────
       2. COMPRESSIONE FOTO (canvas → JPEG ~900px)
       ──────────────────────────────────────── */
    function readAndCompress(file){
      return new Promise((resolve,reject)=>{
        const reader=new FileReader();
        reader.onerror=()=>reject(reader.error||new Error('Lettura file fallita'));
        reader.onload=()=>{
          const img=new Image();
          img.onerror=()=>reject(new Error('Immagine non valida'));
          img.onload=()=>{
            const MAXW=900;
            let w=img.width,h=img.height;
            if(w>MAXW){h=Math.round(h*MAXW/w);w=MAXW;}
            const cv=document.createElement('canvas');
            cv.width=w;cv.height=h;
            cv.getContext('2d').drawImage(img,0,0,w,h);
            resolve(cv.toDataURL('image/jpeg',0.72));
          };
          img.src=reader.result;
        };
        reader.readAsDataURL(file);
      });
    }

    /* ────────────────────────────────────────
       3. PUNTO D'INGRESSO — voce nel menu ALTRO
       ──────────────────────────────────────── */
    const _origShowMoreMenu15=window.showMoreMenu;
    window.showMoreMenu=function(fromBack){
      _origShowMoreMenu15(fromBack);
      const grid=document.querySelector('#screen .meal-grid');
      if(!grid)return;
      grid.insertAdjacentHTML('beforeend',`
        <div class="meal-btn pes" onclick="snd();navPush(showFotoProgressi)" style="padding:16px 12px 14px;gap:6px">
          <div class="meal-ico" style="font-size:28px">📸</div>
          <div class="meal-lbl" style="font-size:10px;font-weight:700">Foto Progressi</div>
          <div class="meal-n" style="font-size:9px;opacity:.7;line-height:1.3;text-align:center">${S.progressPhotos.length} nel tempo</div>
        </div>`);
    };

    /* ────────────────────────────────────────
       4. GALLERIA
       ──────────────────────────────────────── */
    window.showFotoProgressi=function(fb){
      resetScreen();setHdr('📸 FOTO PROGRESSI','Il tuo percorso nel tempo',true);
      const scr=document.getElementById('screen');
      const list=[...S.progressPhotos].sort((a,b)=>b.date.localeCompare(a.date));

      let html=`<div style="padding:12px 16px 4px;display:flex;gap:8px">
        <button class="big-btn success" style="margin:0;flex:1;font-size:11px" onclick="snd();openAddFoto()">📷 AGGIUNGI FOTO</button>
        ${list.length>=2?`<button class="big-btn outline" style="margin:0;flex:1;font-size:11px" onclick="snd();${isPremiumUser()?'navPush(showFotoConfronto)':'navPush(showPaywallFoto)'}">↔️ CONFRONTA</button>`:''}
      </div>`;

      if(!isPremiumUser()){
        html+=`<div style="padding:6px 16px 0;font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--ink3)">Piano free: ${Math.min(list.length,FREE_LIMIT)}/${FREE_LIMIT} foto usate</div>`;
      }

      if(list.length===0){
        html+=`<div style="padding:40px 24px;text-align:center;color:var(--ink3)">
          <div style="font-size:36px;margin-bottom:10px">🖼️</div>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;line-height:1.8">
            Nessuna foto ancora.<br>Scatta la prima per iniziare a tracciare<br>i tuoi progressi nel tempo.
          </div>
        </div>`;
      }else{
        html+=`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;padding:12px 16px 24px" id="foto-grid">
          ${list.map(p=>`
            <div class="foto-thumb" data-id="${p.id}" onclick="snd();navPush(()=>showFotoDettaglio('${p.id}'))" style="position:relative;aspect-ratio:3/4;border-radius:8px;overflow:hidden;border:1.5px solid #e8e3d8;background:#f2f0ea;cursor:pointer">
              <div class="foto-thumb-img" style="width:100%;height:100%;background:#eee"></div>
              <div style="position:absolute;left:0;right:0;bottom:0;background:linear-gradient(0deg,rgba(0,0,0,.65),transparent);padding:6px 6px 4px;font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;color:#fff">${fmtDateShort(p.date)}</div>
            </div>`).join('')}
        </div>`;
      }
      scr.className='screen anim-in';
      scr.innerHTML=html;

      // Thumbnail caricate in modo asincrono da IndexedDB (non bloccano il render della griglia)
      list.forEach(p=>{
        idbGet(p.id).then(rec=>{
          if(!rec)return;
          const el=scr.querySelector(`.foto-thumb[data-id="${p.id}"] .foto-thumb-img`);
          if(el)el.style.cssText+=`;background-image:url(${rec.dataUrl});background-size:cover;background-position:center`;
        }).catch(()=>{});
      });
    };

    /* ────────────────────────────────────────
       5. AGGIUNGI FOTO — file picker + form metadati
       ──────────────────────────────────────── */
    window.openAddFoto=function(){
      if(!isPremiumUser() && S.progressPhotos.length>=FREE_LIMIT){
        navPush(showPaywallFoto);
        return;
      }
      let inp=document.getElementById('foto-file-input');
      if(!inp){
        inp=document.createElement('input');
        inp.type='file';inp.accept='image/*';inp.capture='environment';
        inp.id='foto-file-input';inp.style.display='none';
        document.body.appendChild(inp);
      }
      inp.onchange=async function(){
        const file=inp.files&&inp.files[0];
        inp.value='';
        if(!file)return;
        showToast('Elaborazione foto...','info');
        try{
          const dataUrl=await readAndCompress(file);
          openFotoForm(dataUrl);
        }catch(e){
          console.error('[Fase15] compress error',e);
          showToast('Errore nel caricamento della foto','error');
        }
      };
      inp.click();
    };

    function openFotoForm(dataUrl){
      const id=uid();
      const overlay=document.createElement('div');
      overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:9999;display:flex;align-items:flex-end';
      overlay.innerHTML=`
        <div style="background:var(--bg,#fff);width:100%;border-radius:16px 16px 0 0;padding:16px;max-height:88vh;overflow:auto">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;letter-spacing:1px;margin-bottom:10px">📷 NUOVA FOTO PROGRESSO</div>
          <img src="${dataUrl}" style="width:100%;max-height:260px;object-fit:cover;border-radius:10px;margin-bottom:12px;border:1.5px solid #e8e3d8">
          <label style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--ink3);text-transform:uppercase">Data</label>
          <input type="date" id="ff-date" value="${TODAY}" style="width:100%;padding:10px;margin:6px 0 12px;border-radius:8px;border:1.5px solid #e8e3d8;font-family:inherit">
          <label style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--ink3);text-transform:uppercase">Angolazione</label>
          <select id="ff-angle" style="width:100%;padding:10px;margin:6px 0 12px;border-radius:8px;border:1.5px solid #e8e3d8;font-family:inherit">
            <option value="fronte">Fronte</option>
            <option value="lato">Lato</option>
            <option value="retro">Retro</option>
          </select>
          <label style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--ink3);text-transform:uppercase">Peso (kg, opzionale)</label>
          <input type="number" step="0.1" id="ff-peso" placeholder="es. 74.5" style="width:100%;padding:10px;margin:6px 0 12px;border-radius:8px;border:1.5px solid #e8e3d8;font-family:inherit">
          <label style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--ink3);text-transform:uppercase">Nota (opzionale)</label>
          <textarea id="ff-note" rows="2" placeholder="Come ti senti oggi?" style="width:100%;padding:10px;margin:6px 0 16px;border-radius:8px;border:1.5px solid #e8e3d8;font-family:inherit;resize:vertical"></textarea>
          <div style="display:flex;gap:8px">
            <button class="big-btn outline" style="margin:0;flex:1" id="ff-cancel">ANNULLA</button>
            <button class="big-btn success" style="margin:0;flex:1" id="ff-save">SALVA</button>
          </div>
        </div>`;
      document.body.appendChild(overlay);

      overlay.querySelector('#ff-cancel').onclick=function(){snd();overlay.remove();};

      overlay.querySelector('#ff-save').onclick=async function(){
        const date=overlay.querySelector('#ff-date').value||TODAY;
        const angle=overlay.querySelector('#ff-angle').value;
        const pesoRaw=overlay.querySelector('#ff-peso').value;
        const peso=pesoRaw?parseFloat(pesoRaw):null;
        const note=overlay.querySelector('#ff-note').value.trim();
        try{
          await idbPut({id,dataUrl});
          S.progressPhotos.push({id,date,angle,peso,note});
          saveState();
          snd('confirm');
          overlay.remove();
          showToast('Foto salvata ✓','success');
          if(document.getElementById('hdr-title'))showFotoProgressi();
        }catch(e){
          console.error('[Fase15] save error',e);
          showToast('Errore nel salvataggio della foto','error');
        }
      };
    }

    /* ────────────────────────────────────────
       6. DETTAGLIO FOTO
       ──────────────────────────────────────── */
    window.showFotoDettaglio=function(id){
      resetScreen();setHdr('📸 DETTAGLIO','',true);
      const scr=document.getElementById('screen');
      const meta=S.progressPhotos.find(p=>p.id===id);
      if(!meta){
        scr.className='screen anim-in';
        scr.innerHTML='<div style="padding:24px;text-align:center;color:var(--ink3)">Foto non trovata</div>';
        return;
      }
      scr.className='screen anim-in';
      scr.innerHTML=`<div style="padding:16px 16px 24px">
        <div id="fd-img" style="width:100%;aspect-ratio:3/4;border-radius:12px;background:#eee;border:1.5px solid #e8e3d8;margin-bottom:14px"></div>
        <div class="card" style="margin:0 0 14px">
          <div class="card-body" style="font-size:13px;line-height:1.9">
            <div><strong>Data:</strong> ${fmtDate(meta.date)}</div>
            <div><strong>Angolazione:</strong> ${ANGLE_LBL[meta.angle]||'—'}</div>
            ${meta.peso?`<div><strong>Peso:</strong> ${meta.peso} kg</div>`:''}
            ${meta.note?`<div style="margin-top:4px"><strong>Nota:</strong> ${meta.note}</div>`:''}
          </div>
        </div>
        <button class="big-btn danger" style="margin:0;width:100%" onclick="snd();deleteFoto('${meta.id}')">🗑️ ELIMINA FOTO</button>
      </div>`;
      idbGet(id).then(rec=>{
        if(!rec)return;
        const el=document.getElementById('fd-img');
        if(el)el.style.cssText+=`;background-image:url(${rec.dataUrl});background-size:cover;background-position:center`;
      }).catch(()=>{});
    };

    window.deleteFoto=function(id){
      showConfirm('Eliminare questa foto? L\'azione non è reversibile.',function(){
        idbDelete(id).catch(()=>{});
        S.progressPhotos=S.progressPhotos.filter(p=>p.id!==id);
        saveState();
        showToast('Foto eliminata','info');
        navPush(showFotoProgressi);
      },{title:'Elimina foto',icon:'🗑️',danger:true,confirmLabel:'Elimina'});
    };

    /* ────────────────────────────────────────
       7. CONFRONTO PRIMA/DOPO (premium)
       ──────────────────────────────────────── */
    window.showFotoConfronto=function(fb){
      resetScreen();setHdr('↔️ CONFRONTA','Prima / Dopo',true);
      const scr=document.getElementById('screen');
      const list=[...S.progressPhotos].sort((a,b)=>a.date.localeCompare(b.date));
      if(list.length<2){
        scr.className='screen anim-in';
        scr.innerHTML='<div style="padding:24px;text-align:center;color:var(--ink3)">Servono almeno 2 foto per confrontare.</div>';
        return;
      }
      const beforeId=list[0].id, afterId=list[list.length-1].id;
      scr.className='screen anim-in';
      scr.innerHTML=`<div style="padding:14px 16px 24px">
        <div style="display:flex;gap:8px;margin-bottom:10px">
          <select id="cf-before" style="flex:1;padding:8px;border-radius:8px;border:1.5px solid #e8e3d8;font-family:'IBM Plex Mono',monospace;font-size:11px">
            ${list.map(p=>`<option value="${p.id}" ${p.id===beforeId?'selected':''}>${fmtDateShort(p.date)}</option>`).join('')}
          </select>
          <select id="cf-after" style="flex:1;padding:8px;border-radius:8px;border:1.5px solid #e8e3d8;font-family:'IBM Plex Mono',monospace;font-size:11px">
            ${list.map(p=>`<option value="${p.id}" ${p.id===afterId?'selected':''}>${fmtDateShort(p.date)}</option>`).join('')}
          </select>
        </div>
        <div style="display:flex;gap:8px">
          <div style="flex:1">
            <div id="cf-img-before" style="width:100%;aspect-ratio:3/4;border-radius:10px;background:#eee;border:1.5px solid #e8e3d8"></div>
            <div style="text-align:center;font-family:'IBM Plex Mono',monospace;font-size:10px;margin-top:4px;color:var(--ink3)">PRIMA</div>
          </div>
          <div style="flex:1">
            <div id="cf-img-after" style="width:100%;aspect-ratio:3/4;border-radius:10px;background:#eee;border:1.5px solid #e8e3d8"></div>
            <div style="text-align:center;font-family:'IBM Plex Mono',monospace;font-size:10px;margin-top:4px;color:var(--ink3)">DOPO</div>
          </div>
        </div>
        <div id="cf-delta" style="text-align:center;font-family:'IBM Plex Mono',monospace;font-size:12px;margin-top:14px;color:var(--ink2)"></div>
      </div>`;

      function render(){
        const bId=document.getElementById('cf-before').value;
        const aId=document.getElementById('cf-after').value;
        const bMeta=S.progressPhotos.find(p=>p.id===bId);
        const aMeta=S.progressPhotos.find(p=>p.id===aId);
        const bEl=document.getElementById('cf-img-before');
        const aEl=document.getElementById('cf-img-after');
        if(bEl)bEl.style.backgroundImage='';
        if(aEl)aEl.style.backgroundImage='';
        idbGet(bId).then(rec=>{if(bEl&&rec)bEl.style.cssText+=`;background-image:url(${rec.dataUrl});background-size:cover;background-position:center`;}).catch(()=>{});
        idbGet(aId).then(rec=>{if(aEl&&rec)aEl.style.cssText+=`;background-image:url(${rec.dataUrl});background-size:cover;background-position:center`;}).catch(()=>{});
        const deltaEl=document.getElementById('cf-delta');
        if(bMeta&&aMeta&&bMeta.peso&&aMeta.peso){
          const d=(aMeta.peso-bMeta.peso).toFixed(1);
          deltaEl.textContent=`Peso: ${d>0?'+':''}${d} kg`;
        }else{
          deltaEl.textContent='';
        }
      }
      document.getElementById('cf-before').onchange=function(){snd();render();};
      document.getElementById('cf-after').onchange=function(){snd();render();};
      render();
    };

    /* ────────────────────────────────────────
       8. PAYWALL DEDICATO (limite free raggiunto / confronto premium)
       ──────────────────────────────────────── */
    window.showPaywallFoto=function(fb){
      resetScreen();setHdr('🔒 PREMIUM','Foto Progressi',true);
      const scr=document.getElementById('screen');
      scr.className='screen anim-in';
      scr.innerHTML=`<div style="padding:24px 20px;text-align:center">
        <div style="font-size:40px;margin-bottom:10px">📸</div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;font-weight:700;margin-bottom:8px">Foto illimitate + confronto prima/dopo</div>
        <div style="font-size:12px;color:var(--ink2);line-height:1.7;margin-bottom:20px">Piano free: massimo ${FREE_LIMIT} foto salvate. Sblocca Premium per foto illimitate nel tempo e il confronto visivo tra due date qualsiasi.</div>
        <button class="big-btn success" style="margin:0 0 10px" onclick="snd();navPush(showPaywall)">🔓 SBLOCCA PREMIUM</button>
      </div>`;
    };

    console.log('%c[Corpora Fase 15] ✅ Foto Progressi nel tempo — galleria, confronto prima/dopo, storage IndexedDB separato da S/localStorage','color:#db2777;font-weight:bold;font-size:11px');

  });
})();
