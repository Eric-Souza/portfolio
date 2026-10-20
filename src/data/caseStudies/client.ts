import type { CaseStudy } from '../types';

export const clientCaseStudies: CaseStudy[] = [
  {
    id: 'listing-audit',
    kind: 'client',
    industry: 'marketing',
    tech: ['TypeScript', 'AI', 'AWS', 'Docker', 'Vercel', 'CI/CD'],
    year: 2026,
    ongoing: true,
    title: 'Amazon Listing Audit & AI Copy Platform',
    company: 'Agency client',
    tags: ['AI', 'Architecture', 'Data'],
    headline:
      'Gave a marketing agency a tool that audits whole Amazon catalogs and drafts better, evidence-backed listing copy for each marketplace and language.',
    role: 'Full Stack & AI Engineer · designed and built the application',
    challenge:
      "The agency's teams reviewed Amazon product pages one at a time, by hand, across Amazon marketplaces. They needed a fast way to see which pages underperform across a whole catalog, why, and what better copy would look like, with evidence they could defend to brands.",
    outcomes: [
      'Audits catalogs of up to 100 products against 34 checks, from Amazon basics (lengths, counts, images, ratings) to effectiveness (keywords, claims, benefits, buyer language).',
      'Pulls recurring strengths, concerns and buyer language out of customer reviews.',
      'Drafts a new title, bullets, Item Highlights and description for each product, with the reason for each change and the evidence behind it.',
      'Adds a page blueprint and a hero image prompt to brief the creative team.',
      'Operators can change the marketplace, the marketplace locale and the app language, and the checks and generated copy follow.',
      'Shows portfolio health across every client, and exports recommendations to CSV and Excel.',
    ],
    technical: {
      architecture:
        'A Next.js app on Vercel with a typed tRPC API over PostgreSQL. Scraping and analysis run as small staged background jobs from a Postgres-backed queue, so each fits serverless time limits; staging reaches Aurora PostgreSQL privately over AWS PrivateLink.',
      howItWasBuilt: [
        'Built the job queue on Postgres with leases, heartbeats and a reaper, so crashed runs are picked up again.',
        'Wrote the 34 checks as a TypeScript rule engine with per-marketplace thresholds, and an LLM judging the semantic ones. Operators can change the marketplace, marketplace locale and app language.',
        'Put the AI behind a Vercel AI SDK adapter that switches between OpenAI, Anthropic, Bedrock, Google and Azure.',
        'Made text handling locale-aware, such as Japanese sentence splitting and phrase matching without spaces between words.',
        'Tested with Vitest, Postgres integration and Playwright end-to-end tests on a mock LLM, run in GitHub Actions.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: [
            'Postgres-backed job queue',
            'Staged job fan-out',
            'Serverless functions',
            'Provider-agnostic LLM adapter',
            'Rule engine',
          ],
        },
        { layer: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'MUI', 'next-intl'] },
        { layer: 'Backend', items: ['tRPC', 'Drizzle ORM', 'PostgreSQL', 'Zod', 'Pino'] },
        { layer: 'AI', items: ['Vercel AI SDK', 'Amazon Bedrock', 'OpenAI', 'Anthropic', 'Google Gemini'] },
        { layer: 'Data', items: ['Apify (Amazon scraping)', 'CSV and Excel exports'] },
        {
          layer: 'Infrastructure',
          items: [
            'Vercel (functions, Cron)',
            'AWS Aurora PostgreSQL',
            'AWS PrivateLink',
            'Vercel OIDC to AWS IAM',
            'Docker (PostgreSQL)',
          ],
        },
        { layer: 'CI/CD', items: ['GitHub Actions', 'Post-deploy smoke tests'] },
        { layer: 'Testing', items: ['Vitest', 'React Testing Library', 'Playwright'] },
      ],
    },
  },
  {
    id: 'legal-tech',
    kind: 'client',
    industry: 'legal-tech',
    tech: ['TypeScript', 'Python', 'AI', 'AWS', 'Docker', 'CI/CD'],
    year: 2025,
    ongoing: true,
    title: 'Essential Estates, 0 to Production',
    company: 'Summerall Law',
    companyUrl: 'https://www.summeralllaw.com',
    companyLinkedIn: 'https://www.linkedin.com/company/summerall-law',
    productName: 'Essential Estates',
    productUrl: 'https://www.essentialestates.com',
    tags: ['Leadership', 'Architecture', 'AI'],
    headline:
      "Turned a law firm's manual estate planning service into a production software platform, as its first engineer.",
    role: 'Founding Full Stack & AI Engineer · owned product, engineering, hiring, and infrastructure',
    challenge:
      'Summerall Law, a Silicon Valley law firm, ran estate planning workflows by hand. There was no product, no engineering team, and no infrastructure, and they needed a platform clients could rely on in production.',
    outcomes: [
      'Launched Essential Estates to production, built from zero.',
      'Brought AI document processing into the client workflow, replacing manual handling of legal documents.',
      'Hired, onboarded, and led the engineering team, with coding standards, code review, and a clear delivery process.',
      'Releases ship through automated CI/CD instead of manual deploys.',
      'Gave the firm product analytics (funnels and usage metrics) to guide product and marketing decisions.',
    ],
    technical: {
      architecture:
        'A React/TypeScript web app talks to a NestJS REST API on PostgreSQL, with separate Python services running the AI features. It all runs on AWS and ships through GitHub Actions pipelines.',
      howItWasBuilt: [
        'Led the architecture and designed the API and data model in NestJS and TypeORM on PostgreSQL.',
        'Built Python AI services that use LLMs with RAG to process and automate legal documents.',
        'Set up the AWS infrastructure: EC2, RDS, S3, and CloudFront with ACM for CDN and TLS.',
        'Automated deployments with GitHub Actions CI/CD, replacing manual releases.',
        'Set coding standards and code review as the team grew, and tracked funnels in Google Analytics 4.',
      ],
      stack: [
        { layer: 'Architecture', items: ['Service-oriented', 'REST API', 'RAG pipeline', 'CDN-fronted SPA'] },
        { layer: 'Frontend', items: ['React', 'TypeScript'] },
        { layer: 'Backend', items: ['NestJS', 'TypeORM', 'PostgreSQL', 'Redis'] },
        { layer: 'AI', items: ['Python', 'FastAPI', 'Flask', 'LLMs', 'RAG'] },
        { layer: 'Infrastructure', items: ['AWS EC2', 'AWS RDS', 'AWS S3', 'CloudFront + ACM', 'Docker'] },
        { layer: 'CI/CD', items: ['GitHub Actions'] },
        { layer: 'Analytics', items: ['Google Analytics 4'] },
      ],
    },
  },
  {
    id: 'healthcare',
    kind: 'client',
    industry: 'health-tech',
    tech: ['TypeScript', 'AWS', 'Docker'],
    year: 2022,
    updated: '2025-02-28',
    title: 'Remedy Product, Healthcare Data Platform',
    company: 'EXIT83',
    companyUrl: 'https://exit83.com/',
    companyLinkedIn: 'https://www.linkedin.com/company/exit83-consulting',
    productName: 'Remedy Product',
    productUrl: 'https://www.remedyproduct.com',
    relatedLinks: [
      { name: 'MeRT', url: 'https://mert.wavesynchrony.com/en/' },
      { name: 'Wave Neuroscience', url: 'https://www.waveneuro.com/' },
    ],
    tags: ['Leadership', 'Architecture', 'Performance'],
    headline:
      'Gave healthcare partners reliable patient and EEG tracking, with less admin work and faster reports.',
    role: 'Sr. Full Stack Engineer at EXIT83 · Remedy Product client engagement',
    challenge:
      'Remedy Product, an EXIT83 healthcare client, needed reliable patient and EEG data tracking, integrations with medical systems, and less admin overhead in its treatment workflows.',
    outcomes: [
      'Cut admin overhead in EEG and treatment workflows.',
      'Improved data accuracy by automating TMS session validation and EEG data handling.',
      'Made reports faster through query tuning and caching.',
      'Gave clinical staff a better way to manage patients.',
    ],
    technical: {
      architecture:
        'React/Next.js clinical interfaces on top of NestJS/Node services deployed on AWS, with PostgreSQL and DynamoDB for storage and Redis caching expensive report queries.',
      howItWasBuilt: [
        'Built patient and EEG tracking interfaces in React, Next.js, and MUI.',
        'Developed NestJS/Node backends on AWS with PostgreSQL and DynamoDB.',
        'Integrated medical APIs to validate TMS sessions and automate EEG data processing.',
        'Optimized slow report queries and added Redis caching on top.',
      ],
      stack: [
        { layer: 'Architecture', items: ['REST API', 'Caching layer', 'Third-party API integration'] },
        { layer: 'Frontend', items: ['React', 'Next.js', 'MUI'] },
        { layer: 'Backend', items: ['NestJS', 'Node.js'] },
        { layer: 'Data', items: ['PostgreSQL', 'DynamoDB', 'Redis'] },
        { layer: 'Infrastructure', items: ['AWS', 'Docker (PostgreSQL, Redis)'] },
        { layer: 'Integrations', items: ['Medical APIs (TMS, EEG)'] },
      ],
    },
  },
  {
    id: 'fintech',
    kind: 'client',
    industry: 'fintech',
    tech: ['TypeScript', 'JavaScript'],
    year: 2020,
    updated: '2022-06-30',
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
    headline:
      "Scaled a multi-currency banking app's backend to handle more transactions with lower latency.",
    role: 'Full Stack Engineer · backend of the main financial app',
    challenge:
      "Zro Bank's multi-currency banking app needed to process high transaction volume with low latency and reliable remittance flows, while ops spent time building reports by hand.",
    outcomes: [
      'Handled more transaction volume with less latency on the core financial app.',
      'Shipped a remittance and client management system.',
      'Faster API responses from simpler, cleaner database access.',
      'Automated Jira reporting into Google Sheets, so ops stopped building reports by hand.',
    ],
    technical: {
      architecture:
        'Event-driven NestJS microservices communicating through Apache Kafka, backed by PostgreSQL, with React/Next.js front ends for remittance and client management.',
      howItWasBuilt: [
        'Split the backend into NestJS microservices talking over Kafka events, raising throughput for high transaction volume.',
        'Replaced awkward queries with Sequelize on PostgreSQL to speed up API responses.',
        'Built remittance and client management interfaces with React, Next.js, and MUI.',
        'Wrote a Node/Express integration that generates Jira-based reports in Google Sheets.',
      ],
      stack: [
        { layer: 'Architecture', items: ['Microservices', 'Event-driven (Kafka)', 'REST API'] },
        { layer: 'Frontend', items: ['React', 'Next.js', 'MUI'] },
        { layer: 'Backend', items: ['Node.js', 'NestJS', 'Express'] },
        { layer: 'Messaging', items: ['Apache Kafka'] },
        { layer: 'Data', items: ['PostgreSQL', 'Sequelize'] },
        { layer: 'Integrations', items: ['Jira API', 'Google Sheets API'] },
      ],
    },
  },
  {
    id: 'geospatial',
    kind: 'client',
    industry: 'geospatial',
    tech: ['TypeScript', 'AI', 'AWS', 'Azure'],
    year: 2018,
    updated: '2020-07-31',
    title: 'Kognita, GeoEdge Geospatial Intelligence',
    company: 'Kognita',
    companyUrl: 'https://kognita.com.br',
    companyLinkedIn: 'https://www.linkedin.com/company/kognita-lab',
    productName: 'GeoEdge',
    productUrl: 'https://app.geoedge.com.br/',
    tags: ['AI', 'Architecture'],
    headline:
      "Turned an AI team's location models into GeoEdge, a product clients use to decide where to open a business.",
    role: 'Full Stack Engineer · web platform and AI team integration',
    challenge:
      "Kognita needed to turn its AI team's heatmaps and location data into a product clients could use to compare sites and choose where to open a business.",
    outcomes: [
      'Delivered GeoEdge, giving clients a clear UI for location decisions.',
      'Got geospatial insights working at scale on real-time data.',
      'Sped up the handoff of AI research output into the product.',
    ],
    technical: {
      architecture:
        "React/Next.js frontend rendering AI heatmaps, a NestJS API on PostgreSQL, and AWS S3 for the large geospatial files coming from the AI team's workflows, with DevOps work on Azure.",
      howItWasBuilt: [
        'Built the full stack: React, Next.js, and MUI in front, Node and NestJS on PostgreSQL behind.',
        "Connected the AI R&D team's workflows so their output flowed into the product.",
        'Rendered AI heatmaps so clients could compare locations using real-time data.',
        'Stored and served large geospatial files from AWS S3, and handled DevOps on Azure.',
      ],
      stack: [
        { layer: 'Architecture', items: ['REST API', 'Object storage for large files', 'AI pipeline integration'] },
        { layer: 'Frontend', items: ['React', 'Next.js', 'MUI'] },
        { layer: 'Backend', items: ['Node.js', 'NestJS', 'PostgreSQL'] },
        { layer: 'Data & AI', items: ['Geospatial AI', 'Heatmaps'] },
        { layer: 'Infrastructure', items: ['AWS S3', 'Azure (DevOps)'] },
      ],
    },
  },
  {
    id: 'ecommerce',
    kind: 'client',
    industry: 'e-commerce',
    tech: ['JavaScript'],
    year: 2018,
    updated: '2018-12-31',
    title: 'Mundiale, Telecom E-commerce Platforms',
    company: 'Mundiale',
    companyUrl: 'https://www.mundiale.ai',
    companyLinkedIn: 'https://www.linkedin.com/company/mundiale',
    relatedLinks: [
      { name: 'Americanet', url: 'https://americanet.com.br/' },
      { name: 'Claro', url: 'https://www.claro.com.br/' },
    ],
    tags: ['Performance', 'Architecture'],
    headline:
      'Modernized online plan sales and customer management for major South American telecom providers.',
    role: 'Full Stack Engineer',
    challenge:
      'Major telecom providers in South America needed a better way to sell internet and phone plans online, and a simpler tool for ops teams to manage customers and plans.',
    outcomes: [
      'Smoother online purchase flow for internet and phone plans.',
      'Gave ops teams one place to browse customers and plan details.',
    ],
    technical: {
      architecture:
        'Two React/Next.js apps backed by Node/Express APIs on PostgreSQL: a customer-facing store and an internal customer and plan management tool.',
      howItWasBuilt: [
        'Developed and maintained the e-commerce platform with React, Next.js, and MUI.',
        'Built the customer and plan management system with React, Next.js, and Bootstrap.',
        'Built the Node/Express APIs on PostgreSQL behind both apps.',
      ],
      stack: [
        { layer: 'Architecture', items: ['Two apps, shared REST APIs', 'Storefront + back office'] },
        { layer: 'Frontend', items: ['React', 'Next.js', 'MUI', 'Bootstrap'] },
        { layer: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL'] },
      ],
    },
  },
  {
    id: 'college-internal',
    kind: 'client',
    industry: 'internal-tools',
    tech: ['JavaScript'],
    title: 'Post-Grad Course Enrollment',
    company: 'College (internal project)',
    tags: ['Internal', 'Full Stack'],
    headline: 'Replaced paperwork and email chains with one enrollment app for post-grad courses.',
    role: 'Full Stack Developer · college internal project',
    challenge:
      'Students and teachers needed a simpler way to sign up for post-graduate courses, instead of manual paperwork and back-and-forth emails.',
    outcomes: [
      'Reduced admin work for staff.',
      'Made enrollment clearer for students.',
    ],
    technical: {
      architecture: 'Client-server: a React single-page app calling a Node.js REST API on PostgreSQL, with separate student and teacher views.',
      howItWasBuilt: [
        'Built the student flow to enroll in courses.',
        'Built a teacher view to manage signups in one place.',
      ],
      stack: [
        { layer: 'Architecture', items: ['SPA', 'REST API', 'Role-based views'] },
        { layer: 'Frontend', items: ['React'] },
        { layer: 'Backend', items: ['Node.js', 'PostgreSQL'] },
      ],
    },
  },
  {
    id: 'workplace-internal',
    kind: 'client',
    industry: 'internal-tools',
    tech: ['TypeScript'],
    title: 'Internal Tools Across Roles',
    company: 'Various employers',
    tags: ['Internal', 'Team Enablement'],
    headline: 'Built internal tools that save teammates time on recurring operational work.',
    role: 'Full Stack Engineer · across roles',
    challenge:
      'Teams often need internal apps, dashboards, or automations that do not get the same attention as customer-facing products.',
    outcomes: [
      'Saved teammates time on recurring tasks.',
      'Improved how teams handle day-to-day operational work.',
    ],
    technical: {
      architecture:
        'Small, focused apps and automations built on the same stack as the products: React/TypeScript front ends, Node.js services, and PostgreSQL.',
      howItWasBuilt: [
        'Reporting helpers, such as the Jira-to-Google Sheets reports at Zro Bank.',
        'Dashboards and workflow automations for recurring operational tasks.',
      ],
      stack: [
        { layer: 'Architecture', items: ['Small single-purpose apps', 'Third-party API integration'] },
        { layer: 'Frontend', items: ['React', 'TypeScript'] },
        { layer: 'Backend', items: ['Node.js', 'PostgreSQL', 'Automation'] },
      ],
    },
  },
];
