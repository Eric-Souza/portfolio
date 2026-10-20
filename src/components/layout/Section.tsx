import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { monoFont } from '../../theme/theme';
import { NextSectionButton } from '../ui/NextSectionButton';

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
        position: 'relative',
        py: { xs: 10, md: 14 },
        scrollMarginTop: '80px',
        // On desktop each section fills at least a screen, so short ones like About don't share it.
        minHeight: { md: '100svh' },
        display: { md: 'flex' },
        flexDirection: 'column',
        justifyContent: 'center',
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
      <NextSectionButton from={id} />
    </Box>
  );
}
