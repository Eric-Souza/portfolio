import { useMemo, useState } from 'react';
import { Box, Button, Card, Typography } from '@mui/material';
import { caseStudies, industryLabels, kindLabels, languageTags, platformTags } from '../../data/caseStudies';
import {
  countOptions,
  filterCaseStudies,
  noFilters,
  type CaseStudyFilters,
  type FilterKey,
} from '../../data/caseStudies/filters';
import type { CaseStudyKind, Industry } from '../../data/types';
import { Section } from '../layout/Section';
import { CaseStudyCard } from '../ui/CaseStudyCard';
import { FilterChipGroup, type FilterOption } from '../ui/FilterChipGroup';

const PAGE_SIZE = 6;

// Only offer options that exist in the data, in the order their labels are declared.
const kinds = (Object.keys(kindLabels) as CaseStudyKind[]).filter((kind) =>
  caseStudies.some((study) => study.kind === kind),
);
const industries = (Object.keys(industryLabels) as Industry[]).filter((industry) =>
  caseStudies.some((study) => study.industry === industry),
);
const platforms = platformTags.filter((platform) =>
  caseStudies.some((study) => study.tech.includes(platform)),
);

function useOptions<K extends FilterKey, T extends NonNullable<CaseStudyFilters[K]>>(
  filters: CaseStudyFilters,
  key: K,
  values: T[],
  labelOf: (value: T) => string,
): { options: FilterOption<T>[]; total: number } {
  return useMemo(() => {
    const counts = countOptions(caseStudies, filters, key, values);
    const total = filterCaseStudies(caseStudies, { ...filters, [key]: null }).length;
    return {
      options: values.map((value) => ({ value, label: labelOf(value), count: counts.get(value) ?? 0 })),
      total,
    };
  }, [filters, key, values, labelOf]);
}

const kindLabel = (kind: CaseStudyKind) => kindLabels[kind];
const industryLabel = (industry: Industry) => industryLabels[industry];
const techLabel = (tech: string) => tech;

export function CaseStudies() {
  const [filters, setFilters] = useState<CaseStudyFilters>(noFilters);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const results = useMemo(() => filterCaseStudies(caseStudies, filters), [filters]);
  const kindOptions = useOptions(filters, 'kind', kinds, kindLabel);
  const industryOptions = useOptions(filters, 'industry', industries, industryLabel);
  const techOptions = useOptions(filters, 'tech', languageTags, techLabel);
  const platformOptions = useOptions(filters, 'platform', platforms, techLabel);

  const setFilter = <K extends FilterKey>(key: K) => (value: CaseStudyFilters[K]) => {
    setFilters((current) => ({ ...current, [key]: value }));
    setVisible(PAGE_SIZE);
  };

  const clearFilters = () => {
    setFilters(noFilters);
    setVisible(PAGE_SIZE);
  };

  const filtered = Object.values(filters).some((value) => value !== null);
  const remaining = results.length - visible;

  return (
    <Section
      id="case-studies"
      title="Case Studies"
      subtitle="Client work first, then side projects and the repos I built to learn. Each one shows what it does and the problem it solves; switch to the technical breakdown for the architecture, stack, infrastructure and CI/CD."
    >
      <Card sx={{ p: { xs: 2, md: 2.5 }, mb: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <FilterChipGroup label="Type" value={filters.kind} onChange={setFilter('kind')} {...kindOptions} />
        <FilterChipGroup
          label="Industry"
          value={filters.industry}
          onChange={setFilter('industry')}
          {...industryOptions}
        />
        <FilterChipGroup label="Tech" value={filters.tech} onChange={setFilter('tech')} {...techOptions} />
        <FilterChipGroup
          label="Cloud & DevOps"
          value={filters.platform}
          onChange={setFilter('platform')}
          {...platformOptions}
        />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minHeight: 30 }}>
          <Typography variant="body2" color="text.secondary" aria-live="polite">
            {results.length === caseStudies.length
              ? `${results.length} case studies`
              : `${results.length} of ${caseStudies.length} case studies`}
          </Typography>
          {filtered && (
            <Button size="small" onClick={clearFilters}>
              Clear filters
            </Button>
          )}
        </Box>
      </Card>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {results.slice(0, visible).map((study, index) => (
          <CaseStudyCard key={study.id} study={study} index={index} />
        ))}
      </Box>

      {remaining > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
          <Button variant="outlined" onClick={() => setVisible((count) => count + PAGE_SIZE)}>
            Show {Math.min(PAGE_SIZE, remaining)} more
          </Button>
          <Button onClick={() => setVisible(results.length)}>Show all ({results.length})</Button>
        </Box>
      )}
    </Section>
  );
}
