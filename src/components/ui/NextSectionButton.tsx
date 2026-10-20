import { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { navItems } from '../../data/profile';
import type { NavItem } from '../../data/types';
import { scrollToSection } from '../../hooks/useActiveSection';
import { colors } from '../../theme/theme';

// Sections scroll to 80px below the top (their scrollMarginTop), so anything lower hasn't been reached yet.
const SECTION_TOP = 82;

// The first section still below the navbar, or null once the page is scrolled to the bottom.
function findNext(): NavItem | null {
  const { scrollHeight } = document.documentElement;
  if (window.innerHeight + window.scrollY >= scrollHeight - 2) return null;
  return (
    navItems.find((item) => {
      const top = document.getElementById(item.id)?.getBoundingClientRect().top;
      return top !== undefined && top > SECTION_TOP;
    }) ?? null
  );
}

/** Caret fixed to the bottom of the screen that scrolls to the next section's title. */
export function NextSectionButton() {
  const [next, setNext] = useState<NavItem | null>(null);

  useEffect(() => {
    const update = () => setNext(findNext());
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  if (!next) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 16, md: 24 },
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: { xs: 'flex-end', md: 'center' },
        px: 2,
        pointerEvents: 'none',
        zIndex: 1000,
      }}
    >
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ pointerEvents: 'auto' }}
      >
        <IconButton
          onClick={() => scrollToSection(next.id)}
          aria-label={`Scroll to ${next.label}`}
          sx={{
            color: 'primary.main',
            border: `1px solid ${alpha(colors.cyan, 0.3)}`,
            backgroundColor: alpha(colors.surface, 0.85),
            backdropFilter: 'blur(8px)',
            '&:hover': { backgroundColor: alpha(colors.surface, 0.95) },
          }}
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </motion.div>
    </Box>
  );
}
