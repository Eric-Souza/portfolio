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
    "I'm a Sr. Full Stack & AI Engineer based in Brazil with 8+ years of shipping software. I handle system design, cloud infrastructure and UI alike, and I've done it on small and large teams, B2B and B2C, in legal-tech, healthcare, fintech, e-commerce, AI and more.",
    "I work across the whole web and AI stack, including front end, back end, LLMs and RAG, and AI tools are part of my daily workflow. I lead teams, talk directly with clients and turn their requests into features that ship. I do more than write code.",
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/ericdeoliveira/',
    github: 'https://github.com/Eric-Souza',
    medium: 'https://medium.com/@eric.bh18souza',
  },
  highlights: [
    'JavaScript/TypeScript',
    'Python',
    'AI (LLMs & RAG)',
    'Cloud (AWS, GCP, Azure)',
    'Founding Engineer Exp',
    'Tech Lead Exp',
  ],
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'articles', label: 'Articles' },
];
