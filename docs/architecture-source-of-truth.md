# Architecture and source of truth

`YourInsideQuest` is the applied/live product site. It uses the HOMM2-inspired direction in a real page and owns product-specific decisions, tradeoffs, and intentional deviations.

`homm2-design-system-sandbox` is the upstream design-system/reference sandbox. It owns the reusable art direction, token guidance, component experiments, reference pages, and broader system research.

## Relationship

- Sandbox changes are reference input, not automatic product changes.
- This repo decides how upstream guidance is applied to the live page.
- Applied decisions that differ from the sandbox should be intentional and documented when they affect future work.
- Copy, layout, mobile behavior, and responsive fixes should be reconciled consciously between the two repos instead of assumed to be synced.

## Working rule

When bringing ideas from the sandbox into `YourInsideQuest`:

1. Check the relevant sandbox reference/doc first.
2. Decide what belongs in the live product page now.
3. Apply only the parts that fit the current product goal.
4. Verify desktop and mobile behavior in this repo.
5. Record any meaningful applied roadmap changes in `docs/applied-roadmap.md`.
