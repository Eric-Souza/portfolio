import type { CaseStudy, CaseStudyKind, Industry, LanguageTag, PlatformTag } from '../types';

/** One active value per dimension; null means "All". */
export interface CaseStudyFilters {
  kind: CaseStudyKind | null;
  industry: Industry | null;
  tech: LanguageTag | null;
  platform: PlatformTag | null;
}

export const noFilters: CaseStudyFilters = { kind: null, industry: null, tech: null, platform: null };

export type FilterKey = keyof CaseStudyFilters;

/**
 * 'updated': most recent activity first. 'relevance': client work first, then side projects,
 * challenges and learning repos, each newest first.
 */
export type SortOrder = 'updated' | 'relevance';

const kindOrder: CaseStudyKind[] = ['client', 'side-project', 'challenge', 'learning'];

// Ongoing work first, then by date; undated studies last.
const recency = (study: CaseStudy) =>
  study.ongoing ? Infinity : study.updated ? Date.parse(study.updated) : -Infinity;

const byUpdated = (a: CaseStudy, b: CaseStudy) =>
  recency(a) === recency(b) ? 0 : recency(b) > recency(a) ? 1 : -1;

const byRelevance = (a: CaseStudy, b: CaseStudy) =>
  kindOrder.indexOf(a.kind) - kindOrder.indexOf(b.kind) || byUpdated(a, b);

/** Returns a sorted copy. Ties keep their input order. */
export function sortCaseStudies(studies: CaseStudy[], order: SortOrder) {
  return [...studies].sort(order === 'updated' ? byUpdated : byRelevance);
}

function matches(study: CaseStudy, { kind, industry, tech, platform }: CaseStudyFilters, ignore?: FilterKey) {
  return (
    (ignore === 'kind' || kind === null || study.kind === kind) &&
    (ignore === 'industry' || industry === null || study.industry === industry) &&
    (ignore === 'tech' || tech === null || study.tech.includes(tech)) &&
    (ignore === 'platform' || platform === null || study.tech.includes(platform))
  );
}

export function filterCaseStudies(studies: CaseStudy[], filters: CaseStudyFilters) {
  return studies.filter((study) => matches(study, filters));
}

/**
 * How many studies each option of `key` would show, given the other active filters.
 * Lets the UI show counts and disable options that would lead to an empty list.
 */
export function countOptions<K extends FilterKey>(
  studies: CaseStudy[],
  filters: CaseStudyFilters,
  key: K,
  options: NonNullable<CaseStudyFilters[K]>[],
) {
  const pool = studies.filter((study) => matches(study, filters, key));
  return new Map(options.map((option) => [option, pool.filter((s) => matches(s, { ...noFilters, [key]: option })).length]));
}
