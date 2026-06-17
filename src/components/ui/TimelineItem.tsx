import { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { alpha } from '@mui/material/styles';
import type { Experience } from '../../data/types';
import { monoFont } from '../../theme/theme';
import { CompanyLinks } from './CompanyLinks';

interface TimelineItemProps {
  item: Experience;
  defaultExpanded?: boolean;
}

export function TimelineItem({ item, defaultExpanded = false }: TimelineItemProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <Box sx={{ display: 'flex', gap: 2, position: 'relative' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 2,
        }}
      >
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            boxShadow: `0 0 12px ${alpha('#00E5FF', 0.5)}`,
            flexShrink: 0,
          }}
        />
        <Box
          sx={{
            width: 2,
            flex: 1,
            bgcolor: alpha('#FFFFFF', 0.1),
            mt: 1,
          }}
        />
      </Box>

      <Accordion
        expanded={expanded}
        onChange={(_, isExpanded) => setExpanded(isExpanded)}
        disableGutters
        elevation={0}
        sx={{
          flex: 1,
          mb: 2,
          backgroundColor: alpha('#12182A', 0.5),
          border: `1px solid ${alpha('#FFFFFF', 0.08)}`,
          borderRadius: '12px !important',
          '&:before': { display: 'none' },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box>
            <Typography variant="h6" component="h3">
              {item.role}
            </Typography>
            <CompanyLinks
              company={item.company}
              companyUrl={item.companyUrl}
              companyLinkedIn={item.companyLinkedIn}
              productName={item.productName}
              productUrl={item.productUrl}
              variant="compact"
            />
            <Typography color="text.secondary" sx={{ fontWeight: 500, mt: 0.5 }}>
              {item.domain}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontFamily: monoFont, mt: 0.5 }}
            >
              {item.period}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
            {item.bullets.map((bullet) => (
              <Typography
                key={bullet.slice(0, 40)}
                component="li"
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1.5, lineHeight: 1.7 }}
              >
                {bullet}
              </Typography>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
