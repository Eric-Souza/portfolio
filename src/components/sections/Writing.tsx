import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import { articles } from '../../data/articles';
import { Section } from '../layout/Section';
import { monoFont } from '../../theme/theme';

const MotionCard = motion.create(Card);

export function Writing() {
  return (
    <Section
      id="writing"
      title="Writing"
      subtitle="Articles on backend architecture, cloud, and frontend work."
    >
      <Grid container spacing={3}>
        {articles.map((article, index) => (
          <Grid key={article.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <MotionCard
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{
                y: -4,
                borderColor: alpha('#8B5CF6', 0.3),
              }}
              sx={{ height: '100%' }}
            >
              <CardActionArea
                component="a"
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ height: '100%' }}
                aria-label={`Read article: ${article.title}`}
              >
                <CardContent sx={{ p: 3, height: '100%' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="secondary.light"
                      sx={{ fontFamily: monoFont, fontWeight: 600 }}
                    >
                      {article.publication} · {article.date}
                      {article.claps ? ` · ${article.claps} claps` : ''}
                    </Typography>
                    <OpenInNewIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                  </Box>

                  <Typography variant="h6" component="h3" sx={{ mb: 1.5, lineHeight: 1.4 }}>
                    {article.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {article.teaser}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
