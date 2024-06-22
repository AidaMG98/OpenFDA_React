import React, { useState, useEffect } from 'react';
import { Box, ListItem, Typography, List, IconButton } from '@mui/material';
import { getDataDrugsNDC } from '../../services/apiService';
import MedicationIcon from '@mui/icons-material/Medication';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

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

  return (
    <Box sx={style}>

      <Typography id="modal-modal-title" variant="h6" component="h2">
        Drug information {data.length > 0 ? data[0].product_ndc : ""}
      </Typography>

      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <Typography mt={2}>
          Generic name: {data.length > 0 ? data[0].generic_name : ""}
        </Typography>

        <Typography mt={2}>
          Brand name: {data.length > 0 ? data[0].brand_name : ""}
        </Typography>

        <Typography mt={2}>
          Brand name base: {data.length > 0 ? data[0].brand_name_base : ""}
        </Typography>

        <Typography mt={2}>
          Active_ingredients:   {data.length > 0 ?
            data[0].active_ingredients.map((value) =>
              <List>
                <ListItem> <MedicationIcon fontSize="small" /> {value.name} - {value.strength} </ListItem>
              </List>
            )
            : ""}


        </Typography>

        <Typography mt={2}>
          Finished: {data.length > 0 ? (data[0].finished ? "Yes" : "No") : ""}
        </Typography>

        <Typography mt={2}>
          Packaging:
              Package NDC - Description - Marketing start date - Sample
          {data.length > 0 ?
            data[0].packaging.map((value) =>
              <List>
                <ListItem> <InventoryIcon fontSize="small" /> {value.package_ndc} - {value.description} - {value.marketing_start_date} - {(value.sample ? "Yes" : "No")} </ListItem>
              </List>
            )
            : ""}

        </Typography>


        <Typography mt={2}>
          cambiar formato fecha
          Listing expiration date: {data.length > 0 ? data[0].listing_expiration_date : ""}
        </Typography>

        <Typography mt={2}>
          Revisar
          Openfda: {data.length > 0 ? (data[0].openfda.length > 0 ? data[0].openfda +  "Yes" : data[0].openfda  +"No"): ""}
        </Typography>

        <Typography mt={2}>

          Marketing category: {data.length > 0 ? data[0].marketing_category : ""}
        </Typography>

        <Typography mt={2}>
          Dosage form: {data.length > 0 ? data[0].dosage_form : ""}
        </Typography>

        <Typography mt={2}>
          Spl id: {data.length > 0 ? data[0].spl_id : ""}
        </Typography>

        <Typography mt={2}>
          Product type: {data.length > 0 ? data[0].product_type : ""}
        </Typography>

        <Typography mt={2}>
          Route: {data.length > 0 ?
            data[0].route.map((value) =>
              <List>
                <ListItem> <LocationSearchingIcon fontSize="small" /> {value} </ListItem>
              </List>
            )
            : ""}
        </Typography>

        <Typography mt={2}>
          Cambiar a formato fecha
          Marketing start date: {data.length > 0 ? data[0].marketing_start_date : ""}
        </Typography>

        <Typography mt={2}>
          Product id: {data.length > 0 ? data[0].product_id : ""}
        </Typography>

        <Typography mt={2}>
          Application number: {data.length > 0 ? data[0].application_number : ""}
        </Typography>

        <Typography mt={2}>
          Brand name base: {data.length > 0 ? data[0].brand_name_base : ""}
        </Typography>

      </Typography>
    </Box>
  );
};



export default DrugOverviewModal