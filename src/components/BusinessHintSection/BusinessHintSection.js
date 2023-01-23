import React from 'react';

// MUI import
import { Grid, Divider, Typography } from '@mui/material';

// icon
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useTheme } from '@emotion/react';

const BusinessHintSection = ({ heading, description, showArrow }) => {
  const theme = useTheme();
  return (
    <Grid item container xs={12} md={6} justifyContent='center' pr={8} alignItems='flex-start' >
      <Grid item container direction='column' xs={12} >
        <Grid item container xs={12} md={6} spacing={3}>
          <Grid item>
            <Divider sx={{ backgroundColor: theme.colors.deepOrange, width: '4rem', height: '4px' }} />
          </Grid>
          <Grid item>
            <Typography fontSize='2.3rem' color={theme.colors.textColor} fontWeight='bold'>
              {heading}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              {description}
            </Typography>
          </Grid>
          <Grid item container spacing={5} >
            <Grid item>
              <Typography variant='body1' sx={{ color: theme.colors.deepOrange, cursor: 'pointer' }}>Learn About Our Success</Typography>
            </Grid>
            {showArrow === true ? (
              <Grid item>
                <Typography color={theme.colors.deepOrange} sx={{ cursor: 'pointer' }}><ArrowRightAltIcon /></Typography>
              </Grid>
            ) : ''}

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BusinessHintSection;