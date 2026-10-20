import { Box, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { navItems } from '../../data/profile';
import { scrollToSection } from '../../hooks/useActiveSection';
import { colors } from '../../theme/theme';

interface NextSectionButtonProps {
  /** Id of the section the button sits in. */
  from: string;
}

const sectionOrder = ['hero', ...navItems.map((item) => item.id)];

/**
 * Caret pinned to the bottom of a section that scrolls to the one after it. Desktop only, where each section
 * fills the screen. Renders nothing on the last section.
 */
export function NextSectionButton({ from }: NextSectionButtonProps) {
  const next = navItems.find((item) => item.id === sectionOrder[sectionOrder.indexOf(from) + 1]);
  if (!next) return null;

  return (
    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 24, left: '50%', marginLeft: -20, zIndex: 1 }}
      >
        <IconButton
          onClick={() => scrollToSection(next.id)}
          aria-label={`Scroll to ${next.label}`}
          sx={{
            color: 'primary.main',
            border: `1px solid ${alpha(colors.cyan, 0.25)}`,
            '&:hover': { backgroundColor: alpha(colors.cyan, 0.08) },
          }}
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </motion.div>
    </Box>
  );
}
