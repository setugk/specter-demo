# Nimbus demo — planted issues (Specter shot list)

Dev server: http://localhost:5173/
Activate Specter on the page: **Ctrl + Option + Z**

Each issue below is real and fixable, and each is something Specter surfaces
directly — spacing, alignment, font size, weight, color, or radius.

| # | Where | The bug | How Specter shows it |
|---|-------|---------|----------------------|
| 1 | Top nav | "Pricing" has extra right margin → nav links unevenly spaced | **Measure mode** (tap Option): distances between links aren't equal |
| 2 | Hero "Start free trial" button | Asymmetric padding (`13px 20px 13px 32px`) → label sits off-center | **Properties** (hover): padding reads `13px 20px 13px 32px` |
| 3 | Hero subtitle | Too-light gray (`#c7cbd1`) → fails contrast | **Properties**: color `#c7cbd1` (should be ~`#6b7280`) |
| 4 | "Book a demo" button | Off-brand text color (`#5b6ef5`) vs brand `#4f46e5` | **Properties**: color doesn't match the primary button |
| 5 | Feature cards | Three different corner radii (12 / 8 / 16px) | **Properties**: hover each card, radius differs |
| 6 | Feature cards | 3rd card nudged right (`margin-left:12px`) → uneven gap | **Measure mode**: gap before card 3 ≠ gap before card 2 |
| 7 | Middle feature card title | "Ask in plain English" is 16px vs 18px siblings | **Properties**: font-size 16 vs 18 |
| 8 | Stats row | "99.98%" is 28px / 600 vs the others' 32px / 700 | **Properties**: font-size + weight differ |
| 9 | Section spacing | Gaps between sections inconsistent (96 / 64 / 104px) | **Measure mode**: vertical distances between sections differ |

## Suggested recording flow (60–90s)

1. Open http://localhost:5173/ — "here's a landing page I vibe-coded. Looks fine… but."
2. Press **Ctrl+Option+Z** to turn on Specter.
3. Hover the off-center button → point at the lopsided padding in the overlay.
4. Press **N**, type the fix ("even out the padding to 13px 20px"). Move on without switching tabs.
5. Hover the pale subtitle → **N** → "use --muted #6b7280, this is too light".
6. Tap **Option** for Measure mode → show the uneven card gap / nav spacing.
7. Back to Properties, **N** a couple more (card radii, the odd stat).
8. Press **Cmd+C** — "one copy, every fix, tied to the exact element."
9. Paste into Claude Code / Cursor. Optionally show it applying the fixes.

Punchline: no screenshots, no "which element", no re-describing — you point, annotate, paste.
