import type { NavItem, Profile } from './types';

export const profile: Profile = {
  name: 'Eric de Oliveira Souza',
  title: 'Sr. Full Stack & AI Engineer',
  tagline:
    '8+ years building production software and solutions in legal-tech, healthcare, fintech, AI, and internal systems, from architecture through deployment.',
  email: 'eric.bh18souza@gmail.com',
  whatsapp: '+55 31 98919 1411',
  whatsappUrl: 'https://wa.me/5531989191411',
  location: 'Belo Horizonte, Brazil',
  availability:
    'Open to senior and lead remote roles · Flexible US business hours',
  avatarSrc: '/avatar.webp',
  sourceUrl: 'https://github.com/Eric-Souza/portfolio',
  about: [
    "I'm a Sr. Full Stack & AI Engineer based in Brazil. I own products end to end, from system design and infrastructure to the UI, and I've done it across banking, healthcare, e-commerce, AI, legal, and internal tools over 8+ years. Right now I'm the founding engineer at Essential Estates, where I took a legal-tech platform from zero to production and hired the team behind it.",
    "I build AI into products, not just into my workflow: LLM and RAG document processing in production, plus open-source agents and RAG apps you can read on GitHub. Day to day I use Claude, Cursor, and similar tools to move faster on coding, review, and planning.",
    "I've worked with small and large teams, at big companies and startups, on B2B and B2C products across web and cloud. I'm comfortable talking to clients directly and turning their concerns and requests into actionable solutions, from technical trade-offs and architecture to metrics and shippable features. I do more than write code.",
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/ericdeoliveira/',
    github: 'https://github.com/Eric-Souza',
    medium: 'https://medium.com/@eric.bh18souza',
  },
  highlights: [
    '8+ years in production',
    'Founding engineer',
    'LLMs & RAG in production',
    'AWS, end to end',
    'Hired & led a team',
    '6 industries',
  ],
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
];
