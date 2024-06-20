import React from 'react';
import { TableCell, TableRow, Link } from '@mui/material';
import { getDataDrugsNDC } from '../../services/apiService';
import BasicModal from '../layout/Modal'
import { DrugInfo } from '../layout/DrugInfo';

const data = await getDataDrugsNDC();

function DrugOverview() {
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


function DrugOverviewCOPY() {

  return (
    data.map((row) => (
      <TableRow
        key={row.application_number}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.application_number}
        </TableCell>

        <TableCell align="center">{row.sponsor_name}</TableCell>
        <TableCell align="center">{row.submissions && row.submissions.length > 0 ? row.submissions[0].submission_status_date : 0}</TableCell>
        <TableCell align="center">{row.submissions && row.submissions.length > 0 ? row.submissions[0].review_priority : ""}</TableCell>
        <TableCell align="center">{row.submissions && row.submissions.length > 0 ? row.submissions[0].submission_type : "N/A"}</TableCell>
        <TableCell align="center">{row.submissions && row.submissions.length > 0 ? row.submissions[0].submission_status : ""}</TableCell>

        <TableCell>{row.products && row.products.length > 0 ? row.products.length : 0}</TableCell>

        <TableCell></TableCell>
      </TableRow>
    ))
  )
}



export default DrugOverview