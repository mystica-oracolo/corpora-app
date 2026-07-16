/* ═══════════════════════════════════════════════════════════════
   FASE 7 — CORPORA
   Completa SEZIONE 9 del blueprint (Design System).

   Già presenti prima di questa fase: progress ring kcal, card
   system, stat-grid per KPI, empty state (icona+testo), micro-
   transizioni tra schermate (.anim-in / fadeInUp su navPush).

   Aggiunti qui, gli unici due elementi "da formalizzare" citati
   dal blueprint che mancavano:
     1. Badge adherence (pill colorata riusabile — verde/ambra/rosso)
     2. Calendar heatmap per lo streak (stile GitHub contributions)

   Nessuna riscrittura: si aggancia a showAdherenceScore (Fase 1)
   e a showHome (app.js) via wrapping, stesso pattern delle fasi
   precedenti.
   ═══════════════════════════════════════════════════════════════ */
(function CorporaFase7(){

  function whenReady7(fn){
    if(typeof S!=='undefined'&&typeof calcStreak==='function'&&typeof showAdherenceScore==='function'){
      fn();
    }else{
      setTimeout(()=>whenReady7(fn),150);
    }
  }

  whenReady7(function(){

    /* ────────────────────────────────────────
       1. BADGE ADHERENCE
       ──────────────────────────────────────── */
    function adherenceBadge(score){
      const tier=score>=80?{c:'good',l:'Ottimo'}:score>=50?{c:'mid',l:'Da migliorare'}:{c:'low',l:'Basso'};
      return `<span class="adh-badge ${tier.c}"><span class="adh-dot"></span>${tier.l} · ${score}</span>`;
    }
    window.adherenceBadge=adherenceBadge;

    /* ────────────────────────────────────────
       2. CALENDAR HEATMAP (ultimi 70 giorni = 10 settimane)
       Livello 0-4 combina: pasti loggati + allenamento svolto.
       ──────────────────────────────────────── */
    function dayActivityLevel(ds){
      const src=ds===TODAY?S.meals:S.mealHistory?.[ds];
      const hasMeals=src?Object.values(src).some(arr=>(arr||[]).length>0):false;
      const hasWorkout=(S.workouts?.[ds]||[]).length>0;
      if(hasMeals&&hasWorkout)return 4;
      if(hasWorkout)return 3;
      if(hasMeals)return 2;
      return 0;
    }

    function buildHeatmapData(days){
      const out=[];
      for(let i=days-1;i>=0;i--){
        const d=new Date();d.setDate(d.getDate()-i);
        const ds=d.toISOString().slice(0,10);
        out.push({date:ds,level:dayActivityLevel(ds)});
      }
      return out;
    }

    function renderHeatmap(days){
      days=days||70;
      const data=buildHeatmapData(days);
      // padding iniziale per allineare la prima colonna al lunedì
      const firstDow=(new Date(data[0].date+'T12:00:00').getDay()+6)%7;
      const pad=Array(firstDow).fill(null);
      const cells=[...pad,...data];
      const cellHtml=cells.map(c=>{
        if(!c)return `<div class="heatmap-cell"></div>`;
        return `<div class="heatmap-cell ${c.level?'l'+c.level:''}" title="${c.date}"></div>`;
      }).join('');
      return `<div class="heatmap-wrap">
        <div class="heatmap-grid">${cellHtml}</div>
        <div class="heatmap-legend">meno
          <span class="heatmap-cell"></span><span class="heatmap-cell l1"></span><span class="heatmap-cell l2"></span><span class="heatmap-cell l3"></span><span class="heatmap-cell l4"></span>
        più</div>
      </div>`;
    }
    window.renderHeatmap=renderHeatmap;

    /* ────────────────────────────────────────
       3. AGGANCIO — schermata Adherence Score
       ──────────────────────────────────────── */
    const _origShowAdherence7=window.showAdherenceScore;
    window.showAdherenceScore=function(fb){
      _origShowAdherence7(fb);
      const scr=document.getElementById('screen');
      const firstCard=scr.querySelector('.card');
      if(firstCard){
        const hdr=firstCard.querySelector('.card-hdr');
        if(hdr&&!hdr.querySelector('.adh-badge')){
          const a=getAdherenceScore();
          hdr.insertAdjacentHTML('beforeend',` ${adherenceBadge(a.score)}`);
          hdr.style.display='flex';hdr.style.justifyContent='space-between';hdr.style.alignItems='center';
        }
      }
      const heatmapCard=document.createElement('div');
      heatmapCard.className='card';
      heatmapCard.innerHTML=`<div class="card-hdr">🗓️ COSTANZA — ULTIME 10 SETTIMANE</div>
        <div class="card-body">${renderHeatmap(70)}</div>`;
      scr.appendChild(heatmapCard);
    };

    /* ────────────────────────────────────────
       4. AGGANCIO — Home (badge accanto allo streak)
       ──────────────────────────────────────── */
    const _origShowHome7=window.showHome;
    if(typeof _origShowHome7==='function'){
      window.showHome=function(fb){
        _origShowHome7(fb);
        const str=calcStreak();
        if(str<2)return; // coerente con la soglia già usata per mostrare lo streak
        const a=getAdherenceScore();
        const streakEls=[...document.querySelectorAll('#screen *')].filter(el=>el.children.length===0&&/giorni streak/i.test(el.textContent||''));
        streakEls.forEach(el=>{
          if(el.querySelector('.adh-badge'))return;
          el.insertAdjacentHTML('beforeend',` ${adherenceBadge(a.score)}`);
        });
      };
    }

    console.log('%c[Corpora Fase 7] ✅ Design system: badge adherence · calendar heatmap streak','color:#0f766e;font-weight:bold;font-size:11px');

  });
})();
