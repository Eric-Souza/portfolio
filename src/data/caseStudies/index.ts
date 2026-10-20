import type { CaseStudy, CaseStudyKind, Industry, LanguageTag, PlatformTag } from '../types';
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

export const platformTags: PlatformTag[] = ['AWS', 'Azure', 'Docker', 'CI/CD', 'Vercel', 'Netlify', 'Firebase', 'Heroku'];

const kindOrder: CaseStudyKind[] = ['client', 'side-project', 'challenge', 'learning'];

// Client work keeps its hand-picked order; everything else is newest first.
const byRelevance = (a: CaseStudy, b: CaseStudy) =>
  kindOrder.indexOf(a.kind) - kindOrder.indexOf(b.kind) ||
  (a.kind === 'client' ? 0 : (b.year ?? 0) - (a.year ?? 0));

export const caseStudies: CaseStudy[] = [
  ...clientCaseStudies,
  ...batchA,
  ...batchB,
  ...batchC,
  ...batchD,
].sort(byRelevance);
