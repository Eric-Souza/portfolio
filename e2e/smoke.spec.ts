import { expect, test } from '@playwright/test';

test('loads and hydrates without console errors or failed requests', async ({ page }) => {
  const problems: string[] = [];
  page.on('console', (msg) => msg.type() === 'error' && problems.push(msg.text()));
  page.on('pageerror', (err) => problems.push(err.message));
  page.on('response', (res) => res.status() >= 400 && problems.push(`${res.status()} ${res.url()}`));
  page.on('requestfailed', (req) => problems.push(`${req.failure()?.errorText} ${req.url()}`));

  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Eric de Oliveira Souza');
  await page.waitForLoadState('networkidle');

  expect(problems).toEqual([]);
});

test('ships SEO and social preview tags', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Sr\. Full Stack & AI Engineer/);
  for (const selector of [
    'meta[name="description"]',
    'link[rel="canonical"]',
    'meta[property="og:title"]',
    'meta[property="og:image"]',
    'meta[name="twitter:card"]',
    'script[type="application/ld+json"]',
  ]) {
    await expect(page.locator(selector), selector).toHaveCount(1);
  }

  const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
  const res = await page.request.get(new URL(ogImage!).pathname);
  expect(res.ok()).toBe(true);
});

test('navbar scrolls to a section', async ({ page, isMobile }) => {
  await page.goto('/');
  if (isMobile) await page.getByRole('button', { name: /menu/i }).click();
  await page.getByRole('button', { name: 'Case Studies', exact: true }).click();
  await expect(page.locator('section#case-studies')).toBeInViewport();
});

test('case study switches from business impact to technical breakdown', async ({ page }) => {
  await page.goto('/');
  const card = page
    .locator('section#case-studies .MuiCard-root')
    .filter({ has: page.getByRole('tablist') })
    .first();
  await card.scrollIntoViewIfNeeded();

  await expect(card.getByText('What we achieved')).toBeVisible();
  await card.getByRole('tab', { name: 'Technical breakdown' }).click();
  await expect(card.getByRole('tab', { name: 'Technical breakdown' })).toHaveAttribute('aria-selected', 'true');
  await expect(card.getByText('How it was built')).toBeVisible();
});

test('filters case studies by tech', async ({ page }) => {
  await page.goto('/');
  const section = page.locator('section#case-studies');
  const python = section.getByRole('group', { name: 'Filter by tech' }).getByRole('button', { name: /^Python \d+$/ });
  await python.scrollIntoViewIfNeeded();
  const count = Number((await python.textContent())!.match(/\d+$/)![0]);

  await python.click();
  await expect(python).toHaveAttribute('aria-pressed', 'true');
  await expect(section.getByText(new RegExp(`^${count} of \\d+ case studies$`))).toBeVisible();
  await expect(section.locator('h3')).toHaveCount(Math.min(count, 6));
});

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('prerendered HTML contains the full content', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Eric de Oliveira Souza');
    // First page of case studies is all client work.
    await expect(page.getByText('What we achieved')).toHaveCount(6);
    await expect(page.locator('section#projects a[href^="https://github.com/"]').first()).toBeAttached();
  });
});
