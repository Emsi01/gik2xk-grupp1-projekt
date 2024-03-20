import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Typography, Grid }from '@mui/material';

function ProductItemLarge({product}) {
    
    return (
    <>
      <Grid container spacing={2} >
      
      <Grid component="section" item xs={3} md={3} lg={3} xl={3}>
       <Card elevation={3}>
           <img src={product.imageUrl} style={{width: '100%'}} alt={`Bild på ${product.title}`}/>
          </Card>
          
          </Grid>
          
          <Grid component="section" item xs={6} md={6} lg={6} xl={6}>
         <Card elevation={3}>
          <Typography variant="h5" color="text.secondary" ml={4} mt={2}>
           {product.title}
           </Typography>
            <Typography variant="body2" color="text.secondary" maxWidth={400} ml={4} mb={2}>
             Beskrivning: {product.description}
          </Typography>
          </Card>
          </Grid>
          </Grid>
            
    
    </>
    );
    
}

export default ProductItemLarge;

