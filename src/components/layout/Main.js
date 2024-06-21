import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import DrugTable from "../features/DrugTable";
import SearchInput from "../features/SearchInput";
import { getDataDrugsNDC } from '../../services/apiService';

function Main () {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

   useEffect(() => {
    const fetchResults = async () => {
      if (query.length > 120) {
        const response = getDataDrugsNDC('', query);
        setResults(response.results);
      } else {
        setResults([]);
      }
    };
    
    fetchResults();
  }, [query]);


  return (
    <Box>
      <SearchInput setQuery={setQuery}/>
      <DrugTable/>
    </Box>
  );
}

export default Main;