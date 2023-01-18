import React from 'react';
import { Container, Grid } from '@mui/material';

const SideToSideSection = ({ children }) => {
  return (
    <Container>
      <Grid container justifyContent='center' alignItems='center' mt={10} mb={10}>
        {children}
      </Grid>
    </Container>
  );
};

export default SideToSideSection;
