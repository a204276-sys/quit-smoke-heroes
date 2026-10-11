export const DAY = 86400000;
export const TRIGGERS = ['饭后', '压力', '喝酒', '社交', '无聊', '起床', '其他'];

// 按本地日历轮班，不以 UTC 日期或经过的 24 小时为准。
export function localDayIndex(now = Date.now()) {
  const date = new Date(now);
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / DAY);
}
export function localInput(now = Date.now()) {
  const d = new Date(now);
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
export function calculateStats(config, now = Date.now()) {
  const elapsed = Math.max(0, now - config.quit);
  const days = Math.floor(elapsed / DAY);
  const cigarettes = Math.floor(elapsed / DAY * config.perDay);
  return { elapsed, days, cigarettes, money: cigarettes / config.pack * config.price };
}
export function duration(ms) {
  const seconds = Math.max(0, Math.ceil(ms / 1000));
  return `${Math.floor(seconds / 86400)} 天 ${Math.floor(seconds / 3600) % 24} 时 ${Math.floor(seconds / 60) % 60} 分 ${seconds % 60} 秒`;
}
export function logSummary(logs) {
  const held = logs.filter(log => log.result === 'held').length;
  const counts = Object.fromEntries(TRIGGERS.map(trigger => [trigger, 0]));
  logs.forEach(log => log.triggers.forEach(trigger => { if (trigger in counts) counts[trigger]++; }));
  const highest = Math.max(0, ...Object.values(counts));
  return { total: logs.length, held, rate: logs.length ? Math.round(held / logs.length * 100) : 0,
    common: highest ? TRIGGERS.filter(trigger => counts[trigger] === highest).join('、') : '暂无记录' };
}
export const MILESTONES = [
  { at: 20 * 60000, time: '约 20 分钟', text: '心率和血压开始下降' },
  { at: 12 * 3600000, time: '约 12 小时', text: '血液一氧化碳水平恢复正常' },
  { at: 14 * DAY, time: '约 2 周～3 个月', text: '循环改善、肺功能提升', range: true },
  { at: 30 * DAY, time: '约 1～9 个月', text: '咳嗽和气短减少', range: true },
  { at: 365 * DAY, time: '约 1 年', text: '冠心病风险约降为吸烟者的一半' },
  { at: 5 * 365 * DAY, time: '约 5 年起', text: '中风风险降低；变化可能持续 5～15 年' },
  { at: 10 * 365 * DAY, time: '约 10 年', text: '肺癌死亡风险约降为吸烟者的一半' },
];
export function milestoneProgress(elapsed, milestone) {
  return { achieved: elapsed >= milestone.at, remaining: Math.max(0, milestone.at - elapsed),
    percent: Math.min(100, Math.max(0, elapsed / milestone.at * 100)) };
}
export const BADGES = [
  ...[1, 3, 7, 30, 100].map(days => ({ id: `days-${days}`, label: `${days} 天无烟`, days })),
  { id: 'money-100', label: '省下 100 块', money: 100 },
  { id: 'held-10', label: '扛住 10 次烟瘾', held: 10 },
];
export function earnedBadges(stats, logs) {
  const held = logSummary(logs).held;
  return BADGES.filter(b => b.days ? stats.days >= b.days : b.money ? stats.money >= b.money : held >= b.held);
}
