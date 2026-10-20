import type { CaseStudy } from '../types';

const repo = (name: string) => `https://github.com/Eric-Souza/${name}`;

export const batchA: CaseStudy[] = [
  {
    id: 'dollar-exchange-optimizer',
    kind: 'side-project',
    industry: 'fintech',
    tech: ['Python', 'AI'],
    year: 2026,
    title: 'USD/BRL Exchange Advisor',
    company: 'Personal project',
    tags: ['AI', 'Automation', 'Data'],
    headline:
      'Sends a daily email that says whether today is a good day to convert a US dollar salary into Brazilian reais, with an AI second opinion that keeps score of its own calls.',
    role: 'Solo build · data pipeline, analysis, AI integration, email, and scheduling',
    challenge:
      'Getting paid in US dollars while living in Brazil means picking a day to exchange each month. The goal was to replace guesswork with one clear daily recommendation based on official rates and the market news behind them.',
    outcomes: [
      "Checks the Brazilian Central Bank's official dollar rate every weekday morning, using the latest intraday bulletin or a live market quote before the first one.",
      'Gives a clear verdict (exchange today, good day, neutral, wait, or no quote on holidays) from how today compares with the last 30 days, the month and the last 90 days.',
      'Adds market context: interest rates, the latest central bank decision, economist forecasts, peer currencies and the last two days of headlines.',
      'Asks Google Gemini for a second opinion and a five-day outlook, and shows how often its past outlooks were right.',
      'Shows the salary in reais today versus the best and average rates of the month, with a 30-day chart.',
      'Leans toward exchanging early in the month, when the salary usually arrives.',
    ],
    technical: {
      architecture:
        "A scheduled GitHub Actions job runs a Python pipeline that fetches official rates and market context, scores them, asks Gemini for an opinion and emails the result. A JSON log committed back to the repo tracks the AI's past calls.",
      howItWasBuilt: [
        'Pulled official PTAX rates from the Central Bank, falling back to a live quote before the first daily bulletin.',
        'Scored the rate with percentile ranks over 30 days, the month and 90 days, plus trend and volatility.',
        'Called Gemini with Google Search grounding and JSON output, trying the best model the free-tier key allows.',
        'Logged each AI outlook and scored past five-day outlooks against real closing rates.',
        'Made every step after the rate fetch fail soft, and covered the pipeline with 51 pytest tests.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['Scheduled job', 'Batch pipeline', 'Fail-soft optional steps', 'Git-backed state'],
        },
        { layer: 'Backend', items: ['Python', 'requests', 'smtplib', 'ElementTree (RSS)'] },
        { layer: 'AI', items: ['Google Gemini', 'Tool calling', 'Google Search grounding', 'URL context', 'Structured JSON output'] },
        { layer: 'Data', items: ['BACEN PTAX API', 'BACEN Focus and SGS', 'AwesomeAPI', 'Google News RSS', 'JSON forecast log'] },
        {
          layer: 'Infrastructure',
          items: ['GitHub Actions (cron)', 'Repository secrets', 'Gmail SMTP'],
        },
        { layer: 'Testing', items: ['pytest'] },
      ],
    },
    links: [{ label: 'GitHub', url: repo('dollar-exchange-optimizer') }],
  },
  {
    id: 'gemini-rag-doc-processing',
    kind: 'side-project',
    industry: 'productivity',
    tech: ['Python', 'TypeScript', 'AI'],
    year: 2026,
    title: 'Doc Processing AI, Chat With Your Documents',
    company: 'Personal project',
    tags: ['RAG', 'AI Agents', 'Full Stack'],
    headline:
      'Lets people upload documents and ask questions about them, with answers that cite the passages they came from.',
    role: 'Solo build · API, RAG pipeline, agent, evals, and web UI',
    challenge:
      'Answers from an AI model are only useful on company documents if they are grounded in those documents and you can check them. The goal was an end-to-end RAG app with citations and a way to measure answer quality.',
    outcomes: [
      'Upload PDF or text files and see when each one is ready to query.',
      'Ask questions in a chat and get answers streamed word by word, with citations to the source passages.',
      'Choose between a direct question-and-answer mode and an agent mode that decides when to search the documents.',
      'Run a quality check against a set of known questions to see whether retrieval and answers hold up.',
    ],
    technical: {
      architecture:
        'A React client and a FastAPI backend that run locally. Uploads are chunked, embedded with Gemini and stored in Chroma, and chat answers are built from the closest chunks and streamed back with citations.',
      howItWasBuilt: [
        'Built ingestion with PDF text extraction, overlapping chunks, Gemini embeddings and safe re-ingestion.',
        'Wrote two answer paths, a grounded RAG chain and a LangGraph agent, both returning citations.',
        'Streamed tokens and citations to the browser over server-sent events.',
        'Added a golden-set eval that scores retrieval and faithfulness with an LLM judge, logged to LangSmith.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['RAG pipeline', 'Tool-calling agent', 'REST API + SSE streaming', 'Background ingestion'],
        },
        { layer: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'MUI', 'Framer Motion'] },
        { layer: 'Backend', items: ['Python', 'FastAPI', 'SQLAlchemy (async)', 'SQLite'] },
        { layer: 'AI', items: ['Google Gemini', 'LangChain', 'LangGraph', 'Chroma', 'LangSmith'] },
      ],
    },
    links: [{ label: 'GitHub', url: repo('gemini-rag-doc-processing') }],
  },
  {
    id: 'therapy-session-review',
    kind: 'challenge',
    industry: 'health-tech',
    tech: ['TypeScript'],
    year: 2026,
    title: 'Clinical Session Review Console',
    company: 'Hiring challenge',
    tags: ['Full Stack', 'Auth', 'Webhooks'],
    headline:
      'A console where clinicians finalize therapy session notes and supervisors oversee the practice, with patient privacy built into every access rule.',
    role: 'Take-home challenge · API, UI, access control, and tests',
    challenge:
      'A behavioral health practice (from the challenge brief) needed clinicians to review and finalize session notes, supervisors and admins to oversee the work, and appointment updates from a scheduling vendor to land safely, all without exposing patient records to the wrong people.',
    outcomes: [
      'Clinicians see only their own sessions. Supervisors can send notes back with a reason and co-sign. Admins handle operations but cannot read note text.',
      'Notes move from draft to ready to finalized. Finalized notes never change; corrections are added as addenda.',
      'If two people edit the same note, the app shows both versions and lets the user choose.',
      'Appointment updates from the scheduling vendor are suggested as matches but never linked automatically; conflicts wait for a person.',
      'Every allowed or denied access is recorded in an audit log, without storing the note itself.',
    ],
    technical: {
      architecture:
        'A monorepo with a modular NestJS REST API and a React console. Every request passes auth, role and CSRF guards and an access policy before reaching Postgres, and the scheduling vendor sends signed webhooks. It runs locally on PGlite with one command.',
      howItWasBuilt: [
        "Built cookie-based JWT auth with role guards and an access policy; other clinicians' sessions return 404.",
        'Modeled notes as a versioned state machine; concurrent edits return 409 with the server copy.',
        'Verified vendor webhooks with HMAC, deduplicated them by event id, then reconciled appointments to sessions.',
        'Redacted note content and other PHI from logs, and tagged every response with a request id.',
        'Tested access, note transitions and webhooks with Jest, and the console with Vitest and MSW.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['Monorepo (npm workspaces)', 'Modular REST API', 'Role-based access control', 'Signed webhooks (HMAC)'],
        },
        { layer: 'Frontend', items: ['React', 'Vite', 'MUI', 'Redux Toolkit', 'RTK Query'] },
        { layer: 'Backend', items: ['NestJS', 'TypeORM', 'Passport JWT', 'Helmet', 'Pino'] },
        { layer: 'Data', items: ['PGlite (Postgres)'] },
        { layer: 'Testing', items: ['Jest', 'Vitest', 'Testing Library', 'MSW'] },
      ],
    },
    links: [{ label: 'GitHub', url: repo('therapy-session-review-test') }],
  },
  {
    id: 'job-dispatch-bot',
    kind: 'side-project',
    industry: 'home-services',
    tech: ['Python', 'TypeScript', 'AI'],
    year: 2026,
    title: 'DispatchBot, SMS Booking Agent',
    company: 'Personal project',
    tags: ['AI Agents', 'Backend'],
    headline:
      "An AI texting agent that books home-service visits, but can't book a job the business can't actually do.",
    role: 'Solo build · backend, agent design, and demo UI',
    challenge:
      'Home-services businesses lose money and trust when an AI promises a visit it cannot keep or books a job with missing details. The goal was a booking agent where the AI handles the conversation but only validated jobs get created.',
    outcomes: [
      'Customers text in and the agent asks for what dispatch needs: service, address, phone, preferred time, and the problem.',
      'Jobs are only created when every detail is present, the address is in the service area, and the time slot is one the business offers.',
      'Out-of-area requests are politely refused, with no job created.',
      'A dispatch board shows booked jobs, which staff can edit, reorder, or remove.',
    ],
    technical: {
      architecture:
        'A FastAPI backend sends each customer text to the OpenAI Responses API with one create_job tool. A Python validator checks every tool call before a job is stored, and a Next.js demo UI shows the chat and dispatch board.',
      howItWasBuilt: [
        'Kept the boundary explicit: the model owns the dialogue, Python decides whether a job exists.',
        'Validated required fields, service type, ZIP against the service area, phone and allowed time slots.',
        'Drove tenant rules from one config shared by the system prompt and the validator.',
        'Tested validation and job endpoints with pytest, and the chat UI with Playwright.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['Tool-calling agent', 'REST API', 'Server-side validation guardrail'],
        },
        { layer: 'Backend', items: ['Python', 'FastAPI', 'pydantic-settings', 'structlog'] },
        { layer: 'AI', items: ['OpenAI Responses API', 'Tool calling'] },
        { layer: 'Frontend', items: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'] },
        { layer: 'Testing', items: ['pytest', 'Playwright'] },
        { layer: 'Tooling', items: ['uv', 'Ruff', 'mypy'] },
      ],
    },
    links: [{ label: 'GitHub', url: repo('job-dispatch-bot') }],
  },
  {
    id: 'travel-planner',
    kind: 'side-project',
    industry: 'travel',
    tech: ['Python', 'TypeScript', 'AI', 'Docker'],
    year: 2026,
    title: 'AI Travel Planner, API and Mobile App',
    company: 'Personal project',
    tags: ['AI', 'Mobile', 'Backend'],
    headline:
      'A mobile travel planner that reads your booking confirmations, answers questions about your trip, and drafts an itinerary you approve.',
    role: 'Solo build · FastAPI backend, AI layer, and Expo mobile app',
    challenge:
      'Trip details end up scattered across PDFs and confirmation emails. The goal was a planner that pulls those details into one place, answers questions about them, and suggests a plan without ever changing anything the traveler has not confirmed. It runs locally with no paid AI services.',
    outcomes: [
      'Upload booking PDFs, emails, or text files and get extracted bookings to review and confirm.',
      'Ask questions in a chat, such as what is booked on a date or what a cancellation policy says, with answers that link back to the source document.',
      'Get live weather, exchange rates, place search, and routes inside the chat.',
      'Generate an itinerary proposal from confirmed bookings, with overlap warnings, and apply it only when you choose to.',
      'Browse trips, timeline, places, and documents on the phone, with a demo mode and an offline read cache.',
    ],
    technical: {
      architecture:
        'An Expo mobile app talks to a layered FastAPI backend over REST and SSE, using types generated from the OpenAPI spec. The backend calls a local Ollama model and public APIs, and stores data in SQLite or PostgreSQL with pgvector.',
      howItWasBuilt: [
        'Followed one rule: the LLM proposes, Python validates and the user confirms; nothing auto-applies.',
        'Parsed booking PDFs and emails, embedded the chunks and answered document questions with citations.',
        'Wrapped Ollama behind a provider interface, with a mock provider so the app runs without a model.',
        'Streamed chat over SSE, routing questions to bookings, document search or live weather, rates and routes.',
        'Built the app with Expo Router, TanStack Query and Zustand, plus an offline read cache; tested with pytest and Jest.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['Layered REST API', 'OpenAPI contract', 'SSE streaming', 'LLM provider abstraction'],
        },
        { layer: 'Backend', items: ['Python', 'FastAPI', 'Pydantic', 'SQLAlchemy (async)', 'Alembic'] },
        { layer: 'AI', items: ['Ollama', 'LangChain', 'Embeddings'] },
        { layer: 'Data', items: ['SQLite', 'PostgreSQL', 'pgvector', 'PyMuPDF'] },
        {
          layer: 'Mobile',
          items: ['Expo', 'React Native', 'TypeScript', 'Expo Router', 'TanStack Query'],
        },
        { layer: 'Infrastructure', items: ['Docker Compose (Postgres)'] },
        { layer: 'Testing', items: ['pytest', 'Jest'] },
        { layer: 'Tooling', items: ['openapi-typescript', 'Ruff'] },
      ],
    },
    links: [
      { label: 'API', url: repo('travel-planner-api') },
      { label: 'Mobile', url: repo('travel-planner-mobile') },
    ],
  },
  {
    id: 'portfolio-site',
    kind: 'side-project',
    industry: 'marketing',
    tech: ['TypeScript', 'CI/CD', 'Vercel'],
    year: 2026,
    title: 'This Portfolio Site',
    company: 'Personal project',
    tags: ['Frontend', 'Testing', 'CI/CD'],
    headline:
      'A fast, single-page portfolio that search engines and link previews can read in full, with tests and CI guarding every change.',
    role: 'Solo build · design, frontend, content model, and CI',
    challenge:
      'A portfolio has to load fast, show up correctly when shared, and stay easy to update. Plain client-side React sends crawlers an empty page, so the goal was a static site with real HTML and content kept in typed data files.',
    outcomes: [
      'Loads as fully rendered HTML, so search engines and social previews see the real content.',
      'Shows each project in two views: a business overview for recruiters and a technical breakdown for engineers.',
      'Keeps all content (experience, projects, skills, articles) in typed data files, so updates do not touch layout code.',
    ],
    technical: {
      architecture:
        'Typed TypeScript data files feed React and MUI components. At build time a Vite SSR pass prerenders the page to static HTML, which Vercel serves and the browser hydrates.',
      howItWasBuilt: [
        'Prerendered the page at build time with a shared Emotion cache, so the client hydrates the same markup.',
        'Modeled content as typed data, so the compiler catches missing fields.',
        'Wrote Vitest checks on the data and rendering, plus Playwright smoke tests for hydration, SEO tags and navigation.',
        'GitHub Actions runs lint, typecheck, tests, build and e2e on every push and pull request.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['Prerendered SPA', 'Data-driven content', 'Static hosting'],
        },
        { layer: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'MUI', 'Emotion'] },
        { layer: 'Build', items: ['Vite SSR', 'Node prerender script'] },
        { layer: 'Infrastructure', items: ['Vercel'] },
        { layer: 'CI/CD', items: ['GitHub Actions (lint, test, build, e2e)'] },
        { layer: 'Testing', items: ['Vitest', 'Testing Library', 'Playwright'] },
      ],
    },
    links: [
      { label: 'GitHub', url: repo('portfolio') },
      { label: 'Live site', url: 'https://portfolio-mu-blond-54.vercel.app' },
    ],
  },
];
