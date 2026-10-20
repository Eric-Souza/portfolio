import { useId, useState } from 'react';
import { Box, Button, Card, CardContent, Grid, Tab, Tabs, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import type { CaseStudy, ProjectLink } from '../../data/types';
import { industryLabels, kindLabels } from '../../data/caseStudies';
import { colors, monoFont } from '../../theme/theme';
import { TechChips } from './TechChips';
import { CompanyLinks } from './CompanyLinks';
import { Highlighted } from './Highlighted';

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

type View = 'business' | 'technical';

const MotionCard = motion.create(Card);

// Client work is framed as business results; personal and learning work as what the thing does.
function businessCopy(study: CaseStudy) {
  return study.kind === 'client'
    ? { tab: 'Business impact', problem: 'The challenge', outcomes: 'What we achieved' }
    : { tab: 'Overview', problem: 'The goal', outcomes: 'What it does' };
}

const isGitHub = (link: ProjectLink) => link.url.startsWith('https://github.com/');

const monthYear = (date: string) =>
  new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });

// Client work shows the span of the role ('2022–2025', '2025–present'); repos show their last push.
function timeframe(study: CaseStudy) {
  if (study.kind === 'client') {
    const end = study.ongoing ? 'present' : study.updated?.slice(0, 4);
    return study.year && end && end !== String(study.year) ? `${study.year}–${end}` : study.year;
  }
  return study.updated ? `Updated ${monthYear(study.updated)}` : study.year;
}

function Label({ children }: { children: string }) {
  return (
    <Typography
      variant="overline"
      component="h4"
      color="primary"
      sx={{ fontWeight: 700, letterSpacing: '0.1em', display: 'block', mb: 0.5 }}
    >
      {children}
    </Typography>
  );
}

function BusinessView({ study }: { study: CaseStudy }) {
  const copy = businessCopy(study);

  return (
    <>
      <Box sx={{ mb: 2.5 }}>
        <Label>{copy.problem}</Label>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
          <Highlighted text={study.challenge} />
        </Typography>
      </Box>

      {study.metrics && study.metrics.length > 0 && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 2.5 }}>
          {study.metrics.map((metric) => (
            <Box key={metric.label}>
              <Typography
                sx={{ fontFamily: monoFont, fontWeight: 700, fontSize: '1.5rem', color: 'primary.main' }}
              >
                {metric.value}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {metric.label}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      <Label>{copy.outcomes}</Label>
      <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
        {study.outcomes.map((outcome) => (
          <Box
            component="li"
            key={outcome}
            sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start', mb: 1.25 }}
          >
            <CheckCircleOutlineIcon
              aria-hidden
              sx={{ fontSize: 18, color: 'primary.main', mt: '3px', flexShrink: 0 }}
            />
            <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
              <Highlighted text={outcome} />
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}

function TechnicalView({ study }: { study: CaseStudy }) {
  const { architecture, howItWasBuilt, stack } = study.technical;

  return (
    <>
      <Box sx={{ mb: 2.5 }}>
        <Label>Architecture</Label>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
          <Highlighted text={architecture} />
        </Typography>
      </Box>

      <Box sx={{ mb: 2.5 }}>
        <Label>How it was built</Label>
        <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
          {howItWasBuilt.map((step) => (
            <Typography
              component="li"
              key={step}
              variant="body2"
              color="text.secondary"
              sx={{ mb: 1, lineHeight: 1.7 }}
            >
              <Highlighted text={step} />
            </Typography>
          ))}
        </Box>
      </Box>

      <Label>Stack</Label>
      <Box
        component="dl"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '120px 1fr' },
          columnGap: 2,
          rowGap: 1.25,
          m: 0,
        }}
      >
        {stack.map(({ layer, items }) => (
          <Box key={layer} sx={{ display: 'contents' }}>
            <Typography
              component="dt"
              variant="caption"
              color="text.secondary"
              sx={{ fontFamily: monoFont, pt: { sm: 0.5 } }}
            >
              {layer}
            </Typography>
            <Box component="dd" sx={{ m: 0 }}>
              <TechChips items={items} />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const [view, setView] = useState<View>('business');
  const baseId = useId();
  const tabId = (v: View) => `${baseId}-tab-${v}`;
  const panelId = (v: View) => `${baseId}-panel-${v}`;
  const copy = businessCopy(study);
  const meta = [kindLabels[study.kind], industryLabels[study.industry], timeframe(study)].filter(Boolean);

  return (
    <MotionCard
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: Math.min(index, 2) * 0.1 }}
      whileHover={{ borderColor: alpha(colors.cyan, 0.3) }}
    >
      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
        <Grid container spacing={{ xs: 3, md: 5 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {study.tags.map((tag) => (
                <Typography
                  key={tag}
                  variant="caption"
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    bgcolor: alpha(colors.violet, 0.15),
                    color: 'secondary.light',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {tag}
                </Typography>
              ))}
            </Box>

            <Typography
              variant="caption"
              component="p"
              sx={{
                fontFamily: monoFont,
                color: study.kind === 'client' ? 'primary.main' : 'text.secondary',
                mb: 0.5,
              }}
            >
              {meta.join(' · ')}
            </Typography>

            <Typography variant="h5" component="h3" gutterBottom>
              {study.title}
            </Typography>

            <Box sx={{ mb: 2 }}>
              <CompanyLinks
                company={study.company}
                companyUrl={study.companyUrl}
                companyLinkedIn={study.companyLinkedIn}
                clients={study.clients}
                productName={study.productName}
                productUrl={study.productUrl}
                relatedLinks={study.relatedLinks}
              />
            </Box>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontFamily: monoFont, fontSize: '0.8rem', mb: 2 }}
            >
              {study.role}
            </Typography>

            <Typography
              sx={{
                fontSize: '1.15rem',
                fontWeight: 500,
                lineHeight: 1.5,
                pl: 2,
                borderLeft: `3px solid ${alpha(colors.cyan, 0.6)}`,
              }}
            >
              {study.headline}
            </Typography>

            {study.links && study.links.length > 0 && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3 }}>
                {study.links.map((link) => (
                  <Button
                    key={link.url}
                    size="small"
                    variant="outlined"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={isGitHub(link) ? <GitHubIcon /> : <OpenInNewIcon />}
                    aria-label={`${study.title}: ${link.label}${isGitHub(link) ? ' on GitHub' : ''}`}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            )}
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Tabs
              value={view}
              onChange={(_, next: View) => setView(next)}
              aria-label={`${study.title} details`}
              sx={{ mb: 2.5, minHeight: 40, borderBottom: 1, borderColor: 'divider' }}
            >
              <Tab
                value="business"
                label={copy.tab}
                id={tabId('business')}
                aria-controls={panelId('business')}
                sx={{ minHeight: 40, px: 0, mr: 3 }}
              />
              <Tab
                value="technical"
                label="Technical breakdown"
                id={tabId('technical')}
                aria-controls={panelId('technical')}
                sx={{ minHeight: 40, px: 0 }}
              />
            </Tabs>

            <Box role="tabpanel" id={panelId(view)} aria-labelledby={tabId(view)}>
              {view === 'business' ? <BusinessView study={study} /> : <TechnicalView study={study} />}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </MotionCard>
  );
}
