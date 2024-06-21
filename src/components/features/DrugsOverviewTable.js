import React, { useState, useEffect } from 'react';
import { TableCell, TableRow, Link } from '@mui/material';
import { getDataDrugsNDC } from '../../services/apiService';
import BasicModal from '../../pages/Modal'
import { DrugInfo } from '../../pages/DrugInfo';

const search = sessionStorage.getItem('search');


function DrugOverview() {
  
  const [data, setData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await getDataDrugsNDC('', search);
        setData(result);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, [search]);

  

  return (
    data.map((row) => ( 
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row"><Link onClick={DrugInfo}>{row.product_ndc}</Link></TableCell>
        <TableCell align="center">{row.generic_name}</TableCell>
        <TableCell align="center">{row.labeler_name}</TableCell>
        <TableCell align="center">{row.brand_name}</TableCell>
        <TableCell><BasicModal product_ndc={row.product_ndc}/></TableCell>
      </TableRow>
    )
  )
  )
}



function DrugOverviewCopy() {
  
  let data =  getDataDrugsNDC();

  let search = sessionStorage.getItem('search');

  if(search){
    data = getDataDrugsNDC("",  search && search.length < 0 ? search : 0);
    console.log(data);
  }
  

  return (
    data.map((row) => (
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row"><Link onClick={DrugInfo}>{row.product_ndc}</Link></TableCell>
        <TableCell align="center">{row.generic_name}</TableCell>
        <TableCell align="center">{row.labeler_name}</TableCell>
        <TableCell align="center">{row.brand_name}</TableCell>
        <TableCell><BasicModal product_ndc={row.product_ndc} /></TableCell>
      </TableRow>
    ))
  )
}

export default DrugOverview