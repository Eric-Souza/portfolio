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
    companyUrl: 'https://www.zrobank.com.br',
    companyLinkedIn: 'https://www.linkedin.com/company/zroglobal',
    productName: 'Z.ro financial app',
    tags: ['Architecture', 'Performance'],
    problem:
      'Zro Bank required a backend capable of handling high-volume financial transactions with low latency and reliable remittance workflows.',
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
];
