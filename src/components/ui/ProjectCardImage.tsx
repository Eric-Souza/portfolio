import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';

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
        borderBottom: `1px solid ${alpha('#FFFFFF', 0.06)}`,
        bgcolor: '#0B0F19',
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
