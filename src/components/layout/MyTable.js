import React from 'react';
import { Paper, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow, TableFooter, TableCell,tableCellClasses, styled } from '@mui/material';
import DrugOverview from '../features/DrugsOverviewTable';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function MyTable() {
      return (
      <TableContainer component={Paper} style={{height: '100%', width: '80%', margin:'0 auto'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product NDC</StyledTableCell>
              <StyledTableCell align="center">Generic name</StyledTableCell>
              <StyledTableCell align="center">Brand name</StyledTableCell>
              <StyledTableCell align="center">Labeler name</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <DrugOverview />
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={100} // Total de valores 
                rowsPerPage={10} 
                page={20}
                slotProps={{
                  select: {
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  },
                }}
                // onPageChange={handleChangePage}
                // onRowsPerPageChange={handleChangeRowsPerPage}
                // ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    );
  }

export default MyTable;