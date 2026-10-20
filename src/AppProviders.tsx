import { StrictMode } from 'react';
import { CacheProvider, type EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { MotionConfig } from 'framer-motion';
import { theme } from './theme/theme';
import App from './App';

export function AppProviders({ cache }: { cache: EmotionCache }) {
  return (
    <StrictMode>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MotionConfig reducedMotion="user">
            <App />
          </MotionConfig>
        </ThemeProvider>
      </CacheProvider>
    </StrictMode>
  );
}
