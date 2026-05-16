# Pass 01 artifact — YIQ live parity and viewport baseline

## Scope

One bounded verification pass for:

- git cleanliness in `YourInsideQuest` and `homm2-design-system-sandbox`
- YIQ live parity against current local HEAD lineage
- YIQ root viewport smoke at `1440/1180/1024/920/768/390/360`
- semantic role comparison across four live surfaces

## Git baseline

- YIQ working tree at pass start: clean
- Sandbox working tree at pass start: clean
- YIQ observed HEAD during pass: `52a5ded` (`Align YIQ night run pass ladder`)
- Sandbox observed HEAD during pass: `9c57cb6` (`Mark visual alignment closeout report sent`)
- ancestry confirmed:
  - `ec3471b` is an ancestor of `b45521e`
  - `ec3471b` is an ancestor of current YIQ `HEAD`
  - `b45521e` is an ancestor of current YIQ `HEAD`

## Live parity evidence

Checked:

- `https://sdv-g-deploy.github.io/YourInsideQuest/`
- `https://sdv-g-deploy.github.io/YourInsideQuest/fairy-journeys.html`
- `https://sdv-g-deploy.github.io/homm2-design-system-sandbox/fairy-journeys.html`
- `https://sdv-g-deploy.github.io/homm2-design-system-sandbox/reference.html`

YIQ live returned `HTTP 200` on both surfaces and showed `Last-Modified: Sat, 16 May 2026 19:39:16 GMT`.

String parity confirmed on live YIQ:

- root includes `Applied smoke · канон в reference.` and keeps `Mirror`
- `fairy-journeys.html` includes `Applied smoke · канон в reference.` and keeps `Витрина`

Conclusion: live YIQ reflects the current `HEAD` line descended from `b45521e` / `ec3471b`; no deploy mismatch was found for this pass.

## YIQ root viewport smoke

Browser metrics:

| Viewport | Overflow | First-screen height | Note |
| --- | --- | --- | --- |
| 1440 x 900 | none | 897px | stable desktop menu shell |
| 1180 x 900 | none | 882px | stable desktop menu shell |
| 1024 x 900 | none | 859px | stable small-desktop menu shell |
| 920 x 900 | none | 1566px | collapse into tall stacked stage starts here |
| 768 x 1024 | none | 1559px | tall but stable tablet stack |
| 390 x 844 | none | 1036px | stable mobile stack |
| 360 x 740 | none | 988px | stable narrow-mobile stack |

Interpretation:

- no page-level horizontal overflow at any required width
- the major responsive breakpoint is between `1024` and `920`
- tablet/mobile remain intentional game-screen stacks rather than broken layouts

## Cross-surface semantic read

1. `YourInsideQuest/` and `YourInsideQuest/fairy-journeys.html` match each other as applied product shells, with the only visible copy drift being `Mirror` vs `Витрина`.
2. Sandbox `fairy-journeys.html` is intentionally different: applied recipe-stack/article-dossier route, not the YIQ menu shell.
3. Sandbox `reference.html` remains the proof/manual surface and should not be read as a product page.
4. The four surfaces agree on role separation well enough after the boundary strip landed: YIQ is applied product, sandbox fairy is applied smoke/proof-pressure, reference is canonical operator/manual proof.

## Docs/proof accuracy result

- stale claim found: `docs/yiq-visual-reconciliation-2026-05-16.md` still said the applied/proof boundary was missing
- verification contradicted that claim locally and on live
- pass action: update that note so it reflects shipped/live reality

## Recommended next step

If another bounded pass is needed, the highest-value remaining drift is still the low-risk nav-label mismatch (`Mirror` vs `Витрина`), not structural visual redesign.
