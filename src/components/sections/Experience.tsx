import { experience } from '../../data/experience';
import { Section } from '../layout/Section';
import { TimelineItem } from '../ui/TimelineItem';

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Where I've shipped real products."
    >
      {experience.map((item, index) => (
        <TimelineItem key={item.id} item={item} defaultExpanded={index === 0} />
      ))}
    </Section>
  );
}
