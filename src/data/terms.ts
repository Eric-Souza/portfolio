import { caseStudies } from './caseStudies';
import { skillGroups } from './skills';

/**
 * Vocabulary for highlighting tool, tech and architecture names in prose, so the copy is easy to skim.
 * Built from the stack chips and skills, so new content gets highlighted without extra work.
 */

// Stack items that describe work rather than name a tool.
const notTerms = new Set([
  'Automation',
  'Heatmaps',
  'Geospatial AI',
  'Text file output',
  'In-memory store',
  'JSON file storage',
  'Repository secrets',
  'Static hosting',
  'Medical APIs',
  'Code Review',
  'Agile',
  'System Design',
  'Technical Documentation',
  'Document Processing',
  'AI Integrations',
  'AI-Assisted Development',
  'Small single-purpose apps',
  'Object storage for large files',
  'Two apps, shared REST APIs',
  'requests',
]);

// Names prose uses that the chips don't spell out on their own, e.g. 'S3' inside 'AWS (S3, EC2, ...)'.
const extraTech = [
  'AI',
  'Google Analytics 4',
  'Kafka',
  'Google Sheets',
  'S3',
  'EC2',
  'RDS',
  'Lambda',
  'Bedrock',
  'Node',
  'Nest',
  'API',
  'ORM',
  'Postgres',
  'LLM',
  'LLMs',
  'SSE',
  'JWT',
  'OpenAPI',
  'Gmail SMTP',
];

// Architecture words prose writes in lower case; matched case-insensitively.
const extraArchitecture = [
  'CI/CD',
  'RAG',
  'retrieval-augmented generation',
  'tool calling',
  'tool-calling',
  'microservices',
  'event-driven',
  'service-oriented',
  'REST API',
  'webhooks',
  'job queue',
  'monorepo',
  'serverless',
  'prerendered',
  'single-page app',
  'full stack',
  'full-stack',
  'e-commerce',
];

// 'Next' alone only means Next.js in a stack list ('React, Next, and Material UI'), not the word 'next'.
const contextualPattern = /(?<=React(?:,| and|\/) ?)Next(?![\w.])/g;

// Job titles stay plain: 'Full Stack' and 'AI' in 'Founding Full Stack & AI Engineer' describe a role, not a tool.
const titlePattern = /(?:(?:Sr\.|Senior|Founding|Lead)\s+)?Full[ -]Stack(?:\s*&\s*AI)?\s+Engineers?/gi;

/** 'Docker (PostgreSQL, Redis)' -> 'Docker', 'Next.js 11' -> 'Next.js', 'SPA + REST API' -> both parts. */
function baseNames(item: string): string[] {
  const base = item
    .replace(/\s*\(.*$/, '')
    .replace(/\s+via\s+.*$/, '')
    .replace(/\s+v?\d+$/, '')
    .trim();
  if (base.includes(',')) return [];
  return base.split(' + ').filter((name) => name.length > 1 && !notTerms.has(name));
}

const unique = (names: string[]) => [...new Set(names)];

const layers = caseStudies.flatMap((study) => study.technical.stack);

export const techTerms = unique([
  ...layers.filter((l) => l.layer !== 'Architecture').flatMap((l) => l.items.flatMap(baseNames)),
  ...skillGroups.flatMap((group) => group.skills.flatMap(baseNames)),
  ...extraTech,
]);

export const architectureTerms = unique([
  ...layers.filter((l) => l.layer === 'Architecture').flatMap((l) => l.items.flatMap(baseNames)),
  ...extraArchitecture,
]);

export interface TextSegment {
  text: string;
  term: boolean;
}

const escape = (term: string) => term.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');

// Longest first so 'React Native' wins over 'React'. A trailing 's' covers plurals ('REST APIs').
const pattern = (terms: string[], flags: string) =>
  new RegExp(
    `(?<![\\w@])(?:${[...terms]
      .sort((a, b) => b.length - a.length)
      .map(escape)
      .join('|')})s?(?!\\w)`,
    flags,
  );

const techPattern = pattern(techTerms, 'g');
const architecturePattern = pattern(architectureTerms, 'gi');

/** Splits text into plain and highlighted segments. Overlapping matches keep the longer one. */
export function splitTerms(text: string): TextSegment[] {
  const titles = [...text.matchAll(titlePattern)].map((m) => ({ start: m.index, end: m.index + m[0].length }));
  const inTitle = (start: number, end: number) => titles.some((t) => start < t.end && end > t.start);

  const matches = [
    ...text.matchAll(techPattern),
    ...text.matchAll(architecturePattern),
    ...text.matchAll(contextualPattern),
  ]
    .map((m) => ({ start: m.index, end: m.index + m[0].length }))
    .filter(({ start, end }) => !inTitle(start, end))
    .sort((a, b) => a.start - b.start || b.end - a.end);

  const segments: TextSegment[] = [];
  let cursor = 0;
  for (const { start, end } of matches) {
    if (start < cursor) continue;
    if (start > cursor) segments.push({ text: text.slice(cursor, start), term: false });
    segments.push({ text: text.slice(start, end), term: true });
    cursor = end;
  }
  if (cursor < text.length) segments.push({ text: text.slice(cursor), term: false });
  return segments;
}
