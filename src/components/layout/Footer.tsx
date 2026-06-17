import { Box, Container, IconButton, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { profile } from '../../data/profile';
import { SocialLinks } from '../ui/SocialLinks';
import { scrollToSection } from '../../hooks/useActiveSection';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {year} {profile.name}. Built with React, MUI & Framer Motion.
        </Typography>

        <SocialLinks links={profile.links} size="small" />

        <IconButton
          onClick={() => scrollToSection('hero')}
          aria-label="Scroll back to top"
          color="primary"
          size="small"
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Container>
    </Box>
  );
}
