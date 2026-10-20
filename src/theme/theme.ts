import { createTheme, alpha } from '@mui/material/styles';

export const colors = {
  cyan: '#00E5FF',
  violet: '#8B5CF6',
  background: '#0B0F19',
  surface: '#12182A',
  surfaceViolet: '#1A1040',
  textPrimary: '#E8ECF4',
  textSecondary: '#94A3B8',
  white: '#FFFFFF',
  whatsapp: '#25D366',
  whatsappHover: '#1DA851',
};

const { cyan, violet } = colors;

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: cyan, light: '#66EEFF', dark: '#00B8CC' },
    secondary: { main: violet, light: '#A78BFA', dark: '#6D28D9' },
    background: {
      default: colors.background,
      paper: alpha(colors.surface, 0.85),
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    divider: alpha(colors.white, 0.08),
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Space Grotesk", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, letterSpacing: '-0.02em' },
    h3: { fontWeight: 600, letterSpacing: '-0.01em' },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
          '@media (prefers-reduced-motion: reduce)': { scrollBehavior: 'auto' },
        },
        '::selection': {
          backgroundColor: alpha(cyan, 0.3),
          color: colors.white,
        },
        body: {
          backgroundColor: colors.background,
          minHeight: '100vh',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(colors.background, 0.75),
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${alpha(colors.white, 0.08)}`,
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          '&.MuiButton-containedPrimary': {
            boxShadow: `0 0 20px ${alpha(cyan, 0.25)}`,
            '&:hover': {
              boxShadow: `0 0 28px ${alpha(cyan, 0.4)}`,
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: `1px solid ${alpha(colors.white, 0.08)}`,
          backdropFilter: 'blur(12px)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.75rem',
        },
      },
    },
  },
});

export const monoFont = '"JetBrains Mono", monospace';
