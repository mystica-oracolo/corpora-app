/* ═══════════════════════════════════════════════════════════════
   CORPORA / NUTRITRACK — SERVICE WORKER
   Fase 10 — Affidabilità offline

   Strategia (stessa logica già validata su Mystica Oracoli dopo il
   bug white-screen: MAI cache-first sui JS, o un deploy con errore
   resta "congelato" nella cache degli utenti):

   - HTML e file .js  → NETWORK FIRST (prova la rete, se offline
     usa la cache; se la rete risponde, la cache viene aggiornata)
   - CSS/font/icone   → CACHE FIRST (cambiano raramente, più veloce)

   ⚠️ IMPORTANTE — WORKFLOW DI DEPLOY:
   Ad ogni modifica di app.js / style.css / qualsiasi fase*.js,
   incrementa CACHE_VERSION qui sotto PRIMA di pubblicare.
   Stesso identico step che già fai su Mystica Oracoli prima di
   ogni test — qui vale la stessa regola.
   ═══════════════════════════════════════════════════════════════ */

const CACHE_VERSION = 'corpora-v3';
const CACHE_NAME = `corpora-cache-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './onboarding.js',
  './fase3-upgrade.js',
  './fase4-motore-nutrizionale.js',
  './fase5-motore-allenamento.js',
  './fase6-database.js',
  './fase7-design-system.js',
  './fase8-kpi-gamification-compliance.js',
  './fase14-ui-polish.js',
  './fase11-barcode.js',
  './fase13-mia-scheda.js',
  './fase15-foto-progressi.js'
];

/* ── INSTALL: precache dei file base ── */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

/* ── ACTIVATE: elimina le cache di versioni precedenti ── */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k.startsWith('corpora-cache-') && k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

/* ── FETCH: instrada in base al tipo di risorsa ── */
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Solo GET; ignora richieste cross-origin (es. Supabase, font Google)
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const isCodeOrHtml =
    req.mode === 'navigate' ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.html') ||
    url.pathname === '/' ||
    url.pathname.endsWith('/');

  if (isCodeOrHtml) {
    event.respondWith(networkFirst(req));
  } else {
    event.respondWith(cacheFirst(req));
  }
});

/* ── Strategia NETWORK FIRST (HTML + JS) ──
   Mai servire codice vecchio se la rete c'è: previene il bug
   white-screen da cache "congelata" su un deploy rotto. */
async function networkFirst(req) {
  try {
    const fresh = await fetch(req);
    if (fresh && fresh.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(req, fresh.clone());
    }
    return fresh;
  } catch (err) {
    const cached = await caches.match(req);
    if (cached) return cached;
    // Fallback estremo offline senza cache: pagina base se disponibile
    if (req.mode === 'navigate') {
      const fallback = await caches.match('./index.html');
      if (fallback) return fallback;
    }
    throw err;
  }
}

/* ── Strategia CACHE FIRST (CSS/asset statici) ── */
async function cacheFirst(req) {
  const cached = await caches.match(req);
  if (cached) return cached;
  try {
    const fresh = await fetch(req);
    if (fresh && fresh.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(req, fresh.clone());
    }
    return fresh;
  } catch (err) {
    throw err;
  }
}
