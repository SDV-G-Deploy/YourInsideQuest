# HoMM2 Menu Escalation Blueprint

Цель: перевести текущий `fairy-menu-scene` из удачного fantasy landing/menu hybrid в более сильный `HoMM2 main menu` screen с тяжёлой рамкой, деревянными боковыми колоннами и резными углами.

---

## 1. Replace current mental model

Не думать больше как:
- `status rail | center | command rail`

Думать как:
- `outer frame`
- `top beam`
- `left carved column`
- `central mounted menu object`
- `right carved column`
- `bottom beam`
- `corner caps`

То есть центр не просто стоит между сайдбарами — он **вмонтирован в framed screen object**.

---

## 2. Target DOM shape

Внутри `.menu-stage` перейти к такой структуре:

```html
<div class="menu-stage homm2-main-menu-stage">
  <div class="scene-plaque scene-plaque-left">Главный экран · Сказочные странствия</div>

  <div class="menu-backdrop" aria-hidden="true">...</div>

  <div class="menu-frame-shell">
    <div class="frame-beam frame-beam-top"></div>
    <div class="frame-beam frame-beam-bottom"></div>

    <div class="frame-corner corner-tl" aria-hidden="true"></div>
    <div class="frame-corner corner-tr" aria-hidden="true"></div>
    <div class="frame-corner corner-bl" aria-hidden="true"></div>
    <div class="frame-corner corner-br" aria-hidden="true"></div>

    <aside class="side-column side-column-left">
      <div class="column-cap"></div>
      <div class="column-core">
        <div class="column-ribs"></div>
        <div class="column-trim"></div>

        <div class="status-rail" aria-label="Статус похода">...</div>
      </div>
      <div class="column-foot"></div>
    </aside>

    <section class="menu-center-mount" aria-labelledby="fairy-menu-title">
      <div class="center-top-cartouche">
        <div class="menu-crest"><span>⚜</span></div>
        <div class="menu-title-cartouche">...</div>
      </div>

      <div class="menu-plate-shell">
        <div class="menu-plate-shadow"></div>
        <div class="menu-plate-body">
          <nav class="game-menu-stack" aria-label="Главные игровые команды">...</nav>
        </div>
      </div>

      <div class="supporting-lore-strip">
        <div class="save-slot-strip">...</div>
        <div class="menu-plaques" aria-label="Основные разделы путешествия">...</div>
      </div>
    </section>

    <aside class="side-column side-column-right" id="command-rail">
      <div class="column-cap"></div>
      <div class="column-core">
        <div class="column-ribs"></div>
        <div class="column-trim"></div>

        <div class="command-rail-shell" aria-label="Командная рейка">...</div>
      </div>
      <div class="column-foot"></div>
    </aside>
  </div>
</div>
```

---

## 3. Mapping from current markup

### Keep as-is or almost as-is
- `.menu-backdrop`
- `.menu-crest`
- `.menu-title-cartouche`
- `.game-menu-stack`
- `.game-menu-button`
- `.menu-plaques`
- `.save-slot-strip`
- `.status-rail`
- `.command-rail-shell`

### New wrapper layers to add
- `.menu-frame-shell`
- `.frame-beam-*`
- `.frame-corner`
- `.side-column`
- `.column-cap`
- `.column-core`
- `.column-ribs`
- `.column-trim`
- `.column-foot`
- `.menu-center-mount`
- `.center-top-cartouche`
- `.menu-plate-shell`
- `.menu-plate-shadow`
- `.menu-plate-body`
- `.supporting-lore-strip`

### Important structural change
`.status-rail` and `.command-rail-shell` должны стать **внутренностями деревянных колонн**, а не самостоятельными соседними панелями.

---

## 4. Layout blueprint

### Desktop grid
```css
.menu-frame-shell {
  position: relative;
  display: grid;
  grid-template-columns: minmax(210px, 250px) minmax(540px, 720px) minmax(210px, 250px);
  gap: clamp(20px, 2.6vw, 32px);
  align-items: stretch;
  min-height: 780px;
  padding: clamp(56px, 6vw, 78px) clamp(26px, 3vw, 38px) clamp(42px, 5vw, 56px);
}

.menu-center-mount {
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 720px;
  justify-self: center;
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 18px;
}
```

### Mobile rollback
На `< 920px`:
- колонки схлопываются в один столбец;
- `side-column` теряет heavy decorative shell;
- corners/beams упрощаются;
- центр остаётся первым.

---

## 5. Wooden side columns blueprint

