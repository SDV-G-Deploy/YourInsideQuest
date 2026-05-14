# Applied roadmap — HOMM2 / YourInsideQuest

> This is the in-repo applied roadmap for `YourInsideQuest`. The external workspace copy may still exist for historical continuity, but this file is the repo-local place to continue applied planning.


## Status
Draft v0.1

## Purpose
Зафиксировать live-проект `YourInsideQuest` как applied ветку HOMM2-inspired системы и сохранить ближайший план, чтобы в новом чате можно было быстро продолжить без устного пересказа.

Project:
- repo: `https://github.com/SDV-G-Deploy/YourInsideQuest`
- live: `https://sdv-g-deploy.github.io/YourInsideQuest/`

---

## 1. Current state

Сейчас проект уже живой и полезный как proof-of-direction:
- menu-first композиция уже собрана;
- mobile версия ощущается удачнее и убедительнее;
- fairy-tale / self-discovery тема уже перенесена в HOMM2-inspired grammar;
- есть dark wood, brass/gold chrome, parchment insets, plaques, command rail.

Но:
- desktop layout пока слабее mobile;
- main screen ещё не дотянут до по-настоящему сильного `HoMM2 main menu` ощущения;
- не хватает более мощной outer-frame архитектуры;
- не хватает `wooden side columns` и `carved corners` как structural, а не cosmetic слоя.

---

## 2. Immediate priority

Следующий practical приоритет:

### Pass A — desktop adaptation fix
Сначала поправить именно desktop-версию `YourInsideQuest`, чтобы live-сайт не был “mobile-first удачным, desktop-second слабым”.

Проверить и усилить:
- центральную массу экрана;
- баланс между left status rail / center menu plate / right command rail;
- ширину и иерархию главного menu stack;
- размер backdrop mass относительно menu UI;
- вертикальный rhythm и spacing на wide screens;
- чувство `screen as one authored object`, а не три соседних колонки.

---

## 3. Next style escalation

После desktop fix идти в следующий режим усиления:

### Pass B — HoMM2 main menu escalation
Цель:

> сделать страницу ближе не просто к fantasy-branded landing, а к настоящему old-game main menu / campaign-front screen.

### Обязательные усилители
1. **HoMM2 main menu bias**
   - stronger central menu plate;
   - clearer command hierarchy;
   - меньше ощущение editorial landing;
   - больше ощущение title screen / chapter select / campaign gate.

2. **Wooden side columns**
   - крупные вертикальные structural боковины;
   - не просто texture, а архитектурные несущие элементы;
   - могут удерживать vines, trims, bolts, carved separators.

3. **Carved corners**
   - углы должны ощущаться собранными и вырезанными;
   - corner treatment должен усиливать frame logic;
   - ornament only where it supports structure.

4. **Heavier screen frame**
   - outer shell должен быть убедительнее;
   - центр должен читаться как mounted menu object;
   - rails должны быть частью единой plate-архитектуры.

---

## 4. Detailed pass order

### Phase 1 — Desktop repair
- tune wide-screen proportions;
- re-balance menu-stage columns;
- reduce empty dead zones;
- strengthen center dominance;
- verify desktop readability by eye.

### Phase 2 — Structural menu hardening
- add wooden side columns;
- add carved corner treatment;
- strengthen outer frame;
- make title/cartouche more game-like;
- make command rails feel physically attached.

### Phase 3 — Main menu polish
- refine menu button hover/active states;
- tune ceremonial CTA vs utility command separation;
- reduce any remaining “landing page” read;
- make the page feel like a game screen even at first glance.

### Phase 4 — HoMM2 dominance pass
- make the center plate even heavier relative to side columns;
- quiet side columns by one more step so they stay structural, not attention-leading;
- make the title cartouche more heraldic / campaign-plaque-like;
- compress menu stack so it reads as one command slab, not a set of separate cards;
- seat corners deeper into frame logic so they feel carved into assembly, not added on top.

---

## 5. Guardrails

### Keep
- grammar transfer, not direct asset copying;
- modern readability;
- mobile support;
- clear primary action hierarchy;
- dark wood + brass + parchment as material logic.

### Avoid
- 1:1 HoMM2 screen recreation;
- decorative noise without structural role;
- overloading corners and borders equally everywhere;
- desktop-only overfitting that breaks mobile;
- turning the page into a generic marketing hero with fantasy paint.

---

## 6. Verification plan

После каждого applied pass проверять:
- live desktop reading;
- mobile still intact;
- root page returns `200`;
- no broken CSS links;
- menu screen still reads as one object;
- side columns and corners improve structure, not clutter;
- center remains the clear first focal mass;
- side columns support hierarchy without stealing attention;
- title reads closer to campaign / heraldic plaque than to a web hero heading.

---

## 7. Current applied status

Уже сделано в live-pass:
- stronger framed screen shell;
- wooden side columns as structural elements;
- carved frame corners;
- heavier central mounted menu plate;
- first polish pass for brass / wood / plaque hierarchy.

