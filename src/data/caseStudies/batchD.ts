import type { CaseStudy } from '../types';

const repo = (name: string) => `https://github.com/Eric-Souza/${name}`;

export const batchD: CaseStudy[] = [
  {
    id: 'react-youtube-ui',
    kind: 'learning',
    industry: 'media',
    tech: ['TypeScript'],
    year: 2025,
    title: 'YouTube Home Feed Clone',
    company: 'Personal project',
    tags: ['UI Clone', 'API Integration', 'React Native Web'],
    headline:
      "Recreates YouTube's classic home page with real videos from the YouTube Data API and infinite scroll, built with React Native components that render on the web.",
    role: 'Solo build · UI and API integration',
    challenge:
      "Rebuild YouTube's older home page layout (header, side menu, category chips, and video grid) using React Native Web, so the same components could later run on mobile.",
    outcomes: [
      'Shows a grid of real YouTube videos with thumbnail, title, channel, and how long ago each was published.',
      'Loads more videos automatically as you scroll near the bottom of the page.',
      'Lets you pick a category chip from a horizontal scrolling bar.',
      'Falls back to placeholder videos when no API key is set or the API call fails, so the layout always renders.',
    ],
    technical: {
      architecture:
        'A Create React App project that renders React Native primitives (View, ScrollView, Pressable) through React Native Web. A small service module calls the YouTube Data API v3 search endpoint and maps results into a typed video model. It runs entirely in the browser with no backend, and the repo is set up to open in CodeSandbox.',
      howItWasBuilt: [
        'Styled every component with React Native StyleSheet objects instead of CSS files.',
        "Built infinite scroll from ScrollView's onScroll event, loading the next page with the API's nextPageToken when the user is within 200px of the bottom.",
        'Typed the API response and the internal video model with TypeScript interfaces.',
        'Wrote small helpers for relative dates ("3 days ago") and for decoding HTML entities in video titles.',
        'Added a mocked data fallback so the UI works without credentials.',
      ],
      stack: [
        { layer: 'Architecture', items: ['SPA', 'Component-based UI', 'Service layer for API calls', 'Cross-platform UI (React Native Web)'] },
        { layer: 'Frontend', items: ['React', 'React Native Web', 'TypeScript'] },
        { layer: 'Data', items: ['YouTube Data API v3', 'Fetch API'] },
        { layer: 'Tooling', items: ['Create React App', 'CodeSandbox'] },
      ],
    },
    links: [{ label: 'GitHub', url: repo('react-youtube-ui') }],
  },
  {
    id: 'react-hooks-sandbox',
    kind: 'learning',
    industry: 'developer-platform',
    tech: ['JavaScript'],
    year: 2022,
    title: 'React Hooks Sandbox',
    company: 'Tutorial',
    tags: ['Frontend', 'React Hooks'],
    headline:
      "A set of small, focused examples of React's advanced hooks and two custom hooks, built to understand when and why to use each one.",
    role: 'Learning project · React hooks',
    challenge:
      'Go beyond useState and useEffect and learn how useRef, useMemo, useCallback, and custom hooks behave, by building one small example for each.',
    outcomes: [
      'Shows useRef used for DOM access, for keeping values between renders, and for avoiding state updates after a component unmounts.',
      'Shows useMemo skipping an expensive calculation and useCallback with React.memo preventing needless re-renders.',
      'Includes two reusable custom hooks: useFetch for loading data and useLocalStorage for state that survives a page reload.',
    ],
    technical: {
      architecture:
        'A single Create React App page that renders each example component in turn. Custom hooks live in their own folder so they can be reused. Data comes straight from a public test API in the browser, and it was not deployed.',
      howItWasBuilt: [
        'Used a ref flag to cancel a delayed state update when a component unmounts, avoiding a memory leak warning.',
        'Counted renders with a ref to make the effect of useMemo and useCallback visible.',
        'Wrote useFetch (data, loading, error) and useLocalStorage (lazy initial state read from localStorage, JSON serialization on write).',
      ],
      stack: [
        { layer: 'Architecture', items: ['SPA', 'Component-based UI', 'Custom hooks'] },
        { layer: 'Frontend', items: ['React 18', 'JavaScript'] },
        { layer: 'Tooling', items: ['Create React App'] },
      ],
    },
    links: [{ label: 'GitHub', url: repo('react-hooks-sandbox') }],
  },
  {
    id: 'github-finder',
    kind: 'learning',
    industry: 'developer-platform',
    tech: ['JavaScript', 'Vercel'],
    year: 2022,
    title: 'GitHub Profile Finder',
    company: 'Personal project',
    tags: ['Frontend', 'API Integration', 'State Management'],
    headline:
      "Searches GitHub users through GitHub's public API and shows each profile with stats and recent repositories.",
    role: 'Solo build · UI, state, and API integration',
    challenge:
      'Build a small app that talks to a real public API, with client side routing, shared state, and user feedback for empty searches.',
    outcomes: [
      'Search for any GitHub user by name and see matching profiles.',
      'Open a profile to see bio, location, links, followers, following, public repos, gists, and a list of repositories.',
      'Shows an alert when the search box is empty and a spinner while data loads.',
      'Includes About and Not Found pages.',
    ],
    technical: {
      architecture:
        'A React single page app with React Router for pages and two Context providers (GitHub data and alerts), each backed by useReducer. API calls live in a separate actions module built on an axios instance, and the browser talks to the GitHub REST API directly with no backend of its own. It is hosted on Vercel.',
      howItWasBuilt: [
        'Managed users, the selected user, repos, and loading state with Context and useReducer instead of a state library.',
        'Fetched a user and their repositories in parallel with Promise.all.',
        'Used React Router v6 with a dynamic /user/:login route and a catch-all 404.',
        'Styled the UI with Tailwind CSS and daisyUI components, with icons from react-icons.',
        'Deployed to Vercel.',
      ],
      stack: [
        { layer: 'Architecture', items: ['SPA', 'Client-side routing', 'Context + reducer', 'Service layer for API calls'] },
        { layer: 'Frontend', items: ['React', 'React Router', 'Context API'] },
        { layer: 'Styling', items: ['Tailwind CSS', 'daisyUI', 'react-icons'] },
        { layer: 'Data', items: ['GitHub REST API', 'axios'] },
        { layer: 'Infrastructure', items: ['Vercel'] },
      ],
    },
    links: [
      { label: 'GitHub', url: repo('github-finder') },
      { label: 'Live demo', url: 'https://github-finder-eight-teal.vercel.app' },
    ],
  },
  {
    id: 'react-feedback-app',
    kind: 'learning',
    industry: 'productivity',
    tech: ['JavaScript', 'Netlify'],
    year: 2022,
    title: 'Feedback Collector',
    company: 'Personal project',
    tags: ['Frontend', 'CRUD', 'State Management'],
    headline:
      'Lets users post, edit, and delete rated feedback, with a live review count and average rating.',
    role: 'Solo build · UI, state, and mock backend',
    challenge:
      'Build a complete create, read, update, delete flow in React, first with in-memory state and then against a mock REST backend.',
    outcomes: [
      'Add feedback with a 1 to 10 rating and a short text, with validation for a minimum length.',
      'Edit or delete existing feedback, with a confirmation before deleting.',
      'See the number of reviews and the average rating update as the list changes.',
      'Items fade in and out as they are added or removed.',
    ],
    technical: {
      architecture:
        'A React app whose feedback state and actions live in one Context provider. The main branch keeps data in memory and is deployed on Netlify. The feat/mock-backend branch swaps that for REST calls to a json-server API that runs locally next to the dev server.',
      howItWasBuilt: [
        'Centralized add, edit, update, and delete logic in a FeedbackContext provider.',
        'On the backend branch, called json-server with fetch (GET, POST, PUT, DELETE) and ran client and server together with concurrently.',
        'Animated list changes with Framer Motion AnimatePresence.',
        'Used React Router for an About page and reusable Card and Button components.',
      ],
      stack: [
        { layer: 'Architecture', items: ['SPA', 'Context state', 'Client-side routing', 'Mock REST backend (json-server)'] },
        { layer: 'Frontend', items: ['React', 'React Router', 'Context API', 'Framer Motion'] },
        { layer: 'Backend', items: ['json-server (mock REST API)'] },
        { layer: 'Infrastructure', items: ['Netlify'] },
      ],
    },
    links: [
      { label: 'GitHub', url: repo('react-feedback-app') },
      { label: 'Live demo', url: 'https://hardcore-brahmagupta-50f7dd.netlify.app' },
    ],
  },
  {
    id: 'redux-ts-tutorial',
    kind: 'learning',
    industry: 'developer-platform',
    tech: ['TypeScript'],
    year: 2022,
    title: 'Typed Redux npm Package Search',
    company: 'Tutorial',
    tags: ['State Management', 'TypeScript'],
    headline:
      'A small npm package search built to learn how to type a Redux store, actions, and async thunks with TypeScript.',
    role: 'Learning project · Redux with TypeScript',
    challenge:
      'Learn how to wire Redux into a React app with full TypeScript types, including async requests and typed hooks.',
    outcomes: [
      'Type a search term and get a list of matching package names from the npm registry.',
      'Shows loading and error states while the request runs.',
    ],
    technical: {
      architecture:
        'React components read from a Redux store through typed hooks. A redux-thunk action creator calls the npm registry search API and dispatches start, success, or error actions to a single reducer. It runs locally in the browser and was not deployed.',
      howItWasBuilt: [
        'Modeled action types as a TypeScript enum and actions as a discriminated union, so the reducer is type checked per action.',
        'Wrote a useTypedSelector hook with TypedUseSelectorHook and a useActions hook that binds action creators to dispatch.',
        'Handled async requests with redux-thunk and axios.',
      ],
      stack: [
        { layer: 'Architecture', items: ['SPA', 'Global state (Redux)', 'Async thunks', 'Typed hooks'] },
        { layer: 'Frontend', items: ['React', 'TypeScript'] },
        { layer: 'State', items: ['Redux', 'React Redux', 'redux-thunk'] },
        { layer: 'Data', items: ['npm registry API', 'axios'] },
      ],
    },
    links: [{ label: 'GitHub', url: repo('redux-ts-tutorial') }],
  },
  {
    id: 'react-ts-tutorial',
    kind: 'learning',
    industry: 'developer-platform',
    tech: ['TypeScript'],
    year: 2022,
    title: 'React with TypeScript Exercises',
    company: 'Tutorial',
    tags: ['Frontend', 'TypeScript'],
    headline:
      'Short exercises that type the core parts of React (props, state, events, refs, and class components) with TypeScript.',
    role: 'Learning project · React with TypeScript',
    challenge:
      'Learn how TypeScript applies to everyday React code, one concept at a time.',
    outcomes: [
      'A guest list and a user search that show typed state.',
      'Examples of typed props between parent and child, typed change and drag events, and a typed input ref that focuses on load.',
      'The same user search rewritten as a class component with typed props and state.',
    ],
    technical: {
      architecture:
        'A Create React App TypeScript project with one folder per concept (props, state, events, refs, classes). The entry file renders whichever example is being studied. It was run locally only.',
      howItWasBuilt: [
        'Typed function components with React.FC and prop interfaces.',
        'Typed event handlers with React.ChangeEvent and React.DragEvent.',
        'Typed a DOM ref with useRef<HTMLInputElement | null> and guarded against null.',
      ],
      stack: [
        { layer: 'Architecture', items: ['Component-based UI', 'Typed components'] },
        { layer: 'Frontend', items: ['React', 'TypeScript'] },
        { layer: 'Tooling', items: ['Create React App', 'Prettier'] },
      ],
    },
    links: [{ label: 'GitHub', url: repo('react-ts-tutorial') }],
  },
  {
    id: 'dev-web-news',
    kind: 'learning',
    industry: 'media',
    tech: ['JavaScript'],
    year: 2021,
    title: 'WebDev News',
    company: 'Personal project',
    tags: ['Next.js', 'Static Generation'],
    headline:
      'A small Next.js news site that serves articles from its own API routes and pre-renders a page for each one.',
    role: 'Solo build · Next.js learning project',
    challenge:
      'Learn the Next.js basics: API routes, static generation, and dynamic routes, by building a news list with article pages.',
    outcomes: [
      'Home page lists web development news articles with a short excerpt.',
      'Each article has its own page with a title, body, and page metadata.',
      'Includes an About page and shared navigation.',
    ],
    technical: {
      architecture:
        'Next.js pages fetch data from the app\'s own API routes (/api/articles and /api/articles/[id]), which read from a local data file. Article pages are generated at build time, so the site ships as static HTML. It was built and run locally, with no deployment config in the repo.',
      howItWasBuilt: [
        'Used getStaticProps for the article list and getStaticPaths plus getStaticProps for each /article/[id] page.',
        'Wrote API route handlers that return an article by id or a 404 JSON error.',
        'Built a reusable Meta component with next/head for titles and descriptions.',
        'Styled components with CSS Modules.',
      ],
      stack: [
        { layer: 'Architecture', items: ['Static generation (Next.js)', 'File-based routing', 'Dynamic routes', 'API routes'] },
        { layer: 'Frontend', items: ['Next.js 11', 'React'] },
        { layer: 'Backend', items: ['Next.js API routes'] },
        { layer: 'Styling', items: ['CSS Modules'] },
      ],
    },
    links: [{ label: 'GitHub', url: repo('dev-web-news') }],
  },
  {
    id: 'next-skeleton-blog',
    kind: 'learning',
    industry: 'media',
    tech: ['TypeScript', 'Vercel'],
    year: 2021,
    title: 'Next.js Skeleton Blog',
    company: 'Personal project',
    tags: ['Next.js', 'TypeScript'],
    headline:
      'A minimal blog starter in Next.js and TypeScript that builds its post list from the files in a folder.',
    role: 'Solo build · Next.js learning project',
    challenge: 'Learn how Next.js routing and static generation work, with TypeScript.',
    outcomes: [
      'Home page lists every post found in the posts folder, with links to each one.',
      'Navigation highlights the current page.',
    ],
    technical: {
      architecture:
        'File-based Next.js pages. At build time, getStaticProps reads the pages/post directory with Node fs and passes the post names to the home page, so the site is served as static pages. It was deployed to Vercel.',
      howItWasBuilt: [
        'Typed page props with InferGetStaticPropsType.',
        'Built a navigation component that uses useRouter to mark the active link.',
        'Set up path aliases, ESLint with the TypeScript plugin, and CSS Modules.',
        'Deployed to Vercel.',
      ],
      stack: [
        { layer: 'Architecture', items: ['Static generation (Next.js)', 'File-based routing'] },
        { layer: 'Frontend', items: ['Next.js 11', 'React', 'TypeScript'] },
        { layer: 'Styling', items: ['CSS Modules'] },
        { layer: 'Infrastructure', items: ['Vercel'] },
      ],
    },
    links: [
      { label: 'GitHub', url: repo('next-skeleton-blog') },
    ],
  },
  {
    id: 'industrial-assets-showcase',
    kind: 'challenge',
    industry: 'industrial',
    tech: ['TypeScript', 'JavaScript', 'Heroku'],
    year: 2021,
    title: 'Industrial Asset Health Dashboard',
    company: 'Hiring challenge · Tractian',
    tags: ['Frontend', 'Data Visualization', 'API Integration'],
    headline:
      "Turns Tractian's test API of industrial machines into a dashboard that shows each asset's health, status, specs, and uptime.",
    role: 'Front-end engineering test · solo build',
    challenge:
      "Tractian's front-end test asked for an app that reads its sample API (assets, companies, units, and users) and presents the data clearly for people who monitor industrial equipment.",
    outcomes: [
      'Shows one card per asset (motors and fans) with its photo, status (in operation, in alert, or down), and sensor.',
      'Charts each asset\'s health score, colored red, yellow, or green by threshold.',
      'Lists specs (max temperature, RPM, power) and life cycle data (last uptime, total uptime, collection uptime).',
      'Lets the user pick the company, unit, and assigned user for each asset, and opens a modal with all assets, units, and users.',
    ],
    technical: {
      architecture:
        'A React app with a single routed page. It loads all four API resources through an axios service layer, keeps them in component state, and passes them to header, body, and footer components. There is no backend of its own (the browser calls the test API directly), and it was hosted on Heroku. The interface is in Portuguese.',
      howItWasBuilt: [
        "Wrapped Tractian's my-json-server API in typed service functions for assets, companies, units, and users.",
        'Rendered a Highcharts column chart per asset, with the color picked from the health score.',
        'Built the layout with Ant Design (cards, selects, page header, modal, spinner) and styled-components.',
        'Parsed ISO timestamps into readable date and time for the last uptime.',
        'Deployed to Heroku at the time (that app is no longer online).',
      ],
      stack: [
        { layer: 'Architecture', items: ['SPA', 'Component-based UI', 'Service layer for API calls'] },
        { layer: 'Frontend', items: ['React', 'TypeScript', 'React Router'] },
        { layer: 'UI', items: ['Ant Design', 'styled-components', 'Highcharts'] },
        { layer: 'Data', items: ['axios', 'Tractian test API'] },
        { layer: 'Infrastructure', items: ['Heroku'] },
      ],
    },
    links: [{ label: 'GitHub', url: repo('industrial-assets-showcase') }],
  },
  {
    id: 'angular-products-crud',
    kind: 'learning',
    industry: 'e-commerce',
    tech: ['TypeScript', 'Firebase'],
    year: 2021,
    title: 'Angular Product Manager',
    company: 'Personal project',
    tags: ['Frontend', 'CRUD', 'Angular'],
    headline:
      'A product catalog admin built in Angular where you can create, list, edit, and delete products.',
    role: 'Solo build · Angular frontend and mock API',
    challenge:
      'Learn Angular by building a full CRUD screen for products, with routing, forms, and a REST backend.',
    outcomes: [
      'Lists products in a table with name and formatted price.',
      'Create, update, and delete products, each on its own screen.',
      'Shows a confirmation message after each action.',
    ],
    technical: {
      architecture:
        'An Angular app with a home view and a products view, plus routes for create, update/:id, and delete/:id. A ProductService wraps HttpClient calls to a json-server REST API that runs locally. Only the compiled frontend was deployed, to Firebase Hosting.',
      howItWasBuilt: [
        'Built the CRUD service with HttpClient and RxJS Observables.',
        'Used Angular Material for the table, forms, toolbar, side navigation, and snack bar messages.',
        'Kept the mock database in a separate json-server project inside the repo.',
        'Deployed the frontend to Firebase Hosting with the @angular/fire deploy builder. firebase.json rewrites every path to index.html so client-side routes work on refresh, and sets one-year immutable cache headers on hashed JS and CSS bundles.',
      ],
      stack: [
        { layer: 'Architecture', items: ['SPA', 'Client-side routing', 'Service layer (Angular DI)', 'Mock REST backend (json-server)'] },
        { layer: 'Frontend', items: ['Angular 11', 'TypeScript', 'RxJS'] },
        { layer: 'UI', items: ['Angular Material'] },
        { layer: 'Backend', items: ['json-server (mock REST API)'] },
        { layer: 'Infrastructure', items: ['Firebase Hosting', 'Firebase CLI (@angular/fire deploy)'] },
      ],
    },
    links: [
      { label: 'GitHub', url: repo('angular-products-crud') },
    ],
  },
  {
    id: 'dropbox-ui-clone',
    kind: 'learning',
    industry: 'productivity',
    tech: ['TypeScript', 'Netlify'],
    year: 2021,
    title: 'Dropbox Landing Page Clone',
    company: 'Personal project',
    tags: ['UI Clone', 'CSS Effects'],
    headline:
      "Recreates Dropbox's landing page, including the header that changes color as each section scrolls past and a sliding login panel.",
    role: 'Solo build · UI and CSS effects',
    challenge:
      "Practice advanced CSS by rebuilding the scroll effects from Dropbox's landing page in React and TypeScript.",
    outcomes: [
      "Full-screen sections in Dropbox's colors, each with its own matching header.",
      'A login side panel that stays open near the top of the page on desktop and can be opened or closed from any section.',
      'Responsive layout for mobile and desktop.',
    ],
    technical: {
      architecture:
        'A single page made of reusable Section components (one color variant each) and a SideMenu that holds the login form. Content comes from a local data file, so it is a fully static frontend. It was hosted on Netlify.',
      howItWasBuilt: [
        'Placed a fixed header inside each section and clipped it with CSS clip, so the header seems to change color as sections scroll under it.',
        'Drove section colors with CSS custom properties per variant.',
        'Opened and closed the side panel with a CSS transform transition, triggered by scroll position and a toggle function shared on window.',
        'Styled everything with styled-components and react-icons.',
        "Deployed the production build to Netlify (the repo keeps the linked site's .netlify/state.json).",
      ],
      stack: [
        { layer: 'Architecture', items: ['SPA', 'Component-based UI', 'Data-driven sections'] },
        { layer: 'Frontend', items: ['React', 'TypeScript'] },
        { layer: 'Styling', items: ['styled-components', 'react-icons'] },
        { layer: 'Infrastructure', items: ['Netlify'] },
      ],
    },
    links: [{ label: 'GitHub', url: repo('dropbox-ui-clone') }],
  },
  {
    id: 'linkedin-ui-clone',
    kind: 'learning',
    industry: 'media',
    tech: ['TypeScript', 'Netlify'],
    year: 2021,
    title: 'LinkedIn Feed Clone',
    company: 'Personal project',
    tags: ['UI Clone', 'Loading States'],
    headline:
      "Recreates LinkedIn's home feed layout, with shimmer placeholders that show while content loads.",
    role: 'Solo build · UI and loading states',
    challenge:
      "Practice building a complex, responsive layout and skeleton loading states by cloning LinkedIn's feed.",
    outcomes: [
      'Three-column feed with profile, hashtags, a share box, posts, and trending topics.',
      'Shimmer placeholders for every panel before content appears.',
      'Separate mobile and desktop headers, with side columns hidden on small screens.',
    ],
    technical: {
      architecture:
        'A Layout component holds a loading flag and passes it to the left, middle, and right columns. Each column renders either shimmer versions of its panels or the real ones. It is a static frontend with mock content, hosted on Netlify.',
      howItWasBuilt: [
        'Built a shared Skeleton component with an animated linear gradient for the shimmer effect.',
        'Made a loading twin for each panel (profile, share box, post, trending).',
        'Simulated loading with a short timeout to show the transition.',
        'Used styled-components with media queries for the responsive layout.',
        "Deployed the production build to Netlify (the repo keeps the linked site's .netlify/state.json).",
      ],
      stack: [
        { layer: 'Architecture', items: ['SPA', 'Component-based UI', 'Skeleton loading states'] },
        { layer: 'Frontend', items: ['React', 'TypeScript'] },
        { layer: 'Styling', items: ['styled-components', 'react-icons'] },
        { layer: 'Infrastructure', items: ['Netlify'] },
      ],
    },
    links: [{ label: 'GitHub', url: repo('linkedin-ui-clone') }],
  },
  {
    id: 'snake-game',
    kind: 'learning',
    industry: 'media',
    tech: ['JavaScript', 'Netlify'],
    year: 2021,
    title: 'Classic Snake Game',
    company: 'Personal project',
    tags: ['Game', 'Canvas'],
    headline:
      'The classic snake game, playable in the browser with the arrow keys, written in plain JavaScript.',
    role: 'Solo build · game logic and rendering',
    challenge:
      'Build a working game loop from scratch with no framework, using only HTML canvas and JavaScript.',
    outcomes: [
      'Steer the snake with the arrow keys and eat food to grow.',
      'The snake wraps around the edges of the board.',
      'The game ends when the snake runs into itself.',
    ],
    technical: {
      architecture:
        'One HTML page with a canvas and one script. A setInterval loop redraws the board, snake, and food every 100ms. There is no build step: the static files are hosted on Netlify.',
      howItWasBuilt: [
        'Stored the snake as an array of grid coordinates, adding a new head each tick and dropping the tail unless food was eaten.',
        'Blocked direct reversals in the keydown handler.',
        'Placed food at random grid cells and checked self-collision each tick.',
        "Deployed the static files to Netlify (the repo keeps the linked site's .netlify/state.json). Works on desktop only (keyboard controls).",
      ],
      stack: [
        { layer: 'Architecture', items: ['Static site', 'Game loop', 'Canvas rendering'] },
        { layer: 'Frontend', items: ['JavaScript', 'HTML Canvas', 'CSS'] },
        { layer: 'Infrastructure', items: ['Netlify'] },
      ],
    },
    links: [
      { label: 'GitHub', url: repo('snake-game') },
      { label: 'Live demo', url: 'https://snakegamenetlifyjavascript.netlify.app' },
    ],
  },
  {
    id: 'marvel-data-visualization',
    kind: 'learning',
    industry: 'media',
    tech: ['JavaScript', 'Netlify'],
    year: 2020,
    title: 'Marvel Comics Explorer',
    company: 'Personal project',
    tags: ['Frontend', 'API Integration'],
    headline:
      "Browses Marvel's characters and comics using the official Marvel Developer API, with paging and links to Marvel's own pages.",
    role: 'Solo build · UI and API integration',
    challenge:
      "Learn to work with a real third-party API by building a fan app on top of Marvel's public developer API (unofficial, for practice).",
    outcomes: [
      'Browse characters page by page, with image, description, and links to details, wiki, and comic appearances.',
      'Browse comics page by page.',
      'Home page with a light and dark theme switch.',
    ],
    technical: {
      architecture:
        'A React app with three routes (home, characters, comics). A small axios service layer calls the Marvel API with offset and limit parameters for paging, straight from the browser with no backend. It was hosted on Netlify.',
      howItWasBuilt: [
        'Implemented previous and next paging by tracking the API offset in component state.',
        'Rendered result cards and loading spinners with React Bootstrap.',
        'Built the home page with Material UI and a theme toggle between light and dark palettes.',
        'Used React Router v5 with a redirect to the home page for unknown paths.',
        "Deployed to Netlify at the time (the repo keeps the linked site's .netlify/state.json). That site is no longer online.",
      ],
      stack: [
        { layer: 'Architecture', items: ['SPA', 'Client-side routing', 'Service layer for API calls'] },
        { layer: 'Frontend', items: ['React', 'React Router'] },
        { layer: 'UI', items: ['Material UI', 'React Bootstrap'] },
        { layer: 'Data', items: ['Marvel Developer API', 'axios'] },
        { layer: 'Infrastructure', items: ['Netlify'] },
      ],
    },
    links: [{ label: 'GitHub', url: repo('marvel-data-visualization') }],
  },
];
