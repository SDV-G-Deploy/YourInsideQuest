# YIQ visual/design-system reconciliation - 2026-05-16

## Findings first

| Severity | Page | Viewport | Issue | Why it matters | Bounded fix idea |
| --- | --- | --- | --- | --- | --- |
| Resolved | YIQ root + `fairy-journeys.html` | desktop / tablet / mobile | The applied/proof boundary is now present in the first viewport as `Applied smoke · канон в reference.` on both live YIQ surfaces. | This closes the earlier medium-risk ambiguity about treating YIQ as canonical system proof. | Keep the strip; only revisit if the product shell changes materially. |
| Resolved | YIQ root | desktop / tablet / mobile | The self-link label now matches both YIQ live surfaces as `Витрина`. | This removes a small but persistent semantic mismatch inside the mirrored applied shell. | Keep unless product naming changes again. |
| Low | YIQ root + `fairy-journeys.html` | tablet | First screen is stable but tall: the stage runs to about 1524px on 768px tablet. | This is an intentional game-screen stack, but it makes tablet rhythm denser than Fairy/reference. | Keep as intentional for now; tune in a later proportion pass only if visual judgment says tablet feels too slow. |
| Watch | Fairy applied live | mobile | Shell nav has internal horizontal scroll for the final nav item; page-level overflow remains zero. | This is acceptable per current mobile utility direction, but it is a useful reference point when comparing nav behavior. | No YIQ change. YIQ nav has no page overflow and no nav overflow at 390px. |

## Intentional applied deviations

- YIQ keeps the heavier HoMM2 main-menu shell: side columns, carved corners, command slab, route plaques, and game-menu first viewport. This is the applied product direction, not drift.
- YIQ keeps self-discovery/product copy instead of the newer Fairy hostile-plausible article/dossier copy. This is intentional product positioning.
- YIQ root and YIQ `fairy-journeys.html` are near-mirror live surfaces. The duplicated shell is intentional for now, though copy normalization can be tightened later.
- YIQ does not wholesale adopt the updated Fairy article/dossier recipe structure. The sandbox owns reusable recipe proof; YIQ owns the live product menu shell.

## Real drift

No high-confidence copy drift remains in the current YIQ shell after the self-link normalization pass. The remaining pressure is mainly proportional/layout tuning around the `920px` collapse boundary.

## Evidence summary

Checked live surfaces:

- `https://sdv-g-deploy.github.io/YourInsideQuest/`
- `https://sdv-g-deploy.github.io/YourInsideQuest/fairy-journeys.html`
- `https://sdv-g-deploy.github.io/homm2-design-system-sandbox/fairy-journeys.html`
- `https://sdv-g-deploy.github.io/homm2-design-system-sandbox/reference.html`

Viewport smoke:

| Surface | 390 x 844 | 768 x 1024 | 1440 x 900 |
| --- | --- | --- | --- |
| YIQ root | no page overflow; Heraldic/Menu identity present; proof-boundary present | no page overflow; stage tall but stable | no page overflow; center menu reads clearly |
| YIQ fairy | no page overflow; Heraldic/Menu identity present; proof-boundary present | no page overflow; stage tall but stable | no page overflow; center menu reads clearly |
| Fairy applied | no page overflow; proof-boundary present; nav scrolls internally | no page overflow | no page overflow |
| Reference | no page overflow; proof-boundary present | no page overflow | no page overflow |

## Chosen bounded fix

Status: shipped and live on both YIQ surfaces.

The bounded fix for this reconciliation note was to add compact proof-boundary wording to the YIQ first viewport and style it as a small contract strip inside the existing title cartouche.

Applied copy: `Applied smoke · канон в reference.`

Out of scope for this pass:

- broad redesign;
- architecture rewrite;
- replacing YIQ with the updated Fairy applied article/dossier page;
- changing route structure;
- subjective proportion tuning beyond the boundary strip.
