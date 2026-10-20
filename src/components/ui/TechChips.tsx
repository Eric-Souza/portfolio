import { Box, Chip } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { colors } from '../../theme/theme';

interface TechChipsProps {
  items: string[];
  size?: 'small' | 'medium';
}

// Flex `gap` instead of Stack `spacing`: spacing uses margins, which indent wrapped rows.
export function TechChips({ items, size = 'small' }: TechChipsProps) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {items.map((item) => (
        <Chip
          key={item}
          label={item}
          size={size}
          sx={{
            borderColor: alpha(colors.cyan, 0.25),
            backgroundColor: alpha(colors.cyan, 0.06),
            color: 'text.primary',
          }}
          variant="outlined"
        />
      ))}
    </Box>
  );
}
