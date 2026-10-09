# Contributing

Thank you for helping students learn for free. Physiotherapists, teachers, students and developers are all welcome.

## Content

- **Add or improve a topic:** edit the `LIB` array in `index.html`. Keep the same fields as existing topics (`simple`, `flow`, `exam`, `marking`, `evidence`, `outcomes`, `recent`, `mnemonic`, `example`, `flags`, `viva`, `refs`).
- **Accuracy first:** cite only real clinical practice guidelines, systematic reviews, trials or standard textbooks. Give the full citation. Never invent DOIs or page numbers.
- **Write in your own words.** Do not copy text from copyrighted books, journals or guidelines.
- **Plain language:** short sentences a first-year student can follow, with key exam terms kept.
- **Quiz questions:** add to the `QUIZ` array with four options, the correct index and a one-line explanation.
- New topics should be reviewed by a qualified physiotherapist before merging.

## Code

- No build step. Keep the app a single fast page that works on low-end phones and slow networks.
- If you add a file the app needs offline, list it in `SHELL` in `sw.js` and bump `VERSION`.
- Test on a phone-width screen in light and dark mode.

## Licence

By contributing, you agree that code is released under MIT and content under CC BY-SA 4.0.
