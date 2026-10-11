import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFile } from 'node:fs/promises';
import { runInThisContext, runInNewContext } from 'node:vm';

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
    globalThis.fetch = input => { if (offline) return Promise.reject(Error('offline')); return networkFetch(keyOf(input)); };

    runInThisContext(await readFile(new URL('../sw.js', import.meta.url), 'utf8'));
    let pending;
    listeners.install({ waitUntil(promise) { pending = promise; } }); await pending;
    assert.equal(stores.get('quit-smoke-heroes-%2F-network').size, 10);

    listeners.activate({ waitUntil(promise) { pending = promise; } }); await pending;
    assert.equal(claimed, true); assert(stores.has('another-project-v1')); assert(!stores.has('quit-smoke-heroes-v0'));
    // 联网时必须替换已缓存旧内容；非核心同源资源也在运行时缓存。
    const request = path => ({ url: origin + path, method: 'GET', mode: 'same-origin' });
    const fetchResponse = async path => {
      listeners.fetch({ request: request(path), respondWith(promise) { pending = promise; } });
      return pending;
    };
    const entries = stores.get('quit-smoke-heroes-%2F-network');
    entries.set(origin + '/js/app.js', new Response('stale'));
    assert((await (await fetchResponse('/js/app.js')).text()).includes('validState'));
    assert((await entries.get(origin + '/js/app.js').clone().text()).includes('validState'));
    globalThis.fetch = async (input, options) => {
      assert.equal(options.cache, 'no-store');
      return new Response('avatar-v2');
    };
    assert.equal(await (await fetchResponse('/images/runtime.png')).text(), 'avatar-v2');
    globalThis.fetch = () => Promise.reject(Error('offline'));
    assert.equal(await (await fetchResponse('/images/runtime.png')).text(), 'avatar-v2');
    globalThis.fetch = input => { if (offline) return Promise.reject(Error('offline')); return networkFetch(keyOf(input)); };
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
 globalThis.fetch = networkFetch;
    if (realSelf === undefined) delete globalThis.self; else globalThis.self = realSelf;
    if (realCaches === undefined) delete globalThis.caches; else globalThis.caches = realCaches;
  }
});

test('子路径 SW：缓存和导航回退位于项目目录，不拦截其他项目', async () => {
  const base = 'https://example.github.io/quit-smoke-heroes/';
  const listeners = {}, entries = new Map();
  let offline = false, pending, intercepted = false;
  const key = input => new URL(typeof input === 'string' ? input : input.url || input.href, base).href;
  const context = { URL, Response, encodeURIComponent,
    self: { location: { href: base + 'sw.js' }, addEventListener: (name, cb) => { listeners[name] = cb; }, clients: { async claim() {} } },
    caches: { async open() { return {
      async addAll(paths) { for (const path of paths) entries.set(key(path), new Response(key(path))); },
      async match(input) { return entries.get(key(input))?.clone(); },
      async put(input, response) { entries.set(key(input), response); }
    }; } },
    async fetch(input) { if (offline) throw Error('offline'); return new Response('new module'); }
  };
  runInNewContext(await readFile(new URL('../sw.js', import.meta.url), 'utf8'), context);
  listeners.install({ waitUntil(promise) { pending = promise; } }); await pending;
  assert.equal(entries.size, 10);
  assert([...entries.keys()].every(url => url.startsWith(base)));
  offline = true;
  listeners.fetch({ request: { url: base + 'unknown', method: 'GET', mode: 'navigate' }, respondWith(promise) { pending = promise; } });
  assert.equal(await (await pending).text(), base + 'index.html');
  for (const request of [{ url: 'https://example.github.io/other/app.js', method: 'GET' }, { url: base, method: 'POST' }]) {
    listeners.fetch({ request, respondWith() { intercepted = true; } });
  }
  assert.equal(intercepted, false);
});
