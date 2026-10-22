import type { NavItem, Profile } from './types';

export const profile: Profile = {
  name: 'Eric de Oliveira Souza',
  title: 'Sr. Full Stack & AI Engineer',
  // **word** marks a highlighted term, here and in about.
  tagline:
    'Owning and developing products from **architecture** to **production** for **8+ years**. I have experience in industries like **legal-tech**, **healthcare**, **fintech**, **e-commerce**, **AI**, and others.',
  email: 'eric.bh18souza@gmail.com',
  // Gmail's web composer: mailto: does nothing for visitors without a desktop mail app.
  emailComposeUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=eric.bh18souza@gmail.com',
  whatsapp: '+55 31 98919 1411',
  whatsappUrl: 'https://wa.me/5531989191411',
  location: 'Belo Horizonte, Brazil',
  locationUrl: 'https://www.google.com/maps/place/Belo+Horizonte,+MG,+Brazil',
  timezone: 'GMT-3',
  availability: 'I work on flexible US business hours',
  avatarSrc: '/avatar.webp',
  sourceUrl: 'https://github.com/Eric-Souza/portfolio',
  about: [
    "I'm fluent in both **web** and **AI**. I build everything from **complex UIs** to integrated **REST APIs** with **React**, **Node** and **Python**, and AI features from **document processing** and **image generation** to **prompt optimization**, using **LLMs** and **RAG** with **OpenAI**, **Anthropic** and **Gemini**.",
    "I also own what surrounds the code: **system design**, **CI/CD** and **cloud infrastructure** on **AWS** and **GCP**. I've led teams, set code and delivery standards, and I work directly with clients to turn what they need into features that ship.",
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/ericdeoliveira/',
    github: 'https://github.com/Eric-Souza',
    medium: 'https://medium.com/@eric.bh18souza',
  },
  highlights: [
    'JavaScript/TypeScript',
    'Python',
    'AI (LLMs, RAG, Agents)',
    'Cloud & DevOps',
    'Architecture',
    'Tech Lead Exp',
    'Founding Engineer Exp',
  ],
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'articles', label: 'Articles' },
];
