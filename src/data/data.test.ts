import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { articles } from './articles';
import { caseStudies } from './caseStudies';
import { experience } from './experience';
import { profile } from './profile';

const publicDir = resolve(__dirname, '../../public');

const allUrls = [
  ...Object.values(profile.links),
  profile.whatsappUrl,
  profile.sourceUrl,
  ...experience.flatMap((e) => [e.companyUrl, e.companyLinkedIn, e.productUrl, ...(e.relatedLinks ?? []).map((l) => l.url), ...(e.clients ?? []).flatMap((l) => [l.url, l.linkedIn])]),
  ...caseStudies.flatMap((c) => [
    c.companyUrl,
    c.companyLinkedIn,
    c.productUrl,
    ...(c.relatedLinks ?? []).map((l) => l.url),
    ...(c.clients ?? []).flatMap((l) => [l.url, l.linkedIn]),
    ...(c.links ?? []).map((l) => l.url),
  ]),
  ...articles.map((a) => a.url),
].filter((url): url is string => Boolean(url));

describe('content data', () => {
  it.each([
    ['experience', experience],
    ['caseStudies', caseStudies],
    ['articles', articles],
  ])('%s ids are unique', (_, items) => {
    const ids = items.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('uses absolute https URLs everywhere', () => {
    for (const url of allUrls) {
      expect(url, url).toMatch(/^https:\/\//);
    }
  });

  it('ships the assets the page and meta tags reference', () => {
    for (const asset of [profile.avatarSrc, '/resume.pdf', '/og-image.png', '/favicon.svg']) {
      expect(existsSync(resolve(publicDir, `.${asset}`)), asset).toBe(true);
    }
  });

  it('gives every case study both a business and a technical view', () => {
    for (const study of caseStudies) {
      expect(study.headline, study.id).not.toBe('');
      expect(study.outcomes.length, study.id).toBeGreaterThan(0);
      expect(study.technical.architecture, study.id).not.toBe('');
      expect(study.technical.howItWasBuilt.length, study.id).toBeGreaterThan(0);
      expect(study.technical.stack.length, study.id).toBeGreaterThan(0);
      expect(study.tech.length, study.id).toBeGreaterThan(0);
    }
  });

  it('tags cloud and CI/CD work that the technical breakdown lists', () => {
    for (const study of caseStudies) {
      const layer = (name: string) => study.technical.stack.find((l) => l.layer === name)?.items.join(' ') ?? '';
      expect(study.technical.stack[0].layer, study.id).toBe('Architecture');
      for (const platform of ['AWS', 'Azure', 'GCP', 'Docker'] as const) {
        if (layer('Infrastructure').includes(platform)) expect(study.tech, study.id).toContain(platform);
      }
      if (layer('CI/CD')) expect(study.tech, study.id).toContain('CI/CD');
    }
  });

  it('dates every case study for "recently updated" sorting', () => {
    // Repo dates come from repoDates.json; run `npm run sync-dates` if a new repo is missing.
    const undated = caseStudies.filter((s) => !s.ongoing && !s.updated && s.industry !== 'internal-tools');
    expect(undated.map((s) => s.id)).toEqual([]);
  });

  it('links every non-client case study to its source code', () => {
    for (const study of caseStudies.filter((s) => s.kind !== 'client')) {
      const repos = (study.links ?? []).filter((l) => l.url.startsWith('https://github.com/Eric-Souza/'));
      expect(repos.length, study.id).toBeGreaterThan(0);
    }
  });
});
