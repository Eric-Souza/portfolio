// Renders public/og-image.png (1200x630), the preview card shown when the site
// is shared on LinkedIn, Slack, X, etc. Re-run after changing name/title/highlights:
//   npm run og-image            (PW_CHANNEL=chrome to use an installed Chrome)
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';

const publicDir = fileURLToPath(new URL('../public/', import.meta.url));
const avatar = (await readFile(`${publicDir}avatar.webp`)).toString('base64');

const highlights = ['Hired & led a team', 'LLMs & RAG in production', 'React · NestJS · Python · AWS'];

const html = `<!doctype html>
<html><head><style>
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; padding: 80px 88px;
    display: flex; align-items: center; gap: 64px;
    font-family: 'Space Grotesk', 'Segoe UI', sans-serif; color: #E8ECF4;
    background:
      radial-gradient(circle at 12% 18%, rgba(0,229,255,.16), transparent 45%),
      radial-gradient(circle at 92% 88%, rgba(139,92,246,.18), transparent 45%),
      radial-gradient(circle at 1px 1px, rgba(255,255,255,.06) 1px, transparent 0) 0 0 / 32px 32px,
      #0B0F19;
  }
  .label { font-family: 'JetBrains Mono', monospace; color: #00E5FF; letter-spacing: .15em; font-size: 22px; font-weight: 600; }
  h1 { font-size: 72px; line-height: 1.05; margin: 16px 0 12px; letter-spacing: -.02em;
       background: linear-gradient(135deg, #E8ECF4, #00E5FF); -webkit-background-clip: text; color: transparent; }
  h2 { font-size: 36px; font-weight: 500; color: #94A3B8; margin-bottom: 40px; }
  .chips { display: flex; flex-wrap: wrap; gap: 14px; }
  .chip { font-family: 'JetBrains Mono', monospace; font-size: 22px; padding: 10px 20px;
          border: 1.5px solid rgba(0,229,255,.45); border-radius: 999px; }
  img { width: 300px; height: 300px; border-radius: 50%; flex-shrink: 0;
        border: 3px solid rgba(0,229,255,.4); box-shadow: 0 0 60px rgba(0,229,255,.2); }
</style></head>
<body>
  <div>
    <div class="label">// 8+ YEARS IN PRODUCTION</div>
    <h1>Eric de Oliveira Souza</h1>
    <h2>Sr. Full Stack &amp; AI Engineer</h2>
    <div class="chips">${highlights.map((h) => `<span class="chip">${h}</span>`).join('')}</div>
  </div>
  <img src="data:image/webp;base64,${avatar}" alt="" />
</body></html>`;

const browser = await chromium.launch({ channel: process.env.PW_CHANNEL });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.screenshot({ path: `${publicDir}og-image.png` });
await browser.close();

console.log('Wrote public/og-image.png');
