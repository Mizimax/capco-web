import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import ProductRoute from './Routes/Product';
import './index.css';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <ProductRoute />
    </ThemeProvider>
  );
};

export default App;
