import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { monoFont } from '../../theme/theme';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        pt: { xs: 6, md: 6 },
        pb: { xs: 8, md: 10 },
        scrollMarginTop: '80px',
        // On desktop each section fills the screen below the navbar, so short ones like About don't share it
        // and scrolling to a section lands on its title.
        minHeight: { md: 'calc(100svh - 80px)' },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {/* The mono label is the visible heading; the title stays as its accessible name. */}
          <Typography
            variant="overline"
            component="h2"
            color="primary"
            aria-label={title}
            sx={{
              display: 'block',
              fontFamily: monoFont,
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              letterSpacing: '0.15em',
              fontWeight: 600,
              lineHeight: 1.6,
              mb: subtitle ? 1 : 3,
            }}
          >
            // {id.replace('-', '_')}
          </Typography>
          {subtitle && (
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 640 }}>
              {subtitle}
            </Typography>
          )}
        </motion.div>
        {children}
      </Container>
    </Box>
  );
}
