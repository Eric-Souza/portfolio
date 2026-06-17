import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/Download';
import { navItems } from '../../data/profile';
import { useActiveSection, scrollToSection } from '../../hooks/useActiveSection';
import { monoFont } from '../../theme/theme';

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const activeSection = useActiveSection();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  const handleNav = (id: string) => {
    scrollToSection(id);
    setDrawerOpen(false);
  };

  const navLinks = (
    <>
      {navItems.map((item) => (
        <Button
          key={item.id}
          onClick={() => handleNav(item.id)}
          sx={{
            color: activeSection === item.id ? 'primary.main' : 'text.secondary',
            fontWeight: activeSection === item.id ? 700 : 500,
            '&:hover': { color: 'primary.main' },
          }}
        >
          {item.label}
        </Button>
      ))}
    </>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: scrolled ? undefined : 'transparent' }}>
        <Toolbar sx={{ justifyContent: 'space-between', gap: 2 }}>
          <Typography
            component="button"
            onClick={() => handleNav('hero')}
            sx={{
              fontFamily: monoFont,
              fontWeight: 700,
              fontSize: '1rem',
              color: 'primary.main',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              p: 0,
            }}
            aria-label="Scroll to top"
          >
            {'<Eric />'}
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {navLinks}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button
              variant="contained"
              size="small"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<DownloadIcon />}
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
              aria-label="Download resume PDF"
            >
              Resume
            </Button>
            <IconButton
              sx={{ display: { md: 'none' } }}
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 260, pt: 2 }} role="presentation">
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.id}
                selected={activeSection === item.id}
                onClick={() => handleNav(item.id)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
            <ListItemButton
              component="a"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemText primary="Download Resume" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
