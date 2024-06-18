import React from 'react';
import { Box, FormControl, TextField} from '@mui/material';
import DrugTable from "../features/DrugTable";

function Main() {
  return (
    <Box>
      <Box m={2}>
        <FormControl fullWidth >
          <TextField id="Buscador" label="Buscador" variant="outlined"  />
        </FormControl>
      </Box>
      <DrugTable/>
    </Box>


  );
}

export default Main;