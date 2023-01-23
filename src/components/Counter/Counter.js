import React from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import CountUp from 'react-countup';

const Counter = ({ item }) => {
  const theme = useTheme();

  return (
    <Grid item container justifyContent='center' sx={6} sm={4} md={6} lg={3} alignItems='center' direction='column' gap={1}>
      <Grid item >
        <CountUp end={570} enableScrollSpy='true' style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#FF6057' }} />
      </Grid>
      <Grid item >
        <Typography fontSize='1.5rem' color={theme.colors.textColor2}>{item}</Typography>
      </Grid>
    </Grid>
  );
};

export default Counter;