import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material';
import { describe, expect, it } from 'vitest';
import { caseStudies, industryLabels } from '../../data/caseStudies';
import { theme } from '../../theme/theme';
import { CaseStudies } from './CaseStudies';

const renderSection = () =>
  render(
    <ThemeProvider theme={theme}>
      <CaseStudies />
    </ThemeProvider>,
  );

const cardTitles = () => screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);

const chip = (group: string, name: RegExp) =>
  within(screen.getByRole('group', { name: `Filter by ${group}` })).getByRole('button', { name });

describe('CaseStudies', () => {
  it('shows the most recently updated first, can lead with client work, and pages', async () => {
    renderSection();

    // caseStudies is already newest first; the section keeps that order by default.
    expect(cardTitles()).toEqual(caseStudies.slice(0, 6).map((s) => s.title));
    expect(caseStudies[0].ongoing).toBe(true);

    const sort = within(screen.getByRole('group', { name: 'Sort projects' }));
    await userEvent.click(sort.getByRole('button', { name: 'Client work first' }));
    const clientTitles = caseStudies.filter((s) => s.kind === 'client').map((s) => s.title);
    expect(cardTitles()).toEqual(clientTitles.slice(0, 6));

    await userEvent.click(screen.getByRole('button', { name: /^Show all/ }));
    expect(cardTitles()).toHaveLength(caseStudies.length);
  });

  it('filters by tech, industry and platform, and clears back to everything', async () => {
    renderSection();

    await userEvent.click(chip('tech', /^Python \d+$/));
    await userEvent.click(screen.getByRole('button', { name: /^Show all/ }));
    const python = caseStudies.filter((s) => s.tech.includes('Python'));
    expect(cardTitles()).toEqual(python.map((s) => s.title));

    await userEvent.click(chip('tech', /^All/));
    await userEvent.click(chip('industry', new RegExp(`^${industryLabels['health-tech']} \\d+$`)));
    const health = caseStudies.filter((s) => s.industry === 'health-tech');
    expect(screen.getByText(`${health.length} of ${caseStudies.length} projects`)).toBeInTheDocument();
    expect(cardTitles()).toEqual(health.slice(0, 6).map((s) => s.title));

    await userEvent.click(chip('industry', /^All/));
    await userEvent.click(chip('cloud & devops', /^AWS \d+$/));
    const aws = caseStudies.filter((s) => s.tech.includes('AWS'));
    expect(aws.length).toBeGreaterThan(0);
    expect(cardTitles()).toEqual(aws.slice(0, 6).map((s) => s.title));

    await userEvent.click(screen.getByRole('button', { name: 'Clear filters' }));
    // Unfiltered, the list doesn't repeat its own size.
    expect(screen.queryByText(/ of \d+ projects$/)).not.toBeInTheDocument();
    expect(cardTitles()).toEqual(caseStudies.slice(0, 6).map((s) => s.title));
  });

  it('frames non-client work as what it does', async () => {
    renderSection();

    await userEvent.click(chip('type', /^Learning project \d+$/));
    const card = screen.getAllByRole('tablist')[0];
    expect(within(card).getByRole('tab', { name: 'Overview' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getAllByText('What it does').length).toBeGreaterThan(0);
    expect(screen.queryByText('What we achieved')).not.toBeInTheDocument();
  });
});
