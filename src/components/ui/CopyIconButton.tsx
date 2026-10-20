import { useState } from 'react';
import { IconButton, Snackbar, Alert, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface CopyIconButtonProps {
  value: string;
  label: string;
  successMessage?: string;
}

export function CopyIconButton({
  value,
  label,
  successMessage = 'Copied to clipboard!',
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
      <Tooltip title={`Copy ${label}`} placement="right">
        <IconButton
          onClick={handleCopy}
          size="small"
          color="primary"
          aria-label={`Copy ${label}`}
          sx={{ ml: 0.5 }}
        >
          <ContentCopyIcon fontSize="small" />
        </IconButton>
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
