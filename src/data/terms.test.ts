import { describe, expect, it } from 'vitest';
import { splitTerms } from './terms';

const highlighted = (text: string) =>
  splitTerms(text)
    .filter((s) => s.term)
    .map((s) => s.text);

describe('splitTerms', () => {
  it('highlights tools by exact name, preferring the longest match', () => {
    expect(highlighted('Built the app in React Native with Expo, backed by Node.js and PostgreSQL.')).toEqual([
      'React Native',
      'Expo',
      'Node.js',
      'PostgreSQL',
    ]);
  });

  it('matches architecture styles in any case, and plurals', () => {
    expect(highlighted('Event-driven NestJS microservices behind REST APIs, shipped with CI/CD.')).toEqual([
      'Event-driven',
      'NestJS',
      'microservices',
      'REST APIs',
      'CI/CD',
    ]);
  });

  it('leaves ordinary words alone and keeps the text intact', () => {
    const text = 'Teams express interest and react quickly to requests from the dragon.';
    expect(highlighted(text)).toEqual([]);
    expect(
      splitTerms(text)
        .map((s) => s.text)
        .join(''),
    ).toBe(text);
  });
});
