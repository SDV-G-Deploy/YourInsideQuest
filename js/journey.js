/* Your Inside Quest — playable journey "Четыре дороги к своему имени".
   Flow: 4 chapter choices -> reflection at the campfire -> result card
   (rendered as DOM for reading and as <canvas> for save/share).
   No dependencies; progress persists in localStorage (Slot A). */
(() => {
  'use strict';

  const STORAGE_KEY = 'yiq.journey.v1';

  /* ---- Archetypes (the four companions) -------------------------------- */
  const ARCHETYPES = {
    guardian: {
      title: 'Хранитель', glyph: '⛨', color: '#c9b86b',
      epithet: 'Тихого Огня',
      virtue: 'верность и забота',
      shadow: 'забыть о себе, пока держишь щит над другими',
      quest: 'На этой неделе один раз скажи «нет» без оправданий и посмотри, что останется цело.',
      line: 'Ты держишь круг света, в котором другим становится спокойно.'
    },
    wanderer: {
      title: 'Странник', glyph: '➶', color: '#9ed7ff',
      epithet: 'Дальних Троп',
      virtue: 'свобода и любопытство',
      shadow: 'уходить раньше, чем дорога успела чему-то научить',
      quest: 'На этой неделе пройди знакомый путь по-новому и запиши одну неожиданную деталь.',
      line: 'Ты узнаёшь себя в движении: каждая развилка — вопрос, а не угроза.'
    },
    seer: {
      title: 'Звездочёт', glyph: '✧', color: '#f3e2b8',
      epithet: 'Ясного Взгляда',
      virtue: 'понимание и честность',
      shadow: 'смотреть так долго, что забываешь сделать шаг',
      quest: 'На этой неделе прими одно решение за пять минут и доверься первому ясному ответу.',
      line: 'Ты видишь узор там, где другие видят туман, и называешь вещи своими именами.'
    },
    maker: {
      title: 'Творец', glyph: '⚒', color: '#f4c75a',
      epithet: 'Живой Глины',
      virtue: 'смелость создавать',
      shadow: 'ждать, пока замысел станет идеальным',
      quest: 'На этой неделе доведи до конца одну маленькую вещь — несовершенно, но своими руками.',
      line: 'Ты превращаешь сомнение в материал: из него получается что-то новое.'
    }
  };
  const ORDER = ['guardian', 'wanderer', 'seer', 'maker'];

  /* ---- Chapters ---------------------------------------------------------- */
  const CHAPTERS = [
    {
      id: 'forest', numeral: 'I', place: 'Лес шёпотов',
      scene: 'forest',
      prompt: 'В тумане звучат голоса. Один из них кажется давно знакомым. Куда ты идёшь?',
      choices: [
        { a: 'guardian', text: 'К голосу, который просит о помощи', echo: 'Ты всегда слышишь тех, кому трудно. Но чей это голос на самом деле?' },
        { a: 'wanderer', text: 'Сворачиваю туда, где тише всего', echo: 'Тишина манит тебя больше, чем чужие слова. Ты ищешь свою тропу.' },
        { a: 'seer', text: 'Замираю и вслушиваюсь, кто шепчет', echo: 'Прежде чем идти, ты хочешь понять. Шёпот смущённо затихает.' },
        { a: 'maker', text: 'Напеваю свою мелодию поверх шёпота', echo: 'Лес замолкает, слушая тебя. Своя песня громче чужих историй.' }
      ]
    },
    {
      id: 'tower', numeral: 'II', place: 'Башня отражений',
      scene: 'tower',
      prompt: 'В зеркалах — герой, тень и проводник. Одно отражение задерживает твой взгляд дольше других. Что ты делаешь?',
      choices: [
        { a: 'guardian', text: 'Протягиваю руку тени — ей одиноко', echo: 'Тень удивлена: никто раньше не звал её по имени.' },
        { a: 'wanderer', text: 'Ищу зеркало, в котором меня ещё нет', echo: 'Пустое стекло дрожит — в нём будущее, которое ты пока не выбрал(а).' },
        { a: 'seer', text: 'Спрашиваю проводника, чего он боится', echo: 'Проводник улыбается: «Тому же, чему и ты». Это честный ответ.' },
        { a: 'maker', text: 'Разбиваю зеркало героя и собираю мозаику', echo: 'Из осколков выходит не герой, а кто-то живее и смешнее.' }
      ]
    },
    {
      id: 'market', numeral: 'III', place: 'Рынок чудес',
      scene: 'market',
      prompt: 'Торговец предлагает одну вещь даром — но только ту, что нужна тебе, а не кому-то ещё. Что ты берёшь?',
      choices: [
        { a: 'guardian', text: 'Тёплый плащ, которым можно укрыть двоих', echo: 'Торговец кивает: «Не забудь укрыться и сам(а)».' },
        { a: 'wanderer', text: 'Ключ без замка', echo: 'Замок найдётся там, куда ты ещё не дошёл(дошла).' },
        { a: 'seer', text: 'Фонарь, который светит только правдой', echo: 'Свет неприятно ярок. Зато тени больше не притворяются чудовищами.' },
        { a: 'maker', text: 'Комок живой глины', echo: 'Глина тёплая и ждёт формы. Её даст только твоя рука.' }
      ]
    },
    {
      id: 'bridge', numeral: 'IV', place: 'Мост возвращения',
      scene: 'bridge',
      prompt: 'Мост выдержит не всё. Чтобы перейти, нужно оставить одну ношу на этом берегу. Что ты оставляешь?',
      choices: [
        { a: 'guardian', text: 'Чужие ожидания, которые несу годами', echo: 'Мост скрипит с облегчением. Тебе тоже стало легче.' },
        { a: 'wanderer', text: 'Страх, что выбрал(а) не ту дорогу', echo: 'Любая дорога была твоей. Страх остаётся рыбам.' },
        { a: 'seer', text: 'Привычку всё понимать заранее', echo: 'Туман на том берегу больше не пугает. В нём можно идти.' },
        { a: 'maker', text: 'Мысль «у меня не получится»', echo: 'Доски моста сами складываются под ногами — ты строишь, пока идёшь.' }
      ]
    }
  ];

  const REFLECTION_PROMPTS = {
    guardian: 'Кого ты защищаешь чаще всего — и кто защищает тебя?',
    wanderer: 'Куда тебя тянет, если никто не смотрит?',
    seer: 'Какую правду о себе ты уже знаешь, но ещё не произнёс(ла) вслух?',
    maker: 'Что ты хочешь создать, даже если это будет несовершенно?'
  };

  /* ---- State ------------------------------------------------------------- */
  const blank = () => ({ step: 0, picks: [], note: '', done: false });
  let state = load();

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return blank();
      const s = JSON.parse(raw);
      if (!Array.isArray(s.picks)) return blank();
      return { ...blank(), ...s };
    } catch { return blank(); }
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* private mode */ }
    syncSlot();
  }

  function scores() {
    const sc = Object.fromEntries(ORDER.map((k) => [k, 0]));
    state.picks.forEach((i, ch) => { const c = CHAPTERS[ch]?.choices[i]; if (c) sc[c.a] += 1; });
    return sc;
  }
  // Leader = highest score; ties broken by the most recent pick (latest chapter weighs most).
  function ranking() {
    const sc = scores();
    const recency = Object.fromEntries(ORDER.map((k) => [k, -1]));
    state.picks.forEach((i, ch) => { const c = CHAPTERS[ch]?.choices[i]; if (c) recency[c.a] = ch; });
    return [...ORDER].sort((x, y) => sc[y] - sc[x] || recency[y] - recency[x]);
  }
  function result() {
    const [first, second] = ranking();
    const A = ARCHETYPES[first];
    const B = ARCHETYPES[second];
    return {
      key: first, A, B,
      name: `${A.title} ${B.epithet}`,
      scores: scores(),
      note: state.note.trim()
    };
  }

  /* ---- DOM --------------------------------------------------------------- */
  const h = (tag, attrs = {}, ...kids) => {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? '' : v);
    }
    kids.flat().forEach((kid) => kid != null && el.append(kid.nodeType ? kid : document.createTextNode(kid)));
    return el;
  };

  const dialog = h('dialog', { class: 'journey-dialog', id: 'journey', 'aria-labelledby': 'journey-heading' });
  const live = h('p', { class: 'visually-hidden', 'aria-live': 'polite' });
  const progress = h('ol', { class: 'journey-progress', 'aria-label': 'Этапы похода' });
  const body = h('div', { class: 'journey-body' });
  const closeBtn = h('button', { type: 'button', class: 'journey-close', 'aria-label': 'Закрыть поход (прогресс сохранится)', onclick: () => close() }, '✕');

  dialog.append(
    h('div', { class: 'journey-frame' },
      h('span', { class: 'journey-corner jc-tl', 'aria-hidden': 'true' }),
      h('span', { class: 'journey-corner jc-tr', 'aria-hidden': 'true' }),
      h('span', { class: 'journey-corner jc-bl', 'aria-hidden': 'true' }),
      h('span', { class: 'journey-corner jc-br', 'aria-hidden': 'true' }),
      h('header', { class: 'journey-top' },
        h('span', { class: 'journey-plaque' }, 'Поход · Четыре дороги'),
        closeBtn
      ),
      progress,
      body,
      live
    )
  );
  document.body.append(dialog);

  dialog.addEventListener('cancel', (e) => { e.preventDefault(); close(); });
  dialog.addEventListener('click', (e) => { if (e.target === dialog) close(); });
  dialog.addEventListener('keydown', (e) => {
    if (state.step >= CHAPTERS.length || e.target.tagName === 'TEXTAREA') return;
    const n = Number(e.key);
    if (n >= 1 && n <= 4) {
      const btn = body.querySelectorAll('.journey-choice')[n - 1];
      if (btn) { e.preventDefault(); btn.click(); }
    }
  });

  let lastTrigger = null;

  function open(mode = 'resume') {
    if (mode === 'restart') state = blank();
    lastTrigger = document.activeElement;
    render();
    if (!dialog.open) dialog.showModal();
    document.documentElement.classList.add('journey-open');
    focusHeading();
    if (location.hash !== '#journey') history.replaceState(null, '', '#journey');
  }
  function close() {
    if (dialog.open) dialog.close();
    document.documentElement.classList.remove('journey-open');
    if (location.hash === '#journey') history.replaceState(null, '', location.pathname + location.search);
    if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus();
  }
  function focusHeading() {
    requestAnimationFrame(() => body.querySelector('[data-autofocus]')?.focus());
  }

  function renderProgress() {
    progress.replaceChildren();
    const labels = [...CHAPTERS.map((c) => c.place), 'Привал', 'Имя'];
    labels.forEach((label, i) => {
      const status = i < state.step ? 'done' : i === state.step ? 'current' : 'todo';
      progress.append(
        h('li', { class: `jp-node is-${status}`, 'aria-current': status === 'current' ? 'step' : null },
          h('span', { class: 'jp-mark', 'aria-hidden': 'true' }, i < CHAPTERS.length ? CHAPTERS[i].numeral : i === CHAPTERS.length ? '☾' : '⚜'),
          h('span', { class: 'jp-label' }, label),
          h('span', { class: 'visually-hidden' }, status === 'done' ? ' — пройдено' : status === 'current' ? ' — сейчас' : '')
        )
      );
    });
  }

  function render() {
    renderProgress();
    body.classList.remove('is-entering');
    void body.offsetWidth; // restart entrance animation
    body.classList.add('is-entering');
    if (state.step < CHAPTERS.length) renderChapter(state.step);
    else if (state.step === CHAPTERS.length) renderReflection();
    else renderResult();
  }

  function sceneArt(kind) {
    // Original inline SVG vignettes (no external assets).
    const art = {
      forest: '<path d="M0 120 L40 50 L80 120Z M50 120 L95 30 L140 120Z M120 120 L160 55 L200 120Z M180 120 L225 40 L270 120Z M250 120 L290 60 L320 120Z" fill="#1d3a26"/><path d="M0 92 Q80 78 160 94 T320 88" stroke="#e3c98d" stroke-opacity=".35" stroke-width="2" fill="none"/><circle cx="262" cy="26" r="12" fill="#f3e2b8" fill-opacity=".8"/>',
      tower: '<rect x="138" y="18" width="44" height="102" fill="#3a2418"/><path d="M130 22 L160 0 L190 22Z" fill="#8b5517"/><rect x="152" y="40" width="16" height="22" rx="8" fill="#9ed7ff" fill-opacity=".85"/><rect x="152" y="76" width="16" height="22" rx="8" fill="#9ed7ff" fill-opacity=".45"/><path d="M0 120 Q160 96 320 120Z" fill="#2d1d14"/><circle cx="60" cy="30" r="2" fill="#fff6dc"/><circle cx="250" cy="20" r="2" fill="#fff6dc"/><circle cx="280" cy="50" r="1.5" fill="#fff6dc"/>',
      market: '<path d="M20 60 L70 40 L120 60Z M110 60 L160 36 L210 60Z M200 60 L250 40 L300 60Z" fill="#7a1f1b"/><rect x="28" y="60" width="84" height="44" fill="#3a2418"/><rect x="118" y="60" width="84" height="44" fill="#3a2418"/><rect x="208" y="60" width="84" height="44" fill="#3a2418"/><circle cx="70" cy="82" r="8" fill="#f4c75a"/><circle cx="160" cy="82" r="8" fill="#9ed7ff"/><circle cx="250" cy="82" r="8" fill="#c9b86b"/><rect x="0" y="104" width="320" height="16" fill="#2d1d14"/>',
      bridge: '<path d="M0 120 L0 80 Q160 20 320 80 L320 120Z" fill="#0b1b3a"/><path d="M10 82 Q160 26 310 82" stroke="#bd9658" stroke-width="6" fill="none"/><path d="M40 70 v30 M90 54 v40 M140 46 v44 M180 46 v44 M230 54 v40 M280 70 v30" stroke="#8b5517" stroke-width="3"/><circle cx="160" cy="18" r="10" fill="#f4c75a" fill-opacity=".9"/>',
      camp: '<path d="M0 120 Q160 98 320 120Z" fill="#2d1d14"/><path d="M150 108 L160 76 L170 108Z" fill="#f4c75a"/><path d="M154 108 L160 88 L166 108Z" fill="#fff6dc"/><path d="M136 112 L184 104 M136 104 L184 112" stroke="#8b5517" stroke-width="5"/><circle cx="60" cy="24" r="1.6" fill="#fff6dc"/><circle cx="100" cy="40" r="1.2" fill="#fff6dc"/><circle cx="240" cy="30" r="1.8" fill="#fff6dc"/><circle cx="276" cy="16" r="9" fill="#f3e2b8" fill-opacity=".75"/>'
    };
    const wrap = h('div', { class: 'journey-vignette', 'aria-hidden': 'true' });
    wrap.innerHTML = `<svg viewBox="0 0 320 120" preserveAspectRatio="xMidYMax slice" focusable="false">${art[kind]}</svg>`;
    return wrap;
  }

  function renderChapter(i) {
    const ch = CHAPTERS[i];
    const picked = state.picks[i];
    const list = h('div', { class: 'journey-choices', role: 'group', 'aria-label': 'Варианты выбора' });
    const echo = h('p', { class: 'journey-echo', 'aria-live': 'polite' });
    const next = h('button', {
      type: 'button', class: 'btn btn-ceremonial journey-next', disabled: picked == null,
      onclick: () => { state.step = i + 1; save(); render(); focusHeading(); }
    }, i === CHAPTERS.length - 1 ? 'К привалу' : 'Дальше по тропе');

    ch.choices.forEach((c, ci) => {
      const btn = h('button', {
        type: 'button', class: 'journey-choice', 'aria-pressed': String(picked === ci),
        onclick: () => {
          state.picks[i] = ci; state.picks.length = i + 1; state.done = false; save();
          list.querySelectorAll('.journey-choice').forEach((b, bi) => b.setAttribute('aria-pressed', String(bi === ci)));
          echo.textContent = c.echo; echo.classList.add('is-visible');
          next.disabled = false;
        }
      },
      h('span', { class: 'journey-key', 'aria-hidden': 'true' }, String(ci + 1)),
      h('span', { class: 'journey-choice-text' }, c.text));
      list.append(btn);
    });
    if (picked != null) { echo.textContent = ch.choices[picked].echo; echo.classList.add('is-visible'); }

    const back = i > 0
      ? h('button', { type: 'button', class: 'btn btn-quiet', onclick: () => { state.step = i - 1; save(); render(); focusHeading(); } }, 'Назад')
      : h('button', { type: 'button', class: 'btn btn-quiet', onclick: () => close() }, 'Позже');

    body.replaceChildren(
      sceneArt(ch.scene),
      h('p', { class: 'eyebrow journey-eyebrow' }, `Глава ${ch.numeral} из ${CHAPTERS.length}`),
      h('h2', { id: 'journey-heading', class: 'journey-heading', tabindex: '-1', 'data-autofocus': true }, ch.place),
      h('p', { class: 'journey-prompt' }, ch.prompt),
      list,
      echo,
      h('p', { class: 'journey-hint' }, 'Подсказка: клавиши 1–4 выбирают ответ.'),
      h('div', { class: 'journey-actions' }, back, next)
    );
    live.textContent = `Глава ${ch.numeral}: ${ch.place}`;
  }

  function renderReflection() {
    const lead = ranking()[0];
    const field = h('textarea', {
      id: 'journey-note', class: 'journey-note', rows: '3', maxlength: '140',
      placeholder: 'Например: «Я имею право на свою дорогу»'
    });
    field.value = state.note;
    const counter = h('span', { class: 'journey-counter', 'aria-live': 'polite' }, `${state.note.length}/140`);
    field.addEventListener('input', () => { state.note = field.value; counter.textContent = `${field.value.length}/140`; save(); });

    body.replaceChildren(
      sceneArt('camp'),
      h('p', { class: 'eyebrow journey-eyebrow' }, 'Привал у костра · рефлексия'),
      h('h2', { id: 'journey-heading', class: 'journey-heading', tabindex: '-1', 'data-autofocus': true }, 'Огонь спрашивает тихо'),
      h('p', { class: 'journey-prompt' }, REFLECTION_PROMPTS[lead]),
      h('label', { class: 'journey-label', for: 'journey-note' }, 'Одна фраза, которую ты заберёшь с собой (необязательно)'),
      field,
      h('div', { class: 'journey-note-meta' }, h('span', {}, 'Фраза остаётся только на этом устройстве.'), counter),
      h('div', { class: 'journey-actions' },
        h('button', { type: 'button', class: 'btn btn-quiet', onclick: () => { state.step = CHAPTERS.length - 1; save(); render(); focusHeading(); } }, 'Назад'),
        h('button', { type: 'button', class: 'btn btn-ceremonial', onclick: () => { state.step = CHAPTERS.length + 1; state.done = true; save(); render(); focusHeading(); } }, 'Принять имя')
      )
    );
    live.textContent = 'Привал у костра';
  }

  function renderResult() {
    const r = result();
    const bars = h('ul', { class: 'result-bars', 'aria-label': 'Баланс архетипов' });
    ORDER.forEach((k) => {
      const v = r.scores[k];
      bars.append(h('li', {},
        h('span', { class: 'rb-name' }, ARCHETYPES[k].title),
        h('span', { class: 'rb-track', 'aria-hidden': 'true' }, h('span', { class: 'rb-fill', style: `--fill:${v / CHAPTERS.length}; --tone:${ARCHETYPES[k].color}` })),
        h('span', { class: 'rb-val' }, `${v} из ${CHAPTERS.length}`)
      ));
    });

    const status = h('p', { class: 'journey-share-status', role: 'status' });
    const card = h('article', { class: 'result-card parchment-object', 'aria-labelledby': 'journey-heading' },
      h('div', { class: 'result-crest', 'aria-hidden': 'true' }, r.A.glyph),
      h('p', { class: 'archive-label' }, 'Твоё сказочное имя'),
      h('h2', { id: 'journey-heading', class: 'result-name', tabindex: '-1', 'data-autofocus': true }, r.name),
      h('p', { class: 'result-line' }, r.A.line),
      h('dl', { class: 'result-facts' },
        h('div', {}, h('dt', {}, 'Сила'), h('dd', {}, r.A.virtue)),
        h('div', {}, h('dt', {}, 'Тень'), h('dd', {}, r.A.shadow)),
        h('div', {}, h('dt', {}, 'Спутник'), h('dd', {}, `${r.B.title} — ${r.B.virtue}`))
      ),
      r.note ? h('blockquote', { class: 'result-note' }, `«${r.note}»`) : null,
      bars,
      h('div', { class: 'result-quest' }, h('strong', {}, 'Задание недели. '), r.A.quest)
    );

    body.replaceChildren(
      h('p', { class: 'eyebrow journey-eyebrow' }, 'Порог пройден · карточка героя'),
      card,
      h('div', { class: 'journey-actions journey-actions-result' },
        h('button', { type: 'button', class: 'btn btn-ceremonial', onclick: () => saveImage(r, status) }, 'Сохранить карточку'),
        h('button', { type: 'button', class: 'btn btn-quiet', onclick: () => shareCard(r, status) }, 'Поделиться'),
        h('button', { type: 'button', class: 'btn btn-quiet', onclick: () => open('restart') }, 'Пройти заново')
      ),
      status
    );
    live.textContent = `Твоё сказочное имя: ${r.name}`;
  }

  /* ---- Card image (canvas) ---------------------------------------------- */
  function wrapText(ctx, text, maxW) {
    const words = text.split(/\s+/); const lines = []; let line = '';
    for (const w of words) {
      const test = line ? `${line} ${w}` : w;
      if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = w; } else line = test;
    }
    if (line) lines.push(line);
    return lines;
  }

  async function drawCard(r) {
    try { await document.fonts?.ready; } catch { /* ignore */ }
    // Two passes: measure how tall the content runs, then paint at that height.
    const first = paintCard(r, 1350);
    return first.end + 190 <= 1350 ? first.canvas : paintCard(r, first.end + 190).canvas;
  }

  function paintCard(r, H) {
    const W = 1080;
    const c = document.createElement('canvas'); c.width = W; c.height = H;
    const x = c.getContext('2d');
    const display = '"Cinzel", Georgia, serif';
    const bodyFont = '"Lora", Georgia, serif';

    // Night wood backdrop
    const bg = x.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, '#2b1b12'); bg.addColorStop(0.5, '#17120e'); bg.addColorStop(1, '#0b0908');
    x.fillStyle = bg; x.fillRect(0, 0, W, H);
    x.globalAlpha = 0.07; x.fillStyle = '#f4c75a';
    for (let i = 0; i < W; i += 18) x.fillRect(i, 0, 2, H);
    x.globalAlpha = 1;

    // Brass frame + stepped corners
    const frame = (inset, color, lw) => { x.strokeStyle = color; x.lineWidth = lw; x.strokeRect(inset, inset, W - inset * 2, H - inset * 2); };
    frame(24, '#8b5517', 10); frame(40, '#f4c75a', 3); frame(52, 'rgba(244,199,90,.35)', 1);
    x.fillStyle = '#d99a2b';
    [[24, 24], [W - 84, 24], [24, H - 84], [W - 84, H - 84]].forEach(([cx, cy]) => {
      x.fillRect(cx, cy, 60, 60); x.fillStyle = '#3a2418'; x.fillRect(cx + 12, cy + 12, 36, 36);
      x.fillStyle = '#f4c75a'; x.fillRect(cx + 24, cy + 24, 12, 12); x.fillStyle = '#d99a2b';
    });

    // Parchment plate
    const px = 96, py = 150, pw = W - 192, ph = H - 300;
    const pg = x.createLinearGradient(0, py, 0, py + ph);
    pg.addColorStop(0, '#fff6dc'); pg.addColorStop(1, '#e3c98d');
    x.fillStyle = pg; x.fillRect(px, py, pw, ph);
    x.strokeStyle = 'rgba(139,85,23,.55)'; x.lineWidth = 2; x.strokeRect(px + 14, py + 14, pw - 28, ph - 28);

    // Header plaque
    x.fillStyle = '#3a2418'; x.fillRect(W / 2 - 260, 92, 520, 64);
    x.strokeStyle = '#f4c75a'; x.lineWidth = 2; x.strokeRect(W / 2 - 252, 100, 504, 48);
    x.fillStyle = '#f4c75a'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.font = `600 26px ${display}`; x.fillText('YOUR INSIDE QUEST', W / 2, 125);

    // Crest medallion
    x.beginPath(); x.arc(W / 2, 290, 82, 0, Math.PI * 2); x.fillStyle = '#3a2418'; x.fill();
    x.lineWidth = 8; x.strokeStyle = '#d99a2b'; x.stroke();
    x.beginPath(); x.arc(W / 2, 290, 66, 0, Math.PI * 2); x.lineWidth = 2; x.strokeStyle = '#f4c75a'; x.stroke();
    x.fillStyle = '#f4c75a'; x.font = `72px ${bodyFont}`; x.fillText(r.A.glyph, W / 2, 294);

    let y = 420;
    x.fillStyle = '#8b5517'; x.font = `600 24px ${display}`;
    x.fillText('ТВОЁ СКАЗОЧНОЕ ИМЯ', W / 2, y);
    y += 70;
    x.fillStyle = '#2d1d14'; x.font = `700 64px ${display}`;
    let size = 64;
    while (x.measureText(r.name).width > pw - 80 && size > 40) { size -= 2; x.font = `700 ${size}px ${display}`; }
    x.fillText(r.name, W / 2, y);
    y += 50;
    x.strokeStyle = '#8b5517'; x.lineWidth = 2; x.beginPath(); x.moveTo(W / 2 - 180, y); x.lineTo(W / 2 + 180, y); x.stroke();
    x.fillStyle = '#d99a2b'; x.fillRect(W / 2 - 7, y - 7, 14, 14);
    y += 56;

    x.fillStyle = '#3a2418'; x.font = `italic 500 32px ${bodyFont}`;
    wrapText(x, r.A.line, pw - 120).forEach((l) => { x.fillText(l, W / 2, y); y += 44; });
    y += 18;

    x.textAlign = 'left';
    const rows = [['СИЛА', r.A.virtue], ['ТЕНЬ', r.A.shadow], ['СПУТНИК', `${r.B.title} — ${r.B.virtue}`]];
    rows.forEach(([k, v]) => {
      x.fillStyle = '#8b5517'; x.font = `700 22px ${display}`; x.fillText(k, px + 60, y);
      x.fillStyle = '#2d1d14'; x.font = `500 28px ${bodyFont}`;
      const lines = wrapText(x, v, pw - 300);
      lines.forEach((l, li) => x.fillText(l, px + 250, y + li * 36));
      y += Math.max(1, lines.length) * 36 + 22;
    });

    if (r.note) {
      y += 6; x.textAlign = 'center'; x.fillStyle = '#7a1f1b'; x.font = `italic 500 30px ${bodyFont}`;
      wrapText(x, `«${r.note}»`, pw - 140).slice(0, 3).forEach((l) => { x.fillText(l, W / 2, y); y += 40; });
      y += 10; x.textAlign = 'left';
    }

    // Archetype balance
    y += 10;
    ORDER.forEach((k) => {
      const v = r.scores[k];
      x.fillStyle = '#3a2418'; x.font = `600 22px ${display}`; x.fillText(ARCHETYPES[k].title.toUpperCase(), px + 60, y);
      x.fillStyle = 'rgba(58,36,24,.18)'; x.fillRect(px + 300, y - 12, pw - 420, 22);
      x.fillStyle = '#d99a2b'; x.fillRect(px + 300, y - 12, (pw - 420) * (v / CHAPTERS.length), 22);
      x.strokeStyle = '#8b5517'; x.lineWidth = 2; x.strokeRect(px + 300, y - 12, pw - 420, 22);
      y += 40;
    });

    // Weekly quest inside the plate
    y += 18;
    x.strokeStyle = 'rgba(139,85,23,.45)'; x.lineWidth = 2;
    x.beginPath(); x.moveTo(px + 60, y); x.lineTo(px + pw - 60, y); x.stroke();
    y += 44;
    x.textAlign = 'center'; x.fillStyle = '#8b5517'; x.font = `700 22px ${display}`;
    x.fillText('ЗАДАНИЕ НЕДЕЛИ', W / 2, y); y += 40;
    x.fillStyle = '#2d1d14'; x.font = `500 27px ${bodyFont}`;
    wrapText(x, r.A.quest, pw - 140).slice(0, 3).forEach((l) => { x.fillText(l, W / 2, y); y += 36; });

    // Footer address
    x.fillStyle = '#f3e2b8'; x.font = `500 22px ${bodyFont}`;
    x.fillText('sdv-g-deploy.github.io/YourInsideQuest', W / 2, H - 104);
    return { canvas: c, end: y };
  }

  const fileName = (r) => `yiq-${r.key}-card.png`;
  const toBlob = (canvas) => new Promise((res) => canvas.toBlob(res, 'image/png'));

  async function saveImage(r, status) {
    status.textContent = 'Рисуем карточку…';
    const blob = await toBlob(await drawCard(r));
    const url = URL.createObjectURL(blob);
    const a = h('a', { href: url, download: fileName(r) });
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    status.textContent = `Карточка сохранена: ${fileName(r)}`;
  }

  async function shareCard(r, status) {
    const text = `Моё сказочное имя в Your Inside Quest — ${r.name}. ${r.A.line}`;
    const url = location.href.split('#')[0];
    try {
      const blob = await toBlob(await drawCard(r));
      const file = new File([blob], fileName(r), { type: 'image/png' });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: 'Your Inside Quest', text });
        status.textContent = 'Карточка отправлена.';
        return;
      }
      if (navigator.share) { await navigator.share({ title: 'Your Inside Quest', text, url }); status.textContent = 'Ссылка отправлена.'; return; }
      await navigator.clipboard.writeText(`${text} ${url}`);
      status.textContent = 'Текст и ссылка скопированы — вставь их, где захочешь.';
    } catch (err) {
      if (err?.name === 'AbortError') { status.textContent = ''; return; }
      status.textContent = 'Поделиться не вышло — сохрани карточку как картинку.';
    }
  }

  /* ---- Page integration -------------------------------------------------- */
  const slot = document.querySelector('.save-slot-strip strong');
  const slotDefault = slot?.textContent;
  function syncSlot() {
    if (!slot) return;
    if (state.done) slot.textContent = `имя найдено · ${result().name}`;
    else if (state.picks.length || state.step) {
      const place = CHAPTERS[Math.min(state.step, CHAPTERS.length - 1)].place;
      slot.textContent = state.step >= CHAPTERS.length ? 'привал у костра · почти у порога' : `${place.toLowerCase()} · глава ${state.step + 1}`;
    } else slot.textContent = slotDefault;
  }
  syncSlot();

  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-journey]');
    if (!t) return;
    e.preventDefault();
    const mode = t.dataset.journey;
    if (mode === 'start' && state.done) open('resume'); // show saved result instead of wiping it
    else open(mode === 'restart' ? 'restart' : 'resume');
  });

  if (location.hash === '#journey') open('resume');
  window.addEventListener('hashchange', () => { if (location.hash === '#journey' && !dialog.open) open('resume'); });

  // Exposed for QA/demo automation.
  window.YIQJourney = { open, close, reset: () => { state = blank(); save(); }, get state() { return structuredClone(state); }, drawCard: () => drawCard(result()) };
})();
