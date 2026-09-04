const CACHE_NAME = 'r1pus-shell-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './Logo3.png',
  './Logo2.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Hanya cache request statis lokal GitHub, abaikan request ke script.google.com
  if (e.request.url.includes('script.google.com')) return;
  
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
