import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Material UI', 'Redux'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express', 'Python', 'FastAPI'],
  },
  {
    category: 'Data',
    skills: ['PostgreSQL', 'DynamoDB', 'Redis', 'TypeORM', 'Sequelize', 'MongoDB'],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS (S3, EC2, RDS, Lambda, CloudFront)',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'Azure',
    ],
  },
  {
    category: 'Architecture',
    skills: ['Microservices', 'Apache Kafka', 'REST', 'WebSockets', 'SSR', 'CSR'],
  },
  {
    category: 'AI',
    skills: ['LLMs', 'RAG', 'Cursor', 'Claude', 'Document Processing'],
  },
  {
    category: 'Soft Skills',
    skills: [
      'Technical Leadership',
      'Cross-functional Collaboration',
      'US-hours Flexibility',
      'Problem Solving',
    ],
  },
];
