// 网络优先：刷新即可读取新代码；缓存只用于断网回退，不需手动改版本号。
const scopeURL = new URL('./', self.location.href);
const CACHE = `quit-smoke-heroes-${encodeURIComponent(scopeURL.pathname)}-network`;
const CORE = ['./', './index.html', './css/style.css', './js/app.js', './js/heroes.js',
  './js/storage.js', './js/stats.js', './js/sos.js', './manifest.webmanifest', './icons/icon.svg'];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(CORE);
    // 头像按实际访问缓存，缺失图片不影响核心资源安装。
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => /^quit-smoke-heroes-v\d+$/.test(key)).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== scopeURL.origin || !url.pathname.startsWith(scopeURL.pathname)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      // 绕过 HTTP 缓存，开发时修改文件后刷新就能看到变化。
      const response = await fetch(event.request, { cache: 'no-store' });
      if (response.ok) {
        // 缓存写入失败也应返回已获取的网络响应。
        try { await cache.put(event.request, response.clone()); } catch {}
      }
      return response;
    } catch {
      const cached = await cache.match(event.request);
      if (cached) return cached;
      if (event.request.mode === 'navigate') return (await cache.match(new URL('./index.html', scopeURL).href)) || Response.error();
      return Response.error();
    }
  })());
});
