import { Box } from '@mui/material';
import { splitTerms } from '../../data/terms';

/** Renders prose with tool, tech and architecture names picked out, so the copy is easy to skim. */
export function Highlighted({ text }: { text: string }) {
  return (
    <>
      {splitTerms(text).map((segment, i) =>
        segment.term ? (
          // <b> is the HTML element for keywords drawn to the reader's attention.
          <Box key={i} component="b" sx={{ color: 'secondary.light', fontWeight: 600 }}>
            {segment.text}
          </Box>
        ) : (
          segment.text
        ),
      )}
    </>
  );
}
