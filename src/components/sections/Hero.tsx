import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { AnimatedBackground } from '../ui/AnimatedBackground';
import { scrollToSection } from '../../hooks/useActiveSection';
import { monoFont } from '../../theme/theme';

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
              // senior_full_stack_engineer
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
                background: 'linear-gradient(135deg, #E8ECF4 0%, #00E5FF 100%)',
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
            <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: 'wrap' }}>
              {profile.stats.map((stat) => (
                <Chip
                  key={stat.label}
                  label={`${stat.value} ${stat.label}`}
                  sx={{
                    fontFamily: monoFont,
                    fontSize: '0.8rem',
                    borderColor: 'primary.dark',
                  }}
                  variant="outlined"
                />
              ))}
            </Stack>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<EmailIcon />}
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
              <Button
                variant="contained"
                size="large"
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<WhatsAppIcon />}
                aria-label={`Message Eric on WhatsApp at ${profile.whatsapp}`}
                sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#1DA851' } }}
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
            </Stack>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
