import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import { Box, Container } from '@mui/material';

const App = () => {
  return (
    <Box sx={{ position: 'relative', maxWidth: { xl: 'lg' } }}>
      <NavBar />
      <Home />
    </Box>
  );
};

export default App;