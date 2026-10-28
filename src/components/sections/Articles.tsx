import { useState } from 'react';
import {
  Box,
  Button,
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
import { colors, monoFont } from '../../theme/theme';

const MotionCard = motion.create(Card);

// Newest first, like the projects: the latest few, then the reader can ask for more.
const PAGE_SIZE = 6;

export function Articles() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const remaining = articles.length - visible;

  return (
    <Section
      id="articles"
      title="Articles"
    >
      <Grid container spacing={2}>
        {articles.slice(0, visible).map((article, index) => (
          <Grid key={article.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <MotionCard
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % PAGE_SIZE) * 0.06 }}
              whileHover={{
                y: -4,
                borderColor: alpha(colors.violet, 0.3),
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
                <CardContent sx={{ p: 2, height: '100%' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      mb: 0.5,
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="secondary.light"
                      sx={{ fontFamily: monoFont, fontWeight: 600 }}
                    >
                      Published by {article.publication}
                    </Typography>
                    <OpenInNewIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                  </Box>

                  <Typography variant="subtitle2" component="h3" sx={{ fontWeight: 700, mb: 0.5, lineHeight: 1.35 }}>
                    {article.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: '0.8rem',
                      lineHeight: 1.5,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {article.teaser}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </MotionCard>
          </Grid>
        ))}
      </Grid>

      {remaining > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
          <Button variant="outlined" onClick={() => setVisible((count) => count + PAGE_SIZE)}>
            Show {Math.min(PAGE_SIZE, remaining)} more
          </Button>
          <Button onClick={() => setVisible(articles.length)}>Show all ({articles.length})</Button>
        </Box>
      )}
    </Section>
  );
}
