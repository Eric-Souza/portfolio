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
      'Learn Flask by building a complete CRUD web app: routes, forms, templates and a database behind them. The aim was a working app small enough to read in one sitting, with every layer of a web request visible.',
    outcomes: [
      'Add a task from a single form and see it in the list right away.',
      'See every task in one table, oldest first, with the date it was added.',
      'Edit or delete any task in one click.',
      'Shows the full request cycle in Flask: routing, form handling, database writes and templates.',
    ],
    technical: {
      architecture:
        'A monolithic, server-rendered Flask app in a single app.py. Each route reads or writes a Todo model in SQLite through Flask-SQLAlchemy, then either renders a Jinja2 template or redirects back to the list.',
      howItWasBuilt: [
        'Defined a Todo model with an integer id, a required 200-character content field and a date_created column that defaults to the current UTC time.',
        'Served the list and the create form from one route: GET queries all tasks ordered by date_created, POST adds a task and redirects to / (post/redirect/get).',
        'Added /delete/<id> and /update/<id> routes that load the task with get_or_404, so a missing id returns a 404 instead of a crash.',
        'Wrapped each session commit in try/except and returned a plain error message if the write failed.',
        'Shared one layout across the list and edit pages with Jinja2 template inheritance (base.html with head and body blocks).',
        'Ran locally with app.run(debug=True) and pinned gunicorn in requirements.txt so the app can run on a production WSGI server.',
      ],
      decisions: [
        'SQLite over a database server: the file-based database needs no setup and is enough for a single-user learning app.',
        'Server-rendered Jinja2 pages over a separate frontend, because plain forms and redirects cover every CRUD action with no JavaScript.',
        'Chose a single app.py: model, routes and config fit in about 70 lines, which keeps the whole flow easy to follow.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['Monolith', 'Server-rendered templates', 'CRUD routes', 'Post/redirect/get'],
        },
        { layer: 'Language', items: ['Python'] },
        {
          layer: 'Backend',
          items: ['Flask', 'Flask-SQLAlchemy', 'SQLAlchemy', 'Jinja2'],
        },
        { layer: 'Data', items: ['SQLite'] },
        { layer: 'Infrastructure', items: ['gunicorn'] },
      ],
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Eric-Souza/flask-todo-crud' }],
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
      'Checking many candidate domain names by hand on registro.br is slow and repetitive: type a name, wait, read the result, write it down, repeat. The goal was to automate the whole lookup from a list kept in Excel.',
    outcomes: [
      'Turns a spreadsheet of candidate names into an availability report with no manual searching.',
      'Checks each name on registro.br in a real Chrome window, the same way a person would.',
      'Writes one plain-English line per domain, marked available or not available.',
      'Shows browser automation and scraping applied to a real, repetitive task.',
    ],
    technical: {
      architecture:
        'A local batch script. It reads domain names from an Excel sheet, drives one Chrome session through Selenium to search each name on registro.br, reads the status from the results page, and appends a line to a text report.',
      howItWasBuilt: [
        'Opened the .xls workbook with xlrd and read the first column of the sheet row by row as the input list.',
        'Started Chrome through Selenium with a bundled ChromeDriver and logging turned down, then opened registro.br once and reused the page for every lookup.',
        'For each domain, found the search input by id, cleared it, typed the name and pressed Enter.',
        'Read the status from the results page with an XPath selector and mapped the Portuguese "disponível" to "available", anything else to "not available".',
        'Added one-second waits between clearing, typing and submitting so each page could load before the result was read.',
        'Wrote results to output/output.txt and closed the file and the browser at the end. A committed sample run checks six domains, including taken ones like Amazon.com.br and made-up test names.',
      ],
      decisions: [
        'A real browser with Selenium over plain HTTP requests, because the registro.br search runs in the page and the result appears in the rendered app.',
        'Fixed sleeps over explicit waits: simple and enough for a short list, at the cost of speed on long ones.',
        'Excel in, text out: candidate lists are easy to keep in a spreadsheet, and the report is readable without any tooling.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['Browser automation script', 'Batch job'],
        },
        { layer: 'Language', items: ['Python'] },
        { layer: 'Automation', items: ['Selenium', 'ChromeDriver', 'XPath'] },
        { layer: 'Data', items: ['xlrd (Excel input)', 'Text file output'] },
      ],
    },
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Eric-Souza/python-web-scraper',
      },
    ],
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
    headline: 'A Django web app that looks up live stock quotes by ticker and keeps a watchlist of saved stocks.',
    role: 'Solo build · Django app and API integration',
    challenge:
      'Build a Django app that pulls real market data from a third-party API and lets users manage a list of stocks they follow. It had to handle bad input from users and bad responses from the API without breaking the page.',
    outcomes: [
      'Look up any ticker from the navbar on every page to see price, previous close, market cap and 52-week high and low.',
      'Browse a table of companies with their ticker and industry.',
      'Follow a watchlist of saved stocks with current quotes for all of them in one table.',
      'Add and remove stocks, with a confirmation message after each change.',
      'An invalid ticker shows a clear message instead of an error page.',
    ],
    technical: {
      architecture:
        'A server-rendered Django app with one quotes app. Function-based views store watchlist tickers in SQLite, call the IEX Cloud quote endpoint over REST with requests, and render Bootstrap-styled templates that extend a shared base layout.',
      howItWasBuilt: [
        'Used one view for the home page: GET renders the company table, POST takes a ticker from the navbar search and renders that quote.',
        'Called the IEX Cloud /stock/<ticker>/quote endpoint with requests and parsed the JSON. A parse failure sets an error flag, and the template shows a "problem with your ticker symbol" message instead of the quote.',
        'Stored the watchlist as a Stock model with a ticker field and validated new entries with a Django ModelForm before saving.',
        'Built the watchlist page by fetching a fresh quote for each saved ticker on every load, then rendering name, price, previous close, market cap and 52-week range in one table.',
        'Deleted stocks through a /delete/<stock_id> route and confirmed adds and deletes with the Django messages framework, shown as Bootstrap alerts.',
        'Built the company table by parsing a local tickers file (ticker, name, industry per line).',
        'Protected every POST form with Django CSRF tokens and registered Stock in the Django admin.',
      ],
      decisions: [
        'Live API calls on each page load over caching quotes, so prices are always current. The cost is one API request per saved stock.',
        'Chose function-based views: each page is a short function, which keeps the request flow easy to read.',
        'Chose a local tickers file for the company list: the browse table needs no API calls at all.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['MVC (Django MTV)', 'Server-rendered templates', 'Third-party API integration'],
        },
        { layer: 'Language', items: ['Python'] },
        {
          layer: 'Backend',
          items: ['Django', 'Django ModelForm', 'requests', 'IEX Cloud API'],
        },
        { layer: 'Frontend', items: ['Django templates', 'Bootstrap'] },
        { layer: 'Data', items: ['SQLite'] },
      ],
    },
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Eric-Souza/django-stock-market',
      },
    ],
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
    headline: 'A Django schedule app where events are managed in the admin panel and listed on a public page.',
    role: 'Solo build · Django app',
    challenge:
      'Learn the core Django workflow: define a model, manage it through the admin, and render it in a template. The goal was a usable back office for events without writing any custom forms.',
    outcomes: [
      'Staff create, edit and delete events with a title, description and date from a ready-made admin panel.',
      'Each event belongs to a user.',
      'The admin lists events by title, date and last update, with a filter to find them fast.',
      'A public schedule page lists every event with a formatted date, and the site root sends visitors straight to it.',
    ],
    technical: {
      architecture:
        'A server-rendered Django app. Staff manage events in the built-in Django admin, which stores them in SQLite, and a single list view renders them on a public schedule page.',
      howItWasBuilt: [
        "Defined an Event model with a title, optional description, event date, an auto-updated created_at and a foreign key to Django's built-in User with cascade delete.",
        'Added a format_date() method on the model so templates show a day/month/year date and time.',
        'Registered a custom ModelAdmin with list_display (title, event date, created at) and list_filter on title.',
        'Served /schedule/ from a function view that queries all events and passes them to the template.',
        'Built the page from a base template that includes shared header and footer partials, with the event list in a content block.',
        'Redirected the root URL to /schedule/ with RedirectView and tracked schema changes in two migrations.',
      ],
      decisions: [
        'The built-in Django admin over custom forms: it gives full CRUD, filtering and login for free.',
        "Linked events to Django's User model over a custom owner field, so each event's owner is a real account and deleting a user removes their events.",
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['MVC (Django MTV)', 'Server-rendered templates', 'Admin back office'],
        },
        { layer: 'Language', items: ['Python'] },
        { layer: 'Backend', items: ['Django', 'Django Admin', 'Django ORM'] },
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
    headline: 'A REST API built with Django REST Framework that exposes full CRUD for employee records on PostgreSQL.',
    role: 'Solo build · REST API',
    challenge:
      'Learn Django REST Framework by building a CRUD API on a real relational database. The aim was a complete, standard REST resource with as little hand-written code as possible.',
    outcomes: [
      'Full create, read, update and delete for employees at /api/employee, ready for any client to call.',
      'Each employee has a name, an employee code and a mobile number.',
      'Browsable API pages make it possible to test every endpoint from the browser, with no extra tools.',
      'Shows how far DRF conventions go: the whole API is a model, a serializer and a viewset.',
    ],
    technical: {
      architecture:
        'A Django REST Framework API. A DefaultRouter sends /api/employee/ requests to a ModelViewSet, which uses a ModelSerializer to read and write Employee records in PostgreSQL and return JSON.',
      howItWasBuilt: [
        'Defined an Employee model with fullname, a 3-character emp_code and an 11-character mobile field.',
        'Wrote a ModelSerializer that exposes all model fields, so validation and JSON conversion come from the model definition.',
        'Used a ModelViewSet to get list, create, retrieve, update, partial update and delete from one class.',
        "Registered the viewset on DRF's DefaultRouter in a separate router module and mounted it under /api/, which also adds an API root view.",
        'Pointed Django at a local PostgreSQL database instead of the default SQLite, and ran the API with manage.py runserver on port 8000.',
      ],
      decisions: [
        'A ModelViewSet with a router over hand-written views and URLs: one class and one register call give every standard REST endpoint.',
        'PostgreSQL over the default SQLite, to practice against the kind of database a production API would use.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['REST API', 'Resource-based CRUD (ViewSets)'],
        },
        { layer: 'Language', items: ['Python'] },
        { layer: 'Backend', items: ['Django', 'Django REST Framework'] },
        { layer: 'Data', items: ['PostgreSQL'] },
      ],
    },
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Eric-Souza/django-rest-crud',
      },
    ],
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
      'Learn Django end to end by building a personal blog and deploying it to the web. The site had to go live on a public URL, not just run on a laptop.',
    outcomes: [
      'Live on a public PythonAnywhere URL.',
      'Write and edit posts in the Django admin, with no custom editor to build or maintain.',
      'Drafts and future-dated posts stay hidden until their publish date passes.',
      'Posts are listed in publish order with their date.',
    ],
    technical: {
      architecture:
        'A server-rendered Django blog hosted on PythonAnywhere. Posts are written in the Django admin and stored in SQLite, and a single list view at the site root shows the ones whose publish date has passed.',
      howItWasBuilt: [
        'Defined a Post model with an author (foreign key to the user model), title, text, a created date and an optional published date.',
        'Added a publish() method that stamps published_date with the current time and saves the post.',
        'Filtered the list view with published_date__lte=timezone.now() and ordered by publish date, so posts with no date or a future date stay hidden.',
        'Rendered posts with template inheritance, the linebreaksbr filter for post text, Bootstrap 3 and custom CSS served as static files.',
        'Deployed to PythonAnywhere: limited ALLOWED_HOSTS to localhost and .pythonanywhere.com, set STATIC_ROOT for collected static files and set the time zone to America/Sao_Paulo.',
        'Kept the SQLite database and virtualenv out of Git with .gitignore.',
      ],
      decisions: [
        'A publish date over a draft flag: one nullable field handles drafts and scheduled posts with a single query filter.',
        'PythonAnywhere with SQLite over a separate database server: the database lives on the same host, which keeps a single-author blog simple to run.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['MVC (Django MTV)', 'Server-rendered templates'],
        },
        { layer: 'Language', items: ['Python'] },
        { layer: 'Backend', items: ['Django', 'Django Admin'] },
        { layer: 'Frontend', items: ['Django templates', 'Bootstrap', 'CSS'] },
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
      'Given two CSV files, one of sales and one of Bitcoin cashbacks, find the cashback that belongs to each sale and produce a single report. A cashback belongs to a sale if it was created within five seconds after it. Sales with no cashback still had to appear, with null fields.',
    outcomes: [
      'Reconciles every sale with its cashback, or flags it as having none, in one report.',
      'Shows sale amounts in Reais and cashback amounts in Bitcoin, each at the right precision.',
      'Derives the implied Bitcoin price for each matched cashback.',
      'Outputs one line per sale, with no duplicates, sorted by sale id.',
    ],
    technical: {
      architecture:
        'A single-file Node.js batch script. It loads both CSV files into memory, matches each sale against every cashback by timestamp, merges matched and unmatched sales, and prints the sorted report to the console.',
      howItWasBuilt: [
        'Read both files with fs.readFileSync and split them on CRLF or LF line breaks, skipping the header row and blank lines.',
        'Converted cents to Reais with two decimals and satoshis to Bitcoin with eight decimals, and parsed ISO 8601 timestamps into JavaScript dates.',
        'Matched records with a nested loop (O(n·m)) over about 150 rows per file, accepting a cashback only when it was created 0 to 5 seconds after the sale.',
        'Collected matched and unmatched sales in two arrays, skipping repeated lines, then added an unmatched sale only if no matched line existed for that id.',
        'Sorted the final lines numerically by the id pulled out with a regex, and wrapped the run in try/catch to report file or parse errors.',
      ],
      decisions: [
        'A nested loop over building an index: with about 150 rows per file, a full scan is cheap and the matching rule stays easy to check.',
        'Chose to build output lines as strings and dedupe on them: the report format is fixed, so comparing whole lines is enough to drop repeats.',
      ],
      stack: [
        {
          layer: 'Architecture',
          items: ['CLI script', 'In-memory batch processing'],
        },
        { layer: 'Language', items: ['JavaScript'] },
        { layer: 'Runtime', items: ['Node.js'] },
        { layer: 'Data', items: ['CSV'] },
      ],
    },
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Eric-Souza/bitcoin-sales-cashback-puzzle',
      },
    ],
  },
];
