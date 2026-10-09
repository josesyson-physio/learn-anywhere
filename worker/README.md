# Learn Anywhere AI server

A small Cloudflare Worker that writes AI answers for the public site. Students' questions go here, the worker asks Claude (Sonnet 5.5) for a structured exam answer, and sends it back. The Anthropic API key is stored as a secret on Cloudflare and never reaches the browser.

- Only the Learn Anywhere site can call it (`ALLOWED_ORIGINS` in `wrangler.toml`).
- Each student can ask 4 questions per minute.
- It only answers the study questions the page sends, so it can't be used as a general chatbot.
- Cloudflare's free plan covers 100,000 requests a day. You pay Anthropic only for the answers.

## One-time setup

1. **Anthropic API key:** at <https://console.anthropic.com>, add credit, create an API key, and set a **monthly spend limit** for the workspace (for example $20). The limit is your budget cap.
2. **Cloudflare:** create a free account at <https://dash.cloudflare.com>. Copy your **Account ID** from the account home page. Under **My Profile > API Tokens**, create a token from the **Edit Cloudflare Workers** template.
3. **GitHub secrets:** in this repository open **Settings > Secrets and variables > Actions > New repository secret** and add:
   - `ANTHROPIC_API_KEY`
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. **Deploy:** open **Actions > Deploy AI server > Run workflow**. When it finishes, its log shows the worker address, something like `https://learn-anywhere-ai.<name>.workers.dev`.
5. **Connect the site:** put that address in `AI_ENDPOINT` near the top of the script in `index.html`.

## Change settings

- Model: `MODEL` in `wrangler.toml` (for example `claude-opus-5-5` or `claude-haiku-5-5`), then run the workflow again.
- Per-student limit: `limit` under `[[ratelimits]]`.

## Local development

```bash
cd worker
npm ci
echo 'ANTHROPIC_API_KEY=sk-ant-...' > .dev.vars
npx wrangler dev
npm run typecheck
```
