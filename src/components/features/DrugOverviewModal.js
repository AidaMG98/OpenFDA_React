import React, { useState, useEffect } from 'react';
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


const DrugOverviewModal = (x) => {

  let [data, setData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await getDataDrugsNDC(x.id.product_ndc, "");
        setData(result);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, []);


  console.log(data);

  return (
    <Box sx={style}>

      <Typography id="modal-modal-title" variant="h6" component="h2">
        Drug information {x.id.product_ndc}
      </Typography>

      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <Typography mt={2}>
         Generic name: {data.generic_name}
        </Typography>

        <Typography mt={2}>
          Brand name: {data.brand_name}
        </Typography>

        <Typography mt={2}>
          Brand name base: {data.brand_name_base}
        </Typography>

        <Typography mt={2}>
          Active_ingredients: {data.brand_name_base}
          ES un array
        </Typography>

        <Typography mt={2}>
          Active_ingredients: {data.brand_name_base}
          ES un array
        </Typography>

        <Typography mt={2}>
          Finished: {data.brand_name_base}
        </Typography>

        <Typography mt={2}>
          Packaging: {data.brand_name_base}
        </Typography>


        <Typography mt={2}>
          Listing expiration date: {data.brand_name_base}
        </Typography>

        <Typography mt={2}>
          Openfda: {data.brand_name_base}
        </Typography>

        <Typography mt={2}>

          Marketing category: {data.brand_name_base}
        </Typography>

        <Typography mt={2}>
          Dosage form: {data.brand_name_base}
        </Typography>

        <Typography mt={2}>
          Spl id: {data.brand_name_base}
        </Typography>

        <Typography mt={2}>
          Product type: {data.brand_name_base}
        </Typography>

        <Typography mt={2}>
          Route: {data.brand_name_base}
        </Typography>

        <Typography mt={2}>
          Marketing start date: {data.brand_name_base}
        </Typography>

        <Typography mt={2}>
          Product id: {data.brand_name_base}
        </Typography>

        <Typography mt={2}>
          Application number: {data.brand_name_base}
        </Typography>

        <Typography mt={2}>
          Brand name base: {data.brand_name_base}
        </Typography>

      </Typography>
    </Box>
  );
};



export default DrugOverviewModal