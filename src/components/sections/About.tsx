import { Avatar, Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { Section } from '../layout/Section';
import { alpha } from '@mui/material/styles';

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="Sr Full Stack Engineer and Tech Lead who can lead and build.">
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Avatar
                src={profile.avatarSrc}
                sx={{
                  width: 200,
                  height: 200,
                  bgcolor: alpha('#00E5FF', 0.1),
                  border: `2px solid ${alpha('#00E5FF', 0.3)}`,
                  boxShadow: `0 0 40px ${alpha('#00E5FF', 0.15)}`,
                  '& img': { objectFit: 'cover' },
                }}
                alt="Eric de Oliveira Souza"
              />
            </Box>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          {profile.about.map((paragraph, index) => (
            <motion.div
              key={paragraph.slice(0, 30)}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 2.5, lineHeight: 1.8, fontSize: '1.05rem' }}
              >
                {paragraph}
              </Typography>
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </Section>
  );
}
