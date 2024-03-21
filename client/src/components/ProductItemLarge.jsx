import * as React from 'react';
import { Box} from '@mui/material';
import Card from '@mui/material/Card';
import {Typography, Grid}from '@mui/material';
import Container from '@mui/material/Container';

function ProductItemLarge({product}) {
    
    return (
    <>
    {/* <Container maxWidth="m"> */}
      <Grid container spacing={2} >
      
      <Grid component="section" item xs={6} md={6} lg={6} xl={6}>
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
          <Typography variant="body2" color="text.secondary" maxWidth={400} ml={4} mb={2}>
          Pris: {product.price}
          </Typography>
          </Card>
          </Grid>
          </Grid>
          {/* </Container> */}
    
    </>
    );
    
}

export default ProductItemLarge;

