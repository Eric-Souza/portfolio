import type { CaseStudy, CaseStudyKind, Industry, LanguageTag, PlatformTag } from '../types';
import { sortCaseStudies } from './filters';
import repoDates from './repoDates.json';
import { clientCaseStudies } from './client';
import { batchA } from './batchA';
import { batchB } from './batchB';
import { batchC } from './batchC';
import { batchD } from './batchD';

export const kindLabels: Record<CaseStudyKind, string> = {
  client: 'Client work',
  'side-project': 'Side project',
  challenge: 'Hiring challenge',
  learning: 'Learning project',
};

export const industryLabels: Record<Industry, string> = {
  'ai-analytics': 'AI analytics',
  'legal-tech': 'Legal-tech',
  'health-tech': 'Health-tech',
  fintech: 'Fintech',
  geospatial: 'Geospatial',
  'e-commerce': 'E-commerce',
  'internal-tools': 'Internal tools',
  travel: 'Travel',
  'home-services': 'Home services',
  automotive: 'Automotive',
  industrial: 'Industrial',
  media: 'Media & social',
  productivity: 'Productivity',
  marketing: 'Marketing',
  'developer-platform': 'Developer platform',
  'cs-fundamentals': 'CS fundamentals',
};

export const languageTags: LanguageTag[] = ['TypeScript', 'JavaScript', 'Python', 'AI'];

export const platformTags: PlatformTag[] = ['AWS', 'Azure', 'GCP', 'Docker', 'CI/CD', 'Vercel', 'Netlify', 'Firebase', 'Heroku'];

const dates: Record<string, string> = repoDates;
const repoName = (url: string) => url.match(/^https:\/\/github\.com\/Eric-Souza\/([^/]+)/)?.[1];

// A study's last update is the latest push to any of its repos (e.g. API and mobile app).
function withRepoDate(study: CaseStudy): CaseStudy {
  if (study.updated) return study;
  const pushed = (study.links ?? [])
    .map((link) => dates[repoName(link.url) ?? ''])
    .filter(Boolean)
    .sort()
    .at(-1);
  return pushed ? { ...study, updated: pushed } : study;
}

/** Every case study, most recently updated first. */
export const caseStudies: CaseStudy[] = sortCaseStudies(
  [...clientCaseStudies, ...batchA, ...batchB, ...batchC, ...batchD].map(withRepoDate),
  'updated',
);
