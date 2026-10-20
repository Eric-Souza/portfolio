import type { NavItem, Profile } from './types';

export const profile: Profile = {
  name: 'Eric de Oliveira Souza',
  title: 'Sr. Full Stack & AI Engineer',
  tagline: 'I own and develop products from architecture to production.',
  email: 'eric.bh18souza@gmail.com',
  whatsapp: '+55 31 98919 1411',
  whatsappUrl: 'https://wa.me/5531989191411',
  location: 'Belo Horizonte, Brazil',
  availability:
    'Open to senior and lead remote roles · Flexible US business hours',
  avatarSrc: '/avatar.webp',
  sourceUrl: 'https://github.com/Eric-Souza/portfolio',
  about: [
    "I'm a Sr. Full Stack & AI Engineer based in Brazil, with 8+ years of shipping production software. I own products end to end, from system design and cloud infrastructure to the UI, on small and large teams, B2B and B2C, in legal-tech, healthcare, fintech, e-commerce and AI, among others.",
    "I build AI into products, not just into my workflow, and I use Claude, Cursor, and similar tools every day to move faster on coding, review, and planning. I talk to clients directly and turn their requests into work that ships. I do more than write code.",
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/ericdeoliveira/',
    github: 'https://github.com/Eric-Souza',
    medium: 'https://medium.com/@eric.bh18souza',
  },
  highlights: [
    'Web with JS/TS and Python',
    'AI with LLMs & RAG',
    'Cloud with AWS, Azure, GCP',
    'Hired & led teams',
    '5+ industries',
  ],
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'articles', label: 'Articles' },
  { id: 'contact', label: 'Contact' },
];
