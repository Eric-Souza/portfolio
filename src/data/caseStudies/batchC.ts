import type { CaseStudy } from '../types';

export const batchC: CaseStudy[] = [
  {
    id: 'flask-todo-crud',
    kind: 'learning',
    industry: 'productivity',
    tech: ['Python'],
    year: 2023,
    title: 'Task Master, Flask Todo App',
    company: 'Personal project',
    tags: ['Full Stack', 'Backend'],
    headline:
      'A small server-rendered todo app in Flask that covers the full create, read, update and delete cycle on a SQL database.',
    role: 'Solo build · Flask app and data model',
    challenge:
      'Learn Flask by building a complete CRUD web app: routes, forms, templates and a database behind them.',
    outcomes: [
      'Add tasks from a simple form.',
      'See all tasks in a table with the date each one was added.',
      'Edit or delete any task.',
    ],
    technical: {
      architecture:
        'A monolithic, server-rendered Flask app. Routes read and write a Todo model in SQLite through Flask-SQLAlchemy, then render a Jinja2 template or redirect back to the list.',
      howItWasBuilt: [
        'Defined a Todo model with content and a creation timestamp in Flask-SQLAlchemy.',
        'Built routes to list, create, update and delete tasks, returning a 404 for missing ones.',
        'Shared one layout across pages with Jinja2 template inheritance.',
        'Pinned gunicorn so the app can run on a production WSGI server.',
      ],
      stack: [
        { layer: 'Architecture', items: ['Monolith', 'Server-rendered templates', 'CRUD routes'] },
        { layer: 'Language', items: ['Python'] },
        { layer: 'Backend', items: ['Flask', 'Flask-SQLAlchemy', 'Jinja2'] },
        { layer: 'Data', items: ['SQLite'] },
        { layer: 'Infrastructure', items: ['gunicorn'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/flask-todo-crud' }],
  },
  {
    id: 'python-programming-languages-puzzles',
    kind: 'learning',
    industry: 'cs-fundamentals',
    tech: ['Python'],
    year: 2023,
    title: 'Python Programming and Data Puzzles',
    company: 'Coursework · Uninter',
    tags: ['Algorithms', 'Data Analysis'],
    headline:
      'Three Python exercises for a university course: a menu calculator, a plotted linear function, and summary statistics on a store sales dataset.',
    role: 'Course exercises · Programming Languages, Uninter',
    challenge:
      'Solve three assignments for Uninter\'s "Programming Languages" course, moving from basic program structure to working with data in pandas, NumPy and Matplotlib.',
    outcomes: [
      'A menu-driven calculator with seven operations, including powers, remainder and square root.',
      'A chart of a linear function evaluated on random inputs.',
      'Minimum, maximum, mean and standard deviation for store items, visitors and sales, with a scatter plot for each.',
    ],
    technical: {
      architecture:
        'Three independent CLI scripts run locally: a terminal calculator, a script that generates and plots a linear function, and a script that analyzes a bundled CSV dataset with pandas and Matplotlib.',
      howItWasBuilt: [
        'Wrote the calculator as a class with a menu loop and an operation dispatcher.',
        'Applied the linear function to a seeded random NumPy vector and plotted it.',
        'Computed the summary statistics with pandas describe().',
        'Drew side-by-side scatter plots with Matplotlib subplots.',
      ],
      stack: [
        { layer: 'Architecture', items: ['CLI scripts', 'Batch data analysis'] },
        { layer: 'Language', items: ['Python'] },
        { layer: 'Data', items: ['pandas', 'NumPy', 'Matplotlib'] },
      ],
    },
    links: [
      { label: 'GitHub', url: 'https://github.com/Eric-Souza/python-programming-languages-puzzles' },
    ],
  },
  {
    id: 'python-web-scraper',
    kind: 'side-project',
    industry: 'marketing',
    tech: ['Python'],
    year: 2023,
    title: 'Domain Availability Checker',
    company: 'Personal project',
    tags: ['Automation', 'Web Scraping'],
    headline:
      'A browser bot that checks a spreadsheet of domain names against the Brazilian registry and reports which ones are free to buy.',
    role: 'Solo build · browser automation script',
    challenge:
      'Checking many candidate domain names by hand on registro.br is slow and repetitive. The goal was to automate the lookup from a list kept in Excel.',
    outcomes: [
      'Reads candidate domain names from an Excel file.',
      'Searches each one on registro.br in a real Chrome window.',
      'Writes a text report marking every domain as available or not available.',
    ],
    technical: {
      architecture:
        'A local batch script that reads domain names from Excel, searches each one on registro.br in Chrome through Selenium, and appends the result to a text report.',
      howItWasBuilt: [
        'Read domain names row by row from an .xls sheet with xlrd.',
        'Drove Chrome with Selenium to type and submit each domain in the search field.',
        'Read the result with an XPath selector and translated the Portuguese status into English.',
        'Added short waits so each page could load before reading results.',
      ],
      stack: [
        { layer: 'Architecture', items: ['Browser automation script', 'Batch job'] },
        { layer: 'Language', items: ['Python'] },
        { layer: 'Automation', items: ['Selenium', 'ChromeDriver'] },
        { layer: 'Data', items: ['xlrd (Excel input)', 'Text file output'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/python-web-scraper' }],
  },
  {
    id: 'django-stock-market',
    kind: 'learning',
    industry: 'fintech',
    tech: ['Python'],
    year: 2022,
    title: 'Stock Quotes Watchlist',
    company: 'Personal project',
    tags: ['Full Stack', 'API Integration'],
    headline:
      'A Django web app that looks up live stock quotes by ticker and keeps a watchlist of saved stocks.',
    role: 'Solo build · Django app and API integration',
    challenge:
      'Build a Django app that pulls real market data from a third-party API and lets users manage a list of stocks they follow.',
    outcomes: [
      'Search any ticker to see price, previous close, market cap and 52-week high and low.',
      'Browse a table of companies with their ticker and industry.',
      'Add stocks to a watchlist and see current quotes for all of them in one place.',
      'Remove stocks from the watchlist.',
    ],
    technical: {
      architecture:
        'A server-rendered Django app. Views store watchlist tickers in SQLite, fetch live quotes from the IEX Cloud REST API, and render Bootstrap-styled templates.',
      howItWasBuilt: [
        'Fetched quotes from IEX Cloud with requests, with a fallback message for invalid tickers.',
        'Stored watchlist tickers in a Stock model and handled input with a Django ModelForm.',
        'Built the company table from a local tickers file.',
        "Used Django's messages framework to confirm adds and deletes.",
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['MVC (Django MTV)', 'Server-rendered templates', 'Third-party API integration'],
        },
        { layer: 'Language', items: ['Python'] },
        { layer: 'Backend', items: ['Django', 'requests', 'IEX Cloud API'] },
        { layer: 'Frontend', items: ['Django templates', 'Bootstrap'] },
        { layer: 'Data', items: ['SQLite'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/django-stock-market' }],
  },
  {
    id: 'python-algorithm-puzzles',
    kind: 'learning',
    industry: 'cs-fundamentals',
    tech: ['Python'],
    year: 2022,
    title: 'Python Pricing Logic Puzzles',
    company: 'Coursework · Uninter',
    tags: ['Algorithms', 'Programming Logic'],
    headline:
      'Three console programs that turn business pricing rules into code, written for a university programming logic course.',
    role: 'Course exercises · Algorithms and Programming Logic, Uninter',
    challenge:
      'Solve three assignments for Uninter\'s "Algorithms and Programming Logic" course, each modeled on a small business that needs to price an order.',
    outcomes: [
      'A house cleaning quote based on house size, cleaning type and optional extras.',
      'An ice cream order total built from flavor tier and cup size, with repeat orders.',
      'A product order total that adds a shipping fee based on quantity bands.',
    ],
    technical: {
      architecture:
        'Three standalone CLI scripts that run locally. Each one reads choices from the terminal, applies the pricing rules, and prints the order total.',
      howItWasBuilt: [
        'Modeled tiered pricing with if/elif ranges and multipliers.',
        'Validated user input in loops and caught ValueError for non-numeric entries.',
        'Looked up prices from a dictionary keyed by flavor code and indexed by size.',
        'Split the cleaning quote into one function per menu step.',
      ],
      stack: [
        { layer: 'Architecture', items: ['CLI scripts'] },
        { layer: 'Language', items: ['Python'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/python-algorithm-puzzles' }],
  },
  {
    id: 'django-schedule',
    kind: 'learning',
    industry: 'productivity',
    tech: ['Python'],
    year: 2021,
    title: 'Django Event Schedule',
    company: 'Personal project',
    tags: ['Backend', 'Full Stack'],
    headline:
      'A Django schedule app where events are managed in the admin panel and listed on a public page.',
    role: 'Solo build · Django app',
    challenge:
      'Learn the core Django workflow: define a model, manage it through the admin, and render it in a template.',
    outcomes: [
      'Create, edit and delete events with a title, description and date.',
      'Each event belongs to a user.',
      'A schedule page lists every event with a formatted date.',
    ],
    technical: {
      architecture:
        'A server-rendered Django app. Staff manage events in the built-in Django admin, which stores them in SQLite, and a single list view renders them on a public schedule page.',
      howItWasBuilt: [
        "Defined an Event model with a foreign key to Django's built-in User.",
        'Customized the admin with list_display and list_filter.',
        'Rendered events with template inheritance.',
        'Redirected the root URL to the schedule page with RedirectView.',
      ],
      stack: [
        { layer: 'Architecture', items: ['MVC (Django MTV)', 'Server-rendered templates', 'Admin back office'] },
        { layer: 'Language', items: ['Python'] },
        { layer: 'Backend', items: ['Django', 'Django Admin'] },
        { layer: 'Data', items: ['SQLite'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/django-schedule' }],
  },
  {
    id: 'django-rest-crud',
    kind: 'learning',
    industry: 'developer-platform',
    tech: ['Python'],
    year: 2021,
    title: 'Employee REST API',
    company: 'Personal project',
    tags: ['Backend', 'REST API'],
    headline:
      'A REST API built with Django REST Framework that exposes full CRUD for employee records on PostgreSQL.',
    role: 'Solo build · REST API',
    challenge:
      'Learn Django REST Framework by building a CRUD API on a real relational database.',
    outcomes: [
      'List, create, read, update and delete employees at /api/employee.',
      'Each employee has a name, an employee code and a mobile number.',
      'Browsable API pages for testing endpoints in the browser.',
    ],
    technical: {
      architecture:
        'A Django REST Framework API. A router sends /api/employee/ requests to a ModelViewSet, which reads and writes Employee records in PostgreSQL and returns JSON.',
      howItWasBuilt: [
        'Defined an Employee model and a ModelSerializer for it.',
        'Used a ModelViewSet to get all CRUD endpoints from one class.',
        "Registered the viewset on DRF's DefaultRouter under /api/.",
        'Configured Django to use PostgreSQL instead of the default SQLite.',
      ],
      stack: [
        { layer: 'Architecture', items: ['REST API', 'Resource-based CRUD (ViewSets)'] },
        { layer: 'Language', items: ['Python'] },
        { layer: 'Backend', items: ['Django', 'Django REST Framework'] },
        { layer: 'Data', items: ['PostgreSQL'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/django-rest-crud' }],
  },
  {
    id: 'personal-blog',
    kind: 'learning',
    industry: 'media',
    tech: ['Python'],
    year: 2021,
    title: 'Personal Blog',
    company: 'Personal project',
    tags: ['Full Stack', 'Deployment'],
    headline:
      'A personal blog built with Django and deployed to PythonAnywhere, with posts written in the admin and published on a schedule.',
    role: 'Solo build · Django app and deployment',
    challenge:
      'Learn Django end to end by building a personal blog and deploying it to the web.',
    outcomes: [
      'Write and edit posts in the Django admin.',
      'Only posts with a publish date in the past appear on the site.',
      'Posts are listed in publish order with their date.',
    ],
    technical: {
      architecture:
        'A server-rendered Django blog hosted on PythonAnywhere. Posts are written in the Django admin and stored in SQLite, and a single list view shows the published ones.',
      howItWasBuilt: [
        'Defined a Post model with an author, created and published dates, and a publish() method.',
        'Filtered the list view by publish date so drafts and future posts stay hidden.',
        'Rendered posts with template inheritance and custom CSS.',
        'Deployed to PythonAnywhere with the SQLite database on the same host.',
      ],
      stack: [
        { layer: 'Architecture', items: ['MVC (Django MTV)', 'Server-rendered templates'] },
        { layer: 'Language', items: ['Python'] },
        { layer: 'Backend', items: ['Django'] },
        { layer: 'Data', items: ['SQLite'] },
        { layer: 'Infrastructure', items: ['PythonAnywhere'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/personal-blog' }],
  },
  {
    id: 'bitcoin-sales-cashback-puzzle',
    kind: 'challenge',
    industry: 'fintech',
    tech: ['JavaScript'],
    year: 2021,
    title: 'Bitcoin Cashback Matcher',
    company: 'Hiring challenge · Zro Bank',
    tags: ['Algorithms', 'Data Processing'],
    headline:
      "Matched sales in Brazilian Reais to their Bitcoin cashback payments, as Zro Bank's software engineering entrance test.",
    role: 'Entrance test · Zro Bank software engineering role',
    challenge:
      'Given two CSV files, one of sales and one of Bitcoin cashbacks, find the cashback that belongs to each sale (created within five seconds after it) and produce a single report, with null fields for sales that have no cashback.',
    outcomes: [
      'Pairs each sale with its cashback, or marks it as having none.',
      'Shows sale amounts in Reais and cashback amounts in Bitcoin.',
      'Derives the implied Bitcoin price for each matched cashback.',
      'Outputs one line per sale, sorted by sale id.',
    ],
    technical: {
      architecture:
        'A Node.js batch script that loads both CSV files into memory, matches sales to cashbacks by timestamp, and prints a sorted report to the console.',
      howItWasBuilt: [
        'Parsed the CSV files with fs and line splitting, skipping headers and blank lines.',
        'Converted cents to Reais and satoshis to Bitcoin.',
        'Matched records with a nested loop (O(n·m)) on the time difference between timestamps.',
        'Merged matched and unmatched sales, removed duplicates and sorted by id.',
      ],
      stack: [
        { layer: 'Architecture', items: ['CLI script', 'In-memory batch processing'] },
        { layer: 'Language', items: ['JavaScript'] },
        { layer: 'Runtime', items: ['Node.js'] },
        { layer: 'Data', items: ['CSV'] },
      ],
    },
    links: [
      { label: 'GitHub', url: 'https://github.com/Eric-Souza/bitcoin-sales-cashback-puzzle' },
    ],
  },
  {
    id: 'array-ts-logic-puzzle',
    kind: 'challenge',
    industry: 'cs-fundamentals',
    tech: ['TypeScript'],
    year: 2021,
    title: 'TypeScript Array Calculator',
    company: 'Hiring challenge · Kognita',
    tags: ['Algorithms', 'TypeScript'],
    headline:
      "Completed Kognita's TypeScript entrance test: a chainable calculator that adds, sums, lists and removes values in an array.",
    role: 'Entrance test · Kognita software engineering role',
    challenge:
      "Kognita provided a TypeScript template with a fixed test file that could not be changed. The task was to make the calculator class produce the expected output, including removing duplicate values by position.",
    outcomes: [
      'Adds single numbers or arrays of numbers in one chained call.',
      'Sums all stored values or a given set of values.',
      'Lists stored values, optionally limited to the first N.',
      'Removes values at several positions in one call.',
    ],
    technical: {
      architecture:
        'A small object-oriented library run with ts-node. The fixed index.ts imports a singleton Calculator, chains calls on it, and prints the results.',
      howItWasBuilt: [
        'Singleton pattern with a private constructor and a static init() method.',
        'Fluent API: add() returns the instance so calls can be chained.',
        'remove() splices positions from last to first so indexes do not shift.',
        'Linted with ESLint (standard config) and @typescript-eslint.',
      ],
      stack: [
        { layer: 'Architecture', items: ['Singleton', 'Fluent interface', 'CLI script'] },
        { layer: 'Language', items: ['TypeScript'] },
        { layer: 'Runtime', items: ['Node.js', 'ts-node'] },
        { layer: 'Tooling', items: ['ESLint', '@typescript-eslint'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/array-ts-logic-puzzle' }],
  },
];
