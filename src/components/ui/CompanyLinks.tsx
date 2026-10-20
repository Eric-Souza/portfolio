import { Box, Chip, IconButton, Link, Tooltip, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { alpha } from '@mui/material/styles';
import type { ClientLink, RelatedLink } from '../../data/types';
import { colors } from '../../theme/theme';

interface CompanyLinksProps {
  company: string;
  companyUrl?: string;
  companyLinkedIn?: string;
  clients?: ClientLink[];
  productName?: string;
  productUrl?: string;
  relatedLinks?: RelatedLink[];
  variant?: 'default' | 'compact';
}

function LinkedInButton({ name, url }: { name: string; url: string }) {
  return (
    <Tooltip title={`${name} on LinkedIn`}>
      <IconButton
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        size="small"
        color="primary"
        aria-label={`${name} on LinkedIn`}
        sx={{ p: 0.5 }}
      >
        <LinkedInIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
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
        borderColor: alpha(colors.violet, 0.3),
        backgroundColor: alpha(colors.violet, 0.1),
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
  clients,
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

      {companyLinkedIn && <LinkedInButton name={company} url={companyLinkedIn} />}

      {clients?.map((client) => (
        <Box key={client.url} component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
          <Typography component="span" variant="body2" color="text.secondary">
            · {client.label}:
          </Typography>
          <Link
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="text.primary"
            sx={{ fontWeight: 600, fontSize: variant === 'compact' ? '0.95rem' : '1rem' }}
            aria-label={`Visit ${client.name} website`}
          >
            {client.name}
          </Link>
          {client.linkedIn && <LinkedInButton name={client.name} url={client.linkedIn} />}
        </Box>
      ))}

      {productName && productUrl && <LinkChip name={productName} url={productUrl} />}

      {productName && !productUrl && (
        <Chip
          label={productName}
          size="small"
          sx={{
            borderColor: alpha(colors.violet, 0.3),
            backgroundColor: alpha(colors.violet, 0.1),
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
