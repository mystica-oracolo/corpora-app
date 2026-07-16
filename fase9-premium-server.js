/* ═══════════════════════════════════════════════════════════════
   FASE 9 — CORPORA — PREMIUM SERVER-SIDE

   Sostituisce il flag locale bypassabile (S.settings.premium letto
   da console) con una verifica reale contro la tabella
   "subscriptions" su Supabase, scritta solo dal Cloudflare Worker
   dopo un pagamento Stripe verificato.

   Pattern coerente con le fasi precedenti: nessuna riscrittura di
   app.js/fase3, solo override via whenReady() + window.*.

   ⚠️ CONFIGURAZIONE RICHIESTA: imposta WORKER_URL qui sotto con
   l'URL del tuo Cloudflare Worker (fase9: stripe-webhook-worker.js)
   dopo averlo deployato.
   ═══════════════════════════════════════════════════════════════ */
(function CorporaFase9(){

  const WORKER_URL = 'https://TUO-WORKER.workers.dev'; // ⚠️ da sostituire dopo il deploy

  function whenReady(fn){
    if(typeof S!=='undefined'&&typeof saveState==='function'&&typeof showToast==='function'
       &&typeof SB!=='undefined'&&typeof CUR!=='undefined'){
      fn();
    }else{
      setTimeout(()=>whenReady(fn),120);
    }
  }

  whenReady(function(){

    /* ────────────────────────────────────────
       1. STATO PREMIUM: cache locale + verifica server
       isPremium() resta sincrona (serve ovunque nell'app per il
       render immediato), ma il valore ora arriva da Supabase e
       viene aggiornato in background. La cache locale copre i casi
       offline con una finestra di tolleranza di 3 giorni, dopodiché
       il premium scade localmente finché non torna online.
       ──────────────────────────────────────── */
    const GRACE_MS = 3*24*60*60*1000; // 3 giorni offline tollerati

    window.isPremium=function(){
      const cache=S.settings._premiumCache;
      if(!cache)return false;
      const age=Date.now()-new Date(cache.checkedAt).getTime();
      if(age>GRACE_MS)return false; // cache scaduta, tratta come non-premium finché non riverifica
      return cache.status==='active'||cache.status==='trialing';
    };
    window.isPremium.__fase9=true;

    async function refreshPremiumStatus(){
      if(!CUR||!SB||!SB.enabled){
        // Sync Supabase non configurata: senza backend non c'è modo
        // sicuro di verificare il pagamento. Vedi ISTRUZIONI-FASE9.md.
        return;
      }
      const rows=await sbRequest('GET','subscriptions?slug=eq.'+encodeURIComponent(CUR.slug)+'&limit=1');
      if(!rows)return; // offline o errore: mantieni la cache esistente
      const row=rows[0];
      S.settings._premiumCache={
        status: row?row.status:'inactive',
        plan: row?row.plan:null,
        currentPeriodEnd: row?row.current_period_end:null,
        checkedAt: new Date().toISOString()
      };
      saveState();
      updatePremiumUI();
    }
    window.refreshPremiumStatus=refreshPremiumStatus;

    function updatePremiumUI(){
      // Se l'utente è su una schermata che dipende dallo stato premium,
      // la ridisegna così lo sblocco è visibile subito dopo il pagamento.
      const cur=_navStack&&_navStack[_navStack.length-1];
      if(cur)cur(false);
    }

    // Verifica a ogni login/avvio app, e ogni 6 ore se l'app resta aperta
    refreshPremiumStatus();
    setInterval(refreshPremiumStatus, 6*60*60*1000);

    /* ────────────────────────────────────────
       2. CHECKOUT REALE — sostituisce activatePremiumDemo
       ──────────────────────────────────────── */
    window.startCheckout=async function(plan){
      if(!CUR){showToast('Effettua l\'accesso prima di continuare');return;}
      showToast('Apertura pagamento sicuro…');
      try{
        const res=await fetch(WORKER_URL+'/create-checkout-session',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({slug:CUR.slug,plan})
        });
        if(!res.ok)throw new Error('checkout error');
        const data=await res.json();
        if(data.url)location.href=data.url;
        else throw new Error('no url');
      }catch(e){
        console.error('[NT] startCheckout error:',e);
        showToast('⚠️ Errore nell\'apertura del pagamento. Riprova tra poco.');
      }
    };

    // Sostituisce lo showPaywall demo (fase3) con la versione reale.
    // Stessa struttura visiva, bottoni collegati a Stripe vero.
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
          <button class="big-btn success" onclick="snd('confirm');startCheckout('monthly')" style="margin-bottom:10px">ATTIVA MENSILE</button>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;font-weight:700;margin:14px 0 4px">59€/anno <span style="font-size:9px;color:var(--ink3);font-weight:400">(risparmi 2 mesi)</span></div>
          <button class="big-btn success" onclick="snd('confirm');startCheckout('yearly')">ATTIVA ANNUALE</button>
          <div style="font-size:9px;color:var(--ink3);margin-top:12px">Pagamento sicuro via Stripe · disdici quando vuoi</div>
        </div></div>`;
    };

    /* ────────────────────────────────────────
       3. RITORNO DA STRIPE (success_url) — forza una riverifica
       immediata invece di aspettare il prossimo ciclo di refresh
       ──────────────────────────────────────── */
    if(location.search.includes('premium=success')){
      showToast('✅ Pagamento ricevuto — verifica in corso…');
      refreshPremiumStatus().then(()=>{
        if(isPremium())showToast('🎉 Premium attivo!');
      });
      history.replaceState(null,'',location.pathname);
    }

  });

})();