```css
.side-column {
  position: relative;
  display: grid;
  grid-template-rows: 28px 1fr 30px;
  min-height: 100%;
  padding-inline: 6px;
}

.column-cap,
.column-foot {
  border: 1px solid rgb(var(--gold-300) / 0.22);
  background:
    linear-gradient(180deg, rgb(var(--parchment-50) / 0.12), transparent 40%),
    linear-gradient(180deg, #7a5333 0%, #4d321f 55%, #29180f 100%);
  box-shadow:
    inset 0 1px 0 rgb(var(--parchment-50) / 0.12),
    inset 0 -3px 0 rgb(var(--ink-950) / 0.28);
}

.column-core {
  position: relative;
  padding: 14px 10px;
  border-inline: 1px solid rgb(var(--gold-300) / 0.22);
  background:
    linear-gradient(90deg, rgb(255 227 168 / 0.08), transparent 10%, transparent 90%, rgb(255 227 168 / 0.06)),
    repeating-linear-gradient(90deg, rgb(24 14 10 / 0.18) 0 8px, rgb(88 58 35 / 0.08) 8px 18px),
    linear-gradient(180deg, #6c472d 0%, #3a2417 28%, #26170f 100%);
  box-shadow:
    inset 8px 0 12px rgb(0 0 0 / 0.18),
    inset -8px 0 12px rgb(0 0 0 / 0.18),
    0 18px 28px rgb(0 0 0 / 0.2);
}

.column-ribs {
  position: absolute;
  inset: 12px 8px;
  border: 1px solid rgb(var(--gold-700) / 0.16);
  background:
    repeating-linear-gradient(180deg, transparent 0 54px, rgb(var(--gold-700) / 0.12) 54px 56px, transparent 56px 112px);
  pointer-events: none;
}
```

### Visual rule
Колонна должна быть:
- темнее центра;
- ниже по контрасту;
- тяжелее по массе;
- не ярче menu plate.

---

## 6. Carved corners blueprint

```css
.frame-corner {
  position: absolute;
  z-index: 5;
  width: 74px;
  aspect-ratio: 1;
  border: 1px solid rgb(var(--gold-300) / 0.28);
  background:
    radial-gradient(circle at 30% 28%, rgb(var(--parchment-50) / 0.18), transparent 34%),
    linear-gradient(180deg, #91633b 0%, #5a3923 48%, #2c1a12 100%);
  box-shadow:
    inset 0 1px 0 rgb(var(--parchment-50) / 0.12),
    inset 0 -3px 0 rgb(var(--ink-950) / 0.28),
    0 8px 18px rgb(0 0 0 / 0.24);
}

.corner-tl {
  top: 10px;
  left: 10px;
  clip-path: polygon(0 100%, 0 18%, 18% 18%, 18% 0, 100% 0, 84% 18%, 36% 18%, 18% 36%, 18% 84%);
}

.corner-tr {
  top: 10px;
  right: 10px;
  transform: scaleX(-1);
  clip-path: polygon(0 100%, 0 18%, 18% 18%, 18% 0, 100% 0, 84% 18%, 36% 18%, 18% 36%, 18% 84%);
}

.corner-bl {
  bottom: 10px;
  left: 10px;
  transform: scaleY(-1);
  clip-path: polygon(0 100%, 0 18%, 18% 18%, 18% 0, 100% 0, 84% 18%, 36% 18%, 18% 36%, 18% 84%);
}

.corner-br {
  bottom: 10px;
  right: 10px;
  transform: scale(-1);
  clip-path: polygon(0 100%, 0 18%, 18% 18%, 18% 0, 100% 0, 84% 18%, 36% 18%, 18% 36%, 18% 84%);
}
```

### Rule
Угол должен заходить одновременно на:
- top/bottom beam
- side column
- inner frame logic

Если угол выглядит как наклейка — значит он не работает.

---

## 7. Top and bottom beams

```css
.frame-beam {
  position: absolute;
  left: 72px;
  right: 72px;
  height: 30px;
  z-index: 4;
  border: 1px solid rgb(var(--gold-300) / 0.24);
  background:
    linear-gradient(180deg, rgb(var(--parchment-50) / 0.12), transparent 36%),
    repeating-linear-gradient(90deg, rgb(94 62 39 / 0.18) 0 18px, rgb(48 30 20 / 0.08) 18px 36px),
    linear-gradient(180deg, #744d31 0%, #452b1b 52%, #24150f 100%);
  box-shadow:
    inset 0 1px 0 rgb(var(--parchment-50) / 0.12),
    inset 0 -3px 0 rgb(var(--ink-950) / 0.28);
}

.frame-beam-top { top: 12px; }
.frame-beam-bottom { bottom: 12px; }
```

