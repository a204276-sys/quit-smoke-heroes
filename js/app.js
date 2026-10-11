import { HEROES } from './heroes.js';
import { loadState, saveState, validConfig, validState } from './storage.js';
import { localDayIndex, localInput, calculateStats, duration, TRIGGERS, MILESTONES,
  milestoneProgress, logSummary, BADGES, earnedBadges } from './stats.js';
import { createSOS } from './sos.js';

const $ = id => document.getElementById(id);
const loaded = loadState();
let state = loaded.state;
let writable = loaded.writable;
let day = localDayIndex();
let selectedHero = null;
let quoteIndex = day % 4;
let page = 'home';
let toastTimer;
let logTimestamp = null;
let slipMode = false;
let installPrompt = null;
const todayHero = () => HEROES[((day % HEROES.length) + HEROES.length) % HEROES.length];
const currentHero = () => selectedHero || todayHero();

function warn(message) {
  $('storage-warning').textContent = message;
  $('storage-warning').hidden = false;
}
function persist() {
  if (!writable || !saveState(state)) {
    warn('更改只在本页暂存，未写入本地存储。请检查存储权限或原有数据；刷新可能丢失更改。');
    return false;
  }
  $('storage-warning').hidden = true;
  return true;
}
function toast(message) {
  clearTimeout(toastTimer);
  $('toast').textContent = message;
  $('toast').hidden = false;
  toastTimer = setTimeout(() => { $('toast').hidden = true; }, 8000);
}
function route() {
  const requested = location.hash.slice(1);
  page = ['home', 'milestones', 'logs', 'settings'].includes(requested) ? requested : 'home';
  for (const name of ['home', 'milestones', 'logs', 'settings']) $(name).hidden = name !== page;
  document.querySelectorAll('[data-tab]').forEach(link => {
    if (link.dataset.tab === page) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  if (page === 'settings') fillSettings();
  if (page === 'logs') renderLogs();
  tick();
}
function navigate(name) {
  if (location.hash === `#${name}`) route();
  else location.hash = name;
}
function renderHero() {
  const hero = currentHero();
  document.body.style.setProperty('--bg1', hero.bg[0]);
  document.body.style.setProperty('--bg2', hero.bg[1]);
  document.body.style.setProperty('--accent', hero.accent);
  document.querySelector('meta[name="theme-color"]').content = hero.bg[0];
  $('tag').textContent = hero.id === todayHero().id ? '今日值班英雄' : '英雄串门中';
  const container = $('emblem');
  const fallback = () => {
    container.innerHTML = `<svg viewBox="0 0 200 200" role="img" aria-label="${hero.name}原创徽章">${hero.svg}</svg>`;
  };
  fallback();
  if (hero.image) {
    const image = new Image();
    image.alt = `${hero.name}的头像`;
    image.onload = () => { if (currentHero().id === hero.id) container.replaceChildren(image); };
    // 先显示徽章，图片加载成功再替换；失败时维持徽章。
    image.src = new URL(hero.image, document.baseURI).href;
  }
  $('home-title').textContent = hero.name;
  $('hero-sub').textContent = hero.sub;
  $('quote').textContent = `“${hero.quotes[quoteIndex % hero.quotes.length]}”`;
  $('roster').replaceChildren(...HEROES.map(h => {
    const button = document.createElement('button');
    button.textContent = h.name;
    button.setAttribute('aria-pressed', String(h.id === hero.id));
    button.addEventListener('click', () => { selectedHero = h; renderHero(); });
    return button;
  }));
}
function renderMilestones(stats) {
  $('timeline').replaceChildren(...MILESTONES.map(m => {
    const progress = milestoneProgress(stats.elapsed, m);
    const li = document.createElement('li');
    li.className = progress.achieved ? 'achieved' : '';
    const title = document.createElement('h3');
    title.textContent = `${progress.achieved ? '✓' : '○'} ${m.time}`;
    const text = document.createElement('p');
    text.textContent = m.text;
    const status = document.createElement('p');
    status.className = 'fine';
    status.textContent = progress.achieved ? (m.range ? '已进入参考阶段' : '已达参考时间') : `还差 ${duration(progress.remaining)}`;
    li.append(title, text, status);
    if (!progress.achieved) {
      const bar = document.createElement('progress');
      bar.max = 100;
      bar.value = progress.percent;
      bar.setAttribute('aria-label', `${m.time}时间进度`);
      li.append(bar);
    }
    return li;
  }));
  $('badges').replaceChildren(...BADGES.map(b => {
    const award = state.awards[b.id];
    const div = document.createElement('div');
    div.className = `badge${award ? ' unlocked' : ''}`;
    div.textContent = `${award ? '🏅' : '○'} ${b.label}`;
    const small = document.createElement('small');
    small.textContent = award ? `${award.hero}认证 · ${new Date(award.time).toLocaleDateString('zh-CN')}` : '继续积累，等待解锁';
    div.append(small);
    return div;
  }));
}
function unlock(stats) {
  // 对话框期间先不颁奖，避免提示被模态框遮挡；刷新后只展示尚未记录的成就。
  if (document.querySelector('dialog[open]')) return;
  const fresh = earnedBadges(stats, state.logs).filter(b => !Object.hasOwn(state.awards, b.id));
  if (!fresh.length) return;
  const hero = todayHero();
  fresh.forEach(b => { state.awards[b.id] = { hero: hero.name, time: Date.now() }; });
  persist();
  toast(`${hero.name}认证：${fresh.map(b => b.label).join('、')}。今天的努力，英雄记下了！`);
}
function tick() {
  const now = Date.now();
  const nextDay = localDayIndex(now);
  if (nextDay !== day) {
    day = nextDay;
    selectedHero = null;
    quoteIndex = day % 4;
    renderHero();
  }
  const stats = calculateStats(state.config, now);
  $('days').textContent = stats.days;
  $('money').textContent = `${stats.money.toFixed(1)} 块`;
  $('cigs').textContent = stats.cigarettes;
  $('timer').textContent = `已坚持 ${duration(Math.floor(stats.elapsed / 1000) * 1000)}`;
  unlock(stats);
  if (page === 'milestones') renderMilestones(stats);
}
function fillSettings() {
  $('quit').value = localInput(state.config.quit);
  $('quit').max = localInput();
  $('per-day').value = state.config.perDay;
  $('price').value = state.config.price;
  $('pack').value = state.config.pack;
  $('settings-error').textContent = '';
}
$('settings-form').addEventListener('submit', event => {
  event.preventDefault();
  // 输入只精确到分钟；未编辑戒烟时间时保留已有的秒级时间戳。
  const quit = $('quit').value === localInput(state.config.quit) ? state.config.quit : new Date($('quit').value).getTime();
  const config = { quit, perDay: Number($('per-day').value), price: Number($('price').value), pack: Number($('pack').value) };
  if (!validConfig(config)) {
    $('settings-error').textContent = '请填写有效时间（不能晚于现在），根数须为 1～1000 的整数，价格为 0～1000000 块。';
    return;
  }
  $('settings-error').textContent = '';
  state.config = config;
  const saved = persist();
  toast(saved ? '设置已保存，继续按自己的节奏前进。' : '设置已在本页应用，但未保存到本地。');
  tick();
});
function renderLogs() {
  const summary = logSummary(state.logs);
  $('log-total').textContent = summary.total;
  $('log-rate').textContent = summary.total ? `${summary.rate}%` : '—';
  $('log-common').textContent = summary.common;
  const list = $('log-list');
  list.replaceChildren();
  if (!state.logs.length) {
    const empty = document.createElement('li');
    empty.textContent = '还没有记录。下次烟瘾来时，写下场景，慢慢找到自己的应对办法。';
    list.append(empty);
  }
  [...state.logs].sort((a, b) => b.time - a.time).forEach(log => {
    const li = document.createElement('li');
    const time = document.createElement('time');
    time.dateTime = new Date(log.time).toISOString();
    time.textContent = new Date(log.time).toLocaleString('zh-CN', { hour12: false });
    const details = document.createElement('p');
    details.textContent = `${log.triggers.join('、')} · 强度 ${log.intensity}/5`;
    const result = document.createElement('p');
    result.textContent = log.result === 'held' ? '💪 扛住了，又多一次经验' : '🌱 抽了，记下来再继续';
    const remove = document.createElement('button');
    remove.textContent = '删除';
    remove.setAttribute('aria-label', `删除 ${time.textContent} 的日志`);
    remove.addEventListener('click', () => {
      if (!confirm('确定删除这条日志？删除后无法恢复，已获得的徽章会保留。')) return;
      state.logs = state.logs.filter(item => item !== log);
      const saved = persist();
      renderLogs();
      toast(saved ? '日志已删除。' : '日志仅在本页删除，未保存到本地。');
    });
    li.append(time, details, result, remove);
    list.append(li);
  });
}
$('trigger-options').replaceChildren(...TRIGGERS.map(trigger => {
  const label = document.createElement('label');
  const input = document.createElement('input');
  input.type = 'checkbox'; input.name = 'trigger'; input.value = trigger;
  label.append(input, trigger);
  return label;
}));
function openLog({ time = Date.now(), result = null } = {}, slip = false) {
  $('log-form').reset();
  logTimestamp = time;
  slipMode = slip;
  $('log-title').textContent = slip ? '记一次失误，继续向前' : '记一次烟瘾';
  $('log-time').value = localInput(time);
  $('log-time').max = localInput();
  $('result').value = slip ? 'smoked' : (result || 'held');
  $('result').disabled = slip;
  $('log-error').textContent = '';
  $('log-dialog').showModal();
}
$('log-form').addEventListener('submit', event => {
  event.preventDefault();
  const time = $('log-time').value === localInput(logTimestamp) ? logTimestamp : new Date($('log-time').value).getTime();
  const triggers = [...document.querySelectorAll('input[name="trigger"]:checked')].map(input => input.value);
  const intensity = Number($('intensity').value);
  const result = slipMode ? 'smoked' : $('result').value;
  if (!Number.isFinite(time) || time < 0 || time > Date.now() || !triggers.length || !Number.isInteger(intensity) || intensity < 1 || intensity > 5 || !['held', 'smoked'].includes(result)) {
    $('log-error').textContent = '请填写不晚于现在的时间，至少选择一个触发场景，并选择强度和结果。';
    return;
  }
  const button = $('log-form').querySelector('[type="submit"]');
  button.disabled = true;
  // 局域网 HTTP 不提供 randomUUID，日志仍可正常保存。
  const id = globalThis.crypto?.randomUUID?.() || Date.now().toString(36) + Math.random().toString(36).slice(2);
  state.logs.push({ id, time, triggers, intensity, result });
  const saved = persist();
  $('log-dialog').close();
  button.disabled = false;
  renderLogs();
  toast(saved ? '记录已保存。每一次经验，都可以帮到下一次。' : '记录仅暂存本页，未写入本地存储。');
  tick();
});
const sos = createSOS($('sos'), data => openLog(data));
$('open-sos').addEventListener('click', () => sos.open(currentHero(), quoteIndex));
$('next-quote').addEventListener('click', () => { quoteIndex++; renderHero(); });
$('today-hero').addEventListener('click', () => { selectedHero = null; renderHero(); });
$('settings-shortcut').addEventListener('click', () => navigate('settings'));
$('add-log').addEventListener('click', () => openLog());
$('record-slip').addEventListener('click', () => openLog({}, true));
$('cancel-log').addEventListener('click', () => $('log-dialog').close());
$('restart').addEventListener('click', () => $('restart-dialog').showModal());
$('cancel-restart').addEventListener('click', () => $('restart-dialog').close());
$('confirm-restart').addEventListener('click', () => {
  state.config.quit = Date.now();
  const saved = persist();
  $('restart-dialog').close();
  fillSettings(); tick();
  toast(saved ? '新一轮旅程开始了，之前的努力仍然属于你。' : '本页计时已重新开始，但未保存到本地。');
});
$('export-backup').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `quit-smoke-heroes-${localInput().slice(0, 10)}.json`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast('备份已导出，请妥善保存 JSON 文件。');
});
$('import-backup').addEventListener('click', () => $('backup-file').click());
$('backup-file').addEventListener('change', async () => {
  const file = $('backup-file').files[0];
  if (!file) return;
  $('backup-error').textContent = '';
  try {
    const backup = JSON.parse(await file.text());
    if (!validState(backup)) {
      $('backup-error').textContent = '备份数据无效或版本不受支持，请选择本应用导出的有效 JSON 文件；当前数据未覆盖。';
      return;
    }
    if (!confirm('导入备份会覆盖当前设置、日志和徽章，建议先导出备份。确定继续？')) return;
    // 写入失败时保留当前页面数据；有效备份也可恢复损坏的本地数据。
    if (!saveState(backup)) {
      $('backup-error').textContent = '备份未能写入本地存储，请检查存储权限或空间；当前页面数据未覆盖。';
      return;
    }
    state = backup; writable = true;
    $('storage-warning').hidden = true;
    fillSettings(); renderLogs(); tick();
    toast('备份已导入。');
  } catch {
    $('backup-error').textContent = '无法读取备份，请选择有效的 JSON 文件；当前数据未覆盖。';
  } finally {
    $('backup-file').value = '';
  }
});
window.addEventListener('hashchange', () => { route(); window.scrollTo(0, 0); });
document.addEventListener('visibilitychange', () => { if (!document.hidden) tick(); });
// 同一浏览器的其他页面保存后同步，避免继续展示过期数据。
window.addEventListener('storage', event => {
  if (event.key !== 'quit-smoke-heroes') return;
  const next = loadState();
  state = next.state; writable = next.writable;
  if (next.warning) warn(next.warning);
  renderLogs(); route();
});
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault(); installPrompt = event; $('install').hidden = false;
});
$('install').addEventListener('click', async () => {
  if (!installPrompt) return;
  await installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null; $('install').hidden = true;
});
window.addEventListener('appinstalled', () => { $('install').hidden = true; installPrompt = null; });
async function registerOffline() {
  if (!('serviceWorker' in navigator)) {
    $('pwa-status').textContent = '此浏览器不支持离线缓存，请使用支持 PWA 的浏览器。'; return;
  }
  try {
    await navigator.serviceWorker.register('./sw.js');
    await navigator.serviceWorker.ready;
    $('pwa-status').textContent = '离线资源已就绪，断网也能继续记录。';
  } catch {
    $('pwa-status').textContent = '离线缓存未就绪，请使用 localhost 或 HTTPS 打开并刷新。';
  }
}
if (loaded.warning) warn(loaded.warning);
renderHero(); renderLogs();
if (loaded.firstVisit && !location.hash) location.hash = 'settings';
route();
setInterval(tick, 1000);
registerOffline();
