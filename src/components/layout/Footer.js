import React from 'react';

import { Typography, Box, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <Box pt={2}
      bgcolor={"primary.light"}
      flexDirection={"column"}
      textAlign={"center"}
      mt={3}
    >
      <Typography>Sigueme para más:</Typography>

      <Box p={2}>
        <Link href="https://www.linkedin.com/in/aidamg/" p={4} >
          <LinkedInIcon color="secondary" size="large"/>
        </Link>

        <Link href="https://github.com/AidaMG98" p={4}>
          <GitHubIcon color="secondary" size="large"/>
        </Link>

      </Box>
    </Box>
  );
}

export default Footer;