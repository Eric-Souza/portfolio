import type { NavItem, Profile } from './types';

export const profile: Profile = {
  name: 'Eric de Oliveira Souza',
  title: 'Sr Full Stack Engineer & Tech Lead',
  tagline:
    '8+ years building production software and solutions in legal-tech, healthcare, fintech, AI, and internal systems, from architecture through deployment.',
  email: 'eric.bh18souza@gmail.com',
  whatsapp: '+55 31 98919 1411',
  whatsappUrl: 'https://wa.me/5531989191411',
  location: 'Belo Horizonte, Brazil',
  availability:
    'Open to senior and lead remote roles · Flexible US business hours',
  avatarSrc: '/avatar.jpg',
  about: [
    "I'm a Sr Full Stack Engineer based in Brazil. I'm effective at owning products end to end, from system design and infrastructure to the UI. I also leverage AI tools to enhance all aspects of work, using Claude, Cursor with multiple models, Cursor Bugbot, ChatGPT, and similar tools. Over 8 years I've worked in banking, healthcare, e-commerce, AI, legal, and internal tools.",
    "I've worked with small and large teams, at big companies and startups, on B2B and B2C products across web and cloud. I'm comfortable talking to clients directly and turning their concerns and requests into actionable solutions, from technical trade-offs and architecture to metrics and shippable features. I do more than write code.",
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/ericdeoliveira/',
    github: 'https://github.com/Eric-Souza',
    medium: 'https://medium.com/@eric.bh18souza',
  },
  stats: [
    { label: 'Years Experience', value: '8+' },
    { label: 'Domains', value: '6+' },
    { label: 'Core Stack', value: 'React/TS' },
    { label: 'Python', value: 'FastAPI/Flask' },
    { label: 'Cloud', value: 'AWS' },
    { label: 'Leading', value: 'Technical' },
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
