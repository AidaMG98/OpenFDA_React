import React from 'react';

import '@fontsource/roboto/300.css';
import {Typography, Box} from '@mui/material';

function Header() {
  return (
    <Box sx={{ zIndex: 'bottom' }}>
      <Typography 
          variant="h2" 
          gutterBottom
          textAlign= 'center'
          bgcolor= "primary.light" /* CAMBIAR */
          p={5}
      >
        Drugs List
      </Typography>
    </Box>

  );
}

export default Header;