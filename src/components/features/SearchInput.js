import React from 'react';
import { Box, FormControl, TextField } from '@mui/material';

const SearchInput = ({ setQuery }) => {

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <Box m={2}>
            <FormControl fullWidth >
                <TextField id="Buscador" label="Buscador" variant="outlined" onChange={handleInputChange} />
            </FormControl>
        </Box>
    );
};

export default SearchInput;