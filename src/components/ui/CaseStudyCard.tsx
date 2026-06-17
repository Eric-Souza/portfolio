import { Box, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import type { CaseStudy } from '../../data/types';
import { TechChips } from './TechChips';
import { CompanyLinks } from './CompanyLinks';

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

const MotionCard = motion.create(Card);

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -4,
        boxShadow: `0 12px 40px ${alpha('#00E5FF', 0.12)}`,
        borderColor: alpha('#00E5FF', 0.3),
      }}
      sx={{ height: '100%' }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {study.tags.map((tag) => (
            <Typography
              key={tag}
              variant="caption"
              sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                bgcolor: alpha('#8B5CF6', 0.15),
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

        <Typography variant="h5" component="h3" gutterBottom>
          {study.title}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <CompanyLinks
            company={study.company}
            companyUrl={study.companyUrl}
            companyLinkedIn={study.companyLinkedIn}
            productName={study.productName}
            productUrl={study.productUrl}
            relatedLinks={study.relatedLinks}
          />
        </Box>

        {(['problem', 'approach', 'impact'] as const).map((key) => (
          <Box key={key} sx={{ mb: 2 }}>
            <Typography
              variant="overline"
              color="primary"
              sx={{ fontWeight: 700, letterSpacing: '0.1em' }}
            >
              {key}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              {study[key]}
            </Typography>
          </Box>
        ))}

        <TechChips items={study.stack} />
      </CardContent>
    </MotionCard>
  );
}
