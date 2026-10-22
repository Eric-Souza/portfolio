import { Box } from '@mui/material';
import { splitTerms, type TextSegment } from '../../data/terms';

/** Renders prose with tool, tech and architecture names picked out, so the copy is easy to skim. */
export function Highlighted({ text }: { text: string }) {
  return <Segments segments={splitTerms(text)} />;
}

/** Same look as Highlighted, but only the terms the copy marks as **term** are picked out. */
export function MarkedText({ text }: { text: string }) {
  // Splitting on the markers leaves the marked terms at the odd indexes.
  return <Segments segments={text.split('**').map((part, i) => ({ text: part, term: i % 2 === 1 }))} />;
}

function Segments({ segments }: { segments: TextSegment[] }) {
  return (
    <>
      {segments.map((segment, i) =>
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
