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
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          columnGap: 4,
          rowGap: 2.5,
        }}
      >
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
          >
            <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 700, mb: 0.75 }}>
              {group.category}
            </Typography>
            {group.description && (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1, lineHeight: 1.6 }}>
                {group.description}
              </Typography>
            )}
            <TechChips items={group.skills} />
          </motion.div>
        ))}
      </Box>
    </Section>
  );
}
