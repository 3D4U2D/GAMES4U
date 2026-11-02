// GAMES4U service worker: eerst netwerk (altijd nieuwste versie), offline uit de cache.
const CACHE='games4u-v1';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png',
  './shared/chars.js','./tikblok/','./tikblok/index.html','./tikblok/icon-192.png','./flappyme/','./flappyme/index.html','./flappyme/icon-192.png',
  './bergloop/','./bergloop/index.html','./bergloop/icon-192.png','./hoogvlieger/','./hoogvlieger/index.html','./hoogvlieger/icon-192.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request).then(r=>{if(r.ok){const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));}return r;})
    .catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('./index.html'))));
});
