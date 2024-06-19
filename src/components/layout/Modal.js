import React from 'react';
import {Box, Button, Modal } from '@mui/material';
import DrugOverviewModal from '../features/DrugOverviewModal';


function BasicModal(drugId) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);  
  return (
    <Box>
      <Button onClick={handleOpen}>View</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
      <DrugOverviewModal drugId={drugId}/>
      </Modal>
    </Box>
  );
}

export default BasicModal;