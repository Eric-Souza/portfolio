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
      <Tooltip title={`Copy ${label}`}>
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
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" onClose={() => setOpen(false)}>
          {successMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
