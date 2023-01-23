import { Grid, useTheme, Typography, Divider } from '@mui/material';
import React from 'react';

const ServiceComponent = ({ children, heading }) => {
  const theme = useTheme();
  return (
    <Grid item container gap={2} xs={12} md={6} direction='column' pb={3}>
      <Grid item >
        {children}
      </Grid>
      <Grid item>
        <Typography variant='body1' color={theme.colors.textColor}>{heading}</Typography>
      </Grid>
      <Grid>
        <Divider sx={{ backgroundColor: theme.colors.deepOrange, width: '4rem', height: '4px' }} />
      </Grid>
      <Grid item>
        <Typography variant='body1' color={theme.colors.textColor2}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore

        </Typography>
      </Grid>
    </Grid>
  );
};

export default ServiceComponent;