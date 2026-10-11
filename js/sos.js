// 倒计时与呼吸阶段均由时间戳推导，后台节流不会延长五分钟。
export function createSOS(dialog, onFinish) {
  let started = 0;
  let timer = null;
  const tick = () => {
    const elapsed = Math.max(0, Date.now() - started);
    const left = Math.max(0, Math.ceil((300000 - elapsed) / 1000));
    dialog.querySelector('#sos-timer').textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
    dialog.querySelector('#breath-text').textContent = Math.floor(elapsed / 4000) % 2 === 0 ? '吸气…' : '呼气…';
    if (!left) finish();
  };
  function finish(result = null) {
    if (timer === null) return;
    clearInterval(timer);
    timer = null;
    const time = Date.now();
    dialog.close();
    onFinish({ time, result });
  }
  dialog.querySelector('#sos-held').addEventListener('click', () => finish('held'));
  dialog.querySelector('#sos-stop').addEventListener('click', () => finish());
  dialog.addEventListener('cancel', event => { event.preventDefault(); finish(); });
  dialog.addEventListener('close', () => { if (timer !== null) finish(); });
  document.addEventListener('visibilitychange', () => { if (timer !== null) tick(); });
  return { open(hero, quoteIndex) {
    if (timer !== null) return;
    started = Date.now();
    dialog.querySelector('#sos-quote').textContent = `${hero.name}：“${hero.quotes[(quoteIndex + 1) % hero.quotes.length]}”`;
    dialog.showModal();
    const circle = dialog.querySelector('.breath');
    circle.style.animation = 'none';
    void circle.offsetWidth;
    circle.style.animation = '';
    timer = setInterval(tick, 250);
    tick();
  } };
}
