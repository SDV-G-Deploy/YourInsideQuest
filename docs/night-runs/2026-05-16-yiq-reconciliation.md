# Night Run: YourInsideQuest reconciliation - 2026-05-16

## Config
- Project: /root/.openclaw/workspace/YourInsideQuest
- Sandbox reference: /root/.openclaw/workspace/homm2-design-system-sandbox
- Session: session:yiq-night-2026-05-16
- Cadence: 25 minutes
- Pass timeout: 20 minutes
- Model: gpt-5.4
- Delivery: none during run except blocker/closeout
- Lock: /root/.openclaw/workspace/YourInsideQuest/tmp/night-runs/2026-05-16-yiq-reconciliation.lock
- Max bounded work wakes: 5
- Closeout: one final report wake after work wakes

## Objective
Run a bounded YourInsideQuest reconciliation and cross-project QA sequence against the updated HOMM2 direction, keeping YIQ as the applied product surface and sandbox/reference/fixtures as proof/reference surfaces.

## Baseline
- Sandbox expected/actual HEAD: 9c57cb6
- YIQ user-stated cleanup baseline: ec3471b
- YIQ actual synced HEAD at launch: b45521e
- Note: b45521e is a clean descendant of ec3471b and documents/applies the reconciliation boundary. Do not revert it; treat it as current starting state.

## Required Context
- Sandbox README: /root/.openclaw/workspace/homm2-design-system-sandbox/README.md
- Sandbox handoff: /root/.openclaw/workspace/homm2-design-system-sandbox/docs/new-session-handoff-2026-05-16.md
- Sandbox operator index: /root/.openclaw/workspace/homm2-design-system-sandbox/docs/design-system-operator-index-2026-05-15.md
- Sandbox visual-alignment ledger: /root/.openclaw/workspace/homm2-design-system-sandbox/docs/night-runs/2026-05-16-visual-alignment.md
- YIQ README: /root/.openclaw/workspace/YourInsideQuest/README.md
- YIQ applied roadmap: /root/.openclaw/workspace/YourInsideQuest/docs/applied-roadmap.md
- YIQ architecture source of truth: /root/.openclaw/workspace/YourInsideQuest/docs/architecture-source-of-truth.md
- Cross-project roadmap: /root/.openclaw/workspace/docs/DESIGN-SYSTEM-HOMM2-YOURINSIDEQUEST-ROADMAP.md
- Current YIQ reconciliation note: /root/.openclaw/workspace/YourInsideQuest/docs/yiq-visual-reconciliation-2026-05-16.md

## Main Questions
1. Is YourInsideQuest aligned enough with the updated HOMM2 design-system direction?
2. Where does YIQ intentionally differ as an applied product, and where is it stale/drifting?
3. Do the four live surfaces agree visually and semantically?
4. Are docs/proof claims still accurate after the recent runs?

## Guardrails
- Do not do broad redesign.
- Do not copy sandbox CSS wholesale.
- Do not promote applied pages to canonical proof.
- Keep YIQ as applied product surface.
- Keep sandbox/reference/fixtures as system proof/reference surfaces.
- Commit/push only verified, attributable changes.

## Stop Rules
- unexpected dirty tree or unrelated user changes
- live deploy mismatch that makes QA unreliable
- failed verification with unclear next step
- push rejected
- stale or fresh non-overlap lock
- no clear bounded next step
- manual visual review required before safe continuation
- any need for broad redesign or canonical proof promotion

## Planned Runs

| Pass | Scheduled UTC | Status | Commit | Artifact | Verification | Next |
| --- | --- | --- | --- | --- | --- | --- |
| 01 | 2026-05-16T19:39:00Z | planned | - | live parity + viewport baseline | YIQ live HEAD/content, widths 1440/1180/1024/920/768/390/360 | stop if dirty/deploy mismatch |
| 02 | 2026-05-16T20:04:00Z | planned | - | cross-surface visual/semantic matrix | four live surfaces comparison | decide if only docs drift remains |
| 03 | 2026-05-16T20:29:00Z | planned | - | docs/proof-claim audit | README/roadmap/SOT/current proof claims | minimal doc sync if stale |
| 04 | 2026-05-16T20:54:00Z | planned | - | bounded applied fix or no-op rationale | smallest local gate | only if a verified narrow drift exists |
| 05 | 2026-05-16T21:19:00Z | planned | - | final verification sweep | local/browser smoke + git/deploy state | prepare closeout |
| closeout | 2026-05-16T21:44:00Z | planned | - | closeout summary | commits, deploy/live status, residual risk | send Russian report |

## Runs

No pass has run yet.

## Closeout
- Commits:
- Verification/deploy:
- Closeout report sent:
- Residual risks:
- Best next step:
