# Demo script — Your Inside Quest

A 3–4 minute walkthrough of the playable demo. Works on the live site
(https://sdv-g-deploy.github.io/YourInsideQuest/) or locally
(`python3 -m http.server 4174` → http://127.0.0.1:4174/).

## Before you start

- Use a fresh browser profile or clear the slot: open the console and run
  `YIQJourney.reset()` (progress lives only in `localStorage`, key `yiq.journey.v1`).
- Optional shortcut: `…/#journey` opens the journey dialog directly.
- For a phone demo, 390px width is the reference layout.

## 1. The main menu (≈30s)

- Point out the screen as one framed object: wooden side columns, carved corners,
  brass beams, the central command slab. All art is original CSS/SVG.
- Status rail (left) and command rail (right) frame the menu; the save slot strip
  under the slab reads `врата · глава 1 · тихая отвага` on a fresh profile.
- Say: "This is a menu, not a landing page — the primary command starts the quest."

## 2. Play the journey (≈90s)

Click **Начать путь** (or press Tab → Enter; keyboard works throughout).

1. **I · Лес шёпотов** — pick an answer. A blue "echo" line answers the choice.
   Mention: keys **1–4** pick answers on desktop.
2. Click **Дальше по тропе**. The progress plaque advances (I → II → III → IV → ☾ → ⚜).
3. **II · Башня отражений**, **III · Рынок чудес**, **IV · Мост возвращения** — pick one each.
   Optional: close the dialog midway (✕ or Esc), show that the save slot now reads
   e.g. `рынок чудес · глава 3`, then press **Продолжить** to resume exactly there.

Each answer feeds one of four companions/archetypes: Хранитель, Странник,
Звездочёт, Творец. The leader gives the title, the runner-up gives the epithet
(ties go to the most recent choice).

## 3. Campfire reflection (≈30s)

- The prompt adapts to the leading archetype.
- Type one short phrase (≤140 chars), e.g. «Я имею право на свою дорогу».
- Note the privacy line: nothing leaves the device.
- Click **Принять имя**.

## 4. Result card (≈45s)

- Show the parchment card: name (e.g. **Творец Ясного Взгляда**), strength, shadow,
  companion, the user's own phrase, archetype balance bars and a weekly micro-quest.
- **Сохранить карточку** downloads a 1080px-wide PNG drawn on `<canvas>`
  (`yiq-<archetype>-card.png`).
- **Поделиться** uses the native share sheet with the image on mobile; on desktop
  it falls back to sharing/copying the text + link.
- Close the dialog: the save slot now shows `имя найдено · <name>`; reload keeps it.
- **Пройти заново** restarts.

## 5. Quality notes to mention (≈20s)

- Keyboard: skip link, visible focus ring on all bevelled controls, dialog traps focus,
  Esc closes and returns focus to the button that opened it.
- `prefers-reduced-motion` disables the dialog/entrance/bar animations.
- axe-core (WCAG 2 A/AA) reports 0 violations on both pages and in the dialog at 390/1280.
- No console errors; no horizontal overflow at 390 and 1280.
- OG/Twitter meta + original 1200×630 preview image (`assets/og-image.png`).

## Talking points / disclaimers

- It is a reflective game, not a psychological test or diagnosis.
- Art direction is inspired by classic fantasy strategy menus; no original game assets
  are used and the project is not affiliated with any rights holder.
