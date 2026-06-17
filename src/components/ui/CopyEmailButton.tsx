import { useState } from 'react';
import { Button, Snackbar, Alert } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';

interface CopyEmailButtonProps {
  email: string;
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  showIcon?: boolean;
}

export function CopyEmailButton({
  email,
  variant = 'contained',
  size = 'medium',
  showIcon = true,
}: CopyEmailButtonProps) {
  const [open, setOpen] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setOpen(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={handleCopy}
        startIcon={showIcon ? <ContentCopyIcon /> : undefined}
        aria-label={`Copy email address ${email}`}
      >
        Copy Email
      </Button>
      <Button
        variant="outlined"
        size={size}
        href={`mailto:${email}`}
        startIcon={showIcon ? <EmailIcon /> : undefined}
        sx={{ ml: variant === 'contained' ? 1 : 0 }}
        aria-label={`Send email to ${email}`}
      >
        Email Me
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" onClose={() => setOpen(false)}>
          Email copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
}
