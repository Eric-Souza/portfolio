import type { Article } from './types';

// Newest first. Dates are kept for ordering only; the cards don't show them.
export const articles: Article[] = [
  {
    id: 'voice-receptionist',
    title: 'I built a voice receptionist you can interrupt, on a free stack',
    publication: 'Dev Genius',
    date: 'Oct 2026',
    url: 'https://blog.devgenius.io/i-built-a-voice-receptionist-you-can-interrupt-on-a-free-stack-4f48b16a13ab',
    teaser:
      'A dental clinic voice agent with barge-in: Silero VAD, Groq Whisper and gpt-oss, and Kokoro speech on the CPU.',
  },
  {
    id: 'exact-answer-retrieval',
    title: 'Close enough isn’t good enough: teaching an AI assistant to find the exact answer',
    publication: 'Dev Genius',
    date: 'Oct 2026',
    url: 'https://blog.devgenius.io/close-enough-isnt-good-enough-teaching-an-ai-assistant-to-find-the-exact-answer-1d127caad4b7',
    teaser:
      'Hybrid search and a reranker raised how often the right passage comes first from 73% to 91%.',
  },
  {
    id: 'resume-copilot',
    title: 'I built an AI that tailors my resume, then spent most of the time stopping it from making things up',
    publication: 'Dev Genius',
    date: 'Oct 2026',
    url: 'https://blog.devgenius.io/i-built-an-ai-that-tailors-my-resume-then-spent-most-of-the-time-stopping-it-from-making-things-up-fbbee576a9ad',
    teaser:
      'A LangGraph agent whose every bullet must cite the resume, checked in code and approved by a person.',
  },
  {
    id: 'rag-evals-ci',
    title: 'How do you know your AI assistant didn’t get worse? Grading every change automatically',
    publication: 'Stackademic',
    date: 'Oct 2026',
    url: 'https://blog.stackademic.com/how-do-you-know-your-ai-assistant-didnt-get-worse-grading-every-change-automatically-155bbbaa024d',
    teaser:
      'RAGAS grades as a CI quality gate, plus Langfuse tracing to see where every second goes.',
  },
  {
    id: 'cdb-daily-email',
    title: 'I built a daily email that finds the best Brazilian CDBs, and checks the AI before trusting it',
    publication: 'Dev Genius',
    date: 'Oct 2026',
    url: 'https://blog.devgenius.io/i-built-a-daily-email-that-finds-the-best-brazilian-cdbs-and-checks-the-ai-before-trusting-it-e74e4747d163',
    teaser:
      'An LLM with web search finds bank offers; code verifies each one and simulates taxes and the FGC.',
  },
  {
    id: 'boleto-vision-extraction',
    title: 'I built a vision AI that reads Brazilian boletos and invoices, and code that checks every digit it reads',
    publication: 'Dev Genius',
    date: 'Oct 2026',
    url: 'https://blog.devgenius.io/i-built-a-vision-ai-that-reads-brazilian-boletos-and-invoices-and-code-that-checks-every-digit-it-22b4b8ce2cc2',
    teaser:
      'Gemini reads documents into typed JSON; check digits and totals decide what a person reviews.',
  },
  {
    id: 'currency-chat',
    title: 'I built a currency chat where the answers are charts, not paragraphs',
    publication: 'Stackademic',
    date: 'Oct 2026',
    url: 'https://blog.stackademic.com/i-built-a-currency-chat-where-the-answers-are-charts-not-paragraphs-58e74327b22f',
    teaser:
      'Typed tool calls on the Vercel AI SDK render as React rate cards, charts and tables.',
  },
  {
    id: 'usd-brl-advisor',
    title: 'Building a daily USD/BRL exchange advisor on free infrastructure',
    publication: 'Stackademic',
    date: 'Oct 2026',
    url: 'https://blog.stackademic.com/building-a-daily-usd-brl-exchange-advisor-on-free-infrastructure-6f4753bae25c',
    teaser:
      'A Python bot on GitHub Actions and Gemini that says when to convert dollars into reais.',
  },
  {
    id: 'grounded-doc-qa',
    title: 'Building a Grounded Document Q&A App with Gemini, LangGraph, and Chroma',
    publication: 'Stackademic',
    date: 'Oct 2026',
    url: 'https://blog.stackademic.com/building-a-grounded-document-q-a-app-with-gemini-langgraph-and-chroma-07a1b230b9d5',
    teaser:
      'Document Q&A with citations you can check, from ingestion to a LangGraph agent.',
  },
  {
    id: 'clinical-review-console',
    title: 'Building a clinical session review console where the boring parts are the point',
    publication: 'Stackademic',
    date: 'Oct 2026',
    url: 'https://blog.stackademic.com/building-a-clinical-session-review-console-where-the-boring-parts-are-the-point-cd3df897e4ae',
    teaser:
      'Role-based access, append-only notes, signed webhooks, and optimistic locking in NestJS and React.',
  },
  {
    id: 'travel-planner-api',
    title: 'LLMs propose, Python enforces: building a local-first AI travel planner API',
    publication: 'Stackademic',
    date: 'Oct 2026',
    url: 'https://blog.stackademic.com/llms-propose-python-enforces-building-a-local-first-ai-travel-planner-api-4a1b31aa4b99',
    teaser:
      'Extraction with provenance, hybrid search, and versioned itineraries in FastAPI and Ollama, with no paid APIs.',
  },
  {
    id: 'production-doc-qa',
    title: 'Building a Production-Style Document Q&A System with Gemini, LangChain, and FastAPI',
    publication: 'Stackademic',
    date: 'Aug 2026',
    url: 'https://blog.stackademic.com/building-a-production-style-document-q-a-system-with-gemini-langchain-and-fastapi-97c73b47fd4b',
    teaser:
      'A full stack RAG and agent platform with streaming UX, observability hooks, and retrieval evals.',
  },
  {
    id: 'dispatchbot',
    title: 'DispatchBot: Keeping AI Conversations Honest with Server-Side Job Validation',
    publication: 'Stackademic',
    date: 'Jul 2026',
    url: 'https://blog.stackademic.com/dispatchbot-keeping-ai-conversations-honest-with-server-side-job-validation-70283668f24f',
    teaser:
      'An SMS booking agent that keeps dispatch decisions in deterministic Python, not the model.',
  },
  {
    id: 'express-sequelize',
    title: 'Building an Effective Node API Using Express and Sequelize',
    publication: 'Stackademic',
    date: 'Mar 2025',
    url: 'https://medium.com/stackademic/building-an-effective-node-api-using-express-and-sequelize-9b875b7d7795',
    teaser:
      'A clear and simple structure for Node APIs with Express and Sequelize.',
  },
  {
    id: 'aws-concepts',
    title: 'Understanding AWS: Essential Concepts for Software Engineers',
    publication: 'Remedy Product Studio',
    date: 'Jan 2025',
    url: 'https://medium.com/remedy-product-studio/understanding-aws-essential-concepts-for-software-engineers-07b114954bd2',
    teaser:
      'Core AWS concepts for software engineers who want to get more out of the cloud.',
  },
  {
    id: 'youtube-rnw',
    title: "Mimicking YouTube's UI with React Native Web: A Fully Responsive Video Browsing App",
    publication: 'Remedy Product Studio',
    date: 'Jan 2025',
    url: 'https://medium.com/remedy-product-studio/mimicking-youtubes-ui-with-react-native-web-a-fully-responsive-video-browsing-app-40a4f5f9244f',
    teaser:
      'Building a responsive video browsing experience with React Native Web.',
  },
  {
    id: 'python-web',
    title: 'Building Blocks of Python for Web Development',
    publication: 'Remedy Product Studio',
    date: 'Dec 2024',
    url: 'https://medium.com/remedy-product-studio/building-blocks-of-python-for-web-development-45c078c5f208',
    teaser:
      "Python's ecosystem and fundamentals for modern web development.",
  },
  {
    id: 'nestjs-typeorm',
    title: 'Building a Secure and Scalable Back End with NestJS/TypeScript and TypeORM',
    publication: 'Remedy Product Studio',
    date: 'Nov 2024',
    url: 'https://medium.com/remedy-product-studio/building-a-secure-and-scalable-back-end-with-nestjs-typescript-and-typeorm-ad8ae5c9c0c0',
    teaser:
      'Explores a backend app with NestJS, TypeScript, and TypeORM for secure, scalable systems.',
  },
  {
    id: 'github-finder-article',
    title: 'Building a Global GitHub Profile Search App with React, Tailwind CSS, Daisy UI and Axios',
    publication: 'Remedy Product Studio',
    date: 'Nov 2024',
    url: 'https://medium.com/remedy-product-studio/building-a-global-github-profile-search-app-with-react-tailwind-css-daisy-ui-and-axios-e854158bb7b2',
    teaser:
      'A responsive GitHub profile search tool powered by the GitHub API.',
  },
  {
    id: 'oop-js',
    title: 'Mastering Object-Oriented Programming in JavaScript ES2022: A Guide for Engineers',
    publication: 'Remedy Product Studio',
    date: 'Nov 2024',
    url: 'https://medium.com/remedy-product-studio/mastering-object-oriented-programming-in-javascript-es2022-a-guide-for-engineers-5a89ebc0996e',
    teaser:
      'A practical guide to OOP patterns in modern JavaScript.',
  },
];
