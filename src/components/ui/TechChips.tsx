import { Chip, Stack } from '@mui/material';
import { alpha } from '@mui/material/styles';

interface TechChipsProps {
  items: string[];
  size?: 'small' | 'medium';
}

export function TechChips({ items, size = 'small' }: TechChipsProps) {
  return (
    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
      {items.map((item) => (
        <Chip
          key={item}
          label={item}
          size={size}
          sx={{
            borderColor: alpha('#00E5FF', 0.25),
            backgroundColor: alpha('#00E5FF', 0.06),
            color: 'text.primary',
          }}
          variant="outlined"
        />
      ))}
    </Stack>
  );
}
