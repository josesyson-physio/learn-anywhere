# Learn Anywhere

Free, open-source physiotherapy learning for every student, including those who can't afford coaching or expensive books. It starts with physiotherapy and will grow to other subjects.

## What it does

- **Exam-ready answers:** each topic has a simple explanation, a step-by-step flow, a full exam answer with a typical marks split, a memory trick, a patient example and red flags.
- **Advanced study:** evidence tables with grades, outcome measures with MCIDs, recent landmark trials, viva questions and real references (PubMed and Physiopedia links).
- **Built for Indian universities:** choose university, year (BPT 1st year to MPT), question type and marks (2 to 20).
- **Works offline:** install it to your phone's home screen. The library and quiz work with no signal after the first visit.
- **PDF downloads:** save any answer, or the whole library, as a PDF.
- **Quiz:** exam-style MCQs with explanations.

AI-written answers (ask any topic, in 12 languages) currently work in the Claude-hosted version. The public site shows the closest library topic until an AI service is connected.

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
| `index.html` | The whole app: content, styles and logic |
| `sw.js` | Service worker for offline use |
| `manifest.webmanifest`, `icons/` | Makes the app installable |
| `vendor/jspdf.umd.min.js` | PDF generation (jsPDF 2.5.1, MIT) |
| `docs/plan.md` | Product plan and roadmap |

## Adding a topic

Library topics live in the `LIB` array in `index.html`. Copy an existing topic and fill in every field. Cite only real guidelines, textbooks or papers. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Licence

- Code: [MIT](LICENSE)
- Educational content (topics, quiz questions): [CC BY-SA 4.0](CONTENT-LICENSE.md)

This is a study aid for students, not medical advice for patients.
