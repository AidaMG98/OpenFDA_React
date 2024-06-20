import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import ReactDOM from 'react-dom';

import { getDataDrugsNDC } from '../../services/apiService';

const data = await getDataDrugsNDC("73154-130");

export const DrugInfo = () => {
    const newWindow = window.open();
    newWindow.document.write('<div id="newWindow"></div>');
    const rootElement = newWindow.document.getElementById('newWindow');

    window.addEventListener("DOMContentLoaded", function (e) {
        const root = ReactDOM.createRoot(rootElement);
        root.render(
            <React.StrictMode>
                <Box>
                    <Header/>

                    <Footer/>
                </Box>
            </React.StrictMode>
        );
    });
 
}  