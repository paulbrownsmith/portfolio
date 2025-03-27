import { Link } from 'react-router-dom';
import { Box, Button, Chip, Typography, Paper, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SideBar() {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 350 }}
          image="/images/paul1.jpg"
          title="Paul Brownsmith"
        />
        <CardContent sx={{ backgroundColor: '#eee' }}>
          <Typography gutterBottom variant="h5" component="div">
            Paul Brownsmith
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            UI/UX Engineer
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Hi, I'm a UI developer/UX engineer who focusses on solving
            complex UI solutions, front end development and building responsive
            and accessible component libraries.
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Alongside this, I enjoy ensuring full test coverage, acceptance
            test authoring including accessibility compliance, working in Agile
            environments and am a certified Scrum Master.
          </Typography>
        </CardContent>
        <CardActions sx={{ py: 3 }}>
          <a href="https://www.linkedin.com/in/paulbrownsmith/">
            <Chip icon={<LinkedInIcon />} label="LinkedIn Profile" />
          </a>
        </CardActions>
      </Card>
      {/* <Paper elevation={1} p={4} sx={{ border: '1px solid #eee' }}>
        <Box
          component="img"
          sx={{}}
          alt="Paul Brownsmith"
          src="/images/paul.jpeg"
          sx={{
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            margin: '0 auto',
          }}
          display="flex"
          justifyContent="center"
        />
        <Typography component="h3" variant="h5">Paul Brownsmith</Typography>
        <Typography variant="h6">UI/UX Engineer</Typography>
        <Typography component="a" href="/">Home</Typography>
        <Typography component="a" href="/Article1">Article 1</Typography>
      </Paper> */}
    </>
  );
}

export default SideBar;