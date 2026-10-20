import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { NextSectionButton } from './NextSectionButton';

describe('NextSectionButton', () => {
  it('scrolls to the section that follows', async () => {
    const target = document.createElement('section');
    target.id = 'experience';
    target.scrollIntoView = vi.fn();
    document.body.append(target);

    render(<NextSectionButton from="about" />);
    await userEvent.click(screen.getByRole('button', { name: 'Scroll to Experience' }));

    expect(target.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    target.remove();
  });

  it('points from the hero to the first section', () => {
    render(<NextSectionButton from="hero" />);
    expect(screen.getByRole('button', { name: 'Scroll to About' })).toBeInTheDocument();
  });

  it('is hidden on the last section', () => {
    render(<NextSectionButton from="contact" />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
