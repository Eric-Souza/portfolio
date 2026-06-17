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
        py: { xs: 8, md: 12 },
        scrollMarginTop: '80px',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="overline"
            color="primary"
            sx={{ fontFamily: monoFont, letterSpacing: '0.15em', fontWeight: 600 }}
          >
            // {id.replace('-', '_')}
          </Typography>
          <Typography variant="h3" component="h2" sx={{ mb: subtitle ? 1 : 4, mt: 0.5 }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 640 }}>
              {subtitle}
            </Typography>
          )}
        </motion.div>
        {children}
      </Container>
    </Box>
  );
}
