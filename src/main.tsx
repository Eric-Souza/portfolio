import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/600.css';
import { AppProviders } from './AppProviders';
import { createEmotionCache } from './emotionCache';

const container = document.getElementById('root')!;
const app = <AppProviders cache={createEmotionCache()} />;

// Production builds are prerendered (scripts/prerender.js); the dev server serves an empty root.
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
