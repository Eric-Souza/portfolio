import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { navItems } from '../../data/profile';
import { NextSectionButton } from './NextSectionButton';

// jsdom has no layout, so each section gets a fixed distance from the top of the viewport.
const tops: Record<string, number> = {};

function setTops(first: number) {
  navItems.forEach((item, i) => (tops[item.id] = first + i * 900));
  window.dispatchEvent(new Event('scroll'));
}

beforeEach(() => {
  Object.defineProperty(document.documentElement, 'scrollHeight', { value: 6000, configurable: true });
  for (const item of navItems) {
    const section = document.createElement('section');
    section.id = item.id;
    section.getBoundingClientRect = () => ({ top: tops[item.id] }) as DOMRect;
    section.scrollIntoView = vi.fn();
    document.body.append(section);
  }
  setTops(900);
});

afterEach(() => {
  navItems.forEach((item) => document.getElementById(item.id)?.remove());
  Object.defineProperty(document.documentElement, 'scrollHeight', { value: 0, configurable: true });
});

describe('NextSectionButton', () => {
  it('scrolls from the first screen to the next section', async () => {
    render(<NextSectionButton />);

    // About is the first screen, at the very top.
    act(() => setTops(0));
    await userEvent.click(screen.getByRole('button', { name: 'Scroll to Experience' }));
    expect(document.getElementById('experience')!.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
  });

  it('targets the section after the one at the top of the screen', () => {
    render(<NextSectionButton />);

    // Experience sits right under the navbar.
    act(() => setTops(80 - 900));
    expect(screen.getByRole('button', { name: 'Scroll to Projects' })).toBeInTheDocument();
  });

  it('hides at the bottom of the page', () => {
    render(<NextSectionButton />);

    Object.defineProperty(document.documentElement, 'scrollHeight', { value: window.innerHeight, configurable: true });
    act(() => setTops(-4000));
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
