// Learn Anywhere AI server (Cloudflare Worker).
// The public site sends a study question here; this worker builds the prompt,
// asks Claude for a structured exam answer and returns it as JSON.
// The Anthropic API key stays here as a secret and never reaches the browser.

import Anthropic from "@anthropic-ai/sdk";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";
import { z } from "zod";

export interface Env {
  ANTHROPIC_API_KEY: string;
  LIMITER: RateLimit;
  MODEL: string;
  ALLOWED_ORIGINS: string;
}

const MARKS = [2, 3, 5, 10, 15, 20] as const;
const QTYPES = ["Long essay", "Short essay", "Short answer", "Viva", "Practical / OSCE"];
const LEVELS = ["BPT 1st year", "BPT 2nd year", "BPT 3rd year", "BPT 4th year", "Internship", "MPT"];
const LANGS = ["English", "Hindi", "Tamil", "Telugu", "Malayalam", "Kannada", "Bengali", "Marathi", "Gujarati", "Punjabi", "Urdu", "Odia"];

const AskBody = z.object({
  mode: z.literal("answer"),
  question: z.string().trim().min(3).max(600),
  marks: z.number().refine((m) => (MARKS as readonly number[]).includes(m)),
  qtype: z.enum(QTYPES as [string, ...string[]]),
  level: z.enum(LEVELS as [string, ...string[]]),
  uni: z.string().trim().max(80),
  lang: z.enum(LANGS as [string, ...string[]]),
});

const REEXPLAIN = {
  simpler: "Explain this again in much simpler words for a first-year student, in short sentences, keeping the key exam terms.",
  story: "Explain this as a short, memorable story or analogy from everyday life in India, then list the 3 facts the story teaches.",
  table: "Turn this into a compact revision table in plain text (use | between columns), then 5 one-line high-yield points.",
  viva: "Write 5 more viva questions an Indian BPT examiner would ask on this topic, each with a 1-2 line model answer.",
} as const;

const ReexplainBody = z.object({
  mode: z.literal("reexplain"),
  kind: z.enum(Object.keys(REEXPLAIN) as [keyof typeof REEXPLAIN, ...(keyof typeof REEXPLAIN)[]]),
  title: z.string().trim().min(2).max(200),
  summary: z.string().trim().max(1500),
  steps: z.string().trim().max(1500),
  lang: z.enum(LANGS as [string, ...string[]]),
});

// What Claude must return. Objects (not tuples) keep the schema simple; the
// worker converts them to the shapes the page renders.
const Answer = z.object({
  title: z.string(),
  subject: z.string(),
  simple: z.string(),
  flow: z.array(z.string()),
  exam: z.array(z.object({ h: z.string(), p: z.array(z.string()) })),
  tip: z.string(),
  marking: z.array(z.object({ part: z.string(), marks: z.number() })),
  evidence: z.array(z.object({ intervention: z.string(), effect: z.string(), grade: z.string() })),
  evidenceSource: z.string(),
  outcomes: z.array(z.object({ measure: z.string(), use: z.string() })),
  recent: z.array(z.string()),
  mnemonic: z.object({ word: z.string(), items: z.array(z.object({ letter: z.string(), meaning: z.string() })), extra: z.string() }),
  example: z.string(),
  flags: z.array(z.string()),
  viva: z.array(z.object({ q: z.string(), a: z.string() })),
  refs: z.array(z.object({ citation: z.string(), pubmedSearch: z.string() })),
  keywords: z.string(),
});

function sizeRule(m: number, qt: string): string {
  if (qt === "Viva") return "Viva preparation: keep 'exam' short (3 headings), and give 6-8 viva questions with crisp model answers.";
  if (qt === "Practical / OSCE") return "Practical/OSCE: 'exam' is a step-by-step examination or technique procedure (patient position, therapist position, hand placement, procedure, interpretation), 4-6 headings.";
  return ({
    2: "2 marks: 'exam' = definition plus 2-3 key bullets only; flow 3-4 steps; evidence 2 rows; viva 2.",
    3: "3 marks: 'exam' = 2-3 headings, 2 bullets each.",
    5: "5 marks short essay: 'exam' = 4 headings, 2-4 bullets each.",
    10: "10 marks long essay: 'exam' = definition, pathophysiology, clinical features, assessment with named outcome measures, phased physiotherapy management, conclusion; 3-5 detailed bullets each.",
    15: "15 marks long essay: as 10 marks plus etiology/classification, differential diagnosis and phased management; 4-6 bullets each.",
    20: "20 marks long essay: comprehensive; add anatomy/biomechanics, investigations, medical/surgical overview, complications, home programme and prognosis; 4-6 bullets each.",
  } as Record<number, string>)[m];
}