Это значит, что следующий проход не должен повторять structural work с нуля.
Следующий проход должен быть **selective refinement**, а не ещё один broad rebuild.

### Что ещё осталось дожать
1. **Center heavier than side columns**
   - усилить центральную массу ещё на один шаг;
   - чуть приглушить боковые колонны по контрасту и активности.

2. **Title cartouche more heraldic**
   - меньше ощущение web heading;
   - больше ощущение campaign plaque / crest title.

3. **Menu stack more slab-like**
   - tighter vertical grouping;
   - меньше ощущение набора самостоятельных карточек;
   - сильнее читается как единая command slab.

4. **Corners deeper in frame logic**
   - меньше декоративной наклейки;
   - больше ощущения вырезанной/собранной рамной детали.

5. **Bottom foundation heavier**
   - нижняя зона может ещё лучше держать композицию;
   - экран выиграет, если низ будет ощущаться как опорная база.

---

## 8. Recommended next pass

Вместо ещё одного общего structural pass рекомендован **другой, более точечный проход**:

### Pass C — hierarchy refinement pass
Цель:
> не добавлять больше декора ради декора, а перераспределить визуальную власть внутри уже собранного main menu.

### Фокус этого pass
- heavier center;
- quieter side columns;
- more heraldic title cartouche;
- tighter command slab feel in the menu stack;
- stronger bottom base.

### Чего НЕ делать в этом pass
- не начинать новый rebuild layout;
- не усложнять corners без улучшения структуры;
- не наращивать ornament everywhere equally;
- не возвращать страницу в landing-page rhythm.

### Лучший характер этого прохода
Это должен быть:
- shorter pass;
- more selective pass;
- hierarchy-first pass;
- closer to art-direction tuning than to layout surgery.

---

## 9. Desktop failure analysis after the framed-shell pass

Новый framed-shell pass дал нужное направление по стилю, но снова сломал desktop-адаптацию.

### Что именно это значит концептуально
Проблема не в самой HOMM2-inspired grammar.
Проблема в том, что мы применили **fixed-screen / authored-scene logic** к responsive web layout без достаточного числа промежуточных desktop состояний.

### Вероятные корни проблемы
1. **Collapse breakpoint слишком поздний**
   - текущий mobile/stack fallback включается слишком поздно;
   - между wide desktop и mobile остаётся опасная зона small-desktop / laptop-width, где layout уже тесный, но ещё пытается жить как full framed game screen.

2. **Nested shell conflict**
   - старый `.menu-stage` остаётся outer scene shell;
   - новый `.menu-frame-shell` стал вторым полноценным layout engine;
   - в итоге desktop держится не на одном authored каркасе, а на двух конкурирующих обёртках.

3. **Слишком жёсткие минимумы у desktop grid**
   - у center и side columns слишком aggressive min widths;
   - это хорошо для art direction, но плохо для адаптивного диапазона small desktop.

4. **Не до конца зажат text/grid overflow**
   - внутренние grid/flex children недостаточно защищены от `min-content` overflow;
   - отсюда вылезание текста и раздвигание колонок.

5. **Слишком много width съедают вложенные paddings**
   - `page` gutter;
   - `.menu-stage` padding;
   - `.menu-frame-shell` padding;
   - side-column padding;
   - inner plate wrappers.

В сумме это даёт desktop breakdown даже при правильном художественном направлении.

---

## 10. Technical desktop-only fix plan

Следующий проход должен быть не visual-rebuild, а именно **technical layout stabilization pass**.

### A. Add an intermediate desktop breakpoint
Нужен отдельный режим примерно для:
- `max-width: 1220px` (или близкий small-desktop breakpoint)

В этом режиме:
- ослабить side columns;
- уменьшить center minimum pressure;
- уменьшить paddings shell layers;
- упростить часть frame decoration до mobile-collapse.

### B. Stop controlling center width via hard grid minimums
Не держать главный центр слишком жёстко через desktop grid `minmax(...)`.

Лучше:
- center column → `minmax(0, 1fr)`;
- главный контроль композиции переносить во внутренние `max-width` у центра.

Идея:
- grid должен быть гибким;
- visual mass центра должна держаться inner constraints, а не ломать layout.

### C. Add `min-width: 0` to critical grid/flex children
Это обязательный defensive pass для:
- main grid children;
- center shell;
- title cartouche;
- menu plate body;
- menu button text wrappers;
- plaque content wrappers;
- status/command entries.

Цель:
- позволить тексту сжиматься и переноситься;
- не позволять контенту раздвигать grid.

### D. Neutralize the old shell as a competing layout engine
`.menu-stage` должен остаться:
- scene container;
- background carrier;
- outer decorative shell.

Но не должен оставаться вторым активным desktop grid engine, конкурирующим с `.menu-frame-shell`.

### E. Reduce nested padding pressure on small desktop
На intermediate desktop pass уменьшить:
- `menu-stage` padding;
- `menu-frame-shell` padding;
- corner/beam offsets;
- decorative spacing in side columns.

### F. Soften side columns earlier than mobile
Не ждать полного mobile collapse.

