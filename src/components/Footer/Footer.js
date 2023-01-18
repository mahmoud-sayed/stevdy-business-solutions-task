import React from 'react';
import { Box, Container, Grid, TextField, Typography, Button, Divider } from '@mui/material';
import logo from './../../assets/Logo/Logo.png';

const Footer = () => {
  return (
    <Container>
      <Grid container item xs={12} justifyContent='center' alignItems='flex-start' padding='2rem 0'>
        <Grid item container xs={12} md={4} gap={{ xs: .5, md: 2 }} justifyContent='flex-start' alignItems='flex-start'
        >
          <Grid item xs={12}>
            <Box
              component='img'
              src={logo}
              sx={{ width: '135px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography color='#fff' variant='body1' fontSize='16px'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget diam at mi sollicitudin
            </Typography>
          </Grid>
        </Grid>
        <Divider
          sx={{ backgroundColor: '#fff', margin: ' 1rem 0', display: { xs: 'initial', md: 'none' }, width: '100%' }}
        />
        <Grid item container xs={12} md={4} gap={{ xs: .5, md: 2 }} justifyContent='flex-start' direction='column'
        >
          <Grid item width='100%'>
            <Typography color='#fff' fontSize='16px' fontWeight='bold'>Nos services</Typography>
          </Grid>
          <Grid item width='100%'>
            <Typography color='#fff' sx={{ cursor: 'pointer', '&:hover': { fontWeight: 'bold' } }}>Avis clients</Typography>
            <Typography color='#fff' sx={{ cursor: 'pointer', '&:hover': { fontWeight: 'bold' } }}>Mentions légales</Typography>
            <Typography color='#fff' sx={{ cursor: 'pointer', '&:hover': { fontWeight: 'bold' } }}>Plan du site</Typography>
            <Typography color='#fff' sx={{ cursor: 'pointer', '&:hover': { fontWeight: 'bold' } }}>Blog d{`’`}Idéematic</Typography>
            <Typography color='#fff' sx={{ cursor: 'pointer', '&:hover': { fontWeight: 'bold' } }}>Le dictionnaire du digital </Typography>
            <Typography color='#fff' sx={{ cursor: 'pointer', '&:hover': { fontWeight: 'bold' } }}>{`‹`} Notre boutique {`/›`}</Typography>
          </Grid>
        </Grid >

        <Divider
          sx={{ backgroundColor: '#fff', margin: ' 1rem 0', display: { xs: 'initial', md: 'none' }, width: '100%' }}
        />

        <Grid item container xs={12} md={4} gap={{ xs: .5, md: 2 }} direction='column'
        >
          <Grid item width='100%'>
            <Typography color='#fff' fontSize='16px' fontWeight='bold'>Sign up for Special Offers!</Typography>
          </Grid>
          <Grid item width='100%'>
            <TextField
              variant="standard"
              placeholder='Mail'
              type='email'
              sx={{ paddingRight: '0', borderRadius: '50px', backgroundColor: '#fff', paddingLeft: '1rem', fontWeight: 'bold' }}
              InputProps={{
                disableUnderline: true,
                endAdornment:
                  <Button
                    variant='contained' sx={{
                      borderRadius: '50px', padding: '.8rem 3rem', backgroundColor: '#FF6057',

                      '&:hover': {
                        backgroundColor: '#FF6057',
                        boxShadow: 'none',
                      },
                      '&:active': {
                        boxShadow: 'none',
                        backgroundColor: '#FF6057',
                      },
                    }} >
                    Subscribe
                  </Button>
              }}
            />
          </Grid>
        </Grid>
      </Grid >
    </Container >
  );
};

export default Footer;