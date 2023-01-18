import { AppBar, Container, createTheme, Grid, MenuList, Typography, Box, } from '@mui/material';
import React from 'react';
import style from './NavBar-Style';
import logo from './../../assets/Logo/Logo.png';
import ButtonComponent from '../Button/ButtonComponent';


import DrawerComponent from '../Drawer/Drawer';

const NavBar = () => {

  const theme = createTheme();
  return (
    <AppBar sx={style('appBar-style', theme)}>
      <Box sx={{ display: { xs: 'initial', md: 'none' } }}>
        <Grid container direction='row' padding='0 2rem' bgcolor='#FF6057' alignItems='center'>
          <Grid item flex={1}>
            <DrawerComponent />
          </Grid>
          <Grid item>
            <Box
              component="img"
              src={logo}
              sx={{ height: '2.7rem' }}
            />
          </Grid>
        </Grid>
      </Box>
      <Container sx={{ maxWidth: { xl: 'xl', lg: 'lg' }, display: { xs: 'none', md: 'initial' } }}>
        <MenuList>
          <Grid
            container
            justifyContent='center'
            justifyItems='space-between'
            alignItems='center'
            wrap='nowrap'
          >
            <Grid container item alignContent='center' sx={{ width: '170px', height: '60px' }}>
              <Grid item>
                <Box
                  component="img"
                  src={logo}
                  sx={{ width: '100%', m: 'auto 0' }}
                />
              </Grid>
            </Grid>
            <Grid item container spacing={4} direction='row' justifyContent='center' alignItems='center' justifySelf='flex-start' sx={{ marginLeft: { md: -20 } }}>
              {['Browser', 'Bootcamps', 'How It Works', 'Testemonia'].map((text => (

                <Grid item key={text}>
                  <Typography
                    variant='body1'
                    color='#fff'
                    fontSize='14px'
                    lineHeight='14px'
                    sx={{ cursor: 'pointer' }}
                  >{text}</Typography>
                </Grid>

              )))}
            </Grid>
            <Grid item>
              <ButtonComponent bgColor='linear-gradient(90deg, #e66465, #9198e5)' content='About us' textColor='#fff' />
            </Grid>
          </Grid>
        </MenuList>
      </Container>
    </AppBar >
  );
};

export default NavBar;