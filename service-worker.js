const CACHE_NAME = 'wyr-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',  // replace with your actual CSS file name
  '/script.js',  // replace with your actual JS file name
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
