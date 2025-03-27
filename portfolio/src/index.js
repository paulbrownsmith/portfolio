import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Box, Stack } from '@mui/material';
import App from './App';
import Article1 from './components/Article1';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/article1",
    element: <Article1 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Box className="App" px={2}>
      <Header />
      <Stack direction={{ md: 'row', xs: 'column' }}>
        <Box sx={{ width: { xs: '100%', md: '30%' } }}>
          <SideBar />
        </Box>
        <Box sx={{ width: { xs: '100%', md: '70%' } }}>
          <RouterProvider router={router} />
        </Box>
      </Stack>
      <Footer />
    </Box>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
