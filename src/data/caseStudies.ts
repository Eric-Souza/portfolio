import type { CaseStudy } from './types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'legal-tech',
    title: 'Essential Estates, 0 to Production',
    company: 'Summerall Law',
    companyUrl: 'https://www.summeralllaw.com',
    companyLinkedIn: 'https://www.linkedin.com/company/summerall-law',
    productName: 'Essential Estates',
    productUrl: 'https://www.essentialestates.com',
    tags: ['Leadership', 'Architecture', 'AI'],
    problem:
      'Summerall Law, a Silicon Valley law firm, needed a real platform for estate planning workflows in Essential Estates, replacing manual work with something they could run in production.',
    approach:
      'As founding engineer, I built Essential Estates from scratch: React/TypeScript frontend, NestJS API with PostgreSQL, AWS (S3, EC2, RDS, CloudFront, ACM), and AI features in Python with FastAPI and Flask, plus LLMs and RAG for document processing.',
    impact:
      'Shipped Essential Estates to production, hired and led the engineering team, set up code review and CI/CD with GitHub Actions, and added GA4 to track how people use the product.',
    stack: [
      'React',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'AWS',
      'Python',
      'FastAPI',
      'Flask',
      'RAG',
      'GitHub Actions',
    ],
  },
  {
    id: 'healthcare',
    title: 'Remedy Product, Healthcare Data Platform',
    company: 'Remedy Product',
    companyUrl: 'https://www.remedyproduct.com',
    companyLinkedIn: 'https://www.linkedin.com/company/remedyproduct',
    productName: 'MeRT',
    productUrl: 'https://mert.wavesynchrony.com/en/',
    relatedLinks: [{ name: 'Wave Neuroscience', url: 'https://www.waveneuro.com/' }],
    tags: ['Leadership', 'Architecture', 'Performance'],
    problem:
      'Remedy Product needed reliable patient and EEG data tracking, medical API integrations, and smoother treatment workflows for healthcare partners.',
    approach:
      'Built React/Next/MUI interfaces for clinical data management and scalable Nest/Node backends on AWS with PostgreSQL and DynamoDB. Integrated medical APIs for TMS session validation and EEG automation.',
    impact:
      'Cut admin work with better EEG workflows, improved patient management, and faster reports thanks to Redis caching and query tuning.',
    stack: [
      'React',
      'Next.js',
      'MUI',
      'NestJS',
      'PostgreSQL',
      'DynamoDB',
      'Redis',
      'AWS',
    ],
  },
  {
    id: 'fintech',
    title: 'Zro Bank, High-Volume Fintech Platform',
    company: 'Zro Bank',
    companyUrl: 'https://zrobank.com/en',
    companyLinkedIn: 'https://www.linkedin.com/company/zroglobal',
    productName: 'Z.ro Bank',
    productUrl: 'https://zrobank.com/en',
    relatedLinks: [
      {
        name: 'Zro Bank App',
        url: 'https://play.google.com/store/apps/details?id=br.com.zrobank.app&hl=en',
      },
    ],
    tags: ['Architecture', 'Performance'],
    problem:
      'Zro Bank needed a backend that could handle high-volume transactions with low latency and reliable remittance flows across its multi-currency banking app.',
    approach:
      'Implemented NestJS microservices with Apache Kafka for event-driven transaction processing on the Z.ro financial app. Built React/Next/MUI remittance and client management interfaces with Sequelize ORM on PostgreSQL.',
    impact:
      'Handled more transaction volume with less latency. Automated reporting with a Jira-to-Google Sheets integration so ops spent less time on spreadsheets.',
    stack: [
      'React',
      'Next.js',
      'MUI',
      'NestJS',
      'PostgreSQL',
      'Kafka',
      'Sequelize',
      'Node.js',
    ],
  },
  {
    id: 'geospatial',
    title: 'Kognita, GeoEdge Geospatial Intelligence',
    company: 'Kognita',
    companyUrl: 'https://kognita.com.br',
    companyLinkedIn: 'https://www.linkedin.com/company/kognita-lab',
    productName: 'GeoEdge',
    productUrl: 'https://app.geoedge.com.br/',
    tags: ['AI', 'Architecture'],
    problem:
      'Kognita needed a web platform for AI heatmaps and location data, so clients could compare sites and pick where to open a business.',
    approach:
      'Built GeoEdge with React, Next, and Material UI on the frontend and Node, Nest, and PostgreSQL on the backend. Connected the AI team\'s workflows to the product and used AWS S3 for large geospatial files.',
    impact:
      'Got geospatial insights working at scale, sped up data handoffs between the AI team and the platform, and gave clients a clear UI for location decisions.',
    stack: [
      'React',
      'Next.js',
      'MUI',
      'NestJS',
      'PostgreSQL',
      'AWS S3',
      'Node.js',
      'Geospatial AI',
    ],
  },
  {
    id: 'ecommerce',
    title: 'Mundiale, Telecom E-commerce Platforms',
    company: 'Mundiale',
    companyUrl: 'https://www.mundiale.ai',
    companyLinkedIn: 'https://www.linkedin.com/company/mundiale',
    relatedLinks: [
      { name: 'Americanet', url: 'https://americanet.com.br/' },
      { name: 'Claro', url: 'https://www.claro.com.br/' },
    ],
    tags: ['Performance', 'Architecture'],
    problem:
      'Major telecom providers in South America needed updated e-commerce and customer management systems for online plan sales and day-to-day ops.',
    approach:
      'Developed and maintained e-commerce platforms with React, Next, and Material UI, backed by Node, Express, and PostgreSQL. Built a separate customer and plan management system with React, Next, and Bootstrap for efficient user and plan administration.',
    impact:
      'Made it easier to buy internet and phone plans online and gave ops teams a simpler way to browse customers and plans.',
    stack: [
      'React',
      'Next.js',
      'MUI',
      'Bootstrap',
      'Node.js',
      'Express',
      'PostgreSQL',
    ],
  },
];
