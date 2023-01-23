import React from 'react';
import { Button } from '@mui/material';

const ButtonComponent = ({ bgColor, content, textColor, width = '178px' }) => {
  return (
    <Button
      variant='contained'
      sx={{
        width: width,
        height: '37px',
        borderRadius: 2,
        background: bgColor,
        color: textColor,

        '&:hover': {
          backgroundColor: '#FF6057',
          boxShadow: 'none',
          color: '#fff'
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#FF6057',
        },
      }}

    >
      {content}
    </Button>
  );
};

export default ButtonComponent;