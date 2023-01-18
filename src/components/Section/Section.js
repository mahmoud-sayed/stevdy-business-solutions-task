import React from 'react';
import { Box } from '@mui/material';

const Section = ({ children, props }) => {
  return (
    <Box {...props} sx={{ position: 'relative', maxWidth: { xl: 'lg' } }}>
      {children}
    </Box>
  );
};

export default Section;