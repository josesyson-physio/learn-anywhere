# Contributing

Thank you for helping students learn for free. Physiotherapists, teachers, students and developers are all welcome.

## Content

- **Add or improve a topic:** edit a file in `library/` (topics are pushed onto `window.LIB_EXTRA`). Keep the same fields as existing topics (`simple`, `flow`, `exam`, `marking`, `evidence`, `outcomes`, `recent`, `mnemonic`, `example`, `flags`, `viva`, `refs`).
- **Accuracy first:** cite only real clinical practice guidelines, systematic reviews, trials or standard textbooks. Give the full citation. Never invent DOIs or page numbers.
- **Write in your own words.** Do not copy text from copyrighted books, journals or guidelines.
- **Plain language:** short sentences a first-year student can follow, with key exam terms kept.
- **Quiz questions:** add an `mcq` list to a topic: `[question, [four options], correct index, one-line explanation]`.
- New topics should be reviewed by a qualified physiotherapist before merging.
- **Library files are data only.** Each file in `library/` may only set `window.NAME = ...` to plain objects, arrays and text. No functions, no `${...}` in strings, and links must start with `https://`. An automatic check (`tools/check_library.mjs`) blocks anything else.

## Code

- No build step. Keep the app a single fast page that works on low-end phones and slow networks.
- If you add a file the app needs offline, list it in `SHELL` in `sw.js` and bump `VERSION`.
- No inline `<script>` blocks or `onclick=` attributes: the Content Security Policy blocks them. See [SECURITY.md](SECURITY.md).
- Test on a phone-width screen in light and dark mode.

## Licence

By contributing, you agree that code is released under MIT and content under CC BY-NC-SA 4.0 (no commercial use).
