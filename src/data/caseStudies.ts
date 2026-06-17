import type { CaseStudy } from './types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'legal-tech',
    title: 'Essential Estates — 0 to Production',
    company: 'Summerall Law',
    companyUrl: 'https://www.summeralllaw.com',
    companyLinkedIn: 'https://www.linkedin.com/company/summerall-law',
    productName: 'Essential Estates',
    productUrl: 'https://www.essentialestates.com',
    tags: ['Leadership', 'Architecture', 'AI'],
    problem:
      'Summerall Law, a Silicon Valley law firm, needed a production-grade platform to manage estate planning workflows through Essential Estates — replacing manual processes with a scalable digital product.',
    approach:
      'As founding engineer, I architected and built Essential Estates from scratch — React/TypeScript frontend, NestJS API with PostgreSQL, AWS infrastructure (S3, EC2, RDS, CloudFront, ACM), and AI features using Python/FastAPI with LLMs and RAG for intelligent document processing.',
    impact:
      'Delivered Essential Estates to production end-to-end: recruited and led the engineering team, established code review standards and CI/CD with GitHub Actions, and implemented GA4 analytics to drive product and marketing decisions.',
    stack: [
      'React',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'AWS',
      'Python',
      'FastAPI',
      'RAG',
      'GitHub Actions',
    ],
  },
  {
    id: 'healthcare',
    title: 'Remedy Product — Healthcare Data Platform',
    company: 'Remedy Product',
    companyUrl: 'https://www.remedyproduct.com',
    companyLinkedIn: 'https://www.linkedin.com/company/remedyproduct',
    productName: 'MeRT',
    productUrl: 'https://mert.wavesynchrony.com/en/',
    relatedLinks: [{ name: 'Wave Neuroscience', url: 'https://www.waveneuro.com/' }],
    tags: ['Architecture', 'Performance'],
    problem:
      'Remedy Product needed reliable patient and EEG data tracking with medical API integrations and optimized treatment workflows for healthcare partners.',
    approach:
      'Built React/Next/MUI interfaces for clinical data management and scalable Nest/Node backends on AWS with PostgreSQL and DynamoDB. Integrated medical APIs for TMS session validation and EEG automation.',
    impact:
      'Reduced admin overhead through optimized EEG workflows, improved patient management, and cut report processing time with Redis caching and query optimization.',
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
    title: 'Zro Bank — High-Volume Fintech Platform',
    company: 'Zro Bank',
    companyUrl: 'https://zrobank.com/en',
    companyLinkedIn: 'https://www.linkedin.com/company/zroglobal',
    productName: 'Z.ro Bank',
    productUrl: 'https://zrobank.com/en',
    tags: ['Architecture', 'Performance'],
    problem:
      'Zro Bank required a backend capable of handling high-volume financial transactions with low latency and reliable remittance workflows across its multi-currency digital banking platform.',
    approach:
      'Implemented NestJS microservices with Apache Kafka for event-driven transaction processing on the Z.ro financial app. Built React/Next/MUI remittance and client management interfaces with Sequelize ORM on PostgreSQL.',
    impact:
      'Improved scalability and reduced latency for high-volume transactions. Automated reporting workflows via Jira-to-Google Sheets integration, streamlining operations.',
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
    title: 'Kognita — GeoEdge Geospatial Intelligence',
    company: 'Kognita',
    companyUrl: 'https://kognita.com.br',
    companyLinkedIn: 'https://www.linkedin.com/company/kognita-lab',
    productName: 'GeoEdge',
    productUrl: 'https://app.geoedge.com.br/',
    tags: ['AI', 'Architecture'],
    problem:
      'Kognita needed a production web platform to deliver AI-driven heatmaps and location intelligence, helping enterprise clients identify optimal business locations from real-time geospatial data.',
    approach:
      'Built the GeoEdge platform with React, Next, and Material UI on the frontend and Node, Nest, and PostgreSQL on the backend. Bridged AI R&D workflows with the web product and used AWS S3 for large-scale geospatial data storage.',
    impact:
      'Enabled accurate geospatial insights at scale, optimized data processing pipelines between the AI team and the platform, and delivered a seamless interface for location-based decision making.',
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
    title: 'Mundiale — Telecom E-commerce Platforms',
    company: 'Mundiale',
    companyUrl: 'https://www.mundiale.ai',
    companyLinkedIn: 'https://www.linkedin.com/company/mundiale',
    relatedLinks: [
      { name: 'Americanet', url: 'https://americanet.com.br/' },
      { name: 'Claro', url: 'https://www.claro.com.br/' },
    ],
    tags: ['Performance', 'Architecture'],
    problem:
      'Major telecom providers in South America needed modern e-commerce and customer management systems to improve online plan purchases and internal operations at scale.',
    approach:
      'Developed and maintained e-commerce platforms with React, Next, and Material UI, backed by Node, Express, and PostgreSQL. Built a separate customer and plan management system with React, Next, and Bootstrap for efficient user and plan administration.',
    impact:
      'Improved the online purchase experience for internet and telephone services and streamlined customer listing and plan visualization for operations teams.',
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
