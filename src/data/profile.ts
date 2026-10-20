import type { NavItem, Profile } from './types';

export const profile: Profile = {
  name: 'Eric de Oliveira Souza',
  title: 'Sr. Full Stack & AI Engineer',
  tagline: 'I own and develop products from architecture to production.',
  email: 'eric.bh18souza@gmail.com',
  whatsapp: '+55 31 98919 1411',
  whatsappUrl: 'https://wa.me/5531989191411',
  location: 'Belo Horizonte, Brazil · GMT-3',
  availability: 'Flexible US business hours',
  avatarSrc: '/avatar.webp',
  sourceUrl: 'https://github.com/Eric-Souza/portfolio',
  about: [
    "I'm a Sr. Full Stack & AI Engineer based in Brazil, with 8+ years of shipping production software. I own products end to end, from system design and cloud infrastructure to the UI, on small and large teams, B2B and B2C, in legal-tech, healthcare, fintech, e-commerce and AI, among others.",
    "I'm fully proficient in web and AI engineering, from front end and back end to LLMs and RAG, and I use AI tools every day. I lead teams and own what I build, and I talk to clients directly to turn their requests into work that ships. I do more than write code.",
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/ericdeoliveira/',
    github: 'https://github.com/Eric-Souza',
    medium: 'https://medium.com/@eric.bh18souza',
  },
  highlights: [
    'Cloud (AWS, GCP, Azure)',
    'AI (LLMs & RAG)',
    'JS/TS',
    'Python',
    'Founding Engineer Exp',
    'Tech Lead Exp',
  ],
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];
