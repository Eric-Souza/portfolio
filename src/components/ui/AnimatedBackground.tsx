import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { colors } from '../../theme/theme';

export function AnimatedBackground() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 1px 1px, ${alpha(colors.white, 0.06)} 1px, transparent 0)
          `,
          backgroundSize: '32px 32px',
          opacity: 0.5,
        }}
      />
      <Box
        data-drift
        sx={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(colors.cyan, 0.12)} 0%, transparent 70%)`,
          animation: 'drift 12s ease-in-out infinite alternate',
        }}
      />
      <Box
        data-drift
        sx={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(colors.violet, 0.1)} 0%, transparent 70%)`,
          animation: 'drift 15s ease-in-out infinite alternate-reverse',
        }}
      />
      <style>{`
        @keyframes drift {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(30px, 20px) scale(1.05); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-drift] { animation: none !important; }
        }
      `}</style>
    </Box>
  );
}
