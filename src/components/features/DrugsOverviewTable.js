import React, { useState, useEffect } from 'react';
import { TableCell, TableRow, Button } from '@mui/material';
import { getDataDrugsNDC } from '../../services/apiService';
import BasicModal from '../../pages/Modal';
import DrugInfo from '../../pages/DrugInfo';
import ReactDOM from 'react-dom';

const search = sessionStorage.getItem('search');

function DrugOverview(x) {

  // Constantes para la ventana 
  const openNewWindow = async (X) => {
    let newWindow = window.open();
    let div = newWindow.document.createElement('div');
    let head = document.head.cloneNode(true);
   
    newWindow.document.body.appendChild(div);
    newWindow.document.head.innerHTML = head.innerHTML;
    ReactDOM.render(<DrugInfo />, div);
        
  };

  // Constantes para el buscador
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
        <TableCell component="th" scope="row"><Button onClick={() => openNewWindow(row.product_ndc)}>{row.product_ndc}</Button></TableCell>
        <TableCell align="center">{row.generic_name}</TableCell>
        <TableCell align="center">{row.labeler_name}</TableCell>
        <TableCell align="center">{row.brand_name}</TableCell>
        <TableCell><BasicModal product_ndc={row.product_ndc} /></TableCell>
      </TableRow>
    )
    )
  )
}

export default DrugOverview