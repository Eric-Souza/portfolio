import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import type { Project } from '../../data/types';
import { colors } from '../../theme/theme';
import { TechChips } from './TechChips';
import { ProjectCardImage } from './ProjectCardImage';
import { Highlighted } from './Highlighted';

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
        boxShadow: `0 16px 48px ${alpha(colors.cyan, 0.1)}`,
        borderColor: alpha(colors.cyan, 0.25),
      }}
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <ProjectCardImage projectId={project.id} alt={`${project.name} preview`} />

      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          {project.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, lineHeight: 1.7, flex: 1 }}
        >
          <Highlighted text={project.description} />
        </Typography>

        <Box sx={{ mb: 2 }}>
          <TechChips items={project.stack} />
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {project.links.map((link) => (
            <Button
              key={link.url}
              size="small"
              variant="outlined"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
              aria-label={`${project.name}: ${link.label} repository on GitHub`}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </CardContent>
    </MotionCard>
  );
}
