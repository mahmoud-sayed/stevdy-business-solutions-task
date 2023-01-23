import React from 'react';

// MUI import
import { Grid, Divider, Typography } from '@mui/material';

// icon
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useTheme } from '@emotion/react';

const BusinessHintSection = ({ heading, description, showArrow }) => {
  const theme = useTheme();
  return (
    <Grid item container xs={12} md={6} justifyContent='center' pr={{ xs: 0, lg: 8 }} alignItems='flex-start' >
      <Grid item container direction='column' xs={12} >
        <Grid item container direction='column' xs={12} md={6} gap={3}>
          <Grid item>
            <Divider sx={{ backgroundColor: theme.colors.deepOrange, width: '4rem', height: '4px' }} />
          </Grid>
          <Grid item>
            <Typography fontSize={{ xs: '1.5rem', lg: '2rem', xl: '2.3rem' }} color={theme.colors.textColor} fontWeight='bold'>
              {heading}
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontSize={{ xs: '13px', lg: '14px' }} color={theme.colors.textColor2}>
              {description}
            </Typography>
          </Grid>
          <Grid item container spacing={{ xs: 1, lg: 5 }} >
            <Grid item>
              <Typography variant='body1' fontSize={{ xs: '14px', lg: '16px' }} sx={{ color: theme.colors.deepOrange, cursor: 'pointer' }}>Learn About Our Success</Typography>
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