# Learn Anywhere

Free, open-source physiotherapy learning for every student, including those who can't afford coaching or expensive books. It starts with physiotherapy and will grow to other subjects.

## What it does

- **Exam-ready answers:** each topic has a simple explanation, a step-by-step flow, a full exam answer with a typical marks split, a memory trick, a patient example and red flags.
- **Advanced study:** evidence tables with grades, outcome measures with MCIDs, recent landmark trials, viva questions and real references (PubMed and Physiopedia links).
- **Built for Indian universities:** choose university, year (BPT 1st year to MPT), question type and marks (2 to 20).
- **Works offline:** install it to your phone's home screen. The library and quiz work with no signal after the first visit.
- **PDF downloads:** save any answer, or the whole library, as a PDF.
- **Quiz:** exam-style MCQs with explanations.

The public site has no AI and no paid services: "Find my answer" opens the closest ready topic from the library. AI-written answers (any topic, in 12 languages) only work in the Claude-hosted prototype.

## Run it

It's plain HTML, CSS and JavaScript, with no build step.

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish it for free (GitHub Pages)

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
3. The site will appear at `https://<your-username>.github.io/learn-anywhere/`.

## Project layout

| Path | What it is |
| --- | --- |
| `index.html` | The app: styles, logic and the first four topics |
| `library/*.js` | Library topics, "like a friend" examples, the textbook list and the university syllabus maps |
| `tools/` | Scripts that build the syllabus maps |
| `sw.js` | Service worker for offline use |
| `manifest.webmanifest`, `icons/` | Makes the app installable |
| `vendor/jspdf.umd.min.js` | PDF generation (jsPDF 4.2.1, MIT) |
| `docs/plan.md` | Product plan and roadmap |

## Adding a topic

Library topics live in `library/*.js` (each file pushes topics onto `window.LIB_EXTRA`). Copy an existing topic and fill in every field. A new file must also be added as a `<script>` in `index.html` and to `SHELL` in `sw.js` (then bump `VERSION`). Cite only real guidelines, textbooks or papers. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Licence

- Code: [MIT](LICENSE)
- Educational content (topics, quiz questions): [CC BY-SA 4.0](CONTENT-LICENSE.md)

This is a study aid for students, not medical advice for patients. It is independent and not affiliated with or endorsed by any university, publisher or guideline body it mentions.

## Privacy

No accounts, analytics, ads or cookies. Progress is kept in the browser's localStorage on the device. GitHub Pages (hosting) and Google Fonts receive visitors' IP addresses when the page loads.
