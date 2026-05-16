# Pass 03 artifact — YIQ bounded fix

## Candidate selected

Нормализация узкого copy drift: `Mirror` -> `Витрина` на YIQ root, чтобы обе live YIQ surfaces держали один applied self-link label.

## Why this one

- drift подтверждён в pass 02
- фикс затрагивает только applied copy, не layout
- не требует broad redesign или architecture rewrite

## Verification plan

- source grep по `Mirror` / `Витрина`
- targeted browser check на YIQ root и YIQ fairy

## Result

- YIQ root self-link normalized from `Mirror` to `Витрина` in both visible occurrences.
- YIQ `fairy-journeys.html` left unchanged because it already used `Витрина` consistently.
- No layout or architecture changes were made.
- Verification achieved locally through source grep and local `curl` against `http://127.0.0.1:4174/index.html`.
- Pass 04 later confirmed deployed live parity: YIQ root now serves `Витрина` on the live site as well.

## Current assessment

- Alignment remains good enough for the applied product surface.
- This pass closes the narrowest confirmed semantic drift from pass 02.
- The next meaningful pressure, if any, is no longer copy drift but proportion tuning around `920px`.
