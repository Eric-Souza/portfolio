import { Box, Button, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { profile } from '../../data/profile';
import { projects } from '../../data/projects';
import { Section } from '../layout/Section';
import { ProjectCard } from '../ui/ProjectCard';

export function Projects() {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Recent open-source work, mostly AI agents, RAG, and backend architecture. Every repo is public, so you can read the code."
    >
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid key={project.id} size={{ xs: 12, sm: 6, lg: 4 }}>
            <ProjectCard project={project} index={index} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button
          variant="text"
          href={`${profile.links.github}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHubIcon />}
        >
          More on GitHub
        </Button>
      </Box>
    </Section>
  );
}
