import React from 'react';
import '../App.css';

import { Box } from '@mui/material';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import DrugOverviewModal from '../components/features/DrugOverviewModal';

function DrugInfo(x) {
    //let head = document.head.cloneNode(true);
    //document.createElement('div').document.head.innerHTML = head.innerHTML;

    return (
        <React.StrictMode>
            <Box>
                <Header />
                <DrugOverviewModal id={x} />
                <Footer />
            </Box>
        </React.StrictMode>
    )
}

export default DrugInfo;