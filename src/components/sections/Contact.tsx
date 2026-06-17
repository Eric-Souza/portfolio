import { Box, Button, Card, CardContent, Fab, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import { profile } from '../../data/profile';
import { Section } from '../layout/Section';
import { CopyEmailButton } from '../ui/CopyEmailButton';
import { SocialLinks } from '../ui/SocialLinks';
import { monoFont } from '../../theme/theme';
import { scrollToSection } from '../../hooks/useActiveSection';

export function Contact() {
  return (
    <>
      <Section
        id="contact"
        title="Get In Touch"
        subtitle="Let's talk about your next project or opportunity."
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card
            sx={{
              background: `linear-gradient(135deg, ${alpha('#12182A', 0.9)} 0%, ${alpha('#1a1040', 0.6)} 100%)`,
              border: `1px solid ${alpha('#00E5FF', 0.15)}`,
            }}
          >
            <CardContent
              sx={{
                p: { xs: 3, md: 5 },
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h4"
                component="p"
                sx={{
                  fontFamily: monoFont,
                  color: 'primary.main',
                  mb: 1,
                  wordBreak: 'break-all',
                }}
              >
                {profile.email}
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {profile.location} · {profile.availability}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1.5,
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                <CopyEmailButton email={profile.email} size="large" />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <SocialLinks links={profile.links} size="large" />
              </Box>

              <Button
                variant="outlined"
                size="large"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<DownloadIcon />}
                aria-label="Download resume PDF"
              >
                Download Resume
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </Section>

      <Fab
        color="primary"
        aria-label="Go to contact section"
        onClick={() => scrollToSection('contact')}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          display: { xs: 'flex', md: 'none' },
        }}
      >
        <EmailIcon />
      </Fab>
    </>
  );
}
