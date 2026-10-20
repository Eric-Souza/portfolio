import { renderToString } from 'react-dom/server';
import createEmotionServer from '@emotion/server/create-instance';
import { AppProviders } from './AppProviders';
import { createEmotionCache } from './emotionCache';

export function render() {
  const cache = createEmotionCache();
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

  const html = renderToString(<AppProviders cache={cache} />);
  const styles = constructStyleTagsFromChunks(extractCriticalToChunks(html));

  return { html, styles };
}
