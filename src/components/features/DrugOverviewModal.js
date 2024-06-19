import React from 'react';
import { Box, Typography } from '@mui/material';
import { getDataDrugsNDC } from '../../services/apiService';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const element = await document.getElementsByClassName("drugId").value;
console.log(element);
const data = await getDataDrugsNDC("73154-130");

const DrugOverviewModal = (x) => {
  let data3 = getDataDrugsNDC(x);
    return (
    <Box sx={style}>
      
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Drug information {x.drugId.product_ndc}
      </Typography>

      {console.log(data3)}    
          
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </Box>
  );
};



export default DrugOverviewModal