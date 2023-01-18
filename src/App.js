import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import { Box } from '@mui/material';
import Section from './components/Section/Section';

const App = () => {
  return (
    <Box sx={{ position: 'relative', maxWidth: { xl: 'lg' }, margin: '0 auto' }}>
      <Section>
        <NavBar />
      </Section>
      <Home />
    </Box>
  );
};

export default App;