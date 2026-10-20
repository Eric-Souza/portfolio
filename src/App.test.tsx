import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AppProviders } from './AppProviders';
import { createEmotionCache } from './emotionCache';
import { navItems, profile } from './data/profile';

describe('App', () => {
  it('renders every section the navbar links to', () => {
    const { container } = render(<AppProviders cache={createEmotionCache()} />);

    expect(screen.getByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument();
    for (const id of navItems.map((item) => item.id)) {
      expect(container.querySelector(`section#${id}`), id).not.toBeNull();
    }
  });
});
