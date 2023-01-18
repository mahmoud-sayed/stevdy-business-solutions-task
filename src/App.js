import React from 'react';
import Home from './pages/Home/Home';
import { Box } from '@mui/material';


const App = () => {
  return (
    <Box sx={{ position: 'relative', maxWidth: { xl: 'lg' }, margin: '0 auto' }}>
      <Home />
    </Box>
  );
};

export default App;