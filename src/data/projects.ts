import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'eric-portfolio',
    name: 'Eric Portfolio',
    description:
      'Personal portfolio built with React, TypeScript, Material UI, and Framer Motion — recruiter-focused with case studies and live project demos.',
    githubUrl: 'https://github.com/Eric-Souza/eric-portfolio',
    stack: ['React', 'TypeScript', 'MUI', 'Framer Motion', 'Vite'],
  },
  {
    id: 'car-sales-api',
    name: 'Car Sales API',
    description:
      'NestJS API with complete authentication and authorization, TypeORM, and admin-driven report approval workflows.',
    githubUrl: 'https://github.com/Eric-Souza/car-sales-api',
    stack: ['NestJS', 'TypeScript', 'TypeORM', 'Auth'],
  },
  {
    id: 'linkedin-ui-clone',
    name: 'LinkedIn UI Clone',
    description:
      'Polished LinkedIn interface clone with TypeScript, shimmer loading effects, and styled-components.',
    githubUrl: 'https://github.com/Eric-Souza/linkedin-ui-clone',
    liveUrl: 'https://609414300dbdba2416b04e36--eric-linkedin-clone.netlify.app',
    stack: ['React', 'TypeScript', 'Styled Components', 'Shimmer'],
  },
  {
    id: 'dropbox-ui-clone',
    name: 'Dropbox UI Clone',
    description:
      'Dropbox interface recreation featuring advanced CSS clip-path effects and responsive layout.',
    githubUrl: 'https://github.com/Eric-Souza/dropbox-ui-clone',
    liveUrl: 'https://60abb222d542bb108b65ccbb--dropbox-eric-clone.netlify.app',
    stack: ['React', 'TypeScript', 'CSS', 'Styled Components'],
  },
  {
    id: 'react-youtube-ui',
    name: 'YouTube UI (React Native Web)',
    description:
      'Fully responsive video browsing app mimicking YouTube\'s classic UI using React Native Web.',
    githubUrl: 'https://github.com/Eric-Souza/react-youtube-ui',
    liveUrl: 'https://codesandbox.io/p/github/Eric-Souza/react-youtube-ui',
    stack: ['React Native Web', 'TypeScript', 'CSS'],
  },
  {
    id: 'github-finder',
    name: 'GitHub Profile Finder',
    description:
      'Global GitHub profile search app with DaisyUI, Tailwind CSS, and the GitHub API.',
    githubUrl: 'https://github.com/Eric-Souza/github-finder',
    liveUrl: 'https://github-finder-eight-teal.vercel.app',
    stack: ['React', 'Tailwind', 'DaisyUI', 'Axios'],
  },
  {
    id: 'marvel-data-viz',
    name: 'Marvel Data Visualization',
    description:
      'Marvel comics and characters explorer powered by the Marvel Developer API and Material UI.',
    githubUrl: 'https://github.com/Eric-Souza/marvel-data-visualization',
    liveUrl: 'https://605b43e65869f5517f2dfa15--marvel-data-visualization.netlify.app',
    stack: ['React', 'MUI', 'Marvel API', 'Axios'],
  },
  {
    id: 'react-feedback-app',
    name: 'React Feedback App',
    description:
      'Dynamic feedback CRUD app with Framer Motion animations and json-server mock backend.',
    githubUrl: 'https://github.com/Eric-Souza/react-feedback-app',
    liveUrl: 'https://hardcore-brahmagupta-50f7dd.netlify.app',
    stack: ['React', 'Framer Motion', 'JSON Server'],
  },
  {
    id: 'express-pg-api',
    name: 'Express PostgreSQL API',
    description:
      'REST API with Express, PostgreSQL, and Sequelize ORM — migrations, relations, and complex queries.',
    githubUrl: 'https://github.com/Eric-Souza/express-pg-api',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize'],
  },
];
