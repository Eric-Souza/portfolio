import { Avatar, Box, Button, Chip, Container, Grid, Link, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { CopyIconButton } from '../ui/CopyIconButton';
import { MarkedText } from '../ui/Highlighted';
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

// The first screen doubles as the About section: who I am, what I do, and how to reach me.
export function Hero() {
  return (
    <Box
      id="about"
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
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid
          container
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          spacing={{ xs: 3, md: 5 }}
          sx={{ alignItems: 'center' }}
        >
          <Grid size={{ xs: 12, md: 3 }} component={motion.div} variants={itemVariants}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'center' } }}>
              <Avatar
                src={profile.avatarSrc}
                alt={profile.name}
                sx={{
                  width: { xs: 112, md: 220 },
                  height: { xs: 112, md: 220 },
                  bgcolor: alpha(colors.cyan, 0.1),
                  border: `2px solid ${alpha(colors.cyan, 0.3)}`,
                  boxShadow: `0 0 40px ${alpha(colors.cyan, 0.15)}`,
                  '& img': { objectFit: 'cover' },
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 9 }}>
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
              sx={{ mb: 3, maxWidth: 820, lineHeight: 1.8 }}
            >
              <MarkedText text={profile.tagline} />
            </Typography>
          </motion.div>

          {profile.about.map((paragraph) => (
            <motion.div key={paragraph.slice(0, 30)} variants={itemVariants}>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, maxWidth: 820, lineHeight: 1.8 }}>
                <MarkedText text={paragraph} />
              </Typography>
            </motion.div>
          ))}

          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 4 }}>
              {profile.highlights.map((highlight) => (
                <Chip
                  key={highlight}
                  label={highlight}
                  size="small"
                  sx={{
                    fontFamily: monoFont,
                    fontSize: '0.68rem',
                    '& .MuiChip-label': { px: 0.75 },
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
                href={profile.emailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<EmailIcon />}
                aria-label={`Send email to ${profile.email}`}
              >
                Email Me
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
              <Button
                variant="outlined"
                size="large"
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<LinkedInIcon />}
              >
                LinkedIn
              </Button>
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
              <CopyIconButton
                value={profile.email}
                text={profile.email}
                label="email address"
                successMessage="Email copied to clipboard!"
                textSx={{
                  fontFamily: monoFont,
                  color: 'primary.main',
                  wordBreak: 'break-all',
                  '&:hover': { textDecoration: 'underline' },
                }}
              />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              <Link
                href={profile.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="hover"
                aria-label={`${profile.location} on Google Maps`}
              >
                {profile.location}
              </Link>
              <Separator />
              {profile.timezone}
              <Separator />
              {profile.availability}
            </Typography>
          </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function Separator() {
  return (
    <Box component="span" sx={{ mx: 1 }}>
      ·
    </Box>
  );
}
