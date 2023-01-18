import React from 'react';
import { Box, Container, createTheme, Typography, Grid } from '@mui/material';

// images
import backGroundHeaderImage from './../../assets/header/header-backGround.png';
import client1 from './../../assets/header/Clients/client-1.png';
import client2 from './../../assets/header/Clients/client-2.png';
import client3 from './../../assets/header/Clients/client-3.png';
import client4 from './../../assets/header/Clients/client-4.png';
import client5 from './../../assets/header/Clients/client-5.png';
import chartImage from './../../assets/pageContentImages/Chart.png';


// components imports
import Section from './../../components/Section/Section';
import ButtonComponent from '../../components/Button/ButtonComponent';

//page style
import style from './Home-style';


const Home = () => {
  const theme = createTheme();
  const colors = {
    white: '#fff',
    deepOrange: '#FF6057',


  };
  return (
    <Section >
      <Box
        component='img'
        src={backGroundHeaderImage}
        sx={{
          backgroundSize: 'cover',
          objectFit: 'contain',
          width: '100%',
          maxWidth: '100%',
          position: 'absolute',
          top: -76,
          left: 0
        }}
      />
      {/* header content */}
      <Container sx={{ position: 'relative', height: '609px' }}>
        <Grid container direction='column' justifyItems='center' alignItems='center'>
          <Grid item container
            justifyContent='center'
            alignItems='center'
            flexWrap='nowrap'
            direction={{ xs: 'column', lg: 'row' }}
          >
            <Grid item direction='column' spacing={3} container justifyContent='center' sx={{ maxWidth: '50%' }}>
              <Grid item >
                <Typography justifySelf='center' fontSize='24px' lineHeight='24px' color={colors.white}>Advanced Platform</Typography>
              </Grid>
              <Grid item width='100%'>
                <Typography fontSize='58px' lineHeight='68px' fontWeight='bold' color={colors.white}>Take your team to the next level</Typography>
              </Grid>
              <Grid item >
                <Typography fontSize='18px' lineHeight='24px' color={colors.white} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                </Typography>
              </Grid>
              <Grid item >
                <ButtonComponent bgColor='#fff' content='About us' textColor={colors.deepOrange} />
              </Grid>
            </Grid>
            <Grid item sx={{ width: { xs: '100%', lg: '50%' }, height: '537px' }} >
              <Box sx={{ position: 'relative' }} width='100%' height='100%'>
                <Box
                  component='img'
                  src={chartImage}
                  height='100%'
                  sx={{ position: 'absolute', width: { lg: '118%', xs: '100%' } }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item container direction='row' sx={{ flexWrap: { md: 'nowrap', lg: 'wrap' } }}>
            <Grid item width='211px' height='68px'>
              <Box
                component='img'
                src={client1}
                width='100%'
                height='100%'
              />
            </Grid>
            <Grid item width='211px' height='68px'>
              <Box
                component='img'
                src={client2}
                width='100%'
                height='100%'
              />
            </Grid>
            <Grid item width='211px' height='68px'>
              <Box
                component='img'
                src={client3}
                width='100%'
                height='100%'
              />
            </Grid>
            <Grid item width='211px' height='68px'>
              <Box
                component='img'
                src={client4}
                width='100%'
                height='100%'
              />
            </Grid>
            <Grid item width='211px' height='68px'>
              <Box
                component='img'
                src={client5}
                width='100%'
                height='100%'
              />
            </Grid>

          </Grid>

        </Grid>
      </Container>
      {/* business solution  */}
      <Box sx={{ position: 'relative' }}>
        <Box
          // component='img'
          // src={backGroundImage}
          sx={{ backgroundSize: 'cover', maxWidth: 'lg', minWidth: 'lg', position: 'absolute', top: -76, left: { lg: 0, xl: 50 } }}
        />
      </Box>
    </Section >
  );
};

export default Home;