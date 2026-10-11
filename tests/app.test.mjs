import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFile } from 'node:fs/promises';
import { defaults } from '../js/storage.js';
import { DAY, localInput } from '../js/stats.js';

// 无浏览器环境下的交互逻辑测试；不替代真机布局、安装和浏览器缓存验证。
class Element {
  constructor() { this.listeners = {}; this.attributes = {}; this.children = []; this.style = { setProperty() {} }; this.dataset = {}; this.value = ''; this.open = false; }
  addEventListener(name, callback) { this.listeners[name] = callback; }
  fire(name) { this.listeners[name]?.({ preventDefault() {} }); }
  setAttribute(name, value) { this.attributes[name] = value; }
  removeAttribute(name) { delete this.attributes[name]; }
  append(...children) { this.children.push(...children); }
  replaceChildren(...children) { this.children = children; }
  showModal() { this.open = true; }
  close() { this.open = false; this.fire('close'); }
}
test('入口交互：切换英雄、设置、日志、失误、二次确认、成就去重', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const nodes = Object.fromEntries([...html.matchAll(/\bid="([^"]+)"/g)].map(m => [m[1], new Element()]));
  const tabs = ['home', 'milestones', 'logs', 'settings'].map(name => { const tab = new Element(); tab.dataset.tab = name; return tab; });
  const dialogs = ['sos', 'log-dialog', 'restart-dialog'];
  const meta = new Element(); const submit = new Element();
  nodes['log-form'].querySelector = () => submit;
  nodes['log-form'].reset = () => { nodes.intensity.value = '3'; nodes.result.value = 'held'; nodes['trigger-options'].children.forEach(label => { label.children[0].checked = false; }); };
  nodes.sos.querySelector = selector => selector === '.breath' ? new Element() : nodes[selector.slice(1)];
  const docListeners = {}, winListeners = {};
  const document = { body: new Element(), getElementById: id => nodes[id], createElement: () => new Element(),
    querySelector: selector => selector === 'dialog[open]' ? dialogs.map(id => nodes[id]).find(node => node.open) : meta,
    querySelectorAll: selector => selector === '[data-tab]' ? tabs : nodes['trigger-options'].children.map(label => label.children[0]).filter(input => input.checked),
    addEventListener: (name, cb) => { docListeners[name] = cb; } };
  const map = new Map(); const state = defaults(); state.config.quit = Date.now() - 7 * DAY;
  map.set('quit-smoke-heroes', JSON.stringify(state));
  const replacements = { document, window: { addEventListener: (name, cb) => { winListeners[name] = cb; }, scrollTo() {} },
    location: { current: '#home', get hash() { return this.current; }, set hash(value) { this.current = value.startsWith('#') ? value : '#' + value; } }, localStorage: { getItem: key => map.get(key) ?? null, setItem: (key, value) => map.set(key, value) },
    Image: class extends Element {}, navigator: {}, setInterval: () => 1, clearInterval() {}, setTimeout: () => 1, clearTimeout() {} };
  const descriptors = Object.fromEntries(Object.keys(replacements).map(key => [key, Object.getOwnPropertyDescriptor(globalThis, key)]));
  try {
    for (const [key, value] of Object.entries(replacements)) Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
    await import('../js/app.js');
    const saved = () => JSON.parse(map.get('quit-smoke-heroes'));
    assert.equal(nodes.days.textContent, 7);
    assert.equal(Object.keys(saved().awards).length, 3);
    const awards = JSON.stringify(saved().awards);
    nodes.roster.children[0].fire('click'); assert.equal(nodes['home-title'].textContent, 'DOOM');
    nodes['next-quote'].fire('click'); assert(nodes.quote.textContent.length > 0);
    nodes['settings-shortcut'].fire('click'); winListeners.hashchange();
    assert.equal(nodes.settings.hidden, false);
    nodes['per-day'].value = '0'; nodes['settings-form'].fire('submit'); assert(nodes['settings-error'].textContent.includes('有效时间'));
    nodes['per-day'].value = '10'; nodes['settings-form'].fire('submit'); assert.equal(saved().config.perDay, 10);
    const before = saved().config.quit;
    nodes['add-log'].fire('click'); assert.equal(nodes['log-dialog'].open, true);
    nodes['log-form'].fire('submit'); assert(nodes['log-error'].textContent.includes('触发场景'));
    nodes['trigger-options'].children[0].children[0].checked = true;
    nodes['trigger-options'].children[1].children[0].checked = true;
    nodes['log-form'].fire('submit'); assert.equal(saved().logs.length, 1); assert.equal(nodes['log-rate'].textContent, '100%');
    nodes['record-slip'].fire('click'); assert.equal(nodes.result.disabled, true);
    nodes['trigger-options'].children[1].children[0].checked = true;
    nodes['log-form'].fire('submit'); assert.equal(saved().logs[1].result, 'smoked');
    assert.equal(saved().config.quit, before); assert.equal(nodes['log-rate'].textContent, '50%');
    nodes.restart.fire('click'); assert.equal(saved().config.quit, before);
    nodes['cancel-restart'].fire('click'); assert.equal(saved().config.quit, before);
    nodes.restart.fire('click'); nodes['confirm-restart'].fire('click');
    assert(saved().config.quit > before); assert.equal(saved().logs.length, 2); assert.equal(JSON.stringify(saved().awards), awards);
    assert.equal(nodes.days.textContent, 0); assert.equal(nodes.quit.value, localInput(saved().config.quit));
    globalThis.location.hash = '#milestones'; winListeners.hashchange();
    assert.equal(nodes.timeline.children.length, 7); assert.equal(nodes.badges.children.length, 7);
  } finally {
    for (const [key, descriptor] of Object.entries(descriptors)) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor); else delete globalThis[key];
    }
  }
});
