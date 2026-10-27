// Renders resume/resume.html to public/resume.pdf with Playwright's Chromium, and fails if it no
// longer fits on one page. Run `npm run resume` after editing the HTML; set PW_CHANNEL=chromium to
// use the full Chromium build instead of the headless shell.
import { writeFileSync } from 'node:fs';
import { chromium } from '@playwright/test';

const html = new URL('../resume/resume.html', import.meta.url);
const pdf = new URL('../public/resume.pdf', import.meta.url);

const browser = await chromium.launch({ channel: process.env.PW_CHANNEL });
const page = await browser.newPage();
await page.goto(html.href);
await page.evaluate(() => document.fonts.ready);
const buffer = await page.pdf({ format: 'Letter', printBackground: true });
await browser.close();

const pages = (buffer.toString('latin1').match(/\/Type\s*\/Page[^s]/g) ?? []).length;
if (pages !== 1) throw new Error(`The resume runs to ${pages} pages; trim it to one`);
writeFileSync(pdf, buffer);
console.log('Wrote public/resume.pdf');
