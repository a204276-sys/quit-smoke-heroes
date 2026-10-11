import assert from 'node:assert/strict';
import { test } from 'node:test';
import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { HEROES } from '../js/heroes.js';
import { DAY, calculateStats, earnedBadges, localInput, logSummary, MILESTONES, milestoneProgress } from '../js/stats.js';
import { defaults, loadState, saveState, validConfig } from '../js/storage.js';
import { createSOS } from '../js/sos.js';

function memoryStorage(initial = {}) {
  const map = new Map(Object.entries(initial));
  return { getItem: key => map.get(key) ?? null, setItem: (key, value) => map.set(key, value) };
}
test('英雄台词和 SVG 与 git 初始原型完全一致', () => {
  const original = execFileSync('git', ['show', '03bfe7b:index.html'], { encoding: 'utf8' });
  const data = original.match(/const HEROES = (\[[\s\S]*?\n\]);/)[1];
  const oldHeroes = Function(`return ${data}`)();
  assert.equal(HEROES.length, 11);
  assert.equal(HEROES.reduce((total, h) => total + h.quotes.length, 0), 44);
  // Only Gojo's redesigned SVG is exempt; all other prototype fields stay exact.
  const prototypeFields = ({ image, ...hero }) => {
    if (hero.id === 'gojo') { const { svg, ...fields } = hero; return fields; }
    return hero;
  };
  assert.deepEqual(HEROES.map(prototypeFields), oldHeroes.map(prototypeFields));
});
test('统计按时间戳计算，边界、金额与成就阈值正确', () => {
  const config = { quit: 1000, perDay: 10, price: 17, pack: 20 };
  assert.deepEqual(calculateStats(config, 999), { elapsed: 0, days: 0, cigarettes: 0, money: 0 });
  assert.equal(calculateStats(config, 1000 + DAY - 1).days, 0);
  const stats = calculateStats(config, 1000 + 7 * DAY);
  assert.equal(stats.days, 7); assert.equal(stats.cigarettes, 70); assert.equal(stats.money.toFixed(1), '59.5');
  assert.deepEqual(earnedBadges(stats, []).map(b => b.id), ['days-1', 'days-3', 'days-7']);
  assert(earnedBadges({ days: 0, money: 100 }, Array.from({ length: 10 }, () => ({ result: 'held', triggers: ['压力'] }))).some(b => b.id === 'held-10'));
  assert.equal(earnedBadges({ days: 0, money: 99.99 }, []).length, 0);
  for (const m of MILESTONES) {
    assert.equal(milestoneProgress(m.at - 1, m).achieved, false);
    assert.deepEqual(milestoneProgress(m.at, m), { achieved: true, remaining: 0, percent: 100 });
  }
});
test('本地日期轮班及输入时间在马来西亚、上海、UTC、夏令时地区正确', () => {
  const moduleURL = new URL('../js/stats.js', import.meta.url).href;
  for (const [tz, expected] of [['Asia/Kuala_Lumpur', [10, 11]], ['Asia/Shanghai', [10, 11]], ['UTC', [10, 10]], ['America/New_York', [10, 10]]]) {
    const script = `import {localDayIndex,localInput} from '${moduleURL}'; console.log(JSON.stringify(['2026-10-10T15:59:59Z','2026-10-10T16:00:00Z'].map(t => [new Date(localDayIndex(Date.parse(t))*86400000).getUTCDate(),localInput(Date.parse(t))])));`;
    const result = JSON.parse(execFileSync(process.execPath, ['--input-type=module', '-e', script], { encoding: 'utf8', env: { ...process.env, TZ: tz } }));
    assert.deepEqual(result.map(row => row[0]), expected);
    if (tz === 'Asia/Kuala_Lumpur') assert.equal(result[1][1], '2026-10-11T00:00');
  }
});
test('多选场景、并列最常见场景和空日志统计正确', () => {
  assert.deepEqual(logSummary([]), { total: 0, held: 0, rate: 0, common: '暂无记录' });
  assert.deepEqual(logSummary([{ result: 'held', triggers: ['压力', '饭后'] }, { result: 'smoked', triggers: ['无聊'] }]),
    { total: 2, held: 1, rate: 50, common: '饭后、压力、无聊' });
});
test('设置验证、旧 qs 迁移、版本、异常存储处理正确', () => {
  const old = { quit: localInput(Date.now() - DAY), perDay: 10, price: 17, pack: 20 };
  const storage = memoryStorage({ qs: JSON.stringify(old) });
  const loaded = loadState(storage);
  assert.equal(loaded.state.version, 1); assert.equal(loaded.state.config.quit, new Date(old.quit).getTime());
  assert(storage.getItem('qs')); assert(storage.getItem('quit-smoke-heroes'));
  assert.equal(validConfig({ ...loaded.state.config, pack: 0 }), false);
  assert.equal(validConfig({ ...loaded.state.config, quit: Date.now() + DAY }), false);
  assert.equal(validConfig({ ...loaded.state.config, perDay: 1.5 }), false);
  assert.equal(validConfig({ ...loaded.state.config, price: 0 }), true);
  assert.equal(loadState(memoryStorage({ 'quit-smoke-heroes': '{broken' })).writable, false);
  assert.equal(loadState(memoryStorage({ 'quit-smoke-heroes': JSON.stringify({ version: 99 }) })).writable, false);
  assert.equal(saveState(defaults(), { setItem() { throw Error('QuotaExceededError'); } }), false);
  const state = defaults(); state.logs = [{ id: 'x', time: Date.now(), triggers: ['其他'], intensity: 5, result: 'smoked' }];
  state.awards = { 'days-1': { hero: 'DOOM', time: Date.now() } };
  assert(saveState(state, storage)); assert.deepEqual(loadState(storage).state, state);
});
test('SOS 后台跳过五分钟后到期，结束一次且可再次打开', () => {
  const realNow = Date.now, realSet = globalThis.setInterval, realClear = globalThis.clearInterval, realDocument = globalThis.document;
  let now = 1000, callback, finishCount = 0;
  const nodes = new Map(); const listeners = new Map();
  const node = id => { if (!nodes.has(id)) nodes.set(id, { style: {}, offsetWidth: 1, addEventListener(type, cb) { this[type] = cb; } }); return nodes.get(id); };
  const dialog = { querySelector: node, showModal() {}, close() {}, addEventListener: (type, cb) => listeners.set(type, cb) };
  try {
    Date.now = () => now;
    globalThis.setInterval = cb => { callback = cb; return 1; };
    globalThis.clearInterval = () => {};
    globalThis.document = { addEventListener() {} };
    const sos = createSOS(dialog, data => { finishCount++; assert.equal(data.time, now); });
    sos.open(HEROES[0], 0); assert.equal(node('#sos-timer').textContent, '5:00');
    now += 4500; callback(); assert.equal(node('#breath-text').textContent, '呼气…');
    now += 300000; callback(); callback(); assert.equal(finishCount, 1); assert.equal(node('#sos-timer').textContent, '0:00');
    sos.open(HEROES[0], 0); node('#sos-held').click(); assert.equal(finishCount, 2);
    listeners.get('cancel')({ preventDefault() {} }); assert.equal(finishCount, 2);
  } finally { Date.now = realNow; globalThis.setInterval = realSet; globalThis.clearInterval = realClear; globalThis.document = realDocument; }
});
test('PWA 清单与静态资源引用完整，可部署到子目录', async () => {
  const manifest = JSON.parse(await readFile(new URL('../manifest.webmanifest', import.meta.url), 'utf8'));
  assert.equal(manifest.display, 'standalone'); assert.equal(manifest.start_url, './');
  assert.equal(manifest.scope, './');
  assert(manifest.icons.some(icon => icon.type === 'image/svg+xml'));
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(ids.length, new Set(ids).size);
  const app = await readFile(new URL('../js/app.js', import.meta.url), 'utf8');
  for (const match of app.matchAll(/\$\('([^']+)'\)/g)) assert(ids.includes(match[1]), `缺少 ${match[1]}`);
  for (const match of html.matchAll(/(?:href|src)="(\.\/[^"#]+)"/g)) await readFile(new URL(`../${match[1]}`, import.meta.url));
  const fallback = html.match(/<script>\s*([\s\S]*?)<\/script>/)[1];
  for (const protocol of ['file:', 'http:', 'https:']) {
    const notice = { hidden: true };
    runInNewContext(fallback, { location: { protocol }, document: { getElementById: () => notice } });
    assert.equal(notice.hidden, protocol !== 'file:');
  }
});
