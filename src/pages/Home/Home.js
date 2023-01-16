import React from 'react';
import { Box, Container, createTheme, Typography } from '@mui/material';
import backGroundImage from './../../assets/header/header-backGround.png';
import style from './Home-style';

const Home = () => {
  const theme = createTheme();
  return (
    <Box>
      <Box
        component='img'
        src={backGroundImage}
        sx={{ backgroundSize: 'cover', maxWidth: 'xl', position: 'absolute', top: 0, left: 0 }}
      />
      <Container sx={{ position: 'relative' }}>
        <Typography variant='h1'>hello</Typography>

      </Container>
    </Box>
  );
};

export default Home;