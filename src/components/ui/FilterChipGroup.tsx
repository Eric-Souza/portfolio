import { Box, Chip, Typography } from '@mui/material';
import { monoFont } from '../../theme/theme';

export interface FilterOption<T extends string> {
  value: T;
  label: string;
  count: number;
}

interface FilterChipGroupProps<T extends string> {
  label: string;
  options: FilterOption<T>[];
  /** null selects "All". */
  value: T | null;
  total: number;
  onChange: (value: T | null) => void;
}

/** A single-select row of chips with an "All" option and live result counts. */
export function FilterChipGroup<T extends string>({
  label,
  options,
  value,
  total,
  onChange,
}: FilterChipGroupProps<T>) {
  const chip = (key: string, text: string, count: number, selected: boolean, next: T | null) => (
    <Chip
      key={key}
      label={`${text} ${count}`}
      clickable
      size="small"
      color={selected ? 'primary' : 'default'}
      variant={selected ? 'filled' : 'outlined'}
      disabled={!selected && count === 0}
      onClick={() => onChange(next)}
      aria-pressed={selected}
      sx={{ fontWeight: selected ? 700 : 500 }}
    />
  );

  return (
    <Box
      role="group"
      aria-label={`Filter by ${label.toLowerCase()}`}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '120px 1fr' },
        alignItems: 'start',
        gap: { xs: 0.75, sm: 2 },
      }}
    >
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ fontFamily: monoFont, textTransform: 'uppercase', letterSpacing: '0.1em', pt: { sm: 0.5 } }}
      >
        {label}
      </Typography>
      {/* On phones each row scrolls sideways instead of wrapping, so the filters stay compact. */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: { xs: 'nowrap', sm: 'wrap' },
          overflowX: { xs: 'auto', sm: 'visible' },
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
          '& > *': { flexShrink: 0 },
          gap: 1,
          mx: { xs: -2, sm: 0 },
          px: { xs: 2, sm: 0 },
        }}
      >
        {chip('all', 'All', total, value === null, null)}
        {options.map((option) =>
          chip(option.value, option.label, option.count, option.value === value, option.value === value ? null : option.value),
        )}
      </Box>
    </Box>
  );
}
