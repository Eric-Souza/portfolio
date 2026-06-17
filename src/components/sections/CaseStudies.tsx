import { Grid } from '@mui/material';
import { caseStudies } from '../../data/caseStudies';
import { Section } from '../layout/Section';
import { CaseStudyCard } from '../ui/CaseStudyCard';

export function CaseStudies() {
  return (
    <Section
      id="case-studies"
      title="Case Studies"
      subtitle="Client products and internal tools, from college projects to apps I built to help my teams."
    >
      <Grid container spacing={3}>
        {caseStudies.map((study, index) => (
          <Grid key={study.id} size={{ xs: 12, lg: 4 }}>
            <CaseStudyCard study={study} index={index} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
