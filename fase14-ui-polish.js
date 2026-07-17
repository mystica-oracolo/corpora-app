/* ═══════════════════════════════════════════════════════════════
   FASE 14 — CORPORA — CONFERME E NOTIFICHE COERENTI CON L'APP

   Sostituisce alert()/confirm() nativi del browser (popup grigi di
   sistema) con modal costruiti nello stesso stile del resto
   dell'app. Usati in ~20 punti in app.js e fase3-upgrade.js.

   Nota tecnica: i pulsanti dei modal sono collegati con
   addEventListener (non onclick="...") proprio per evitare la
   stessa classe di bug del pulsante acqua — una funzione passata
   come callback JS mantiene il suo scope, mentre serializzarla in
   una stringa onclick lo perderebbe.
   ═══════════════════════════════════════════════════════════════ */
(function CorporaFase14(){

  function whenReady(fn){
    if(typeof showToast==='function'&&document.getElementById('modal-box')){
      fn();
    }else{
      setTimeout(()=>whenReady(fn),120);
    }
  }

  whenReady(function(){

    /* showConfirm(messaggio, onConfirm, opzioni)
       opzioni: {title, icon, danger, confirmLabel} */
    window.showConfirm=function(msg,onYes,opts){
      opts=opts||{};
      const box=document.getElementById('modal-box');
      box.innerHTML=`
        <div class="modal-handle"></div>
        <div class="modal-title" style="${opts.danger?'color:var(--red)':''}">${opts.icon||(opts.danger?'⚠️':'❓')} ${opts.title||'Conferma'}</div>
        <div style="padding:0 16px 16px;font-size:12px;color:var(--ink2);line-height:1.7">${msg}</div>
        <div style="display:flex;gap:8px;padding:0 16px 16px">
          <button id="sc-cancel" class="big-btn outline" style="margin:0;flex:1">Annulla</button>
          <button id="sc-confirm" class="big-btn ${opts.danger?'danger':'success'}" style="margin:0;flex:1">${opts.confirmLabel||'Conferma'}</button>
        </div>`;
      document.getElementById('modal').classList.add('open');
      document.getElementById('sc-cancel').onclick=function(){snd();closeModal();};
      document.getElementById('sc-confirm').onclick=function(){snd(opts.danger?'delete':'confirm');closeModal();onYes();};
    };

    /* showInfoModal(titolo, messaggio) — un solo pulsante "Capito",
       per avvisi informativi lunghi (sostituisce gli alert() più
       verbosi, dove un toast sarebbe troppo corto per leggerlo) */
    window.showInfoModal=function(title,msg,icon){
      const box=document.getElementById('modal-box');
      box.innerHTML=`
        <div class="modal-handle"></div>
        <div class="modal-title">${icon||'ℹ️'} ${title}</div>
        <div style="padding:0 16px 16px;font-size:12px;color:var(--ink2);line-height:1.7">${msg}</div>
        <div style="padding:0 16px 16px">
          <button id="si-ok" class="big-btn success" style="margin:0;width:100%">Capito</button>
        </div>`;
      document.getElementById('modal').classList.add('open');
      document.getElementById('si-ok').onclick=function(){snd();closeModal();};
    };

  });

})();
