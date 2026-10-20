import createCache from '@emotion/cache';

// Same cache key on server and client so hydration reuses the prerendered style tags.
export const createEmotionCache = () => createCache({ key: 'css' });
