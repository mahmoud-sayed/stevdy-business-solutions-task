import React from 'react';
import { Box } from '@mui/material';

const Section = ({ children, props }) => {
  return (
    <Box component='container' {...props} sx={{ position: 'relative', overflow: 'hidden' }}>
      {children}
    </Box>
  );
};

export default Section;