# YIQ 920px boundary micro-pass - 2026-05-16

## Scope

One bounded follow-up after the reconciliation night run.

Target: smooth the `561px-920px` tablet/small-desktop fold on the YIQ applied shell without broad redesign, without copying sandbox CSS, and without changing canonical proof boundaries.

## Issue

The reconciliation run confirmed no page-level overflow, but the YIQ first screen became disproportionately tall at the stacked `920px` boundary. The main cause was not broken layout; it was a long inventory-like stack:

- title/cartouche remained desktop-heavy;
- route plaques stayed single-column in the tablet fold;
- status and command rails both remained below the center;
- the right command rail added height while its main entries were already hidden.

## Change

Added a tablet compact fold in `css/fairy-journeys.css` for `561px-920px`:

- compacted title/cartouche, menu plate, and menu buttons;
- route plaques become 2 columns, then 4 columns from `840px-920px`;
- status rail becomes a compact 3-column strip;
- right command rail is deferred in this fold;
- mobile `<=560px` behavior remains separate.

## Verification

Local Chromium/CDP against `http://127.0.0.1:4180/index.html`:

| Width | Result |
| --- | --- |
| `920` | no horizontal overflow; frame height reduced from about `1450px` live baseline to `963px` local compact fold |
| `768` | no horizontal overflow; frame height `1033px`; plaques reduce to two rows |
| `390` | no horizontal overflow; mobile compact fold unchanged in intent |
| `921` | no horizontal overflow; desktop fold still active |
| `1024` | no horizontal overflow; desktop fold still active |

Additional gate:

- `git diff --check` clean

## Residual Risk

This is a proportion polish pass, not a full visual art-direction pass. The `768px` tablet fold is still tall because the product shell intentionally carries menu, route, and status information in one applied screen. Further reduction would require a stronger product decision about hiding or moving route/status content.

## Next

After deploy, verify live root and `fairy-journeys.html` at `920`, `768`, and `390`. If live parity holds, stop; do not continue into shell redesign.
