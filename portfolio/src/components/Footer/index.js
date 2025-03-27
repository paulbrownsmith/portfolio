import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ minHeight: '100px', textAlign: 'center', alignItems: 'center', display: 'flex', borderTop: '1px solid #ddd' }}>

      <Typography component="span" variant="h4">Paul Brownsmith - </Typography>
      <Typography component="span" variant="h4" sx={{ color: 'text.secondary' }}>UX Engineer</Typography>

    </Box>
  );
}

export default Footer;