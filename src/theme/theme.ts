import { createTheme, alpha } from '@mui/material/styles';

const cyan = '#00E5FF';
const violet = '#8B5CF6';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: cyan, light: '#66EEFF', dark: '#00B8CC' },
    secondary: { main: violet, light: '#A78BFA', dark: '#6D28D9' },
    background: {
      default: '#0B0F19',
      paper: alpha('#12182A', 0.85),
    },
    text: {
      primary: '#E8ECF4',
      secondary: '#94A3B8',
    },
    divider: alpha('#FFFFFF', 0.08),
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
        html: { scrollBehavior: 'smooth' },
        '::selection': {
          backgroundColor: alpha(cyan, 0.3),
          color: '#FFFFFF',
        },
        body: {
          backgroundColor: '#0B0F19',
          minHeight: '100vh',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha('#0B0F19', 0.75),
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${alpha('#FFFFFF', 0.08)}`,
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
          border: `1px solid ${alpha('#FFFFFF', 0.08)}`,
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
    MuiFab: {
      styleOverrides: {
        primary: {
          boxShadow: `0 0 20px ${alpha(cyan, 0.3)}`,
        },
      },
    },
  },
});

export const glassCardSx = {
  backgroundColor: alpha('#12182A', 0.6),
  backdropFilter: 'blur(12px)',
  border: `1px solid ${alpha('#FFFFFF', 0.08)}`,
  borderRadius: 3,
};

export const monoFont = '"JetBrains Mono", monospace';
