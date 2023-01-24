import { Box, Grid } from '@mui/material';
import React from 'react';
import chartImage from './../../assets/pageContentImages/Chart.png';

const ImgWithTextSection = ({ children, componentsDirectionInMD = 'row' }) => {
  return (
    <Grid container justifyItems='center' alignItems='center' mt={{ xs: 2, sm: 4, md: 10 }} mb={{ xs: 2, sm: 4, md: 10 }}>
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
    </Grid>
  );
};

export default ImgWithTextSection;