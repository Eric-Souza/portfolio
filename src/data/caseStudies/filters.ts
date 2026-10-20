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
