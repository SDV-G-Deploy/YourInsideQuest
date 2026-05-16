# Your Inside Quest

Applied/live static product site for the HOMM2-inspired fairy-tale self-discovery menu.

Live URL: https://sdv-g-deploy.github.io/YourInsideQuest/

## Source-of-truth relationship

This repo owns the live implementation and applied product decisions.

The upstream design-system/reference source is:

- `../homm2-design-system-sandbox`

Use the sandbox for reusable art-direction guidance, token/reference work, component experiments, and broader HOMM2-inspired system research. Use this repo for the product page, applied roadmap, live layout decisions, and intentional deviations.

Repo-local applied docs:

- `docs/applied-roadmap.md` — applied roadmap and next-pass notes for `YourInsideQuest`
- `docs/architecture-source-of-truth.md` — relationship between this live repo and the sandbox
- `docs/yiq-visual-reconciliation-2026-05-16.md` — latest cross-project role/evidence reconciliation
- `docs/night-runs/2026-05-16-yiq-920-boundary-micro-pass.md` — completed 920px compact-fold follow-up

Copy, layout, and mobile improvements from the sandbox should be intentionally reconciled into this repo. Do not assume the two repos are automatically synced.

## Current applied status

Current HEAD `bae3f14` keeps `YourInsideQuest` as the applied product surface. The root page and `fairy-journeys.html` are near-mirror product shells with the proof-boundary strip `Applied smoke · канон в reference.`.

The latest reconciliation run closed the cross-project semantic drift, and the follow-up 920px micro-pass added a compact tablet/small-desktop fold. YIQ should still not be treated as canonical HOMM2 proof; canonical evidence remains in sandbox fixtures and pass reports.

## Responsive contract layer

The live Fairy page now carries the shared responsive helpers from the sandbox:

- `css/tokens.css` owns the reusable floors: `--tap-target-min`, `--tap-target-compact`, `--label-legible-min`, fold gap, and first-screen recipe budgets.
- `css/components.css` owns system hooks for recipe parts: `.menu-screen-shell`, `.command-slab`, `.menu-side-rail`, `.menu-save-slot`, `.menu-route-index`, `.menu-art-layer`, plus tap/label floors for menu, archive, dossier, and ritual surfaces.
- `fairy-journeys.html` marks the first-screen Fairy menu with those shared classes so page CSS no longer has to re-define the contract from scratch.

Page-local composition remains in `css/fairy-journeys.css`: the Fairy/HoMM2 frame, columns, copy sequence, decorative scene art, and breakpoint-specific downgrade choices. Local mobile and tablet rules should hide, stack, or defer optional route/rail layers before reducing text below the shared floor.

## Local preview

```bash
python3 -m http.server 4174
```

Open:

- http://127.0.0.1:4174/
- http://127.0.0.1:4174/fairy-journeys.html
