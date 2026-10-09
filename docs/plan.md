# Learn Anywhere: Plan (draft v0.2)

A free, open-source learning app that works on cheap phones and bad networks, with an AI tutor. Starts with physiotherapy, expands to all subjects.

## 1. Principles
- **Free forever**: no ads, no paywalls, no account required to learn.
- **Offline first**: everything a student needs for a topic is downloadable and works with zero signal.
- **Light**: runs on a 2 GB RAM Android phone; a topic pack is a few MB.
- **Open**: code under MIT or Apache-2.0, content under CC BY-SA 4.0 so anyone can reuse and translate it.

## 1a. Student workflow (from jose's sketch, 2026-10-09)
1. **Ask**: the student types or uploads a topic or question (text, photo of a question paper, or PDF).
2. **Search**: the app gathers evidence on that subject from trusted sources: PubMed / PubMed Central, Physiopedia, guidelines (e.g. APTA), and open textbooks.
3. **Answer, sized to need**: it writes the answer at the length the question needs (2-mark, 5-mark, 10-mark or a full explanation).
4. **Easy to understand, with a flow**: Osmosis-style explanations with a step-by-step flowchart, diagrams and a short narrated explainer.
5. **Exam mode**: shows how to write the answer to score full marks (headings, keywords, diagram to draw), always with a listed reference section.
6. **Remember it**: simple real-life examples and mnemonics so it can be learned by heart.
7. **Your language, your medium**: re-explain in another language, or as audio, a diagram or a simpler version.
8. **Universal library**: every good answer is saved into a shared, searchable subject library (physio first), so the next student gets it instantly and offline, without using any AI or data.

### What makes this realistic
- **Sources**: PubMed abstracts and open-access PMC articles can be used freely. Physiopedia is reusable with attribution. APTA guidelines and most journals and textbooks are copyrighted, so the app links to and cites them and summarises the key points in its own words instead of copying them.
- **Video on low networks**: full AI video is heavy. The default is animated flowcharts and diagrams plus offline audio narration, which use a fraction of the data. Video can be optional on Wi-Fi.
- **Offline**: generating a new answer needs a connection. The shared library is what makes the app useful offline, because answers are downloaded in topic packs.
- **Accuracy**: every generated answer shows its references. Answers that go into the shared library are reviewed by physio volunteers first.

## 2. Architecture (recommended default)
- **App**: an installable web app (PWA) built once, used on Android, iPhone and desktop through the browser. Later wrapped as an Android APK (Capacitor or TWA) for the Play Store and for sharing offline via Bluetooth/USB.
- **Offline storage**: a service worker caches the app; topic content and progress live in IndexedDB on the phone.
- **Content packs**: each topic is a small versioned bundle (Markdown text + compressed images + quiz JSON). Downloaded when there is signal, updated with small diffs.
- **Sync**: progress syncs in the background whenever a connection appears; nothing breaks while offline.
- **Backend**: static hosting only for the MVP (GitHub Pages or Cloudflare Pages, both free). No server to pay for or maintain.

## 3. The "intelligent" part (AI tutor), in tiers
1. **Works offline, any phone**: smart search over the downloaded pack, spaced-repetition flashcards, adaptive quizzes that revisit weak topics. No AI model needed.
2. **Online, low bandwidth**: an AI tutor that answers questions grounded in the course content (text only, short replies, a few KB per question). Runs through a small proxy so no API key lives on the phone.
3. **Offline AI (later)**: an optional small on-device model download for capable phones, so the tutor works with no signal.

Cost control for tier 2: daily question limits per device, caching common answers, and applying for free/nonprofit AI credits.

## 4. MVP for physiotherapy students
- **Anatomy**: muscles (origin, insertion, action, nerve supply), bones, joints; labelled diagrams.
- **Conditions**: common musculoskeletal and neuro conditions with assessment, red flags and management.
- **Exercises**: exercise library with steps, sets/reps, progressions, and simple illustrations.
- **Quizzes & flashcards**: MCQs per topic, spaced repetition, progress tracking.
- **Ask-a-topic**: the full workflow in 1a (search, sized answer, flowchart, exam format, references, mnemonic, translate).
- **AI tutor**: "explain this simpler", "quiz me", "why is this the answer?".

## 5. Content sources (all open licence)
- OpenStax *Anatomy & Physiology* (CC BY 4.0)
- Wikimedia Commons anatomy images (various CC licences, checked per image)
- Physiopedia (CC BY-SA, reuse with attribution, licence to be confirmed per page)
- Original content written and reviewed by physio volunteers

## 6. Roadmap
1. Set up the repo, licence and contribution guide.
2. Build the offline app shell plus one sample pack (e.g. shoulder anatomy and conditions).
3. Add quizzes, flashcards and progress.
4. Add the online AI tutor.
5. Pilot with a small group of physio students, then grow content and languages.
6. Generalise the pack format so other subjects can be added.

## 7. Open questions
See the thread: devices, languages, repo, AI approach, content sources, hosting budget.
