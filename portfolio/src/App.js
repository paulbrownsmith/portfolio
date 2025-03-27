import './App.css';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import Entry from './components/Entry';

function App() {
  return (
    <>
      <Box px={2}>
        <Entry
          title="Material UI for protoype and production?"
          subTitle="subtitle"
          image="/images/posts/material-ui.png"
          href="article1"
        />
        <Entry
          title="This is the first entry"
          subTitle="subtitle again"
          image="/images/posts/accessibility.png"
          href="article1"
        />
      </Box>
    </>
  );
}

export default App;
