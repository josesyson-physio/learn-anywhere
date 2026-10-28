# Security

Learn Anywhere is a static web app. It has no server, no database, no accounts and no API keys.
Profiles, PINs and progress are stored only in the student's own browser.

## Reporting a problem

If you find a security or privacy problem, please message us on Instagram at
[@inclusive.si](https://www.instagram.com/inclusive.si) instead of posting it publicly. We will fix it as fast as we can.

## Rules for this repository

- **Never commit a secret.** This repository is public. API keys, tokens and passwords must never be added,
  not even for a moment. A future AI tutor must keep its key on a separate server with rate limits.
- **Library files are data, not code.** Files in `library/` may only assign plain objects, arrays and text to
  `window.*`. The "Library is plain data" check (`tools/check_library.mjs`) fails any pull request that adds
  anything else.
- **Links must be https.** The app only puts `https://` addresses into links (`safeUrl` in `app.js`).
- **No inline scripts.** The Content Security Policy blocks inline `<script>` and `onclick=` code. Put scripts in
  their own `.js` file and add them to `SHELL` in `sw.js`.
- **No outside origins.** Fonts and libraries are stored in this repository (`fonts/`, `vendor/`). Adding a CDN
  or another site means changing the Content Security Policy in both HTML files, so think twice.
- **Vendored libraries get no automatic alerts.** Check the [jsPDF releases](https://github.com/parallax/jsPDF/releases)
  every three months and update `vendor/jspdf.umd.min.js` if there is a security fix (now 4.2.1).

## The PIN is not a lock

The optional 4-digit profile PIN keeps classmates' profiles apart on a shared phone. Anyone who has the phone
can read browser storage, so it cannot protect anything. It is stored as a salted PBKDF2-SHA256 hash
(300,000 rounds) and the app tells students never to reuse a real PIN or password.
