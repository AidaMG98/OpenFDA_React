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
      if (query.length > 120) { // Limitar la búsqueda a consultas mayores a 2 caracteres
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
      <DrugTable results={results} />
    </Box>
  );
}

export default Main;