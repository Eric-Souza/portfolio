import type { NavItem, Profile } from './types';

export const profile: Profile = {
  name: 'Eric de Oliveira Souza',
  title: 'Sr. Full Stack & AI Engineer',
  tagline:
    '8+ years building production software in legal-tech, healthcare, fintech, e-commerce, and AI, from architecture through deployment.',
  email: 'eric.bh18souza@gmail.com',
  whatsapp: '+55 31 98919 1411',
  whatsappUrl: 'https://wa.me/5531989191411',
  location: 'Belo Horizonte, Brazil',
  availability:
    'Open to senior and lead remote roles · Flexible US business hours',
  avatarSrc: '/avatar.webp',
  sourceUrl: 'https://github.com/Eric-Souza/portfolio',
  about: [
    "I'm a Sr. Full Stack & AI Engineer based in Brazil, with 8+ years of shipping production software across banking, healthcare, e-commerce, legal, AI, and internal tools. I work across the whole stack, from system design and cloud infrastructure to the UI. At Summerall Law, I took Essential Estates, a legal-tech platform, from zero to production and hired the team behind it. Most recently, I built a platform for an e-commerce agency that audits Amazon catalogs and drafts AI listing copy for each marketplace and language.",
    "I build AI into products, not just into my workflow: LLM and RAG document processing in production, AI copy generation that can switch between model providers, and open-source agents and RAG apps you can read on GitHub. Day to day, I use Claude, Cursor, and similar tools to move faster on coding, review, and planning.",
    "I've worked on small and large teams, at big companies and startups, on B2B and B2C products for web and cloud. I talk to clients directly and turn their concerns and requests into work that ships: technical trade-offs, architecture, metrics, and features. I do more than write code.",
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/ericdeoliveira/',
    github: 'https://github.com/Eric-Souza',
    medium: 'https://medium.com/@eric.bh18souza',
  },
  highlights: [
    '8+ years in production',
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
