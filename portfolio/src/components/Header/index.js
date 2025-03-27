import { Box, Typography } from '@mui/material';

function Header() {
  return (
    <Box sx={{ minHeight: '100px', textAlign: 'center', alignItems: 'center', display: 'flex' }}>
      <Box component="h1">
        <Typography component="span" variant="h4">Paul Brownsmith - </Typography>
        <Typography component="span" variant="h4" sx={{ color: 'text.secondary' }}>UX Engineer</Typography>
      </Box>
    </Box>
  );
}

export default Header;