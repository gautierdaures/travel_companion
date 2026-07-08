// Service worker — offline caching for Trip Companion.
// Bump CACHE version whenever you change app files or add a country.
const CACHE = "trip-companion-v9";

// Every country data file must be listed here so it is available offline.
const DATA_FILES = [
  "./data/index.js",
  "./data/geo.js",
  "./data/russia.js",
  "./data/china.js",
  "./data/vietnam.js",
  "./data/laos.js",
  "./data/cambodia.js",
];

const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./wiki.js",
  "./expenses.js",
  "./fx.js",
  "./countries.js",
  "./firebase-config.js",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  ...DATA_FILES,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cache-first for same-origin GETs (stale-while-revalidate for freshness online).
self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET" || new URL(request.url).origin !== location.origin) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(request, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
