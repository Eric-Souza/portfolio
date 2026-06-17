import type { NavItem, Profile } from './types';

export const profile: Profile = {
  name: 'Eric de Oliveira Souza',
  title: 'Senior Full Stack Engineer & Tech Lead',
  tagline:
    '8+ years building production systems across legal-tech, healthcare, fintech, and AI — from architecture to deployment.',
  email: 'eric.bh18souza@gmail.com',
  location: 'Belo Horizonte, Brazil',
  availability:
    'Open to senior and lead remote roles · Flexible US business hours',
  avatarSrc: '/avatar.jpg',
  about: [
    'I am a hands-on tech lead and founding engineer who ships complete products — from system design and cloud infrastructure to polished user interfaces. I have spent 8+ years building software across banking, healthcare, e-commerce, AI, legal, and internal systems.',
    'My recent work spans zero-to-production legal-tech platforms, healthcare data systems with medical API integrations, and high-volume fintech backends with event-driven microservices. I am equally comfortable leading engineering teams as I am writing production code.',
    'I bring strong AI fluency — integrating LLMs and RAG pipelines for intelligent document processing — combined with AWS infrastructure expertise and a track record of collaborating with distributed US-based teams.',
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
