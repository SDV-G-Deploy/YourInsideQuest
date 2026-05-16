# Pass 02 artifact — YIQ visual/design-system reconciliation report

## Status

Завершено как documentation-only pass. Исправлений в код/вёрстку нет; только findings-first артефакт.

## Findings first

| Severity | Page | Viewport | Issue | Why it matters | Bounded fix idea |
| --- | --- | --- | --- | --- | --- |
| Medium | YIQ root + `fairy-journeys.html` | `920px` small desktop, `768px` tablet | Первый экран слишком рано сваливается в высокий stacked-stage. На `1024px` YIQ ещё держит компактный desktop-shell, а на `920px` высота первого экрана резко прыгает примерно до `1560px`. | Это не ломает страницу и не создаёт overflow, но ослабляет новый HOMM2-вектор `one authored object`: на промежуточных ширинах экран читается более длинным и менее собранным, чем обновлённые Fairy/reference surfaces. | Сделать отдельный hierarchy/proportion pass вокруг breakpoints `1024→920`: не перестраивать страницу, а точечно удержать heavier-center, compact command slab и calmer side rails дольше перед полным collapse. |
| Low | YIQ root | all | YIQ root держит self-link `Mirror`, тогда как `fairy-journeys.html` держит `Витрина`. | Это не визуальная поломка, но создаёт лишний semantic drift внутри двух почти зеркальных YIQ surfaces. | Принять одно applied-name решение для self-link и синхронизировать обе страницы. |
| Low | `docs/applied-roadmap.md` + workspace roadmap copy | docs | В начале roadmap всё ещё звучит старое описание как будто YIQ ещё не добрал frame/side-columns/corners, хотя ниже в том же документе уже записано, что structural pass сделан. | Это создаёт не product drift, а planning drift: следующий агент может заново лечить уже закрытую structural debt или переоценить текущее состояние. | В отдельном docs pass свернуть раннюю историческую диагностику в `historical baseline` и оставить один current-state блок без внутренних противоречий. |

## Intentional applied deviations

- YIQ сохраняет menu-first HoMM2 shell с боковыми колоннами, carved corners, command slab и route plaques. Это applied product surface, а не попытка повторить content-first Fairy applied page.
- YIQ сохраняет self-discovery / product positioning. Обновлённая sandbox Fairy page уже стала article+dossier+route applied smoke, но YIQ сознательно остаётся экраном выбора/меню.
- YIQ root и YIQ `fairy-journeys.html` остаются почти twin-surfaces. Сейчас это сознательная applied подача, а не автоматический sync failure.
- YIQ не обязан визуально совпадать с `reference.html`; reference остаётся proof/manual surface и правильно живёт в другом visual register.

## Real drift

- Реальный UI drift остаётся локальным и узким: `Mirror` vs `Витрина`.
- Реальный layout drift есть на small-desktop/tablet переходе: YIQ не ломается, но композиционно сильнее растягивается, чем обновлённые Fairy/reference surfaces.
- Реальный docs drift есть в roadmap chronology: часть narrative уже устарела относительно shipped structural state.

## Cross-surface answer

### 1. Достаточно ли YIQ выровнен с обновлённым HOMM2 direction?

Да, достаточно для applied product surface. По material grammar, shell logic, role separation и absence of overflow YIQ уже не выглядит выпавшим из системы.

Но alignment не полный:

- YIQ сознательно старше и тяжелее как menu-screen;
- sandbox Fairy ушла в content-first applied smoke;
- reference ушёл в manual/proof surface.

Значит вопрос уже не в `сломался ли alignment`, а в том, нужен ли ещё один selective refinement pass для промежуточных desktop/tablet пропорций.

### 2. Где YIQ намеренно отличается, а где устарел?

Намеренно отличается:

- heavier HoMM2 main-menu shell;
- self-discovery copy вместо hostile-plausible dossier/article copy;
- twin-surface structure root + fairy;
- product/menu dramaturgy вместо recipe-demo dramaturgy.

Устарел или дрейфует:

- self-link naming (`Mirror` vs `Витрина`);
- proportion behavior around `920px`;
- часть roadmap wording.

### 3. Согласованы ли четыре live surface визуально и семантически?

Семантически да:

- YIQ root = applied product menu;
- YIQ fairy = applied mirror/variant той же product shell;
- sandbox Fairy = applied smoke page поверх recipe-stack;
- reference = canonical manual/proof surface.

Визуально они не должны совпадать один в один, и сейчас это различие в основном выглядит intentional, а не аварийным drift.

### 4. Точны ли docs/proof claims после последних прогонов?

В основном да.

Уже исправленная вчера ошибка про отсутствие boundary-strip больше не актуальна. Новый найденный stale слой — roadmap chronology, а не live/proof claim.

## Evidence summary

Проверенные live surfaces:

- `https://sdv-g-deploy.github.io/YourInsideQuest/`
- `https://sdv-g-deploy.github.io/YourInsideQuest/fairy-journeys.html`
- `https://sdv-g-deploy.github.io/homm2-design-system-sandbox/fairy-journeys.html`
- `https://sdv-g-deploy.github.io/homm2-design-system-sandbox/reference.html`

Подтверждено в этом pass:

- все четыре surface отвечают без page-level horizontal overflow на `1440x900`, `768x1024`, `390x844`
- YIQ root и YIQ fairy показывают `Applied smoke · канон в reference.`
- YIQ root держит `Mirror`, YIQ fairy держит `Витрина`
- sandbox Fairy остаётся article/dossier/route page с content-first framing
- reference остаётся manual/proof surface с operator-mode framing

## Recommended next step

Если продолжать bounded reconciliation, лучший следующий шаг не broad redesign, а один из двух:

1. micro-pass на naming sync (`Mirror` vs `Витрина`)
2. selective small-desktop/tablet proportion pass вокруг `920px`
