import type { CaseStudy } from '../types';

const repo = (name: string) => `https://github.com/Eric-Souza/${name}`;

export const batchA: CaseStudy[] = [
  {
    id: 'currency-copilot',
    kind: 'side-project',
    industry: 'fintech',
    tech: ['TypeScript', 'AI', 'CI/CD'],
    year: 2026,
    title: 'Currency Copilot',
    company: 'Personal project',
    tags: ['Generative UI', 'AI Agents', 'Full Stack'],
    headline:
      'A chat for currency questions that answers with rate cards, charts, and tables built from live central bank rates, never with numbers the model remembers.',
    role: 'Solo build · chat UI, tools, persistence, and tests',
    challenge:
      'A chat model asked for an exchange rate answers from its training data, which is months old, and five rates inside a paragraph are hard to compare. The goal was a chat where every number comes from a tool call and shows up as UI, and where the "should I exchange today?" verdict is computed in code instead of made up.',
    outcomes: [
      'Ask for a rate and get a rate card with its inverse and the date the European Central Bank published it.',
      'Ask how a pair moved and get a line chart with a hover tooltip and a table view for screen readers.',
      'Convert an amount into up to ten currencies in one table, with the ones the source does not cover listed instead of dropped.',
      'Ask whether today is a good day to exchange and get a verdict from 90 days of history, explained in a short summary.',
      'Come back to any chat at its own URL, with recent chats listed and private to the browser that started them.',
    ],
    technical: {
      architecture:
        'A Next.js App Router app on the Vercel AI SDK. The chat route streams Gemini responses with four typed tools that call the Frankfurter API on the server, and the client renders each tool result as its own React component. Chats are saved to Neon Postgres with Drizzle when an answer finishes.',
      howItWasBuilt: [
        'Defined each tool with a Zod schema, and rendered every tool state (loading, result, error) as a component typed by the tool\'s return value.',
        'Computed the exchange verdict in TypeScript from percentiles and trends, and had the model only write the summary, as validated structured output with a 10-second fallback.',
        'Turned stream timeouts and free-tier quota errors into messages that say what to do, instead of an empty reply.',
        'Saved chats on finish even if the tab closes, validated client messages against the tool schemas, and scoped each chat to an anonymous httpOnly cookie.',
        'Covered tools, the chat route, and the store with Vitest against a scripted model and PGlite, and the production build with Playwright end-to-end tests, all run by GitHub Actions on every push.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['Generative UI', 'Tool calling', 'Streaming chat', 'Server-side persistence'],
        },
        { layer: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts'] },
        { layer: 'Backend', items: ['Next.js route handlers', 'Zod', 'Frankfurter API'] },
        { layer: 'AI', items: ['Vercel AI SDK', 'Google Gemini', 'Structured output'] },
        { layer: 'Data', items: ['Neon Postgres', 'Drizzle ORM'] },
        { layer: 'CI/CD', items: ['GitHub Actions'] },
        { layer: 'Testing', items: ['Vitest', 'Playwright', 'PGlite', 'AI SDK mock model'] },
      ],
    },
    links: [{ label: 'GitHub', url: repo('currency-copilot') }],
  },
  {
    id: 'job-application-copilot',
    kind: 'side-project',
    industry: 'productivity',
    tech: ['Python', 'TypeScript', 'AI', 'Docker'],
    year: 2026,
    title: 'Job Application Copilot',
    company: 'Personal project',
    tags: ['AI Agents', 'RAG', 'Full Stack'],
    headline:
      'Tailors a resume to a job posting with bullets that cite the experience behind them, and a person approves every draft before it is final.',
    role: 'Solo build · agent, RAG pipeline, API, web UI, and tests',
    challenge:
      'Tailoring a resume to each posting takes time, and asking an AI model to do it tends to produce claims the candidate never made. The goal was an agent that only writes what the resume can back up, shows where each bullet came from, and leaves the final call to the candidate.',
    outcomes: [
      'Paste a posting and get its must-have and nice-to-have requirements, each marked as strongly covered, partly covered, or missing from the resume.',
      'Get tailored resume bullets and a summary, each bullet citing the resume lines it was written from.',
      'Bullets with invented numbers, mixed roles, or tools that role never used are flagged before review.',
      'Approve the draft, ask for changes in plain words, or edit it yourself. Edits get the same checks.',
      'Watch each step finish and the draft appear as it is written, then close the tab and pick the run up later.',
      'Optionally read the resume from a profile MCP server that combines a structured experience file with live GitHub and Medium data.',
    ],
    technical: {
      architecture:
        'A LangGraph agent behind a FastAPI API, with a React client. Resume bullets are embedded with Gemini and stored in Postgres with pgvector. The graph parses the posting, retrieves evidence per requirement, judges coverage, searches again with tool calls for weak spots, drafts, and pauses for review. A Postgres checkpointer saves every step, and progress streams to the browser over server-sent events.',
      howItWasBuilt: [
        'Chunked the resume one bullet per chunk with its role heading attached, and searched it with hybrid retrieval (vector plus Postgres full-text, merged with Reciprocal Rank Fusion).',
        'Used Pydantic structured output for every model step, and checked each drafted bullet in code against the evidence it cites.',
        'Gave the model a search tool in a bounded loop to find evidence the first search missed, then judged coverage again with the new hits.',
        'Paused the graph with LangGraph interrupts for review, and streamed the partial draft to the UI as the model wrote it.',
        'Wrote an MCP client that can read the resume from my profile MCP server, over stdio or Streamable HTTP, and index it in place of local files.',
        'Fell back to a lighter Gemini model when the free tier is busy, and tracked calls, tokens, and time per run with optional Langfuse tracing.',
        'Covered the agent, API, and ingestion with pytest against a real Postgres test database, and the UI with Vitest.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['LangGraph state machine', 'Human-in-the-loop review', 'Tool-calling loop', 'REST API + SSE streaming'],
        },
        { layer: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'MUI'] },
        { layer: 'Backend', items: ['Python', 'FastAPI', 'SQLAlchemy (async)', 'MCP client'] },
        { layer: 'AI', items: ['Google Gemini', 'LangGraph', 'LangChain', 'Structured output', 'Hybrid RAG', 'Langfuse'] },
        { layer: 'Data', items: ['Postgres', 'pgvector', 'LangGraph Postgres checkpointer'] },
        { layer: 'Infrastructure', items: ['Docker Compose'] },
        { layer: 'Testing', items: ['pytest', 'Vitest', 'React Testing Library'] },
      ],
    },
    links: [
      { label: 'GitHub', url: repo('job-application-copilot') },
      { label: 'Profile MCP server', url: repo('profile-mcp-server') },
    ],
  },
  {
    id: 'profile-mcp-server',
    kind: 'side-project',
    industry: 'developer-platform',
    tech: ['TypeScript', 'AI'],
    year: 2026,
    title: 'Profile MCP Server',
    company: 'Personal project',
    tags: ['MCP', 'AI Agents', 'Backend'],
    headline:
      'Gives AI assistants like Claude live, structured access to my GitHub projects, Medium articles, and work experience, so they look things up instead of guessing.',
    role: 'Solo build · MCP server, data sources, transports, and tests',
    challenge:
      'An AI assistant asked about my work only knows what is pasted into the chat, and that goes stale. The goal was one source of truth about my profile that any MCP client can query, and that my Job Application Copilot can index as its resume.',
    outcomes: [
      'Connect it to Claude Desktop or Claude Code and ask things like "Which of my projects use LangGraph?" or "Summarize my legal-tech experience".',
      'Five tools list and read projects, list articles, filter experience by skill or industry, and search across all of it.',
      'Serves the full resume as Markdown in the format the Job Application Copilot indexes, so the copilot can draw on it directly.',
      'Includes a prompt that matches a job posting against the profile without inventing experience.',
      'Keeps answering when one source fails: search skips it and reports the error.',
    ],
    technical: {
      architecture:
        'A TypeScript MCP server built on the official SDK. Tools, a profile://resume resource, and a tailor_for_job prompt sit on top of three sources: the GitHub REST API, the Medium RSS feed, and a local experience file. It runs over stdio for desktop clients or stateless Streamable HTTP for remote ones, and caches GitHub and Medium responses in memory.',
      howItWasBuilt: [
        'Defined every tool with Zod input and output schemas, returning structured content plus JSON text for older clients.',
        'Turned source failures, like the GitHub rate limit, into tool errors that say what to do next.',
        'Rendered the resume resource with one heading per role and one bullet per accomplishment, so each bullet becomes a piece of evidence in the copilot.',
        'Added a TTL cache for GitHub and Medium that never caches failed requests.',
        'Covered the tools with Vitest against faked sources, plus a smoke test that drives the built server with a real MCP client.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['Model Context Protocol', 'Tools, resources, and prompts', 'stdio + Streamable HTTP', 'TTL cache'],
        },
        { layer: 'Backend', items: ['TypeScript', 'Node.js', 'MCP TypeScript SDK', 'Zod'] },
        { layer: 'Data', items: ['GitHub REST API', 'Medium RSS', 'JSON experience file'] },
        { layer: 'AI', items: ['Claude Desktop', 'Claude Code', 'MCP Inspector'] },
        { layer: 'Testing', items: ['Vitest', 'MCP client smoke test'] },
      ],
    },
    links: [{ label: 'GitHub', url: repo('profile-mcp-server') }],
  },
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
    tech: ['Python', 'TypeScript', 'AI', 'Docker', 'CI/CD'],
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
      'Run a quality check against a set of known questions to see whether retrieval and answers hold up, and block a change that makes them worse.',
      'Trace each answer step by step, from the search stages to the model call, to see where time and tokens go.',
    ],
    technical: {
      architecture:
        'A React client and a FastAPI backend that run locally. Uploads are chunked, embedded with Gemini and stored in Postgres with pgvector. Questions are answered from hybrid search (vector plus full-text, merged with Reciprocal Rank Fusion) and a cross-encoder reranker, and streamed back with citations.',
      howItWasBuilt: [
        'Built ingestion with PDF text extraction, overlapping chunks, Gemini embeddings and safe re-ingestion.',
        'Wrote two answer paths, a grounded RAG chain and a LangGraph agent, both returning citations.',
        'Streamed tokens and citations to the browser over server-sent events.',
        'Moved from Chroma to pgvector, and measured vector, hybrid, and hybrid plus rerank retrieval on a golden set before picking the default.',
        'Scored answers with RAGAS and made the scores a GitHub Actions quality gate on every retrieval mode.',
        'Traced every retrieval stage and model call with Langfuse, keeping LangSmith as an option.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['RAG pipeline', 'Tool-calling agent', 'REST API + SSE streaming', 'Background ingestion'],
        },
        { layer: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'MUI', 'Framer Motion'] },
        { layer: 'Backend', items: ['Python', 'FastAPI', 'SQLAlchemy (async)', 'asyncpg'] },
        { layer: 'AI', items: ['Google Gemini', 'LangChain', 'LangGraph', 'Cross-encoder reranker', 'RAGAS', 'Langfuse'] },
        { layer: 'Data', items: ['Postgres', 'pgvector', 'Postgres full-text search'] },
        { layer: 'Infrastructure', items: ['Docker'] },
        { layer: 'CI/CD', items: ['GitHub Actions quality gate'] },
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
