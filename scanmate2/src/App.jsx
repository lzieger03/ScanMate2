// App.jsx: Hauptdatei der ScanMate App
import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid } from '@mui/material';
import ProductOverview from './components/ProductOverview';
import PaymentOverview from './components/PaymentOverview';


const App = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            ScanMate
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ProductOverview />
          </Grid>
          <Grid item xs={12} md={6}>
            <PaymentOverview />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;