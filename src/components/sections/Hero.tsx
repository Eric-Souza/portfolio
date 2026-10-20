import { Box, Button, Chip, Container, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { AnimatedBackground } from '../ui/AnimatedBackground';
import { NextSectionButton } from '../ui/NextSectionButton';
import { scrollToSection } from '../../hooks/useActiveSection';
import { colors, monoFont } from '../../theme/theme';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  return (
    <Box
      id="hero"
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 10,
        pb: 6,
        overflow: 'hidden',
      }}
    >
      <AnimatedBackground />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Typography
              variant="overline"
              color="primary"
              sx={{ fontFamily: monoFont, letterSpacing: '0.15em', fontWeight: 600 }}
            >
              // sr_full_stack_and_ai_engineer
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontSize: { xs: '2.25rem', sm: '3rem', md: '3.75rem' },
                mt: 1,
                mb: 1,
                background: `linear-gradient(135deg, ${colors.textPrimary} 0%, ${colors.cyan} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {profile.name}
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 2, fontWeight: 500, maxWidth: 700 }}
            >
              {profile.title}
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3, maxWidth: 640, lineHeight: 1.8 }}
            >
              {profile.tagline}
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
              {profile.highlights.map((highlight) => (
                <Chip
                  key={highlight}
                  label={highlight}
                  sx={{
                    fontFamily: monoFont,
                    fontSize: '0.8rem',
                    borderColor: 'primary.dark',
                  }}
                  variant="outlined"
                />
              ))}
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box
              sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, flexWrap: 'wrap', gap: 2 }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<EmailIcon />}
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
              <Button
                variant="outlined"
                size="large"
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<WhatsAppIcon />}
                aria-label={`Message Eric on WhatsApp at ${profile.whatsapp}`}
                sx={{
                  color: colors.whatsapp,
                  borderColor: alpha(colors.whatsapp, 0.5),
                  '&:hover': { borderColor: colors.whatsapp, bgcolor: alpha(colors.whatsapp, 0.08) },
                }}
              >
                WhatsApp
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<DownloadIcon />}
              >
                Download Resume
              </Button>
              <Button
                variant="outlined"
                size="large"
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubIcon />}
              >
                View GitHub
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
      <NextSectionButton from="hero" />
    </Box>
  );
}
