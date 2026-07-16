/* ═══════════════════════════════════════════════════════════════
   FASE 11 — CORPORA — SCANNER BARCODE (Open Food Facts)

   Completa SEZIONE 5 del blueprint con l'acquisizione alimenti
   confezionati via fotocamera, invece della sola ricerca manuale
   nel DB da ~920 alimenti.

   Design scelto:
   - BarcodeDetector nativo del browser (Chrome/Android, il tuo
     target di test principale) → zero librerie esterne da caricare
   - Se non supportato (iOS Safari <16.4, desktop non-Chromium):
     fallback a inserimento manuale del codice a barre
   - Ogni prodotto trovato viene salvato in S.customFoods, come un
     alimento personalizzato qualsiasi (barcode:true) → eredita
     GRATIS tutto il flusso esistente: ricerca, "usati di recente",
     modifica grammi, ecc. Nessuna modifica a openFoodModal/addFood.
   - Cache per barcode: uno stesso prodotto scansionato una seconda
     volta viene trovato subito in locale, senza richiamare l'API.

   Pattern coerente con le fasi precedenti: nessuna riscrittura,
   solo estensione via whenReady() + override window.* dove serve.
   ═══════════════════════════════════════════════════════════════ */
(function CorporaFase11(){

  function whenReady(fn){
    if(typeof S!=='undefined'&&typeof saveState==='function'&&typeof showToast==='function'
       &&typeof getDB==='function'&&typeof openFoodModal==='function'&&typeof renderAlimenti==='function'){
      fn();
    }else{
      setTimeout(()=>whenReady(fn),120);
    }
  }

  whenReady(function(){

    /* ────────────────────────────────────────
       1. BOTTONE "SCANSIONA" nella schermata Alimenti
       Wrap non invasivo: renderAlimenti resta quella originale,
       aggiungiamo solo il bottone dopo che ha disegnato lo schermo.
       ──────────────────────────────────────── */
    const _origRenderAlimenti=window.renderAlimenti;
    window.renderAlimenti=function(){
      _origRenderAlimenti();
      const bar=document.querySelector('.srch-bar');
      if(bar&&!document.getElementById('bc-scan-btn')){
        const btn=document.createElement('button');
        btn.id='bc-scan-btn';
        btn.textContent='📷';
        btn.title='Scansiona codice a barre';
        btn.style.cssText='padding:9px 12px;background:var(--ink,#1a1a2e);color:#fff;border:none;border-radius:var(--r,8px);font-size:14px;cursor:pointer;flex-shrink:0';
        btn.onclick=function(){snd();openBarcodeScanner();};
        bar.appendChild(btn);
      }
    };

    /* ────────────────────────────────────────
       2. APERTURA SCANNER (overlay indipendente, non
       dipende da CSS/markup esistenti — creato da zero)
       ──────────────────────────────────────── */
    let _stream=null, _detecting=false, _rafId=null;

    window.openBarcodeScanner=async function(){
      if(!('BarcodeDetector' in window)){
        openManualBarcodeEntry();
        return;
      }
      const overlay=buildScannerOverlay();
      document.body.appendChild(overlay);

      const video=overlay.querySelector('#bc-video');
      try{
        _stream=await navigator.mediaDevices.getUserMedia({
          video:{facingMode:'environment'}
        });
        video.srcObject=_stream;
        await video.play();
      }catch(e){
        console.warn('[NT] Camera error:',e);
        closeScannerOverlay();
        showToast('⚠️ Fotocamera non disponibile — inserisci il codice a mano');
        openManualBarcodeEntry();
        return;
      }

      const detector=new BarcodeDetector({formats:['ean_13','ean_8','upc_a','upc_e']});
      _detecting=true;
      const loop=async()=>{
        if(!_detecting)return;
        try{
          const codes=await detector.detect(video);
          if(codes.length){
            const code=codes[0].rawValue;
            _detecting=false;
            closeScannerOverlay();
            snd('confirm');
            lookupBarcode(code);
            return;
          }
        }catch(e){/* frame non leggibile, si riprova al prossimo giro */}
        _rafId=requestAnimationFrame(loop);
      };
      loop();
    };

    function buildScannerOverlay(){
      const ov=document.createElement('div');
      ov.id='bc-scanner-overlay';
      ov.style.cssText='position:fixed;inset:0;background:#000;z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center';
      ov.innerHTML=`
        <video id="bc-video" playsinline muted style="width:100%;max-width:480px;border-radius:8px"></video>
        <div style="color:#fff;font-family:'IBM Plex Mono',monospace;font-size:12px;margin-top:16px;text-align:center;padding:0 20px">
          Inquadra il codice a barre del prodotto
        </div>
        <button id="bc-manual-btn" style="margin-top:10px;background:none;border:1.5px solid #fff;color:#fff;padding:8px 16px;border-radius:20px;font-family:'IBM Plex Mono',monospace;font-size:11px;cursor:pointer">⌨ Inserisci a mano</button>
        <button id="bc-close-btn" style="margin-top:24px;background:none;border:none;color:#fff;font-size:28px;cursor:pointer">✕</button>`;
      ov.querySelector('#bc-close-btn').onclick=()=>{snd();closeScannerOverlay();};
      ov.querySelector('#bc-manual-btn').onclick=()=>{snd();closeScannerOverlay();openManualBarcodeEntry();};
      return ov;
    }

    function closeScannerOverlay(){
      _detecting=false;
      if(_rafId)cancelAnimationFrame(_rafId);
      if(_stream){_stream.getTracks().forEach(t=>t.stop());_stream=null;}
      const ov=document.getElementById('bc-scanner-overlay');
      if(ov)ov.remove();
    }
    window.closeScannerOverlay=closeScannerOverlay; // utile per debug/test manuale

    /* ────────────────────────────────────────
       3. INSERIMENTO MANUALE (fallback se camera/BarcodeDetector
       non disponibili, o se l'utente preferisce digitare)
       ──────────────────────────────────────── */
    function openManualBarcodeEntry(){
      document.getElementById('modal-box').innerHTML=`
        <div class="modal-handle"></div>
        <div class="modal-title">⌨ Codice a barre</div>
        <div class="modal-sub">Inserisci le cifre stampate sotto al codice a barre (EAN/UPC)</div>
        <input class="gram-inp" id="bc-manual-code" type="text" inputmode="numeric" pattern="[0-9]*"
          style="width:100%;text-align:center;font-size:18px;letter-spacing:2px" placeholder="es. 8001234567890" maxlength="14">
        <button class="conf-btn green-btn" onclick="snd('confirm');confirmManualBarcode()">🔍 CERCA PRODOTTO</button>`;
      document.getElementById('modal').classList.add('open');
      setTimeout(()=>document.getElementById('bc-manual-code')?.focus(),150);
    }
    window.confirmManualBarcode=function(){
      const code=(document.getElementById('bc-manual-code').value||'').trim();
      if(!/^\d{6,14}$/.test(code)){showToast('⚠ Codice non valido');return;}
      closeModal();
      lookupBarcode(code);
    };

    /* ────────────────────────────────────────
       4. RICERCA PRODOTTO (cache locale → Open Food Facts)
       ──────────────────────────────────────── */
    async function lookupBarcode(code){
      if(!S.customFoods)S.customFoods=[];

      // Cache: stesso barcode già scansionato in passato
      const cached=S.customFoods.find(f=>f.barcode===code);
      if(cached){
        openFoodModal(cached.id);
        return;
      }

      showToast('🔍 Ricerca prodotto…');
      let data;
      try{
        const res=await fetch('https://world.openfoodfacts.org/api/v2/product/'+encodeURIComponent(code)+'.json');
        data=await res.json();
      }catch(e){
        console.warn('[NT] Open Food Facts fetch error:',e);
        showToast('⚠️ Connessione assente — inserisci l\'alimento a mano');
        openManualFoodFallback(code);
        return;
      }

      if(!data||data.status!==1||!data.product){
        showToast('❌ Prodotto non trovato nel database Open Food Facts');
        openManualFoodFallback(code);
        return;
      }

      const food=mapOFFProduct(data.product,code);
      if(!food){
        showToast('⚠️ Dati nutrizionali incompleti per questo prodotto');
        openManualFoodFallback(code, data.product.product_name||'');
        return;
      }

      S.customFoods.push(food);
      saveState();
      showToast('✅ '+food.name+' trovato!');
      openFoodModal(food.id);
    }

    // ID numerico derivato dal barcode, in una fascia che non collide
    // né con il DB curato (id bassi) né con i custom food manuali (9000+)
    function barcodeToId(code){
      const n=parseInt(code.replace(/\D/g,''),10)||0;
      return 8000000+(n%1000000);
    }

    function mapOFFProduct(p,code){
      const n=p.nutriments||{};
      const kcal=n['energy-kcal_100g']??n['energy-kcal']??null;
      if(kcal==null)return null; // senza kcal/100g il resto dell'app non può funzionare
      return{
        id: barcodeToId(code),
        name: (p.product_name||p.generic_name||'Prodotto senza nome').trim().slice(0,80),
        brand: (p.brands||'').split(',')[0].trim(),
        cat: 'Confezionati',
        e: Math.round(kcal),
        p: +(n['proteins_100g']||0).toFixed(1),
        c: +(n['carbohydrates_100g']||0).toFixed(1),
        s: +(n['sugars_100g']||0).toFixed(1),
        f: +(n['fat_100g']||0).toFixed(1),
        fi: +(n['fiber_100g']||0).toFixed(1),
        sa: +(n['saturated-fat_100g']||0).toFixed(1),
        na: Math.round((n['sodium_100g']||0)*1000), // OFF in g → mg, come il resto del DB
        emoji: '📦',
        custom: true,
        barcode: code
      };
    }

    // Prodotto non trovato o incompleto: precompila l'alimento
    // personalizzato esistente invece di far ripartire da zero l'utente
    function openManualFoodFallback(code,name){
      showAddCustomFood();
      setTimeout(()=>{
        const nameEl=document.getElementById('cf-name');
        if(nameEl&&name)nameEl.value=name;
      },160);
    }

  });

})();
