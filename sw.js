import { HEROES } from './js/heroes.js';
// 每次发布修改版本号；安装全部核心文件成功后，才会激活这一版本。
const CACHE = 'quit-smoke-heroes-v1';
const CORE = ['./', './index.html', './css/style.css', './js/app.js', './js/heroes.js',
  './js/storage.js', './js/stats.js', './js/sos.js', './manifest.webmanifest', './icons/icon.svg'];
const scopeURL = new URL('./', self.location.href);
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(CORE);
    // 可选头像坏链不会阻止安装；修改头像字段后刷新即可预缓存。
    await Promise.allSettled(HEROES.filter(h => h.image).map(h => {
      const url = new URL(h.image, scopeURL);
      if (url.origin === scopeURL.origin && url.pathname.startsWith(scopeURL.pathname)) return cache.add(url.href);
      return Promise.resolve();
    }));
    // 不强制跳过等待，避免旧页面混用新模块；关闭旧标签后启用新版。
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('quit-smoke-heroes-') && key !== CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== scopeURL.origin || !url.pathname.startsWith(scopeURL.pathname)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(event.request);
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response.ok && response.type === 'basic' &&
        (CORE.some(path => new URL(path, scopeURL).pathname === url.pathname) || url.pathname.startsWith(new URL('images/', scopeURL).pathname))) {
        await cache.put(event.request, response.clone());
      }
      return response;
    } catch {
      if (event.request.mode === 'navigate') return (await cache.match(new URL('./index.html', scopeURL).href)) || Response.error();
      return Response.error();
    }
  })());
});
