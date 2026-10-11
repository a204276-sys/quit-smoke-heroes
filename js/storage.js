import { TRIGGERS } from './stats.js';
const KEY = 'quit-smoke-heroes';
export const VERSION = 1;
export const defaults = () => ({ version: VERSION,
  config: { quit: Date.now(), perDay: 10, price: 17, pack: 20 }, logs: [], awards: {} });
export function validConfig(config, now = Date.now()) {
  return config && Number.isFinite(config.quit) && config.quit >= 0 && config.quit <= now &&
    Number.isInteger(config.perDay) && config.perDay >= 1 && config.perDay <= 1000 &&
    Number.isFinite(config.price) && config.price >= 0 && config.price <= 1000000 &&
    Number.isInteger(config.pack) && config.pack >= 1 && config.pack <= 1000;
}
function validLog(log) {
  return log && typeof log.id === 'string' && Number.isFinite(log.time) && log.time >= 0 &&
    log.time <= Date.now() && Array.isArray(log.triggers) && log.triggers.length > 0 &&
    log.triggers.every(t => TRIGGERS.includes(t)) && Number.isInteger(log.intensity) &&
    log.intensity >= 1 && log.intensity <= 5 && ['held', 'smoked'].includes(log.result);
}
// 保留旧 qs 数据：原型的 datetime-local 字符串按本地时区解释。
export function loadState(storage = localStorage) {
  const state = defaults();
  try {
    const raw = storage.getItem(KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      if (saved.version !== VERSION) return { state, warning: '数据版本不受支持，暂用默认设置；原数据未覆盖。', writable: false };
      if (!validConfig(saved.config) || !Array.isArray(saved.logs) || saved.logs.some(log => !validLog(log)) ||
        !saved.awards || typeof saved.awards !== 'object' || Array.isArray(saved.awards) ||
        Object.values(saved.awards).some(a => !a || typeof a.hero !== 'string' || !Number.isFinite(a.time))) {
        return { state, warning: '本地数据异常，暂用默认设置；原数据未覆盖。', writable: false };
      }
      return { state: saved, writable: true };
    }
    const legacy = storage.getItem('qs');
    if (legacy) {
      const old = JSON.parse(legacy);
      const config = { quit: new Date(old.quit).getTime(), perDay: Number(old.perDay), price: Number(old.price), pack: Number(old.pack) };
      if (!validConfig(config)) return { state, warning: '旧设置无效，请检查后保存新设置。', writable: true };
      state.config = config;
      // 不删除旧键，方便 review 或手动恢复。
      storage.setItem(KEY, JSON.stringify(state));
    }
    return { state, writable: true, firstVisit: !legacy };
  } catch {
    return { state, warning: '无法读取本地存储，数据暂存本页；请检查浏览器存储权限。', writable: false };
  }
}
export function saveState(state, storage = localStorage) {
  try { storage.setItem(KEY, JSON.stringify(state)); return true; }
  catch { return false; }
}
