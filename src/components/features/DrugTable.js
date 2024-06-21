import React from 'react';
import { Box, Typography } from '@mui/material';
import MyTable from '../layout/MyTable';

function DrugTable(results) {
  console.log(results);
  
  return (
    <Box m={3}>
      {results.length >= 0 ? (
        <MyTable />
      ) : (
          <Typography> Don't have results</Typography>
      )}
    </Box>
  );
}

export default DrugTable;