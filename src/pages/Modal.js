import React from 'react';
import {Box, Button, Modal } from '@mui/material';
import DrugOverviewModal from '../components/features/DrugOverviewModal';


function BasicModal(id) {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);  
  return (
    <Box>
      <Button onClick={handleOpen}>View</Button>
      <Modal
        open={open}
        onClose={handleClose}
        value={id}
      >
      <DrugOverviewModal id={id}/>
      </Modal>
    </Box>
  );
}

export default BasicModal;