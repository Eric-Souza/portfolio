import type { CaseStudy } from '../types';

const repo = (name: string) => `https://github.com/Eric-Souza/${name}`;

export const batchA: CaseStudy[] = [
  {
    id: 'dollar-exchange-optimizer',
    kind: 'side-project',
    industry: 'fintech',
    tech: ['Python'],
    year: 2026,
    title: 'USD/BRL Exchange Advisor',
    company: 'Personal project',
    tags: ['Automation', 'Data'],
    headline:
      'Sends a daily email that says whether today is a good day to convert a US dollar salary into Brazilian reais.',
    role: 'Solo build · data fetching, analysis, email, and scheduling',
    challenge:
      'Getting paid in US dollars while living in Brazil means picking a day to exchange each month. The goal was to replace guesswork with a simple daily recommendation based on official rates.',
    outcomes: [
      "Checks the Brazilian Central Bank's official dollar rate every weekday morning.",
      'Compares today against the last 30 days and the current month, then gives a clear verdict: exchange today, good day, neutral, or wait.',
      'Leans toward exchanging early in the month, when the salary usually arrives.',
    ],
    technical: {
      architecture:
        'A serverless scheduled batch job with no server to run. On a GitHub Actions cron, a Python script fetches PTAX rates from the BACEN Olinda API, scores them in a pure analysis module, and sends an HTML and plain-text report through Gmail SMTP. Each module (rate client, analysis, email) does one step of that fetch, score, and send flow.',
      howItWasBuilt: [
        'Wrote a PTAX client with requests that keeps only the closing bulletin, one rate per business day.',
        'Scored the rate with percentile ranks over a rolling 30-day window and the current month, mapped to verdict tiers with a configurable early-month threshold.',
        'Runs on a GitHub Actions workflow scheduled for weekdays at 13:23 UTC (10:23 BRT, just after BACEN publishes its first bulletin), plus manual dispatch. It sets up Python 3.12, installs requirements, and runs the script, with Gmail credentials and the threshold read from repository secrets.',
        'Covered the parsing and verdict logic with pytest.',
      ],
      stack: [
        { layer: 'Architecture', items: ['Scheduled job', 'Batch pipeline (fetch, score, send)'] },
        { layer: 'Backend', items: ['Python', 'requests', 'smtplib'] },
        { layer: 'Data', items: ['BACEN PTAX API'] },
        { layer: 'Infrastructure', items: ['GitHub Actions (scheduled cron job)', 'Repository secrets', 'Gmail SMTP'] },
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
        'A two-app monorepo with a RAG pipeline behind a REST API. The React client uploads files to FastAPI, which ingests them in background tasks: extract text, chunk, embed with Gemini, store vectors in Chroma and metadata in SQLite. Chat requests retrieve the closest chunks and stream the grounded answer and citations back over server-sent events. Everything runs locally, with Chroma and SQLite on disk.',
      howItWasBuilt: [
        'Built the ingestion pipeline: pypdf text extraction, recursive chunking with overlap, Gemini embeddings, and safe re-ingestion that clears old vectors first.',
        'Wrote two answer paths: a grounded RAG chain and a LangGraph tool-calling agent that uses the same retriever as a tool, both returning citations.',
        'Streamed tokens and citation events to the browser over SSE.',
        'Added a golden-set eval script that scores hit@k, expected answer content, and faithfulness (using an LLM as judge), and logs results to LangSmith.',
        'Built the UI with React, Vite, MUI, and React Router: an upload dropzone, document table, and chat page.',
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
        'An npm workspaces monorepo with a modular NestJS REST API and a React single-page console. The browser logs in for an httpOnly cookie, then every request passes guards (auth, role, CSRF) and an access policy before reaching feature modules (sessions, notes, appointments, audit) that use TypeORM on Postgres. The scheduling vendor posts signed webhooks that are acknowledged, then reconciled. It runs locally on PGlite (Postgres compiled to WebAssembly), so one command installs, seeds, and starts everything without Docker. The notes include a written AWS plan (S3 and CloudFront, EC2, RDS) that is not deployed.',
      howItWasBuilt: [
        "Implemented cookie-based JWT auth with bcrypt, plus role guards, a CSRF guard, and an access policy service. Requests for another clinician's session return 404, not 403, so the API does not confirm the record exists.",
        'Modeled notes as a state machine with versioned saves; concurrent edits return 409 with the server copy.',
        'Verified the vendor webhook with an HMAC over the raw body, deduplicated by event id, acknowledged with 202, then reconciled appointments to sessions.',
        'Redacted cookies, auth headers, note content, and other PHI from Pino logs, and tagged every response with a request id.',
        'Tested the risky rules (access, note transitions, webhook signature, matching) with Jest, and the console (failed saves, version conflicts, admin limits) with Vitest, Testing Library, and MSW.',
        'Wrote up the trade-offs, known gaps, and an AWS production plan with HIPAA considerations.',
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
        'A tool-calling agent behind a REST API. Each customer message hits POST /sms on FastAPI, which sends it to the OpenAI Responses API with a single create_job tool. Tool calls go through a Python validator, and only valid jobs reach the in-memory job store. A Next.js demo UI shows the customer phone and reads the dispatch board from GET /jobs. Both apps run locally, started together by a shell script.',
      howItWasBuilt: [
        'Kept the boundary explicit: the model owns the dialogue, Python owns whether a job exists. Validation checks required fields, service type, 5-digit ZIP against tenant prefixes, phone, and allowed appointment windows.',
        'Drove tenant rules (services, service area, hours) from one config used by both the system prompt and the validator.',
        'Exposed REST endpoints for messages, jobs, edits, reordering, and tenant config, with structured logging via structlog.',
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
        'A client-server system in two repos, built local-first. The Expo app goes screen, hook, API module, typed client, then a versioned REST and SSE API on FastAPI. The API is layered: thin routes, services for business logic and AI, repositories over SQLAlchemy. It calls Ollama through a provider interface and public APIs for live data, and stores data in SQLite by default or in PostgreSQL with pgvector. Docker Compose provides that Postgres database. The mobile app uses TypeScript types generated from the OpenAPI spec and never talks to the model or database directly.',
      howItWasBuilt: [
        'Followed one rule throughout: the LLM proposes, Python validates, and the user confirms. Extracted bookings stay "extracted" until confirmed, and itinerary proposals never auto-apply.',
        'Parsed PDFs with PyMuPDF and emails with the standard library, chunked by page and section, embedded chunks, and answered document questions with citations.',
        'Wrapped Ollama behind an LLMProvider interface using LangChain, with a mock provider so the app runs without a local model.',
        'Streamed chat over SSE with status and tool-result events, routing questions to SQL (bookings), document retrieval, or live-data adapters (Open-Meteo, exchange rates, Nominatim, OSRM).',
        'Ran locally by default on SQLite with the mock LLM, so setup scripts are all you need. docker compose up starts a pgvector/pgvector:pg16 container with a health check and a persistent volume, and Alembic covers the Postgres migrations.',
        'Built the mobile app with Expo Router, TanStack Query, Zustand, React Hook Form with Zod, and React Native Paper, plus an AsyncStorage cache and offline detection.',
        'Tested the API with pytest (bookings, chat, parser, planner, integration) and the app with Jest (API client, mappers, dates, SSE).',
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
          items: ['Expo', 'React Native', 'TypeScript', 'Expo Router', 'TanStack Query', 'Zustand'],
        },
        { layer: 'Infrastructure', items: ['Docker Compose (Postgres + pgvector)'] },
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
      'Shows each case study in two views: a business overview for recruiters and a technical breakdown for engineers.',
      'Keeps all content (experience, case studies, projects, skills, articles) in typed data files, so updates do not touch layout code.',
    ],
    technical: {
      architecture:
        'A prerendered single-page app with a data-driven content layer. Typed TypeScript data files feed React and MUI components. At build time, Vite builds the client, then a Vite SSR build of a server entry renders the app to a string, and a Node script injects that markup and the critical Emotion styles into index.html. Vercel serves the static dist/ folder, with every path rewritten to index.html, and the browser hydrates the same markup.',
      howItWasBuilt: [
        'Prerendered the page at build time with renderToString and @emotion/server, using a shared Emotion cache so the client hydrates the same markup.',
        'Modeled content as typed TypeScript data (case studies with kind, industry, and tech tags), so the compiler catches missing fields.',
        'Wrote Vitest checks on the data (unique ids, https links, required assets, both case study views present) and on rendering, with Testing Library.',
        'Added Playwright smoke tests for hydration without console errors, SEO and social meta tags, and navigation, on desktop and mobile.',
        'GitHub Actions runs lint, typecheck, Vitest, the production build (with prerender), and Playwright e2e on Chromium on every push to main and every pull request, and uploads the Playwright report when a run fails. Vercel deploys from vercel.json (npm run build, serve dist/).',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['Prerendered SPA', 'Data-driven content', 'Static hosting'],
        },
        { layer: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'MUI', 'Emotion', 'Framer Motion'] },
        { layer: 'Build', items: ['Vite SSR', 'Node prerender script'] },
        { layer: 'Infrastructure', items: ['Vercel (static hosting)'] },
        { layer: 'CI/CD', items: ['GitHub Actions (lint, typecheck, test, build, e2e)'] },
        { layer: 'Testing', items: ['Vitest', 'Testing Library', 'Playwright'] },
      ],
    },
    links: [
      { label: 'GitHub', url: repo('portfolio') },
      { label: 'Live site', url: 'https://portfolio-mu-blond-54.vercel.app' },
    ],
  },
];
