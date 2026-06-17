import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { skillGroups } from '../../data/skills';
import { Section } from '../layout/Section';
import { TechChips } from '../ui/TechChips';

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills & Tools"
      subtitle="What I reach for to design, build, and ship software."
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <Typography variant="h6" component="h3" sx={{ mb: group.description ? 1 : 1.5 }}>
              {group.category}
            </Typography>
            {group.description && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1.5, lineHeight: 1.7, maxWidth: 720 }}
              >
                {group.description}
              </Typography>
            )}
            <TechChips items={group.skills} size="medium" />
          </motion.div>
        ))}
      </Box>
    </Section>
  );
}
