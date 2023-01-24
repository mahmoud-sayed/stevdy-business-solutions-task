import { Box, Grid } from '@mui/material';
import React from 'react';
import chartImage from './../../assets/pageContentImages/Chart.png';
import Rectangle from './../../assets/pageBodyImage/Rectangle.png';

const ImgWithTextSection = ({ children, componentsDirectionInMD = 'row', displayImg = 'initial', backgroundImage = { md: -600, lg: -750 } }) => {
  return (
    <Grid container justifyItems='center' alignItems='center' mt={{ xs: 2, sm: 4 }} mb={{ xs: 2, sm: 4, md: 10 }} position='relative'>
      <Box
        component='img'
        src={Rectangle}
        sx={{
          maring: 'auto 0',
          backgroundSize: 'cover',
          objectFit: 'contain',
          width: '100%',
          height: '200%',
          maxWidth: { sm: '150%' },
          position: 'absolute',
          top: { lg: -200 },
          right: backgroundImage,
          zIndex: -1,
          display: { xs: 'none', md: displayImg },
        }}
      />
      <Grid
        xs={12}
        item
        container
        justifyContent='center'
        alignItems='center'
        flexWrap='nowrap'
        direction={{ xs: 'column', md: componentsDirectionInMD }}
      >
        {children}
        <Grid item xs={12} md={8}>
          <Box
            component='img'
            src={chartImage}
            height='100%'
            sx={{ width: '100%', height: '100%' }}

          />
        </Grid>
      </Grid>
    </Grid >
  );
};

export default ImgWithTextSection;