import type { Project } from './types';

const repo = (name: string) => `https://github.com/Eric-Souza/${name}`;

export const projects: Project[] = [
  {
    id: 'dispatch-bot',
    name: 'DispatchBot',
    description:
      "SMS booking agent for home-services businesses. The LLM runs the conversation, but only code creates jobs: service area, required fields, and appointment windows are validated server-side, so the AI can't book a visit the business can't keep.",
    links: [{ label: 'GitHub', url: repo('job-dispatch-bot') }],
    stack: ['Python', 'FastAPI', 'OpenAI Responses API', 'Tool Calling', 'Next.js', 'Tailwind'],
  },
  {
    id: 'rag-doc-processing',
    name: 'Doc Processing AI',
    description:
      'Upload documents and chat with them. Gemini embeddings and Chroma retrieval, orchestrated with LangChain and LangGraph behind a FastAPI service, with LangSmith tracing and a retrieval and answer eval suite.',
    links: [{ label: 'GitHub', url: repo('gemini-rag-doc-processing') }],
    stack: ['Python', 'FastAPI', 'LangGraph', 'Gemini', 'Chroma', 'React', 'TypeScript'],
  },
  {
    id: 'travel-planner',
    name: 'AI Travel Planner',
    description:
      'Local-first AI travel planner. A FastAPI backend owns AI orchestration, document parsing, and streamed (SSE) answers; an Expo/React Native app consumes it through types generated from the OpenAPI spec.',
    links: [
      { label: 'API', url: repo('travel-planner-api') },
      { label: 'Mobile', url: repo('travel-planner-mobile') },
    ],
    stack: ['Python', 'FastAPI', 'LangChain', 'Ollama', 'pgvector', 'Expo', 'React Native'],
  },
  {
    id: 'session-review-console',
    name: 'Clinical Session Review Console',
    description:
      'Healthcare console where clinicians finalize session notes and supervisors oversee the practice, with role-based access and a signed scheduling webhook. NestJS API and React UI in an npm workspaces monorepo, tested with Jest and Vitest.',
    links: [{ label: 'GitHub', url: repo('therapy-session-review-test') }],
    stack: ['NestJS', 'TypeORM', 'React', 'Redux Toolkit', 'MUI', 'PGlite'],
  },
  {
    id: 'kafka-microservices',
    name: 'Kafka Node Microservices',
    description:
      'Express REST API that talks to a separate microservice through Apache Kafka, containerized with Docker Compose.',
    links: [{ label: 'GitHub', url: repo('kafka-node-microservices') }],
    stack: ['Node.js', 'Express', 'Apache Kafka', 'Docker'],
  },
];
