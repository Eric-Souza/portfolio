import { describe, expect, it } from 'vitest';
import type { CaseStudy } from '../types';
import { countOptions, filterCaseStudies, noFilters } from './filters';

const study = (id: string, overrides: Partial<CaseStudy>): CaseStudy => ({
  id,
  kind: 'learning',
  industry: 'productivity',
  tech: ['TypeScript'],
  title: id,
  company: 'Personal project',
  tags: [],
  headline: '',
  role: '',
  challenge: '',
  outcomes: [],
  technical: { architecture: '', howItWasBuilt: [], stack: [] },
  ...overrides,
});

const studies = [
  study('legal', { kind: 'client', industry: 'legal-tech', tech: ['TypeScript', 'Python', 'AI', 'AWS', 'CI/CD'] }),
  study('bot', { kind: 'side-project', industry: 'home-services', tech: ['Python', 'AI', 'Docker'] }),
  study('queue', { industry: 'health-tech', tech: ['Python'] }),
  study('todo', { tech: ['JavaScript'] }),
];

const ids = (list: CaseStudy[]) => list.map((s) => s.id);

describe('filterCaseStudies', () => {
  it('returns everything with no filters', () => {
    expect(ids(filterCaseStudies(studies, noFilters))).toEqual(['legal', 'bot', 'queue', 'todo']);
  });

  it('matches tech by inclusion and combines dimensions with AND', () => {
    expect(ids(filterCaseStudies(studies, { ...noFilters, tech: 'Python' }))).toEqual(['legal', 'bot', 'queue']);
    expect(ids(filterCaseStudies(studies, { ...noFilters, tech: 'Python', kind: 'learning' }))).toEqual(['queue']);
    expect(filterCaseStudies(studies, { ...noFilters, kind: 'client', industry: 'health-tech' })).toEqual([]);
  });

  it('filters cloud and delivery work independently of language', () => {
    expect(ids(filterCaseStudies(studies, { ...noFilters, platform: 'AWS' }))).toEqual(['legal']);
    expect(ids(filterCaseStudies(studies, { ...noFilters, tech: 'Python', platform: 'Docker' }))).toEqual(['bot']);
    expect(filterCaseStudies(studies, { ...noFilters, tech: 'JavaScript', platform: 'AWS' })).toEqual([]);
  });
});

describe('countOptions', () => {
  it('counts each option against the other active filters only', () => {
    const counts = countOptions(studies, { ...noFilters, kind: 'learning', tech: 'TypeScript' }, 'tech', [
      'TypeScript',
      'Python',
      'AI',
    ]);

    // Ignores the current tech selection, keeps kind = learning.
    expect(Object.fromEntries(counts)).toEqual({ TypeScript: 0, Python: 1, AI: 0 });
  });
});
