import React from 'react';

import '@fontsource/roboto/300.css';
import {Typography, Box} from '@mui/material';

function Header() {
  sessionStorage.clear()
 sessionStorage.setItem('login', true);
  return (
    <Box sx={{ zIndex: 'bottom' }}>
      <Typography 
          variant="h2" 
          gutterBottom
          textAlign= 'center'
          bgcolor= "primary.light"
          p={5}
      >
        Drugs List
      </Typography>
    </Box>

  );
}

export default Header;