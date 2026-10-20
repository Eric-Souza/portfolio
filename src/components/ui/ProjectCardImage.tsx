import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { colors } from '../../theme/theme';

interface ProjectCardImageProps {
  projectId: string;
  alt: string;
}

export function ProjectCardImage({ projectId, alt }: ProjectCardImageProps) {
  return (
    <Box
      sx={{
        height: 160,
        overflow: 'hidden',
        borderBottom: `1px solid ${alpha(colors.white, 0.06)}`,
        bgcolor: colors.background,
      }}
    >
      <Box
        component="img"
        src={`/projects/${projectId}.svg`}
        alt={alt}
        loading="lazy"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </Box>
  );
}
