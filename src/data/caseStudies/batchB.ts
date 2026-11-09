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
      'Two Node.js services that hand work to each other through Apache Kafka, so the API answers right away while a separate service issues the certificate and reports back.',
    role: 'Learning project · event-driven microservices',
    challenge:
      'Learn how services pass work to each other through a message broker instead of direct HTTP calls, using a course certificate request as the example. The API should not wait on the slow part, and the two services should not need to know about each other.',
    outcomes: [
      'The API accepts a certificate request and responds at once, handing the work to a separate certification service.',
      'The certification service processes each request and sends a confirmation message back to the API.',
      'The two services share no code and never call each other directly: Kafka topics are the only contract.',
      'The whole broker setup starts locally with one command.',
      'Demonstrates the async request and reply pattern that larger event-driven systems are built on.',
    ],
    technical: {
      architecture:
        'Two Node.js processes and a broker. The Express API (port 3333) publishes certificate requests to the issue-certificate topic, the certification service consumes that topic and publishes a confirmation to certification-response, and the API consumes and logs those replies. Kafka and ZooKeeper run in Docker Compose, which also creates both topics.',
      howItWasBuilt: [
        'POST /certifications sends the certificate payload (user, course, grade) as JSON to issue-certificate, batching two sample messages in one producer.send call.',
        'Created one KafkaJS producer at startup and attached it to every request with a small Express middleware (req.producer), so routes reuse a single connected client.',
        'Gave each service its own consumer group: certificate-group-receiver for the API and certificate-group for the certification service.',
        'Compressed outgoing batches with GZIP and configured the API client with 10 retries starting at 300 ms, so startup survives a broker that is not ready yet.',
        'The certification consumer logs topic, partition, offset and timestamp for each message, parses the JSON and replies with a confirmation for that user and course.',
        'Ran ZooKeeper and Kafka from the wurstmeister images in Docker Compose, with KAFKA_CREATE_TOPICS creating both topics with one partition and one replica.',
        'Ran the services with nodemon and Sucrase, so ES module syntax works without a build step.',
      ],
      decisions: [
        'Kafka topics over direct HTTP between services, because the goal was to decouple the API from the worker and practice async request and reply.',
        'One shared producer injected through middleware over a producer per request, because a Kafka client is a long-lived connection.',
        'Sucrase over a full Babel or TypeScript build: ES module syntax runs directly in development.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['Microservices', 'Event-driven (Kafka topics)', 'Async request/reply', 'REST API'],
        },
        { layer: 'Backend', items: ['Node.js', 'Express', 'Sucrase', 'nodemon'] },
        { layer: 'Messaging', items: ['Apache Kafka', 'KafkaJS', 'ZooKeeper', 'GZIP compression'] },
        { layer: 'Infrastructure', items: ['Docker Compose', 'wurstmeister/kafka', 'wurstmeister/zookeeper'] },
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
      'A used car pricing API that turns sale reports from real users, vetted by an admin, into a price estimate for any car.',
    role: 'Solo build · API design, auth and testing',
    challenge:
      'Pricing a used car fairly means comparing it with similar sales, but data submitted by users can be wrong. The goal was an API that collects sale reports from signed-in users, lets only an admin approve them, and estimates prices from approved data only.',
    outcomes: [
      'Anyone can get a price estimate from approved sales of the same make and model, with a similar year, a nearby location and comparable mileage.',
      'Only admins can approve or reject reports, so estimates rely on vetted data.',
      'Signed-in users submit sale reports with make, model, year, mileage, location and price, checked for valid ranges before they are saved.',
      'Users sign up, sign in and sign out, and stay signed in through a signed session cookie.',
      'Responses never expose passwords or other internal fields.',
      'Runs on Heroku with PostgreSQL, with schema migrations applied automatically at startup.',
    ],
    technical: {
      architecture:
        'A NestJS REST API with Users and Reports modules, each split into controller, service and TypeORM repository. A request passes cookie-session middleware, a CurrentUser middleware that loads the user from the session, route guards and a global ValidationPipe, and the response goes out through a Serialize interceptor. ormconfig.js picks SQLite for development and tests and PostgreSQL (DATABASE_URL) in production on Heroku.',
      howItWasBuilt: [
        'Hashed passwords with Node crypto scrypt (32-byte key) and a random 8-byte salt per user, stored as salt.hash and re-derived on sign-in to compare.',
        'Stored the user id in a cookie-session signed with COOKIE_KEY. CurrentUserMiddleware loads the user on every request, a @CurrentUser param decorator hands it to controllers, and AuthGuard and AdminGuard protect report creation and approval.',
        'Validated input with a global ValidationPipe (whitelist strips unknown fields) and class-validator DTOs: year 1930 to 2050, price and mileage 0 to 1,000,000, and real latitude and longitude. Query strings are converted to numbers with @Transform.',
        'A @Serialize(Dto) interceptor runs plainToClass with excludeExtraneousValues on each response, so only @Expose fields leave the API and a report returns userId instead of the whole user.',
        'Estimates use a TypeORM QueryBuilder query: approved reports of the same make and model, within 5 degrees of longitude and latitude and 3 years, ordered by mileage difference, limited to 3 and averaged.',
        'Data model: a User (email, password, admin flag) has many Reports (price, make, model, year, lng, lat, mileage, approved defaulting to false), created by a hand-written TypeORM migration.',
        'Jest and Supertest e2e tests boot the full AppModule on a fresh test.sqlite (deleted before each test, migrations run on connect) and check signup and the whoami session flow through the Set-Cookie header.',
        'Deployed to Heroku with a Procfile (npm run start:prod). Production runs migrations on startup and connects to PostgreSQL over SSL.',
      ],
      decisions: [
        'Versioned migrations over TypeORM synchronize (synchronize: false), so the production schema only changes through migration files.',
        'SQLite for development and tests over a local PostgreSQL, so each e2e run starts from a throwaway database file.',
        'Signed cookie sessions over tokens: the session holds only the user id, and sign-out just clears it.',
        'Scrypt from Node crypto over a hashing library, keeping password hashing free of extra dependencies.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['REST API', 'Layered modules', 'Role-based guards', 'ORM migrations', 'DTO serialization'],
        },
        {
          layer: 'Backend',
          items: ['NestJS', 'TypeScript', 'cookie-session', 'class-validator', 'class-transformer', 'RxJS'],
        },
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
      'A full stack help desk where customers open tickets about product issues, follow up with notes, and track each ticket until it is closed.',
    role: 'Solo build · full stack MERN app',
    challenge:
      'Support requests are hard to manage when they arrive as scattered messages with no status. This learning project builds a complete support desk, from account creation to ticket tracking, as one deployable app with a React front end and a Node API.',
    outcomes: [
      'Customers register and log in to a private area that shows only their own tickets.',
      'They open a ticket for a product (iPhone, MacBook Pro, iMac or iPad) and describe the issue.',
      'Each ticket shows its status (new, open or closed) and a thread of notes.',
      'Customers add notes as the issue develops and close the ticket when it is solved.',
      'Ships as a single Heroku app, front end and API together.',
    ],
    technical: {
      architecture:
        'A MERN app in one repo. The React and Redux single page app calls an Express REST API (/api/users, /api/tickets and /api/tickets/:ticketId/notes) with a Bearer JWT, and the API reads and writes users, tickets and notes in MongoDB through Mongoose. In production one Node process on Heroku serves both the API and the built React app.',
      howItWasBuilt: [
        'Data model: User (name, unique email, hashed password, isAdmin), Ticket (user ref, product enum, description, status enum defaulting to new) and Note (user and ticket refs, text, isStaff), all with Mongoose timestamps.',
        'Hashed passwords with bcryptjs and issued a 30-day JWT on register and login. A protect middleware verifies the Bearer token and attaches the user, without the password, to the request.',
        'Every ticket and note handler checks that the ticket belongs to the user in the token, returning 401 for other users and 404 for missing tickets.',
        'Mounted the notes router under /api/tickets/:ticketId with Router({ mergeParams: true }), so note routes can read the parent ticket id.',
        'Wrapped handlers in express-async-handler, with a central error middleware that returns the message and hides stack traces in production.',
        'Redux Toolkit slices with createAsyncThunk handle auth, tickets and notes. Thunks read the token from state and pass API error messages through rejectWithValue to React Toastify alerts.',
        'A PrivateRoute component (React Router v6 Outlet) redirects to /login when there is no user in the store, and the user and token persist in localStorage.',
        'A heroku-postbuild script installs and builds the front end, and Express serves frontend/build as static files when NODE_ENV is production.',
      ],
      decisions: [
        'Stateless JWTs in the Authorization header over server sessions, so the API needs no session store.',
        'One Heroku app serving the API and the front end over two deployments: the React app calls relative /api URLs on the same origin, with no CORS setup.',
        'Ownership checks on the server for every ticket and note route, so hiding tickets in the UI is never the only protection.',
      ],
      stack: [
        { layer: 'Architecture', items: ['SPA + REST API', 'MVC', 'JWT auth middleware', 'Nested resources'] },
        {
          layer: 'Frontend',
          items: ['React', 'Redux Toolkit', 'React Router', 'Axios', 'React Toastify', 'react-modal'],
        },
        { layer: 'Backend', items: ['Node.js', 'Express', 'JSON Web Token', 'bcryptjs', 'express-async-handler'] },
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
      'Teams tracking work in Jira needed board data in a spreadsheet for reporting, without copying it by hand. They also wanted a quick view of how ready each issue was for development.',
    outcomes: [
      'One request replaces manual copying: it pulls every issue from a chosen Jira board and writes it to a Google Sheet.',
      'Creates a sheet named after the board the first time, then refreshes it in place on later runs, so the report matches the board.',
      'Each row lists type, status, sprints, assignees, dates, priority and story points, ready to filter and report on.',
      'Scores each issue against a refinement checklist (business and technical description, acceptance criteria, test scenarios, code review, QA) based on its workflow status, as a readiness percentage.',
      'Shows at a glance which issues are ready for development and which still need refinement.',
    ],
    technical: {
      architecture:
        'An Express service with one working route, GET /issues. It loads the board set in JIRA_BOARD_ID and its issues through jira-client (Jira REST API v2), flattens each issue into a row, and writes the rows to a Google Sheet through google-spreadsheet with service account auth.',
      howItWasBuilt: [
        'Wrapped Jira (jira-client, API token over HTTPS) and Google Sheets (google-spreadsheet, service account credentials from client_secret.json) in small connection modules configured by environment variables.',
        'Fetched up to 5,000 issues for the board in one getIssuesForBoard call, returning 404 when the board or its issues are missing.',
        'Mapped standard and custom fields (sprints, QA assignee and story points live in customfield_* keys) into flat rows, JSON-encoding lists like labels, subtasks and sprints and formatting dates as dd-MM-yyyy with date-fns.',
        'Modeled the workflow as an ordered list of 12 statuses, from Business Refinement to Done. Each of 9 checklist columns is OK when the status sits at or past the stage that implies it, and the ready percentage is the share of OK columns.',
        'Looked up the sheet by board name: if missing, addSheet creates it with the header row; if present, the sheet is cleared, the header row reset and every row rewritten in one addRows batch.',
        'Ran the service with Sucrase and nodemon, with each step returning a 500 and a clear message on failure.',
      ],
      decisions: [
        'Clear and rewrite over row-by-row diffing on refresh: simpler, and the sheet always matches the current board.',
        'Chose to derive checklist columns from workflow status: no extra Jira fields are needed, so the score works on any board that uses the same workflow.',
        'Service account auth over user OAuth for Google, so the service writes to the sheet without an interactive login.',
      ],
      stack: [
        { layer: 'Architecture', items: ['REST API', 'Third-party API integration', 'ETL to Sheets'] },
        { layer: 'Backend', items: ['Node.js', 'Express', 'Sucrase', 'date-fns', 'dotenv'] },
        { layer: 'Integrations', items: ['Jira REST API', 'jira-client', 'Google Sheets API', 'google-spreadsheet'] },
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
      'Get comfortable with an ORM on a real SQL database: migrations, one-to-many and many-to-many relations, and filtered queries across tables. The data is simple on purpose, so the focus stays on the relational patterns.',
    outcomes: [
      'Create users and attach addresses and technologies to each one.',
      'Adding a technology reuses an existing record instead of creating a duplicate, and removing one only unlinks it from that user.',
      'A report endpoint filters users by email and returns them with their addresses and technologies in one response.',
      'Demonstrates schema changes managed through versioned migrations instead of manual SQL.',
    ],
    technical: {
      architecture:
        'An Express REST API (port 3333) whose controllers query PostgreSQL through Sequelize models. src/database/index.js opens one Sequelize connection, initializes the User, Address and Tech models and wires their associations: users have many addresses and a many-to-many link to techs through the user_techs join table.',
      howItWasBuilt: [
        'Created the users, addresses, techs and user_techs tables with sequelize-cli migrations, with the join table foreign keys set to CASCADE on update and delete.',
        'Defined models as Model subclasses with static init and associate methods, with underscored column names and timestamps set globally.',
        'Nested routes under /users/:user_id for addresses and techs, and each handler returns 400 when the user does not exist.',
        'Used Tech.findOrCreate and the generated user.addTech and user.removeTech helpers, so techs are shared rows and removal deletes only the join row.',
        'The report query uses Op.iLike for case-insensitive matching, an inner join on addresses filtered by street, and an optional (required: false) join on techs whose name starts with React.',
      ],
      decisions: [
        'Versioned migrations over sync(), so the schema is built the same way on every database.',
        'findOrCreate for techs over inserting one per user, keeping a single row per technology shared across users.',
      ],
      stack: [
        { layer: 'Architecture', items: ['REST API', 'MVC', 'ORM migrations', 'Relational model (1:N, N:M)'] },
        { layer: 'Backend', items: ['Node.js', 'Express'] },
        { layer: 'Data', items: ['PostgreSQL', 'Sequelize', 'sequelize-cli', 'pg'] },
        { layer: 'Infrastructure', items: ['ElephantSQL (hosted PostgreSQL)'] },
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
      'Understand what frameworks like Express do under the hood by building a full CRUD API on the raw Node.js http server. Routing, body parsing and responses all had to be written by hand.',
    outcomes: [
      'List, view, create, update and delete products through a standard REST interface.',
      'Changes are saved to a JSON file, so data survives restarts.',
      'Updates accept partial data and keep the fields that were not sent.',
      'Unknown routes and missing products return clear 404 messages.',
      'Demonstrates a working understanding of what web frameworks automate.',
    ],
    technical: {
      architecture:
        'One http.createServer handler matches URL and method in an if/else chain and calls a product controller. The controller reads the body, calls a promise-based model and writes JSON responses with explicit status codes. The model keeps products in an in-memory array loaded from data/products.json and writes the whole array back after every change.',
      howItWasBuilt: [
        'Matched /api/products/:id with a regular expression and took the id from the last path segment.',
        'Read request bodies by collecting data chunks from the request stream and resolving a promise on end, then parsing the JSON.',
        'Gave the model a promise-based API (findAll, findById, create, update, remove), so controllers use async/await as they would with a real database.',
        'Persisted with fs.writeFileSync of the full array after each create, update and delete.',
        'Merged updates with the stored product, so fields left out of the request keep their old values.',
        'Kept uuid (v4) as the only runtime dependency, for product ids.',
      ],
      decisions: [
        'The raw http module over Express, because the goal was to see routing and body parsing done by hand.',
        'JSON file storage over a database: data persists across restarts with no setup.',
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
      'Reading a whole large file into memory before sending it breaks down as the file grows. Learn why streaming avoids that, and how to chain readable, transform and writable streams.',
    outcomes: [
      'Serves a large file over HTTP in chunks instead of reading it all into memory first.',
      'Generates 100,000 records and converts them into a CSV file with a header row.',
      'Puts readFileSync and createReadStream side by side, making the memory trade-off concrete.',
      'Pipes terminal input and a TCP socket to the console, showing the same stream interface across sources.',
    ],
    technical: {
      architecture:
        'Two standalone ES module scripts. basicExample.mjs compares readFileSync with createReadStream for serving a large generated file over HTTP, and pipes stdin and a TCP socket (net) to stdout. practicalExample.mjs chains a custom Readable, two Transforms and a file write stream with stream.pipeline to produce my.csv.',
      howItWasBuilt: [
        'Built custom Readable and Writable streams with the simplified constructor API (read and write functions), ending input by pushing null.',
        'Generated 100,000 JSON records in a Readable, each with an id from Date.now() plus the index and a numbered name.',
        'A Transform parses each JSON chunk and emits an id,NAME CSV line with the name uppercased.',
        'A second, stateful Transform keeps a counter and prepends the id,name header only to the first chunk.',
        'Promisified stream.pipeline with util.promisify and awaited it at the top level of the .mjs module, so errors and completion are handled in one place.',
        'Piped createReadStream into the HTTP response, so the file goes out in chunks.',
      ],
      decisions: [
        'stream.pipeline over chained .pipe() calls, because pipeline forwards errors from any stage and signals completion once.',
        'A separate header Transform over special-casing the CSV converter, keeping each stage single-purpose.',
      ],
      stack: [
        { layer: 'Architecture', items: ['Streams/pipelines', 'Chunked processing'] },
        { layer: 'Backend', items: ['Node.js (stream, fs, http, net, util)', 'ES modules'] },
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
      'Users register with an email and password, and a duplicate email is rejected.',
      'Passwords are never stored in plain text.',
      'Signing in returns a token that is valid for one day, along with the user minus the password.',
      'Private routes reject requests without a valid token.',
    ],
    technical: {
      architecture:
        'An Express REST API in TypeScript with three routes: POST /users to register, POST /auth to sign in, and GET /users behind auth middleware. Controllers use TypeORM repositories on PostgreSQL. The auth controller compares the password with bcrypt and returns a signed JWT, and the middleware verifies it from the Bearer header and puts the user id on the request.',
      howItWasBuilt: [
        'Hashed passwords with bcryptjs (cost 8) in a TypeORM @BeforeInsert and @BeforeUpdate entity hook, so no controller can save a plain password.',
        'Signed tokens with jsonwebtoken, carrying only the user id with a one-day expiry, and removed the password from the user before returning it.',
        'Returned a bare 401 for both an unknown email and a wrong password, so the response does not reveal which accounts exist. Duplicate sign-ups get a 409.',
        'Extended the Express Request type with a userId field through a declaration file, so the middleware result is typed.',
        'Created the users table with a TypeORM migration: a uuid primary key through the uuid-ossp extension and a unique email column.',
        'Ran in development with nodemon and ts-node.',
      ],
      decisions: [
        'UUID primary keys over serial integers, so the user ids inside tokens are not sequential.',
        'Hashing in an entity hook over in the controller, so every insert and update path hashes the password.',
      ],
      stack: [
        { layer: 'Architecture', items: ['REST API', 'JWT auth middleware', 'ORM entities', 'ORM migrations'] },
        { layer: 'Backend', items: ['Node.js', 'Express', 'TypeScript', 'jsonwebtoken', 'bcryptjs', 'ts-node'] },
        { layer: 'Data', items: ['PostgreSQL', 'TypeORM', 'uuid-ossp'] },
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
      'The full API comes from one entity, with no hand-written route handlers or queries.',
    ],
    technical: {
      architecture:
        'A NestJS app with a CompaniesModule. The controller carries the @Crud decorator and the service extends TypeOrmCrudService, so @nestjsx/crud generates the /companies endpoints on top of a TypeORM repository for PostgreSQL. The connection is configured in orm.config.ts.',
      howItWasBuilt: [
        'Generated the standard CRUD routes from the Company entity with @Crud({ model: { type: Company } }) on a controller implementing CrudController<Company>.',
        'Extended TypeOrmCrudService<Company> with the injected repository, so the service has no hand-written queries.',
        'Shared id, createdAt and updatedAt columns through a base entity class, and Company adds name (required, up to 100 characters), domain and description.',
        'Let TypeORM synchronize the database schema from the entities.',
        'Exercised the endpoints with a rest-client.http file of sample GET and POST requests.',
      ],
      decisions: [
        'Generated CRUD endpoints over hand-written controllers, because the goal was the least boilerplate.',
        'Schema synchronize over migrations, to iterate on the entity without writing migration files.',
      ],
      stack: [
        { layer: 'Architecture', items: ['REST API', 'Layered modules', 'Generated CRUD endpoints'] },
        { layer: 'Backend', items: ['NestJS', 'TypeScript', '@nestjsx/crud', '@nestjsx/crud-typeorm'] },
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
    challenge: 'Learn the core building blocks of NestJS by building a simple products API with data kept in memory.',
    outcomes: [
      'Add, list, view, update and delete products with a title, description and price.',
      'Updates change only the fields that are sent.',
      'Requests for a product that does not exist get a clear not found error.',
      'Demonstrates the module, controller, service and dependency injection structure that larger NestJS APIs build on.',
    ],
    technical: {
      architecture:
        'A NestJS REST API where a /products controller delegates to an injectable service that keeps products in memory. A ProductsModule registers both, and there is no database.',
      howItWasBuilt: [
        'Injected ProductsService into the controller constructor through NestJS dependency injection.',
        'Mapped POST, GET, PATCH and DELETE on /products and /products/:id, reading route params and single body fields with @Param and @Body.',
        'A private findProduct helper returns the product and its index, or throws NotFoundException, which Nest turns into a 404.',
        'Returned copies of stored data to avoid outside mutation, and applied updates by replacing the array entry with a merged copy.',
      ],
      decisions: [
        'An in-memory array over a database, to keep the focus on framework structure.',
        'Copies over references when returning data, so callers cannot change the store by accident.',
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
      'Users create an account with a username, email and password, and a taken username is caught.',
      'Users sign in and get instant feedback on missing fields and successful sign-in.',
      'Users can set a new password from a dedicated page.',
      'Forms check for empty fields and a matching password confirmation before anything reaches the server.',
    ],
    technical: {
      architecture:
        'A full stack Meteor 2.0 app. The React client has sign in, sign up and new password pages, and calls Meteor server methods to create accounts and change passwords. Sign-in goes through Meteor.loginWithPassword, and the server stores accounts in MongoDB through the accounts packages.',
      howItWasBuilt: [
        'Registered two server methods at startup: createNewUser checks Accounts.findUserByUsername before calling Accounts.createUser, and setNewPassword looks up the user and calls Accounts.setPassword.',
        'Signed users in from the client with Meteor.loginWithPassword, which accounts-password checks on the server.',
        'Used the accounts-base and accounts-password packages, with the bcrypt npm package for password hashing.',
        'Validated forms in React state before calling the server, with React Toastify success, warning and error messages.',
        'Routed /signIn, /signUp and /newPwd with React Router, redirecting every other path to /signIn, and built the pages with Material UI.',
        "Kept Meteor's autopublish and insecure prototyping packages, since it is a training app with no real data.",
      ],
      decisions: [
        "Meteor's built-in accounts over a custom auth layer, so password hashing and login come from accounts-password.",
        'Server methods over client-side writes for account changes, so user creation and password updates run on the server.',
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
