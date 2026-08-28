
const CACHE="home-workout-v67-body-latest";
const CORE=[
  "./",
  "./index.html",
  "./styles.css?v=67",
  "./app.js?v=67",
  "./manifest.json",
  "./assets/home-workout-brand.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/apple-touch-icon.png"
];

self.addEventListener("install",event=>{
  event.waitUntil(
    caches.open(CACHE)
      .then(cache=>cache.addAll(CORE))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

async function navigationResponse(request){
  try{
    const fresh=await fetch(request,{cache:"no-store"});
    const cache=await caches.open(CACHE);
    cache.put("./index.html",fresh.clone());
    return fresh;
  }catch(err){
    return (await caches.match("./index.html")) || Response.error();
  }
}

async function assetResponse(request){
  const cached=await caches.match(request);
  if(cached) return cached;
  try{
    const fresh=await fetch(request);
    if(fresh && (fresh.ok || fresh.type==="opaque")){
      const cache=await caches.open(CACHE);
      cache.put(request,fresh.clone());
    }
    return fresh;
  }catch(err){
    return Response.error();
  }
}

self.addEventListener("fetch",event=>{
  const request=event.request;
  if(request.method!=="GET") return;

  if(request.mode==="navigate"){
    event.respondWith(navigationResponse(request));
    return;
  }

  event.respondWith(assetResponse(request));
});
