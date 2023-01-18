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
import Footer from '../../components/Footer/Footer';
import NavBar from './../../components/NavBar/NavBar';


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
          left: 0,
          zIndex: -1
        }}
      />
      <Grid item container xs={12}>
        <NavBar />
      </Grid>
      {/* header content section */}
      <Container>
        <Grid container justifyItems='center' alignItems='center'>
          <Grid
            xs={12}
            item
            container
            justifyContent='center'
            alignItems='center'
            flexWrap='nowrap'
          >
            <Grid container item xs={12} md={4} spacing={3} justifyContent='center'>
              <Grid item xs={12}>
                <Typography justifySelf='center' fontSize='24px' lineHeight='24px' color={colors.white}>Advanced Platform</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography fontSize='58px' lineHeight='68px' fontWeight='bold' color={colors.white}>Take your team to the next level</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography fontSize='18px' lineHeight='24px' color={colors.white} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ButtonComponent bgColor='#fff' content='About us' textColor={colors.deepOrange} />
              </Grid>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box
                component='img'
                src={chartImage}
                height='100%'
                sx={{ width: '100%', height: '100%' }}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
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
      {/* business solution section */}
      <Box sx={{ position: 'relative' }}>
        <Box
          // component='img'
          // src={backGroundImage}
          sx={{ backgroundSize: 'cover', maxWidth: 'lg', minWidth: 'lg', position: 'absolute', top: -76, left: { lg: 0, xl: 50 } }}
        />
      </Box>
      {/* Footer Section */}
      <Box sx={{ backgroundColor: '#333333' }}>
        <Section>
          <Footer />
        </Section>
      </Box>
    </Section >
  );
};

export default Home;