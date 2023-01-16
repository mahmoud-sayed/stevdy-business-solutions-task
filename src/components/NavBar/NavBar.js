import { AppBar, Button, Container, createTheme, Grid, MenuList, Toolbar, Typography, Box, CardMedia } from '@mui/material';
import React from 'react';
import style from './NavBar-Style';
import logo from './../../assets/Logo/Logo.png';

const NavBar = () => {

  const theme = createTheme();
  return (
    <AppBar sx={style('appBar-style', theme)}>
      <Container >
        <MenuList>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            wrap='nowrap'
          >
            <Grid item sx={{ width: '170px', height: '60px' }}>
              <Box
                component="img"
                src={logo}
                sx={{ width: '100%', }}
              />
            </Grid>
            <Grid item container spacing={4} direction='row' justifyContent='center' alignItems='center'>
              <Grid item>
                <Typography
                  variant='body1'
                  color='#fff'
                  fontSize='14px'
                  lineHeight='14px'
                >Browser</Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  color='#fff'
                  fontSize='14px'
                  lineHeight='14px'
                >Bootcamps</Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  color='#fff'
                  fontSize='14px'
                  lineHeight='14px'
                >How It Works</Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  color='#fff'
                  fontSize='14px'
                  lineHeight='14px'
                >Testemonia</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Button variant='contained' sx={{
                width: '178px', height: '37px', borderRadius: 2,
                background: 'linear-gradient(90deg, #e66465, #9198e5);'
              }}>About us</Button>
            </Grid>
          </Grid>
        </MenuList>
      </Container>
    </AppBar >
  );
};

export default NavBar;