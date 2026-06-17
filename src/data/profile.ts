import type { NavItem, Profile } from './types';

export const profile: Profile = {
  name: 'Eric de Oliveira Souza',
  title: 'Senior Full Stack Engineer & Tech Lead',
  tagline:
    '8+ years building production software in legal-tech, healthcare, fintech, and AI, from architecture through deployment.',
  email: 'eric.bh18souza@gmail.com',
  whatsapp: '+55 31 98919 1411',
  whatsappUrl: 'https://wa.me/5531989191411',
  location: 'Belo Horizonte, Brazil',
  availability:
    'Open to senior and lead remote roles · Flexible US business hours',
  avatarSrc: '/avatar.jpg',
  about: [
    "I'm a tech lead and founding engineer based in Brazil. I like owning products end to end, from system design and infra to the UI. I also leverage AI tools to enhance all aspects of work, using Claude, Cursor with multiple models, Cursor Bugbot, ChatGPT, and similar tools. Over 8 years I've worked in banking, healthcare, e-commerce, AI, legal, and internal tools.",
    "I've worked with small and large teams, at big companies and startups, on B2B and B2C products across web and cloud. I'm comfortable talking to clients directly, and leading a team while writing code at the same time.",
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
    { label: 'Leadership', value: 'Tech Lead' },
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
