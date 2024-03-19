import * as React from 'react';
import ProductList from "../components/ProductList";
import Box from '@mui/material/Box';
import { Alert, Grid, Paper, Typography } from '@mui/material';



function Home() {
    return (
        <> 
        {/* <Box sx={{ flexGrow: 2}}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
                <h2>Produkter: </h2>
            </Grid>
            <Grid item xs={12} sm={8} lg={12}>
            <ProductList/>
            </Grid>
        </Grid>
        </Box> */}
        <>
    
      <Grid container spacing={8}>
        <Grid component="section" item xs={4} md={8}>
          <Paper elevation={12} sx={{ p: 15, mt: 4, borderRadius: 2 }}>
            <Typography variant="h2">Senaste ollonet</Typography>
            
          </Paper> 
        </Grid>
        <Grid component="section" item xs={4} md={8} lg={12} xl={1}>
        <Paper elevation={12} sx={{ p: 15, mt: 4, borderRadius: 2 }}>
            
            <ProductList />
          </Paper> 
          
        </Grid>
    
        
      </Grid>
    </>
        </>
        );
} 


export default Home;  