Уже на small desktop:
- сузить columns;
- ослабить ribs/trims;
- уменьшить ornament density;
- оставить structure, но снизить spatial cost.

### G. Tighten text measures for small desktop
На intermediate desktop pass отдельно поджать:
- `h1`;
- `lead`;
- button secondary lines;
- plaque secondary lines;
- rail text.

То есть:
- чуть меньше font size;
- чуть меньше letter spacing, если нужно;
- чуть строже max-width.

---

## 11. Recommended implementation order for the fix

### Pass 1 — breakpoint architecture
- добавить intermediate desktop breakpoint;
- ослабить shell grid;
- уменьшить padding pressure.

### Pass 2 — overflow safety
- добавить `min-width: 0`;
- проверить shrink/wrap behaviour у center + rails + plaques.

### Pass 3 — center control model
- перевести center с hard grid minimum на inner max-width model.

### Pass 4 — typography tuning for small desktop
- поджать heading / lead / secondary lines.

### Pass 5 — only then decorative cleanup
- если нужно, уже потом подправлять frame ornaments и column trims.

---

## 12. Short diagnosis for future /new sessions

Короткий диагноз:

> Мы перенесли HoMM2 fixed-screen grammar в responsive web, но не дали ей отдельный intermediate desktop adaptation layer.

Следующий pass должен исправлять именно это.

---

## 13. Post-fix quick QA result

После technical stabilization pass:
- аварийный desktop breakdown ушёл;
- horizontal overflow больше не проявился в quick checks;
- mobile rollback сохранился корректно;
- framed shell снова держится как единый объект.

Но:
- на `960px` композиция ещё ощущается узковатой и слишком вытянутой по вертикали;
- на `1024px` shell уже стабилен, но всё ещё слегка compressed;
- на `1120px` композиция уже близка к хорошему целевому состоянию.

Это значит, что emergency-fix phase завершена.
Следующий шаг — не repair, а **proportion tuning**.

---

## 14. Recommended next pass after stabilization

### Pass D — proportion tuning for intermediate desktop
Цель:
> не чинить поломку, а дотянуть пропорции small/medium desktop до более уверенного HoMM2 main menu reading.

### Фокус pass
1. **Wider center feel at 960–1024**
   - дать центру чуть больше визуальной ширины;
   - не ломать framed-shell architecture.

2. **Less vertical heaviness in title cartouche**
   - чуть уменьшить vertical drag у верхнего блока;
   - сделать desktop reading компактнее и увереннее.

3. **Quieter side columns in intermediate desktop**
   - ещё на полтона снизить их визуальную власть;
   - оставить structure, но усилить центр как главный focal mass.

### Важно
Этот pass должен быть:
- short;
- proportion-first;
- no rebuild;
- no emergency CSS surgery.

---

## 15. /new invocation for the next pass

- **`YourInsideQuest — proportion tuning pass for intermediate desktop after stabilization`**
- **`YourInsideQuest — at 960–1024 make center feel wider, title less vertically heavy, side columns quieter`**
- **`YourInsideQuest — no rebuild, only desktop proportion tuning on top of the stabilized framed shell`**

---

## 9. /new invocation

Короткий вход для нового чата:

- **`YourInsideQuest`**
- **`YourInsideQuest, продолжаем`**
- **`YourInsideQuest — поправим desktop вёрстку и потом идём в HoMM2 main menu + wooden side columns + carved corners`**
- **`YourInsideQuest — не новый rebuild, а hierarchy refinement pass: heavier center, quieter side columns, more heraldic title, tighter menu slab`**

Если нужен более design-specific вход:

- **`YourInsideQuest. Нужен desktop fix first, then stronger HoMM2 main menu grammar with wooden side columns and carved corners.`**
- **`YourInsideQuest. Continue from the applied framed menu shell and do a hierarchy-refinement pass, not a broad rebuild.`**

---

## 10. Canonical role

Этот документ — repo-local applied roadmap для live-проекта `YourInsideQuest`.

Использовать вместе с:
- `docs/DESIGN-SYSTEM-HOMM2-FOUNDATION.md`
- `docs/DESIGN-SYSTEM-HOMM2-STARTER-KIT.md`
- `docs/DESIGN-SYSTEM-HOMM2-LAZYDESIGN-LESS-ROUND.md`
- `docs/DESIGN-SYSTEM-HOMM2-SANDBOX-APPLIED-PASS.md`

---

## 11. Selective reconciliation pass — copy and mobile safety

Applied from the newer sandbox state without replacing the YourInsideQuest framed-shell direction:
- shortened command, plaque, trail, and threshold copy so compact controls read like game UI instead of prose blocks;
- kept the YourInsideQuest structural frame / side columns / carved corners as the applied-site direction;
- adopted the sandbox text-scale reduction and text-overflow guardrails;
- tightened mobile behavior by hiding dense command-rail details and compressing status/route controls on narrow screens.

Intentional non-sync:
- did not revert the applied HoMM2 frame shell to the simpler sandbox three-column layout;
- did not wholesale copy sandbox HTML/CSS, because the live product currently owns the heavier main-menu art direction.
