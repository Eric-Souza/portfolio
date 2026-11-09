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
      "Recreates YouTube's classic home page with real videos and infinite scroll, using React Native components that render on the web.",
    role: 'Solo build · UI and API integration',
    challenge:
      "Rebuild YouTube's older home page (header, side menu, category chips, and video grid) with React Native Web, so the same components could later run on mobile. The feed had to show real videos from the YouTube Data API and keep working when the API is not available.",
    outcomes: [
      'Shows a grid of real YouTube videos with thumbnail, title, channel, and how long ago each was published.',
      'Loads the next batch of videos on its own as you scroll near the bottom, with a spinner while it loads.',
      'Opens a larger preview card, with Watch later and Add to queue actions, after you hover a video for one second.',
      'Lets you pick a category chip from a horizontal scrolling bar.',
      'Always renders the full layout, falling back to placeholder videos when no API key is set or the API call fails.',
      'Demonstrates writing UI once in React Native primitives so it can target both web and mobile.',
    ],
    technical: {
      architecture:
        'A browser-only React 17 app registered through React Native AppRegistry and rendered by React Native Web. Dashboard composes Header, SideMenu, Categories, and VideoGrid; VideoGrid owns the feed state and calls a fetchVideos service, which queries the YouTube Data API v3 search endpoint and maps each result into a typed IVideo model.',
      howItWasBuilt: [
        'fetchVideos builds the search URL with URLSearchParams (part=snippet, type=video, maxResults=60, q=programming) and reads the key from REACT_APP_API_KEY.',
        'VideoGrid keeps videos, nextPageToken, loading, and isFetchingMore in useState, and appends each new page to the existing list.',
        "Infinite scroll uses the ScrollView onScroll event: when the bottom is within 200px it requests the page for nextPageToken, and a scrolledToBottom flag plus the isFetchingMore guard stop duplicate requests.",
        'Any error, including a missing key or a non-OK response, is caught in the service and replaced with 60 mocked videos after a short delay.',
        'VideoCard decodes HTML entities in titles through a textarea element and formats publish dates as relative time ("3 days ago") with a small utility.',
        'The hover preview starts a one second timer on mouse enter, renders through a React portal on document.body, and shifts left when the card would overflow the right edge.',
        'All styling uses React Native StyleSheet objects, with a wrapping flex grid whose cards have a 250px basis and a 350px max width.',
      ],
      decisions: [
        'React Native Web over plain React DOM, because the goal was components that could later run on mobile.',
        'Mock data fallback over an error screen, so the layout always renders, even without an API key.',
        'Hardcoded view counts and durations, because the search endpoint does not return them.',
      ],
      stack: [
        { layer: 'Architecture', items: ['SPA', 'Component-based UI', 'Service layer', 'Cross-platform UI', 'Infinite scroll'] },
        { layer: 'Frontend', items: ['React 17', 'React Native Web', 'React Native', 'TypeScript'] },
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
      'Go beyond useState and useEffect and learn how useRef, useMemo, useCallback, and custom hooks behave. Each hook gets one small example, so its effect on rendering is easy to see.',
    outcomes: [
      'Shows useRef used for DOM access, for remembering the previous value of state, and for avoiding state updates after a component unmounts.',
      'Shows useMemo skipping an expensive calculation and useCallback with React.memo preventing needless re-renders.',
      'Includes two reusable custom hooks: useFetch for loading data and useLocalStorage for state that survives a page reload.',
      'Demonstrates when each hook is worth using, with render counters that make the savings visible.',
    ],
    technical: {
      architecture:
        'A single Create React App page that renders one component per example, with the custom hooks in src/hooks. The fetch examples call JSONPlaceholder from the browser.',
      howItWasBuilt: [
        'The DOM ref example reads and writes an input value and style directly, and focuses the input when a paragraph is clicked.',
        'A renders ref is incremented in an effect to count renders without causing one, and a prevName ref keeps the last value of a state field.',
        'The unmount example sets an isMounted ref to false in the effect cleanup and checks it before calling setState from a delayed fetch.',
        'useMemo wraps a deliberately slow square root function, so typing in an unrelated field does not rerun it.',
        'useCallback keeps the addTask function stable, so a React.memo child button does not re-render when the list changes.',
        'useFetch returns data, loading, and error for a URL, and useLocalStorage reads its initial value with a lazy useState initializer and writes JSON on every set.',
      ],
      decisions: [
        'Lazy useState initializer in useLocalStorage over reading storage on every render, because the stored value only needs to be parsed once.',
        'One isolated component per hook over a combined demo, so each behavior can be observed on its own.',
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
      'Build a small app that talks to a real public API, with client side routing, shared state, and clear feedback when a search is empty or finds nothing.',
    outcomes: [
      'Search for any GitHub user by name and see matching profiles, with a Clear button to reset the results.',
      'Open a profile to see bio, location, website, Twitter, a hireable badge, followers, following, public repos, gists, and a list of repositories.',
      'Shows an alert when the search box is empty or no users are found, and a spinner while data loads.',
      'Includes About and Not Found pages, and is live on Vercel.',
    ],
    technical: {
      architecture:
        'A React SPA on Vercel with two Context providers, one for GitHub data and one for alerts, each backed by useReducer. Components call functions in a GithubActions module, which uses an axios instance pointed at the GitHub REST API, and then dispatch the results to the reducer.',
      howItWasBuilt: [
        'GitHub state is { users, user, repos, loading }, changed only through GET_USERS, GET_USER_AND_REPOS, SET_LOADING, and CLEAR_USERS actions.',
        'UserSearch dispatches SET_LOADING, calls /search/users with the query in URLSearchParams, and raises an alert when total_count is 0.',
        'The User page reads :login with useParams and fetches /users/:login and /users/:login/repos in parallel with Promise.all.',
        'AlertProvider stores one alert ({ msg, type }) and clears it with a REMOVE_ALERT dispatch after three seconds.',
        'React Router v6 defines /, /about, /user/:login, and a catch-all route that renders the Not Found page.',
        'The API base URL comes from REACT_APP_GITHUB_URL, and the UI is styled with Tailwind CSS and daisyUI components.',
      ],
      decisions: [
        'Context and useReducer over a state library, because the shared state is small: search results, one profile, its repos, and a loading flag.',
        'API calls in a separate actions module over functions inside the provider, so components call an action and dispatch its result.',
        'Promise.all over sequential requests, so the profile and its repositories load together.',
      ],
      stack: [
        { layer: 'Architecture', items: ['SPA', 'Client-side routing', 'Context + reducer', 'Service layer'] },
        { layer: 'Frontend', items: ['React 17', 'React Router v6', 'Context API', 'useReducer'] },
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
      'Build a complete create, read, update, delete flow in React, first with in-memory state and then against a mock REST backend. The review count and average rating had to stay correct as items change.',
    outcomes: [
      'Add feedback with a 1 to 10 rating and a short text, with the Send button disabled until the text is long enough.',
      'Edit or delete existing feedback, with a confirmation before deleting.',
      'See the number of reviews and the average rating update as the list changes.',
      'Items fade in and out as they are added or removed, and an empty list shows a "No feedback yet" message.',
      'The in-memory version is live on Netlify.',
    ],
    technical: {
      architecture:
        'A React app with all feedback state and CRUD functions in one FeedbackContext provider, consumed by the form, stats, and list components. The main branch keeps data in memory and deploys to Netlify; the feat/mock-backend branch swaps it for a json-server REST API on port 5000, reached through the Create React App dev proxy.',
      howItWasBuilt: [
        'State is a feedback array of { id, text, rating } plus a feedbackEdit object ({ item, edit }) that puts the form into edit mode.',
        'On main, new items get a uuid v4 id and are prepended to the array in memory.',
        'On the backend branch, the provider loads /feedback?_sort=id&_order=desc on mount and calls POST, PUT, and DELETE with fetch, updating local state from each response.',
        'npm run dev starts json-server (watching db.json) and the React dev server together with concurrently.',
        'FeedbackStats computes the average with reduce, trims a trailing .0, and shows 0 when the list is empty.',
        'RatingSelect is a group of ten radio inputs that syncs to the item being edited through a useEffect on feedbackEdit.',
        'FeedbackList wraps each item in a Framer Motion motion.div inside AnimatePresence for fade in and fade out.',
      ],
      decisions: [
        'json-server over a hand-written backend, because it gives a real REST API with sorting from a single db.json file.',
        'Dev server proxy over hardcoded URLs, so fetch calls use relative paths like /feedback.',
        'Chose two branches: main stays in memory for the Netlify demo, and feat/mock-backend adds the REST API.',
      ],
      stack: [
        { layer: 'Architecture', items: ['SPA', 'Context state', 'Client-side routing', 'Mock REST backend'] },
        { layer: 'Frontend', items: ['React 17', 'React Router v6', 'Context API', 'Framer Motion', 'uuid'] },
        { layer: 'Backend', items: ['json-server', 'concurrently'] },
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
      'Learn how to wire Redux into a React app with full TypeScript types, including async requests and typed hooks, so mistakes in actions and state are caught at compile time.',
    outcomes: [
      'Type a search term and get a list of matching package names from the npm registry.',
      'Shows loading and error states while the request runs.',
      'Demonstrates a fully typed Redux setup: action types, actions, reducer state, selectors, and async thunks.',
    ],
    technical: {
      architecture:
        'React components read a Redux store through typed hooks. On submit, a redux-thunk action creator calls the npm registry search endpoint (registry.npmjs.org/-/v1/search) with axios and dispatches start, success, or error actions to a repositories reducer combined under one root reducer.',
      howItWasBuilt: [
        'Action names live in an ActionType enum, and the three actions form a discriminated union, so the reducer narrows the payload type in each case.',
        'Reducer state is { loading, error, data: string[] }, and each action replaces it whole, clearing old results and errors.',
        'The thunk maps the registry response objects to package names before dispatching success, and dispatches the error message on failure.',
        'RootState is derived with ReturnType<typeof reducers>, and useTypedSelector is useSelector typed with TypedUseSelectorHook<RootState>.',
        'useActions wraps bindActionCreators over the action creators, so components call searchRepositories(term) without touching dispatch.',
        'The store is created with createStore and applyMiddleware(thunk).',
      ],
      decisions: [
        'Discriminated union of actions over loose action objects, because TypeScript can then check each payload in the reducer.',
        'Typed custom hooks over annotating useSelector and useDispatch in every component, so the store types are written once.',
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
      'Learn how TypeScript applies to everyday React code, one concept at a time, by typing the same small features in different ways.',
    outcomes: [
      'A guest list and a user search that show typed state.',
      'Examples of typed props between parent and child, typed change and drag events, and a typed input ref that focuses on load.',
      'The same user search rewritten as a class component with typed props and state.',
      'Demonstrates the core patterns for typing React code, side by side for function and class components.',
    ],
    technical: {
      architecture:
        'A Create React App TypeScript project with one folder per concept (props, state, events, refs, classes). The entry file renders the example being studied with ReactDOM.render.',
      howItWasBuilt: [
        'Typed a Child component two ways: a plain function with a ChildProps interface, and React.FC, which also accepts children.',
        'Typed state with generics, such as useState<string[]> for the guest list and useState<FoundUser | undefined> for the search result.',
        'Typed event handlers with React.ChangeEvent<HTMLInputElement> and React.DragEvent<HTMLDivElement>.',
        'Typed the input ref as useRef<HTMLInputElement | null> and returned early from the focus effect when it is null.',
        'Wrote the class version as Component<UserSearchProps> with a typed state field and an arrow function handler.',
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
      'Learn the Next.js basics: API routes, static generation, and dynamic routes, by building a news list with article pages. The goal was to serve a JSON data set as an API and render pages from it.',
    outcomes: [
      'Home page lists web development news articles with a short excerpt.',
      'Each article has its own page with a title, body, and its own page title and description for search engines.',
      'Pages are pre-rendered, so they load as plain HTML.',
      'Includes an About page and shared navigation.',
    ],
    technical: {
      architecture:
        "Next.js 11 pages fetch articles from the app's own API routes (/api/articles and /api/articles/[id]), which read a local data.js array. Pages are generated at build time, and the build script runs next build followed by next export to produce static HTML.",
      howItWasBuilt: [
        'The home page uses getStaticProps to fetch the article list and passes it to ArticleList and ArticleItem components.',
        'article/[id] uses getStaticPaths to turn every article id into a path, then getStaticProps to fetch that article by id.',
        'The [id] API route filters the data by id and returns the article, or a 404 with a JSON message when it is not found.',
        'A config module picks the server base URL from NODE_ENV, so the same fetch code points at localhost in development.',
        'A Meta component wraps next/head with default title, keywords, and description that each page can override.',
        'Layout, Header, and Nav components wrap every page through _app.js, styled with CSS Modules.',
      ],
      decisions: [
        'API routes in front of the data file over importing it directly, so the pages consume a JSON API as the project set out to practice.',
        'fallback: false in getStaticPaths, so any id not in the data set returns a 404 instead of rendering on demand.',
      ],
      stack: [
        { layer: 'Architecture', items: ['Static generation', 'File-based routing', 'Dynamic routes', 'API routes'] },
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
    challenge:
      'Learn how Next.js routing and static generation work, with TypeScript. The blog should pick up new posts without editing a list by hand.',
    outcomes: [
      'Home page lists every post found in the posts folder, with links to each one.',
      'Adding a post is just adding a page file: it shows up on the home page at the next build.',
      'Navigation highlights the current page.',
    ],
    technical: {
      architecture:
        'Static Next.js 11 pages on Vercel. At build time, getStaticProps on the home page calls a getPostList utility that reads pages/post with Node fs and passes the post names as props; each post is a regular page under /post.',
      howItWasBuilt: [
        'getPostList strips the file extension from each file in pages/post, and returns an empty list with a warning if the folder is missing.',
        'The home page turns each file name into a link title by replacing dashes with spaces.',
        'Page props are typed with InferGetStaticPropsType<typeof getStaticProps>, so they follow whatever getStaticProps returns.',
        'Navigation reads pathname from useRouter and renders the current page as plain text instead of a link.',
        'tsconfig path aliases (@components, @styles), ESLint with the TypeScript and React plugins, and CSS Modules for styling.',
      ],
      decisions: [
        'File system based post list over a hardcoded array, so adding a page file under pages/post adds it to the home page.',
        'InferGetStaticPropsType over a hand-written props type, so the page and its data loader cannot drift apart.',
      ],
      stack: [
        { layer: 'Architecture', items: ['Static generation', 'File-based routing'] },
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
      'Lets an operator see at a glance which machines need attention: one card per asset (motors and fans) with its photo, status (in operation, in alert, or down), and sensor.',
      "Charts each asset's health score, colored red below 60, yellow from 60 to 74, and green from 75 up.",
      'Lists specs (max temperature, RPM, power) and life cycle data (last uptime, total uptime, collection uptime), and says when a spec was not provided.',
      'Lets the user pick the company, unit, and assigned user for each asset, and opens a modal with all assets, units, and users.',
    ],
    technical: {
      architecture:
        "A single-page React app, once hosted on Heroku, with one route (/assets) that every other path redirects to. MainPage loads assets, companies, units, and users from Tractian's fake API on my-json-server through an axios service layer, shows a spinner until all four arrive, then passes them as props to Header and Body. The interface is in Portuguese.",
      howItWasBuilt: [
        'An axios instance holds the API base URL, and services.ts exposes list and by-id functions for each of the four resources.',
        'Body maps each asset to an Ant Design Card and translates status codes (inOperation, inAlert, inDowntime) into Portuguese labels.',
        'Each card renders a Highcharts column chart (via highcharts-react-official) on a 0 to 100 axis, with the column color picked from the health score thresholds.',
        'The lastUptimeAt ISO timestamp is split into date and time parts and shown in a day/month/year, hours, minutes, and seconds format.',
        'Company, unit, and user pickers are Ant Design Selects filled from the loaded lists, with a toast message when a selection changes.',
        'Header uses an Ant Design PageHeader with a button that opens a Modal listing all assets, units, and users.',
        'Layout styles use styled-components, and routing uses React Router v5 Switch and Redirect.',
        'Deployed to Heroku at the time; that app is no longer online.',
      ],
      decisions: [
        'A chart per asset over a plain number, so health can be read by color before reading the value.',
        'Chose Ant Design: one library covers the cards, selects, modal, spinner, and toasts the dashboard needs.',
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
      'Learn Angular by building a full CRUD screen for products, with routing, forms, and a REST backend. It covers the everyday admin task of keeping a product list up to date.',
    outcomes: [
      'Lists products in a table with id, name, and price formatted as currency, with edit and delete actions per row.',
      'Create, update, and delete products, each on its own screen with a cancel option.',
      'Shows a confirmation message after each action.',
      'Demonstrates the core Angular building blocks: modules, components, services, dependency injection, routing, and RxJS.',
    ],
    technical: {
      architecture:
        'An Angular 11 app with routes for home, the product list, and /products/create, /products/update/:id, and /products/delete/:id. Components inject a root ProductService that calls a json-server REST API on localhost:3001. Only the frontend was deployed, to Firebase Hosting.',
      howItWasBuilt: [
        'ProductService wraps HttpClient with create, read, readById, update, and delete methods that return typed Observable<Product> values.',
        'The Product model is { id?, name, price }, and the list table uses a mat-table with id, name, price, and action columns.',
        'Update and delete screens read the id from ActivatedRoute.snapshot, load the product with readById, and navigate back to /products after saving.',
        'ProductService.showMessage opens a MatSnackBar in the top right for three seconds after each action.',
        'A HeaderService keeps the page title, icon, and route in an RxJS BehaviorSubject that the header component reads.',
        'The mock database is a separate json-server package in server/, run with its own npm script.',
        'firebase.json rewrites every path to index.html so routes survive a refresh, and caches hashed JS and CSS bundles for a year as immutable.',
      ],
      decisions: [
        'json-server in its own server package over in-memory data, so the app talks to a real HTTP API.',
        'Chose one routed screen per action: create, update, and delete each get a URL, and update and delete load their product from the :id parameter.',
      ],
      stack: [
        { layer: 'Architecture', items: ['SPA', 'Client-side routing', 'Service layer (Angular DI)', 'Mock REST backend'] },
        { layer: 'Frontend', items: ['Angular 11', 'TypeScript', 'RxJS'] },
        { layer: 'UI', items: ['Angular Material'] },
        { layer: 'Backend', items: ['json-server'] },
        { layer: 'Infrastructure', items: ['Firebase Hosting', '@angular/fire deploy'] },
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
      "Practice advanced CSS by rebuilding the scroll effects from Dropbox's landing page in React and TypeScript. The main effect is a header that matches each section's colors as you scroll.",
    outcomes: [
      "Full-screen sections in Dropbox's colors, each with its own matching header.",
      'A login side panel that stays open near the top of the page on desktop and can be opened or closed from any section.',
      'Responsive layout for mobile and desktop, with the panel taking the full screen on mobile.',
      'Demonstrates scroll-driven visual effects built mostly in CSS.',
    ],
    technical: {
      architecture:
        'A static single page on Netlify. App renders five Section components, each with a color variant and copy from a local data file, plus a SideMenu that wraps the MenuForm login form.',
      howItWasBuilt: [
        "Each Section has an absolutely positioned HeaderWrapper with clip: rect(auto, auto, auto, auto), which clips that section's fixed header to the section's bounds, so the visible header seems to change color as sections scroll past.",
        'Each variant class (blue, beige, white, black) sets --bg-color, --text-color, and --logo-color custom properties that the header and content read.',
        'The first section overrides padding and heading size, with a larger heading and half-width content from 1024px up.',
        'SideMenu slides with transform: translateX(100%) to translateX(0) and a cubic-bezier transition.',
        'On desktop, a scrollOpen class keeps the panel open while scrollY is 300px or less, and any scroll closes a panel that was opened by hand.',
        'SideMenu exposes its toggle as window.toggleActiveMenu, which the header button in every Section calls.',
        'Everything is styled with styled-components, with icons from react-icons.',
      ],
      decisions: [
        'CSS clipping over scroll listeners for the header color change, so that effect needs no JavaScript.',
        'A global window.toggleActiveMenu over React context or prop drilling: simple for one page, at the cost of a global.',
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
      "Practice building a complex, responsive layout and skeleton loading states by cloning LinkedIn's feed. Placeholders should match the shape of the real content, so the page does not jump when it loads.",
    outcomes: [
      'Three-column feed with profile, hashtags, a share box, posts, and trending topics.',
      'Shimmer placeholders shaped like each panel show before content appears.',
      'Separate mobile and desktop headers, with side columns hidden on small screens.',
      'Demonstrates skeleton loading states that keep the layout stable while content loads.',
    ],
    technical: {
      architecture:
        'A static frontend on Netlify with mock content. Layout holds an isLoading flag in state and passes it to LeftColumn, MiddleColumn, and RightColumn, which render either their Shimmer components or the real panels.',
      howItWasBuilt: [
        'A shared Skeleton styled-component animates a 400% wide linear gradient with a shimmer keyframe, with a white variant for light panels.',
        'Each panel has a loading twin (LoadingProfilePanel, LoadingFeedShare, LoadingFeedPost, LoadingTrendingPanel) built from Skeleton rows and avatar shapes.',
        'Loading is simulated with a one second setTimeout in a Layout useEffect, since the content is mock data.',
        'A global LoadingProps type ({ isLoading: boolean }) is shared by all three columns through a types.d.ts declaration.',
        'At 1180px the layout switches from the mobile header and single column to the desktop header and three columns, using styled-components media queries.',
        'A reusable Panel styled-component gives every card the same border radius and shadow.',
      ],
      decisions: [
        'A loading twin per panel over a single page spinner, so the placeholders match the final layout.',
        'One loading flag owned by Layout over per-panel state, so all columns switch to real content together.',
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
      'Build a working game loop from scratch with no framework, using only HTML canvas and JavaScript. It covers input handling, state updates, collision checks, and redrawing each frame.',
    outcomes: [
      'Steer the snake with the arrow keys and eat food to grow.',
      'The snake wraps around the edges of the board.',
      'The game ends when the snake runs into itself, and a page refresh starts a new game.',
      'Playable in the browser through a live Netlify demo.',
    ],
    technical: {
      architecture:
        'One HTML page with a canvas and one script, hosted as static files on Netlify. A setInterval loop runs every 100ms: it checks wrapping and collisions, redraws the board, snake, and food with the 2D context, then moves the snake one cell.',
      howItWasBuilt: [
        'The board is a 16 by 16 grid of 32px cells, and the snake is an array of { x, y } coordinates with the head at index 0.',
        'Each tick adds a new head in the current direction with unshift, and drops the tail with pop unless the head landed on the food.',
        'When food is eaten, it moves to a new random cell.',
        'A keydown handler maps arrow key codes to a direction and ignores the key that would reverse the snake into itself.',
        'Edge wrapping moves the head to the opposite side when it leaves the board.',
        'Self-collision compares the head with every body segment, then stops the interval and shows a game over alert.',
        'Works on desktop only, since controls are keyboard based.',
      ],
      decisions: [
        'Chose a fixed 100ms setInterval tick: the snake moves exactly one cell per tick, which keeps movement on the grid.',
        'Plain JavaScript and canvas over a framework or game engine, because the goal was to build the loop by hand.',
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
      'Demonstrates working against a real third-party API with authentication and paged results.',
    ],
    technical: {
      architecture:
        'A React app with three routes (/main, /characters, /comics), with every other path redirected to /main, once hosted on Netlify. Each page calls an axios service layer for the Marvel API v1 public gateway from the browser and pages through results with offset and limit.',
      howItWasBuilt: [
        'An axios instance holds the gateway base URL, and getAllChars and getAllComics add the ts, apikey, and hash query parameters the API requires, plus offset and limit.',
        'Characters load 60 per page and comics 20 per page.',
        'The characters page tracks the page number and offset in component state, and the Previous button is disabled on page one.',
        'Characters without a description are skipped, and each card builds its image URL from the thumbnail path and extension.',
        'Result cards and spinners use React Bootstrap.',
        'The home page uses Material UI with a ThemeProvider whose palette type switches between dark and light.',
        'Deployed to Netlify at the time; that site is no longer online.',
      ],
      decisions: [
        'Skipped characters without a description over showing empty cards, so every card has content.',
      ],
      stack: [
        { layer: 'Architecture', items: ['SPA', 'Client-side routing', 'Service layer'] },
        { layer: 'Frontend', items: ['React', 'React Router'] },
        { layer: 'UI', items: ['Material UI', 'React Bootstrap'] },
        { layer: 'Data', items: ['Marvel Developer API', 'axios'] },
        { layer: 'Infrastructure', items: ['Netlify'] },
      ],
    },
    links: [{ label: 'GitHub', url: repo('marvel-data-visualization') }],
  },
];
