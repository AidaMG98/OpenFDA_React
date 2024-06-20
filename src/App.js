import logo from './logo.svg';
import './App.css';

import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import {Box} from '@mui/material';

function App() {
  return (
    <Box>
      <Header />
      <Main />
      <Footer />
    </Box>
  );
}

export default App;
