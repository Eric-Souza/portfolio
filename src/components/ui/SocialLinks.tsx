import { IconButton, Stack, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import type { SocialLinks } from '../../data/types';

interface SocialLinksProps {
  links: SocialLinks;
  size?: 'small' | 'medium' | 'large';
  /** Show only these networks, e.g. where another button already links to GitHub. */
  only?: (keyof SocialLinks)[];
}

const socialConfig = [
  { key: 'github' as const, label: 'GitHub', Icon: GitHubIcon },
  { key: 'linkedin' as const, label: 'LinkedIn', Icon: LinkedInIcon },
  { key: 'medium' as const, label: 'Medium', Icon: ArticleIcon },
];

export function SocialLinks({ links, size = 'medium', only }: SocialLinksProps) {
  return (
    <Stack direction="row" spacing={1}>
      {socialConfig.filter(({ key }) => !only || only.includes(key)).map(({ key, label, Icon }) => (
        <Tooltip key={key} title={label}>
          <IconButton
            component="a"
            href={links[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Eric's ${label} profile`}
            color="primary"
            size={size}
          >
            <Icon />
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  );
}
