import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material';
import { describe, expect, it } from 'vitest';
import { caseStudies } from '../../data/caseStudies';
import { theme } from '../../theme/theme';
import { CaseStudyCard } from './CaseStudyCard';

const study = caseStudies.find((s) => s.id === 'legal-tech')!;

// Prose is split into highlighted terms, so match on an element's whole text instead of one text node.
const fullText = (text: string) => (_: string, el: Element | null) =>
  el?.textContent === text && ![...el.children].some((child) => child.textContent === text);

function renderCard() {
  return render(
    <ThemeProvider theme={theme}>
      <CaseStudyCard study={study} index={0} />
    </ThemeProvider>,
  );
}

describe('CaseStudyCard', () => {
  it('leads with the business view for recruiters', () => {
    renderCard();

    expect(screen.getByRole('tab', { name: 'Business impact' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText(study.headline)).toBeInTheDocument();
    expect(screen.getByText(fullText(study.challenge))).toBeInTheDocument();
    for (const outcome of study.outcomes) {
      expect(screen.getByText(fullText(outcome))).toBeInTheDocument();
    }
    expect(screen.queryByText(fullText(study.technical.architecture))).not.toBeInTheDocument();
  });

  it('switches to the technical breakdown', async () => {
    renderCard();

    await userEvent.click(screen.getByRole('tab', { name: 'Technical breakdown' }));

    const panel = screen.getByRole('tabpanel');
    expect(panel).toHaveAccessibleName('Technical breakdown');
    expect(screen.getByText(fullText(study.technical.architecture))).toBeInTheDocument();
    // Tool and architecture names are picked out for skimming.
    const highlighted = [...panel.querySelectorAll('p b')].map((b) => b.textContent);
    expect(highlighted).toEqual(expect.arrayContaining(['NestJS', 'PostgreSQL', 'AWS']));
    const layers = within(panel).getAllByRole('term').map((term) => term.textContent);
    expect(layers).toEqual(study.technical.stack.map(({ layer }) => layer));
    expect(screen.queryByText(fullText(study.challenge))).not.toBeInTheDocument();
    // The recruiter-facing headline stays visible on both tabs.
    expect(screen.getByText(study.headline)).toBeInTheDocument();
  });
});
