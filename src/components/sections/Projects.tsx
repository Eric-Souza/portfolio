import { Grid } from '@mui/material';
import { projects } from '../../data/projects';
import { Section } from '../layout/Section';
import { ProjectCard } from '../ui/ProjectCard';

export function Projects() {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Curated open-source work showcasing UI craft, APIs, and full-stack patterns."
    >
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid key={project.id} size={{ xs: 12, sm: 6, lg: 4 }}>
            <ProjectCard project={project} index={index} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
