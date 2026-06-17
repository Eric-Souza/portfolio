import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';

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
            radial-gradient(circle at 1px 1px, ${alpha('#FFFFFF', 0.06)} 1px, transparent 0)
          `,
          backgroundSize: '32px 32px',
          opacity: 0.5,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha('#00E5FF', 0.12)} 0%, transparent 70%)`,
          animation: 'drift 12s ease-in-out infinite alternate',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha('#8B5CF6', 0.1)} 0%, transparent 70%)`,
          animation: 'drift 15s ease-in-out infinite alternate-reverse',
        }}
      />
      <style>{`
        @keyframes drift {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(30px, 20px) scale(1.05); }
        }
      `}</style>
    </Box>
  );
}