function answerPrompt(b: z.infer<typeof AskBody>): string {
  return `You are an expert physiotherapy professor and examiner in India, teaching students who cannot afford coaching. Write an advanced, exam-ready, evidence-based answer.
Student: ${b.level}, ${b.uni || "an Indian health science university"}. Question type: ${b.qtype}. Marks: ${b.marks}.
Question: ${b.question}
${sizeRule(b.marks, b.qtype)}
Follow the answer layout Indian BPT/MPT examiners expect (definition, etiology/pathophysiology, clinical features, assessment with outcome measures, phased physiotherapy management with dosage, diagram suggestion, conclusion). Match depth to ${b.level}${b.level === "MPT" ? ", with critical appraisal and ICF-based clinical reasoning" : ""}.
'marking' is a typical split that sums to ${b.marks}; do not claim it is the university's official scheme.
Evidence: draw on clinical practice guidelines (JOSPT/APTA CPGs, NICE, OARSI and others), Cochrane and systematic reviews, PubMed research, Physiopedia and standard textbooks on the Indian syllabus. Include dosage (sets, reps, frequency) where relevant. 'grade' is the guideline grade or study type (e.g. A, B, 1A, RCT, SR, Avoid).
'flow' has 5-7 short steps from cause to management. 'simple' is 2-3 plain sentences. 'example' is a realistic Indian patient. 'flags' lists red flags needing referral, or is empty. 'refs' has 3-6 items.
References: cite only real guidelines, textbooks or papers you are confident exist. Never invent DOIs, page numbers or URLs.
If the question is not about physiotherapy, health or the related sciences, set 'title' to "Off-topic question" and keep every other field brief.
Write all text in ${b.lang}${b.lang !== "English" ? " (keep medical terms, outcome measure names and citations in English)" : ""}.`;
}

function toPageShape(a: z.infer<typeof Answer>) {
  return {
    ...a,
    marking: a.marking.map((m) => [m.part, m.marks]),
    evidence: a.evidence.map((e) => [e.intervention, e.effect, e.grade]),
    outcomes: a.outcomes.map((o) => [o.measure, o.use]),
    mnemonic: { word: a.mnemonic.word, items: a.mnemonic.items.map((i) => [i.letter, i.meaning]), extra: a.mnemonic.extra },
    viva: a.viva.map((v) => [v.q, v.a]),
    refs: a.refs.map((r) => ({ c: r.citation, q: r.pubmedSearch })),
  };
}

function cors(origin: string | null, env: Env): Record<string, string> {
  const allowed = env.ALLOWED_ORIGINS.split(",").map((s) => s.trim());
  const ok = origin && allowed.includes(origin);
  return {
    "Access-Control-Allow-Origin": ok ? origin : allowed[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

const json = (body: unknown, status: number, headers: Record<string, string>) =>
  new Response(JSON.stringify(body), { status, headers: { ...headers, "Content-Type": "application/json" } });

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const headers = cors(req.headers.get("Origin"), env);
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers });
    if (req.method !== "POST") return json({ error: "not_found" }, 404, headers);

    const origin = req.headers.get("Origin");
    if (!origin || !env.ALLOWED_ORIGINS.split(",").map((s) => s.trim()).includes(origin)) {
      return json({ error: "forbidden" }, 403, headers);
    }

    let raw: unknown;
    try { raw = await req.json(); } catch { return json({ error: "bad_request" }, 400, headers); }

    const ask = AskBody.safeParse(raw);
    const re = ReexplainBody.safeParse(raw);
    if (!ask.success && !re.success) return json({ error: "bad_request" }, 400, headers);

    const ip = req.headers.get("CF-Connecting-IP") || "unknown";
    // Per-student burst limit. The overall budget is capped by the spend limit
    // set on the Anthropic API key's workspace.
    const { success } = await env.LIMITER.limit({ key: ip });
    if (!success) return json({ error: "slow_down" }, 429, headers);

    const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
    try {
      if (ask.success) {
        const msg = await client.beta.messages.parse({
          model: env.MODEL,
          max_tokens: 16000,
          output_config: { effort: "medium", format: betaZodOutputFormat(Answer) },
          betas: ["server-side-fallback-2026-07-01"],
          fallbacks: "default",
          messages: [{ role: "user", content: answerPrompt(ask.data) }],
        });
        if (msg.stop_reason === "refusal") return json({ error: "refused" }, 422, headers);
        if (!msg.parsed_output) return json({ error: "invalid_json" }, 502, headers);
        return json({ answer: toPageShape(msg.parsed_output) }, 200, headers);
      }

      const r = re.data!;
      const msg = await client.beta.messages.create({
        model: env.MODEL,
        max_tokens: 4000,
        output_config: { effort: "low" },
        betas: ["server-side-fallback-2026-07-01"],
        fallbacks: "default",
        messages: [{
          role: "user",
          content: `${REEXPLAIN[r.kind]} Write in ${r.lang}. Plain text only, no markdown symbols.\n\nTopic: ${r.title}\nSummary: ${r.summary}\nKey steps: ${r.steps}`,
        }],
      });
      if (msg.stop_reason === "refusal") return json({ error: "refused" }, 422, headers);
      const text = msg.content.flatMap((b) => (b.type === "text" ? [b.text] : [])).join("");
      return json({ text }, 200, headers);
    } catch (err) {
      if (err instanceof Anthropic.RateLimitError) return json({ error: "rate_limited" }, 429, headers);
      if (err instanceof Anthropic.AuthenticationError) return json({ error: "server_setup" }, 500, headers);
      if (err instanceof Anthropic.APIError) return json({ error: "upstream_error" }, 502, headers);
      return json({ error: "upstream_error" }, 502, headers);
    }
  },
};
