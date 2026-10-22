import { useState } from 'react';
import { Box, ButtonBase, IconButton, Snackbar, Alert, Tooltip } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface CopyIconButtonProps {
  value: string;
  label: string;
  successMessage?: string;
  /** Visible text shown before the icon; clicking it copies too. */
  text?: string;
  textSx?: SxProps<Theme>;
}

export function CopyIconButton({
  value,
  label,
  successMessage = 'Copied to clipboard!',
  text,
  textSx,
}: CopyIconButtonProps) {
  const [open, setOpen] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setOpen(true);
    } catch {
      // Clipboard unavailable; no fallback for generic copy
    }
  };

  return (
    <>
      {/* One tooltip over the text and the icon, so hovering either shows it. */}
      <Tooltip title={`Copy ${label}`} placement="right" describeChild>
        <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center' }}>
          {text && (
            <ButtonBase
              onClick={handleCopy}
              aria-label={`Copy ${label}: ${text}`}
              disableRipple
              sx={[
                { typography: 'body1', textAlign: 'left', borderRadius: 0.5 },
                ...(Array.isArray(textSx) ? textSx : [textSx]),
              ]}
            >
              {text}
            </ButtonBase>
          )}
          <IconButton
            onClick={handleCopy}
            size="small"
            color="primary"
            aria-label={`Copy ${label}`}
            sx={{ ml: 0.5 }}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Box>
      </Tooltip>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={() => setOpen(false)}
        // Top, under the navbar: the bottom is taken by the next-section caret.
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ top: { xs: 72, sm: 80 } }}
      >
        <Alert severity="success" variant="filled" onClose={() => setOpen(false)}>
          {successMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
