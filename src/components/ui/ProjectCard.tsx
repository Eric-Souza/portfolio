import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import type { Project } from '../../data/types';
import { TechChips } from './TechChips';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const MotionCard = motion.create(Card);

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{
        y: -6,
        boxShadow: `0 16px 48px ${alpha('#00E5FF', 0.1)}`,
        borderColor: alpha('#00E5FF', 0.25),
      }}
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <Box
        sx={{
          height: 140,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, ${alpha('#00E5FF', 0.08)} 0%, ${alpha('#8B5CF6', 0.08)} 100%)`,
          borderBottom: `1px solid ${alpha('#FFFFFF', 0.06)}`,
        }}
      >
        <CodeIcon sx={{ fontSize: 48, color: alpha('#00E5FF', 0.4) }} />
      </Box>

      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          {project.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, lineHeight: 1.7, flex: 1 }}
        >
          {project.description}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <TechChips items={project.stack} />
        </Box>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Button
            size="small"
            variant="outlined"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHubIcon />}
            aria-label={`View ${project.name} on GitHub`}
          >
            GitHub
          </Button>
          {project.liveUrl && (
            <Button
              size="small"
              variant="contained"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<OpenInNewIcon />}
              aria-label={`View live demo of ${project.name}`}
            >
              Live Demo
            </Button>
          )}
        </Box>
      </CardContent>
    </MotionCard>
  );
}
