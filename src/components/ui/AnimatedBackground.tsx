import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { colors } from '../../theme/theme';

const dots = (color: string) => `radial-gradient(circle at 1px 1px, ${color} 1px, transparent 0)`;

// Large soft blobs that drift on their own loops and blend where they overlap. CSS only.
const blobs = [
  { color: colors.cyan, opacity: 0.15, size: '55vmax', top: '-20%', left: '-15%', duration: 26 },
  { color: colors.violet, opacity: 0.16, size: '50vmax', top: '40%', left: '60%', duration: 32 },
  { color: '#3B82F6', opacity: 0.12, size: '45vmax', top: '60%', left: '-10%', duration: 38 },
  { color: '#D946EF', opacity: 0.08, size: '40vmax', top: '-10%', left: '55%', duration: 44 },
];

/**
 * Site-wide backdrop: a dot grid, drifting color blobs and, on mouse devices, a cyan spotlight that
 * follows the cursor and lights up the grid around it. Motion stops for prefers-reduced-motion.
 */
export function AnimatedBackground() {
  const spotlight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotlight.current;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!el || !fine.matches || reduced.matches) return;

    // Write the position straight to CSS variables, at most once a frame, so React never re-renders.
    let frame = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--x', `${event.clientX}px`);
        el.style.setProperty('--y', `${event.clientY}px`);
        el.style.opacity = '1';
      });
    };
    const hide = () => {
      el.style.opacity = '0';
    };

    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', hide);
    };
  }, []);

  return (
    <Box
      aria-hidden
      sx={{ position: 'fixed', inset: 0, overflow: 'hidden', zIndex: -1, pointerEvents: 'none' }}
    >
      {blobs.map((blob, i) => (
        <Box
          key={blob.color}
          data-drift
          sx={{
            position: 'absolute',
            top: blob.top,
            left: blob.left,
            width: blob.size,
            height: blob.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(blob.color, blob.opacity)} 0%, transparent 65%)`,
            mixBlendMode: 'screen',
            willChange: 'transform',
            animation: `blob-${i % 2} ${blob.duration}s ease-in-out infinite alternate`,
            animationDelay: `-${blob.duration / 3}s`,
          }}
        />
      ))}

      <Box
        sx={{ position: 'absolute', inset: 0, backgroundImage: dots(alpha(colors.white, 0.06)), backgroundSize: '32px 32px', opacity: 0.5 }}
      />

      <Box
        ref={spotlight}
        sx={{
          '--x': '50%',
          '--y': '50%',
          position: 'absolute',
          inset: 0,
          opacity: 0,
          transition: 'opacity 0.4s ease',
          background: `radial-gradient(500px circle at var(--x) var(--y), ${alpha(colors.cyan, 0.09)}, transparent 70%)`,
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage: dots(alpha(colors.cyan, 0.55)),
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(220px circle at var(--x) var(--y), #000, transparent 75%)',
          },
        }}
      />

      <style>{`
        @keyframes blob-0 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(12vw, 8vh) scale(1.15); }
          100% { transform: translate(-6vw, 14vh) scale(0.95); }
        }
        @keyframes blob-1 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-10vw, -12vh) scale(0.9); }
          100% { transform: translate(8vw, -4vh) scale(1.1); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-drift] { animation: none !important; }
        }
      `}</style>
    </Box>
  );
}
