# Pass 04 artifact — cross-project QA

## Scope

- four live surfaces
- desktop / tablet / mobile smoke
- overflow, readable controls, Heraldic Menu identity, proof-boundary language

## Status

Completed as QA-only pass.

## Live matrix summary

Checked surfaces:

- `https://sdv-g-deploy.github.io/YourInsideQuest/`
- `https://sdv-g-deploy.github.io/YourInsideQuest/fairy-journeys.html`
- `https://sdv-g-deploy.github.io/homm2-design-system-sandbox/fairy-journeys.html`
- `https://sdv-g-deploy.github.io/homm2-design-system-sandbox/reference.html`

Checked viewports:

- `1440x900`
- `768x1024`
- `390x844`

## Findings

| Surface | Desktop | Tablet | Mobile | Result |
| --- | --- | --- | --- | --- |
| YIQ root | no page overflow; readable menu controls; Heraldic Menu identity clear; `Витрина` live | no page overflow; readable controls; tall but stable first screen | no page overflow; readable controls; proof-boundary copy visible | pass |
| YIQ fairy | no page overflow; readable menu controls; Heraldic Menu identity clear | no page overflow; readable controls; tall but stable first screen | no page overflow; readable controls; proof-boundary copy visible | pass |
| Sandbox Fairy | no page overflow; readable article/dossier controls | no page overflow; readable controls | no page overflow; readable controls | pass |
| Reference | no page overflow; readable manual/operator controls; reference/manual identity clear | no page overflow; readable controls | no page overflow; readable controls | pass |

## Answers to core questions

1. YIQ is aligned enough with the updated HOMM2 direction for its role as the applied product surface.
2. YIQ still intentionally differs as a menu-first product shell; the remaining nontrivial pressure is proportion behavior around the `920px` collapse boundary, not copy drift.
3. The four live surfaces agree semantically:
   - YIQ root and YIQ fairy are applied product shells
   - sandbox Fairy is an applied smoke/recipe-pressure page
   - reference is the canonical manual/proof surface
4. Docs/proof claims are accurate after this pass once pass-03 live-parity wording is updated.

## QA notes

- YIQ root live now shows `Витрина`, so the pass-03 local-only caveat is no longer current.
- All four live surfaces stayed free of page-level horizontal overflow at the checked desktop/tablet/mobile sizes.
- YIQ surfaces still read as Heraldic Menu / HoMM2-style product shells.
- Reference stays clearly in manual/proof mode rather than product mode.

## Recommended next step

For any next bounded implementation pass, the best remaining target is the YIQ small-desktop/tablet proportion boundary around `920px`, not more copy cleanup.
