import { Box, Chip, IconButton, Link, Tooltip, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { alpha } from '@mui/material/styles';
import type { RelatedLink } from '../../data/types';

interface CompanyLinksProps {
  company: string;
  companyUrl?: string;
  companyLinkedIn?: string;
  productName?: string;
  productUrl?: string;
  relatedLinks?: RelatedLink[];
  variant?: 'default' | 'compact';
}

function LinkChip({ name, url }: RelatedLink) {
  return (
    <Chip
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      clickable
      label={name}
      size="small"
      icon={<OpenInNewIcon sx={{ fontSize: '14px !important' }} />}
      sx={{
        borderColor: alpha('#8B5CF6', 0.3),
        backgroundColor: alpha('#8B5CF6', 0.1),
        color: 'secondary.light',
        '& .MuiChip-icon': { color: 'secondary.light' },
      }}
      variant="outlined"
      aria-label={`Visit ${name}`}
    />
  );
}

export function CompanyLinks({
  company,
  companyUrl,
  companyLinkedIn,
  productName,
  productUrl,
  relatedLinks,
  variant = 'default',
}: CompanyLinksProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: variant === 'compact' ? 0.5 : 1,
        mt: variant === 'compact' ? 0 : 0.5,
      }}
    >
      {companyUrl ? (
        <Link
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          color="primary"
          sx={{ fontWeight: 600, fontSize: variant === 'compact' ? '0.95rem' : '1rem' }}
          aria-label={`Visit ${company} website`}
        >
          {company}
        </Link>
      ) : (
        <Typography
          component="span"
          color="primary"
          sx={{ fontWeight: 600, fontSize: variant === 'compact' ? '0.95rem' : '1rem' }}
        >
          {company}
        </Typography>
      )}

      {companyLinkedIn && (
        <Tooltip title={`${company} on LinkedIn`}>
          <IconButton
            component="a"
            href={companyLinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            color="primary"
            aria-label={`${company} on LinkedIn`}
            sx={{ p: 0.5 }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      )}

      {productName && productUrl && <LinkChip name={productName} url={productUrl} />}

      {productName && !productUrl && (
        <Chip
          label={productName}
          size="small"
          sx={{
            borderColor: alpha('#8B5CF6', 0.3),
            backgroundColor: alpha('#8B5CF6', 0.1),
            color: 'secondary.light',
          }}
          variant="outlined"
        />
      )}

      {relatedLinks?.map((link) => (
        <LinkChip key={link.url} name={link.name} url={link.url} />
      ))}
    </Box>
  );
}
