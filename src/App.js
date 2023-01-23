import React from 'react';
import Home from './pages/Home/Home';
import { Box, ThemeProvider } from '@mui/material';
import theme from './MUITheme/MUITheme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: 'relative', maxWidth: { xl: 'lg' }, margin: '0 auto' }}>
        <Home />
      </Box>
    </ThemeProvider>
  );
};

export default App;