Именно beams должны связать левую колонну, центр и правую колонну в **один объект**.

---

## 8. Central mounted menu object

### Intent
Центр должен читатьcя как:
- mounted plate
- title cartouche above
- command slab in middle
- supporting lore below

### CSS skeleton
```css
.center-top-cartouche {
  display: grid;
  justify-items: center;
  gap: 14px;
}

.menu-plate-shell {
  position: relative;
  padding: 12px;
}

.menu-plate-shadow {
  position: absolute;
  inset: 10px 18px -10px;
  filter: blur(16px);
  background: radial-gradient(circle at center, rgb(0 0 0 / 0.42), transparent 70%);
}

.menu-plate-body {
  position: relative;
  z-index: 2;
  padding: clamp(22px, 3vw, 30px);
  border: 1px solid rgb(var(--gold-300) / 0.3);
  clip-path: var(--shape-hero);
  background:
    linear-gradient(180deg, rgb(var(--parchment-50) / 0.08), transparent 16%),
    repeating-linear-gradient(0deg, rgb(0 0 0 / 0.08) 0 2px, transparent 2px 10px),
    linear-gradient(180deg, #543523 0%, #2a1a12 24%, #19100d 56%, #100b09 100%);
  box-shadow:
    0 18px 0 rgb(var(--ink-950) / 0.16),
    0 32px 54px rgb(0 0 0 / 0.3),
    inset 0 1px 0 rgb(var(--parchment-50) / 0.08),
    inset 0 0 0 12px rgb(94 62 39 / 0.24);
}

.supporting-lore-strip {
  display: grid;
  gap: 14px;
}
```

---

## 9. Menu buttons hardening

Текущие `.game-menu-button` уже неплохие. Усиливаем так:

### Change intent
- меньше card feel
- больше plaque/slab feel
- primary button не должна становиться modern CTA
- hover = activation of plate, not web glow

### Direction
```css
.game-menu-stack {
  width: min(100%, 420px);
  margin-inline: auto;
  gap: 12px;
}

.game-menu-button {
  min-height: 78px;
  grid-template-columns: 54px minmax(0, 1fr);
  padding: 13px 18px;
}

.game-menu-button:hover {
  transform: translateY(-1px);
}

.game-menu-button:active {
  transform: translateY(1px);
  box-shadow:
    inset 0 2px 0 rgb(var(--ink-950) / 0.26),
    inset 0 -1px 0 rgb(var(--gold-700) / 0.18),
    0 2px 0 rgb(var(--ink-950) / 0.14);
}
```

---

## 10. Order of implementation

### Pass 1
Добавить новую structural DOM hierarchy без полного редизайна стилей.

### Pass 2
Перенести `status-rail` и `command-rail-shell` внутрь `side-column`.

### Pass 3
Добавить `frame-beam` и `frame-corner`.

### Pass 4
Собрать `menu-center-mount` + `menu-plate-body`.

### Pass 5
Ужесточить пропорции desktop.

### Pass 6
Потом уже micro-polish кнопок, brass, carved separators, vine restraint.

---

## 11. Guardrails for this repo

### Keep
- текущий backdrop mood;
- fairy/self-discovery narrative;
- dark wood + brass + parchment;
- mobile stability;
- existing menu button language.

### Avoid
- превращать страницу в literal HoMM2 clone;
- перебивать центр слишком активными колоннами;
- делать углы слишком орнаментальными;
- распылять фокус между `game-menu-stack` и `menu-plaques`.

### Hierarchy rule
Фокус должен идти так:
1. `h1 / title cartouche`
2. `game-menu-stack`
3. `side columns as structure`
4. `supporting plaques`
5. `backdrop`

---

## 12. Practical rollout note

Для этого проекта лучше всего:
- основной новый structural CSS положить в `css/fairy-journeys.css`;
- shared primitives не тащить в `components.css`, пока паттерн не стабилизирован;
- если pass окажется удачным, потом вынести reusable куски в shared layer.

---

## 13. Ready-to-build instruction

Если идти сразу в код:
1. patch `index.html` вокруг `.menu-stage`
2. patch `css/fairy-journeys.css`
3. проверить desktop first
4. потом mobile rollback
5. потом live smoke test
