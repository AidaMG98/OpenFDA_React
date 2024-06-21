import React from 'react';
import { Box, Typography } from '@mui/material';
import MyTable from '../../pages/MyTable';

function DrugTable() {
  const search = sessionStorage.getItem('search') ? sessionStorage.getItem('search') : 0;
  const login = sessionStorage.getItem('login');

  return (
    <Box m={3}>
      {search.length > 0 || login ? (
        <MyTable/>
      ) : (
          <Typography> Don't have results</Typography>
      )}
    </Box>
  );
}

export default DrugTable;