import assert from 'node:assert/strict';
import { test } from 'node:test';
import { HEROES } from '../js/heroes.js';

test('HTTP 资源与 SW 缓存：首次安装、离线命中、导航回退、清理仅限本站', async () => {
  const origin = 'http://127.0.0.1:8765';
  const listeners = {};
  const stores = new Map([['another-project-v1', new Map()], ['quit-smoke-heroes-v0', new Map()]]);
  const networkFetch = globalThis.fetch;
  let offline = false;
  let claimed = false;
  const keyOf = input => new URL(typeof input === 'string' ? input : input.url || input.href, origin + '/').href;
  const cacheAPI = { async open(name) {
    if (!stores.has(name)) stores.set(name, new Map());
    const entries = stores.get(name);
    return { async addAll(paths) { for (const path of paths) await this.add(path); },
      async add(path) { const key = keyOf(path); const response = await globalThis.fetch(key); if (!response.ok) throw Error('cache fetch failed'); entries.set(key, response); },
      async match(request) { const response = entries.get(keyOf(request)); return response?.clone(); },
      async put(request, response) { entries.set(keyOf(request), response); } };
  }, async keys() { return [...stores.keys()]; }, async delete(name) { return stores.delete(name); } };
  const realSelf = globalThis.self, realCaches = globalThis.caches;
  try {
    globalThis.self = { location: { href: origin + '/sw.js' }, addEventListener: (name, cb) => { listeners[name] = cb; }, clients: { async claim() { claimed = true; } } };
    globalThis.caches = cacheAPI;
    globalThis.fetch = input => { if (offline) return Promise.reject(Error('offline')); return networkFetch(input); };
    HEROES[0].image = 'images/missing-test-avatar.png';
    await import('../sw.js');
    let pending;
    listeners.install({ waitUntil(promise) { pending = promise; } }); await pending;
    assert.equal(stores.get('quit-smoke-heroes-v1').size, 10);
    HEROES[0].image = '';
    listeners.activate({ waitUntil(promise) { pending = promise; } }); await pending;
    assert.equal(claimed, true); assert(stores.has('another-project-v1')); assert(!stores.has('quit-smoke-heroes-v0'));
    offline = true;
    for (const path of ['/', '/index.html', '/css/style.css', '/js/app.js', '/js/heroes.js', '/js/storage.js', '/js/stats.js', '/js/sos.js', '/manifest.webmanifest', '/icons/icon.svg']) {
      listeners.fetch({ request: { url: origin + path, method: 'GET', mode: 'same-origin' }, respondWith(promise) { pending = promise; } });
      const response = await pending; assert.equal(response.status, 200); assert((await response.text()).length > 0);
    }
    listeners.fetch({ request: { url: origin + '/unknown-page', method: 'GET', mode: 'navigate' }, respondWith(promise) { pending = promise; } });
    assert((await (await pending).text()).includes('戒烟英雄殿'));
    let intercepted = false;
    listeners.fetch({ request: { url: 'https://www.who.int/', method: 'GET' }, respondWith() { intercepted = true; } });
    assert.equal(intercepted, false);
  } finally {
    HEROES[0].image = ''; globalThis.fetch = networkFetch;
    if (realSelf === undefined) delete globalThis.self; else globalThis.self = realSelf;
    if (realCaches === undefined) delete globalThis.caches; else globalThis.caches = realCaches;
  }
});
