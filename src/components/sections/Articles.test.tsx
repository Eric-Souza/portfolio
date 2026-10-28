import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material';
import { describe, expect, it } from 'vitest';
import { articles } from '../../data/articles';
import { theme } from '../../theme/theme';
import { Articles } from './Articles';

const titles = () => screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);

describe('Articles', () => {
  it('shows the latest articles first and pages through the rest', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Articles />
      </ThemeProvider>,
    );

    expect(titles()).toEqual(articles.slice(0, 6).map((a) => a.title));

    await userEvent.click(screen.getByRole('button', { name: 'Show 6 more' }));
    expect(titles()).toEqual(articles.slice(0, 12).map((a) => a.title));

    await userEvent.click(screen.getByRole('button', { name: `Show all (${articles.length})` }));
    expect(titles()).toHaveLength(articles.length);
    expect(screen.queryByRole('button', { name: /^Show/ })).not.toBeInTheDocument();
  });
});
