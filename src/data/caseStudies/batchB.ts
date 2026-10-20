import type { CaseStudy } from '../types';

export const batchB: CaseStudy[] = [
  {
    id: 'kafka-node-microservices',
    kind: 'learning',
    industry: 'developer-platform',
    tech: ['JavaScript', 'Docker'],
    year: 2021,
    title: 'Kafka Certificate Microservice',
    company: 'Personal project',
    tags: ['Backend', 'Microservices', 'Messaging'],
    headline:
      'Two Node.js services that talk through Apache Kafka, showing how an API can hand work to a separate service and get a reply back.',
    role: 'Learning project · event-driven microservices',
    challenge:
      'Learn how services pass work to each other through a message broker instead of direct HTTP calls, using a course certificate request as the example.',
    outcomes: [
      'An API endpoint accepts a certificate request and hands it off to a separate certification service.',
      'The certification service processes each request and sends a confirmation message back to the API.',
      'The whole broker setup starts locally with one command.',
    ],
    technical: {
      architecture:
        'An Express API sends certificate requests to a Kafka topic. A separate certification service consumes them and replies on a response topic that the API reads. Kafka and ZooKeeper run in Docker Compose.',
      howItWasBuilt: [
        'Used KafkaJS producers and consumers, with a separate consumer group for each service.',
        'Shared one connected producer with all Express routes through a small middleware.',
        'Sent messages with GZIP compression and client retries with backoff.',
        'Ran ZooKeeper and Kafka with Docker Compose, creating both topics on startup.',
      ],
      stack: [
        { layer: 'Architecture', items: ['Microservices', 'Event-driven (Kafka topics)', 'Async request/reply', 'REST API'] },
        { layer: 'Backend', items: ['Node.js', 'Express', 'Sucrase'] },
        { layer: 'Messaging', items: ['Apache Kafka', 'KafkaJS', 'ZooKeeper'] },
        { layer: 'Infrastructure', items: ['Docker Compose'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/kafka-node-microservices' }],
  },
  {
    id: 'car-sales-api',
    kind: 'learning',
    industry: 'automotive',
    tech: ['TypeScript', 'Heroku'],
    year: 2021,
    title: 'Used Car Price Estimator API',
    company: 'Personal project',
    tags: ['Backend', 'Auth', 'Databases'],
    headline:
      'A used car pricing API where users submit real sale reports, an admin approves them, and anyone can get a price estimate from similar approved sales.',
    role: 'Solo build · API design, auth and testing',
    challenge:
      'Estimate what a used car is worth from sales reported by other users, while keeping bad data out by letting only an admin approve reports.',
    outcomes: [
      'Users sign up, sign in and sign out, with sessions kept in a secure cookie.',
      'Signed-in users submit sale reports with make, model, year, mileage, location and price.',
      'Only admins can approve or reject reports, so estimates rely on vetted data.',
      'Price estimates average approved sales of the same make and model, from nearby locations and similar years, closest in mileage.',
    ],
    technical: {
      architecture:
        'A NestJS REST API with Users and Reports modules, each split into controller, service and TypeORM repository. Requests pass session middleware, guards and validation. SQLite runs in development and PostgreSQL on Heroku in production.',
      howItWasBuilt: [
        'Hashed passwords with Node crypto scrypt and a random salt per user.',
        'Built cookie-session auth with a @CurrentUser decorator and AuthGuard and AdminGuard route guards.',
        'Used a @Serialize interceptor with DTOs so responses never leak fields like passwords.',
        'Computed estimates with a TypeORM query: average price of the 3 matching sales closest in mileage.',
        'Covered signup and session flows with Jest and Supertest e2e tests on a separate SQLite database.',
      ],
      stack: [
        { layer: 'Architecture', items: ['REST API', 'Layered modules', 'Role-based guards', 'ORM migrations'] },
        { layer: 'Backend', items: ['NestJS', 'TypeScript', 'cookie-session', 'class-validator', 'class-transformer'] },
        { layer: 'Data', items: ['TypeORM', 'PostgreSQL', 'SQLite'] },
        { layer: 'Testing', items: ['Jest', 'Supertest'] },
        { layer: 'Infrastructure', items: ['Heroku', 'PostgreSQL via DATABASE_URL'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/car-sales-api' }],
  },
  {
    id: 'support-tickets-mern-app',
    kind: 'learning',
    industry: 'internal-tools',
    tech: ['JavaScript', 'Heroku'],
    year: 2022,
    title: 'Tech Support Help Desk',
    company: 'Personal project',
    tags: ['Full Stack', 'Auth'],
    headline:
      'A full stack help desk where customers open tickets about product issues, add notes, and track each ticket until it is closed.',
    role: 'Solo build · full stack MERN app',
    challenge:
      'Build a complete support desk, from account creation to ticket tracking, as one deployable app with a React front end and a Node API.',
    outcomes: [
      'Customers register and log in to a private area.',
      'They open tickets for a product (iPhone, MacBook Pro, iMac or iPad) and describe the issue.',
      'Each ticket shows its status (new, open or closed) and a thread of notes.',
      'Customers can add notes and close a ticket when the issue is solved.',
    ],
    technical: {
      architecture:
        'A MERN app. A React and Redux single page app calls an Express REST API with a JWT, and the API stores users, tickets and notes in MongoDB. One Node process on Heroku serves both.',
      howItWasBuilt: [
        'Hashed passwords with bcryptjs and protected ticket and note routes with JWT middleware.',
        'Checked ticket ownership on the server so users only see and change their own tickets.',
        'Nested note routes under tickets with Express router merging.',
        'Managed auth, ticket and note state with Redux Toolkit slices and async thunks.',
        'Deployed to Heroku as one app, with Express serving the built React front end in production.',
      ],
      stack: [
        { layer: 'Architecture', items: ['SPA + REST API', 'MVC', 'JWT auth middleware', 'Nested resources'] },
        { layer: 'Frontend', items: ['React', 'Redux Toolkit', 'React Router', 'Axios', 'React Toastify'] },
        { layer: 'Backend', items: ['Node.js', 'Express', 'JSON Web Token', 'bcryptjs'] },
        { layer: 'Data', items: ['MongoDB', 'Mongoose'] },
        { layer: 'Infrastructure', items: ['Heroku'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/support-tickets-mern-app' }],
  },
  {
    id: 'jira-rest-api',
    kind: 'side-project',
    industry: 'productivity',
    tech: ['JavaScript'],
    year: 2022,
    title: 'Jira to Google Sheets Reporting',
    company: 'Personal project',
    tags: ['Backend', 'Integrations', 'Automation'],
    headline:
      'Turns a Jira board into a Google Sheets report with one request, including a readiness score for every issue.',
    role: 'Solo build · API integrations and reporting',
    challenge:
      'Teams tracking work in Jira needed board data in a spreadsheet for reporting, without copying it by hand, plus a quick view of how ready each issue was for development.',
    outcomes: [
      'One call pulls every issue from a chosen Jira board and writes it to a Google Sheet.',
      'Creates a sheet named after the board the first time, then refreshes it on later runs.',
      'Each row lists type, status, sprints, assignees, dates, priority and story points.',
      'Scores each issue against a refinement checklist (business and technical description, acceptance criteria, test scenarios, code review, QA) based on its workflow status, as a readiness percentage.',
    ],
    technical: {
      architecture:
        'An Express service that pulls a board and its issues from the Jira REST API, flattens each issue into a row, and writes the rows to a Google Sheet through a service account.',
      howItWasBuilt: [
        'Wrapped the Jira and Google Sheets clients in small modules configured by environment variables.',
        'Mapped Jira fields, including custom fields for sprints and QA assignee, into flat sheet rows.',
        'Derived checklist columns from where the issue status sits in the workflow, then a ready percentage.',
        'Rewrote the header row on each refresh so the sheet matches the current board.',
      ],
      stack: [
        { layer: 'Architecture', items: ['REST API', 'Third-party API integration', 'ETL to Sheets'] },
        { layer: 'Backend', items: ['Node.js', 'Express', 'Sucrase', 'date-fns'] },
        { layer: 'Integrations', items: ['Jira REST API', 'Google Sheets API'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/jira-rest-api' }],
  },
  {
    id: 'express-pg-api',
    kind: 'learning',
    industry: 'developer-platform',
    tech: ['JavaScript'],
    year: 2021,
    title: 'Relational API with Sequelize',
    company: 'Personal project',
    tags: ['Backend', 'Databases'],
    headline:
      'A Node.js API on PostgreSQL that models users, addresses and skills, built to practice migrations, SQL relations and complex queries.',
    role: 'Learning project · relational data modeling',
    challenge:
      'Get comfortable with an ORM on a real SQL database: migrations, one-to-many and many-to-many relations, and filtered queries across tables.',
    outcomes: [
      'Create users and attach addresses and technologies to each one.',
      'Add or remove a technology from a user, reusing existing technologies instead of duplicating them.',
      'A report endpoint filters users by email and joins their addresses and technologies.',
    ],
    technical: {
      architecture:
        'An Express REST API where controllers use Sequelize models to query PostgreSQL. Users have many addresses and a many-to-many link to technologies through a join table.',
      howItWasBuilt: [
        'Created the schema, including the join table, with sequelize-cli migrations.',
        'Defined hasMany and belongsToMany associations and used generated helpers like addTech.',
        'Wrote a report query with case-insensitive filters and joined includes.',
      ],
      stack: [
        { layer: 'Architecture', items: ['REST API', 'MVC', 'ORM migrations', 'Relational model (1:N, N:M)'] },
        { layer: 'Backend', items: ['Node.js', 'Express'] },
        { layer: 'Data', items: ['PostgreSQL', 'Sequelize', 'sequelize-cli'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/express-pg-api' }],
  },
  {
    id: 'vanilla-node-api',
    kind: 'learning',
    industry: 'developer-platform',
    tech: ['JavaScript'],
    year: 2021,
    title: 'Products API in Plain Node.js',
    company: 'Personal project',
    tags: ['Backend', 'Node.js'],
    headline:
      'A products REST API written with only the Node.js http module, to show how routing and request handling work without a framework.',
    role: 'Learning project · Node.js internals',
    challenge:
      'Understand what frameworks like Express do under the hood by building a full CRUD API on the raw Node.js http server.',
    outcomes: [
      'List, view, create, update and delete products.',
      'Changes are saved to a JSON file, so data survives restarts.',
      'Unknown routes return a clear 404 message.',
    ],
    technical: {
      architecture:
        'A REST API on the raw Node http module. One request handler routes by URL and method to controllers, and a model keeps products in memory and saves them to a JSON file.',
      howItWasBuilt: [
        'Matched routes with regular expressions on the URL and pulled the id from the path.',
        'Read request bodies by collecting data chunks from the request stream.',
        'Kept uuid as the only dependency, for product ids.',
      ],
      stack: [
        { layer: 'Architecture', items: ['REST API', 'MVC', 'Manual routing'] },
        { layer: 'Backend', items: ['Node.js (http, fs)', 'uuid'] },
        { layer: 'Data', items: ['JSON file storage'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/vanilla-node-api' }],
  },
  {
    id: 'node-streams-tutorial',
    kind: 'learning',
    industry: 'developer-platform',
    tech: ['JavaScript'],
    year: 2021,
    title: 'Node.js Streams Examples',
    company: 'Tutorial',
    tags: ['Backend', 'Node.js'],
    headline:
      'Examples that show how Node.js streams handle large data in small chunks, ending in a pipeline that writes 100,000 records to a CSV file.',
    role: 'Learning project · Node.js streams',
    challenge:
      'Learn why streaming beats loading whole files into memory, and how to chain readable, transform and writable streams.',
    outcomes: [
      'Serves a large file over HTTP in chunks instead of reading it all into memory.',
      'Generates 100,000 records and converts them into a CSV file with a header row.',
    ],
    technical: {
      architecture:
        'Two standalone Node scripts built on streams. One serves a large file over HTTP in chunks. The other generates records, transforms them and writes a CSV file through a stream pipeline.',
      howItWasBuilt: [
        'Created custom Readable, Writable and Transform streams.',
        'Chained streams with stream.pipeline so errors and completion are handled in one place.',
        'Used a stateful Transform to add the CSV header only to the first chunk.',
      ],
      stack: [
        { layer: 'Architecture', items: ['Streams/pipelines', 'Chunked processing'] },
        { layer: 'Backend', items: ['Node.js (stream, fs, http, net)'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/node-streams-tutorial' }],
  },
  {
    id: 'jwt-express-auth',
    kind: 'learning',
    industry: 'developer-platform',
    tech: ['TypeScript'],
    year: 2021,
    title: 'JWT Login API',
    company: 'Personal project',
    tags: ['Backend', 'Auth'],
    headline:
      'A TypeScript login API that registers users, checks passwords and issues JSON Web Tokens to protect private routes.',
    role: 'Learning project · token-based auth',
    challenge:
      'Learn how token-based login works end to end: storing passwords safely, issuing a token at sign-in and checking it on protected routes.',
    outcomes: [
      'Users register with an email and password.',
      'Signing in returns a token that is valid for one day.',
      'Private routes reject requests without a valid token.',
    ],
    technical: {
      architecture:
        'An Express REST API in TypeScript. The auth controller checks the password against PostgreSQL through TypeORM and returns a signed JWT, which middleware checks on protected routes.',
      howItWasBuilt: [
        'Hashed passwords with bcryptjs in TypeORM entity hooks before insert and update.',
        'Signed tokens with jsonwebtoken and read them from the Bearer header in middleware.',
        'Created the users table with a TypeORM migration.',
      ],
      stack: [
        { layer: 'Architecture', items: ['REST API', 'JWT auth middleware', 'ORM entities', 'ORM migrations'] },
        { layer: 'Backend', items: ['Node.js', 'Express', 'TypeScript', 'jsonwebtoken', 'bcryptjs'] },
        { layer: 'Data', items: ['PostgreSQL', 'TypeORM'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/jwt-express-auth' }],
  },
  {
    id: 'nestjs-postgres',
    kind: 'learning',
    industry: 'developer-platform',
    tech: ['TypeScript'],
    year: 2021,
    title: 'Companies CRUD API on PostgreSQL',
    company: 'Personal project',
    tags: ['Backend', 'Databases'],
    headline:
      'A NestJS API that manages company records in PostgreSQL, with full create, read, update and delete endpoints generated from one model.',
    role: 'Learning project · NestJS with TypeORM',
    challenge:
      'Learn how to connect NestJS to a relational database and expose a complete REST API with as little boilerplate as possible.',
    outcomes: [
      'Create, list, view, update and delete companies (name, domain and description).',
      'Records are stored in PostgreSQL with created and updated timestamps.',
    ],
    technical: {
      architecture:
        'A NestJS REST API whose controller and service extend @nestjsx/crud base classes, generating /companies endpoints over a TypeORM repository on PostgreSQL.',
      howItWasBuilt: [
        'Generated standard CRUD routes from the entity with the @Crud decorator and TypeOrmCrudService.',
        'Shared id and timestamp columns through a base entity class.',
        'Let TypeORM synchronize the database schema from the entities.',
      ],
      stack: [
        { layer: 'Architecture', items: ['REST API', 'Layered modules', 'Generated CRUD endpoints'] },
        { layer: 'Backend', items: ['NestJS', 'TypeScript', '@nestjsx/crud'] },
        { layer: 'Data', items: ['PostgreSQL', 'TypeORM'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/nestJS-postgres' }],
  },
  {
    id: 'nestjs-crud',
    kind: 'learning',
    industry: 'developer-platform',
    tech: ['TypeScript'],
    year: 2021,
    title: 'NestJS Products API',
    company: 'Personal project',
    tags: ['Backend'],
    headline:
      'A first NestJS API for managing products, built to learn the framework structure of modules, controllers and services.',
    role: 'Learning project · NestJS fundamentals',
    challenge:
      'Learn the core building blocks of NestJS by building a simple products API with data kept in memory.',
    outcomes: [
      'Add, list, view, update and delete products with a title, description and price.',
      'Requests for a product that does not exist get a clear not found error.',
    ],
    technical: {
      architecture:
        'A NestJS REST API where a /products controller delegates to an injectable service that keeps products in memory. There is no database.',
      howItWasBuilt: [
        'Read route params and body fields with @Param and @Body decorators.',
        'Injected the service into the controller through NestJS dependency injection.',
        'Threw NotFoundException for missing products and returned copies of stored data to avoid outside mutation.',
      ],
      stack: [
        { layer: 'Architecture', items: ['REST API', 'Layered modules', 'Dependency injection'] },
        { layer: 'Backend', items: ['NestJS', 'TypeScript'] },
        { layer: 'Data', items: ['In-memory store'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/nestJS-crud' }],
  },
  {
    id: 'meteor-password-auth',
    kind: 'learning',
    industry: 'developer-platform',
    tech: ['JavaScript'],
    year: 2021,
    title: 'Meteor Sign-In and Password Reset',
    company: 'Personal project',
    tags: ['Full Stack', 'Auth'],
    headline:
      'A React and Meteor app where users sign up, sign in and change their password, built to learn Meteor accounts.',
    role: 'Learning project · Meteor accounts with React',
    challenge:
      "Learn how Meteor's built-in accounts system handles users and passwords, with a React interface on top. It was built for training and stores no real data.",
    outcomes: [
      'Users create an account with a username, email and password.',
      'Users sign in and get instant success or error feedback.',
      'Users can set a new password from a dedicated page.',
    ],
    technical: {
      architecture:
        'A full stack Meteor app. The React client calls Meteor server methods to sign up and change passwords, and the server stores accounts in MongoDB.',
      howItWasBuilt: [
        'Registered server methods that call Accounts.createUser and Accounts.setPassword.',
        'Used the Meteor accounts-password package, with bcrypt for password hashing.',
        'Built the pages with Material UI, React Router and React Toastify.',
      ],
      stack: [
        { layer: 'Architecture', items: ['Full stack Meteor app', 'RPC (Meteor methods)', 'Client-side routing'] },
        { layer: 'Frontend', items: ['React', 'Material UI', 'React Router', 'React Toastify'] },
        { layer: 'Backend', items: ['Meteor', 'Meteor Accounts', 'bcrypt'] },
        { layer: 'Data', items: ['MongoDB'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/meteor-password-auth' }],
  },
];
