import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Material UI',
      'Bootstrap',
      'Redux',
      'Framer Motion',
      'HTML/CSS',
      'Styled Components',
      'Tailwind CSS',
      'TanStack Query',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'NestJS',
      'Express',
      'Python',
      'FastAPI',
      'Flask',
      'RESTful APIs',
      'WebSockets',
    ],
  },
  {
    category: 'Data',
    skills: [
      'PostgreSQL',
      'DynamoDB',
      'MongoDB',
      'SQLite',
      'Redis',
      'TypeORM',
      'Sequelize',
      'Mongoose',
      'Prisma',
      'dbt',
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS (S3, EC2, RDS, Lambda, CloudFront, ACM, Bedrock)',
      'GCP (Cloud Run, Cloud SQL, Pub/Sub, API Gateway)',
      'Azure',
      'Terraform',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'CI/CD',
      'Datadog',
    ],
  },
  {
    category: 'Architecture',
    skills: [
      'Microservices',
      'Service-Oriented Architecture',
      'Apache Kafka',
      'Event-Driven Systems',
      'System Design',
    ],
  },
  {
    category: 'Testing & Quality',
    skills: ['Jest', 'Vitest', 'Code Review', 'E2E Testing'],
  },
  {
    category: 'AI Workflow Tools',
    description:
      'Using AI to enhance day-to-day engineering workflows, from coding and review to planning and delivery.',
    skills: [
      'Cursor',
      'Claude',
      'Claude Code',
      'ChatGPT',
      'Cursor Bugbot',
      'AI-Assisted Development',
    ],
  },
  {
    category: 'AI Engineering',
    description:
      'Building AI integrations with LLMs (OpenAI, Anthropic, Gemini, Amazon Bedrock), RAG, image generation, and related tooling. Document processing is one example, but there is plenty more you can do with AI in a product.',
    skills: [
      'AI Integrations',
      'LLMs',
      'OpenAI',
      'Amazon Bedrock',
      'LiteLLM',
      'RAG',
      'LangChain',
      'FastAPI',
      'Document Processing',
      'fal.ai',
      'nano-banana (image generation)',
    ],
  },
  {
    category: 'Tools & Practices',
    skills: [
      'Git',
      'GitHub',
      'Jira',
      'Google Analytics 4',
      'Agile',
      'Technical Documentation',
    ],
  },
];
