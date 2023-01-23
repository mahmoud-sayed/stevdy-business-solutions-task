import { Paper, Grid, Box, Typography, Rating } from '@mui/material';
import React from 'react';
import { useTheme } from '@emotion/react';


const TestimonialCard = ({ item }) => {
  const theme = useTheme();
  return (
    <Paper key={item.id} sx={{ boxShadow: '3px 3px 1rem #c2c2c2, -3px -3px 1rem #c2c2c2' }} p={0}>
      <Grid container p={1} direction={{ xs: 'column', md: 'row' }} justifyContent='center' alignItems='center'>
        <Grid item xs={5} gap={2}>
          <Box component='img' src={item.img} />
        </Grid>
        <Grid xs={5} gap={1.5} item container direction='column'>
          <Grid item>
            <Typography fontSize='24px' color={theme.colors.textColor}>
              {item.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontSize='14px' color={theme.colors.textColor2}>
              {item.dis}
            </Typography>
          </Grid>
          <Grid item>
            <Rating
              sx={{
                '& .MuiRating-iconFilled': {
                  color: theme.colors.startColor
                }
              }}
              value={item.rating}
              readOnly
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TestimonialCard;