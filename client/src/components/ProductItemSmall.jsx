import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import {Grid, Paper} from '@mui/material';

/* import Image from '../assets/img/bottle.jpg'; */


function ProductItemSmall({product}) {
    return (
    <>
      <Grid component="section" item xs={12} md={12} lg={12} xl={12}>
        <Paper elevation={5} xs={{ p: 15, borderRadius: 2 }}>
        <Card sx={{ maxWidth: 250, maxHeight: 535, mb: 0} }>
           <img src={product.imageUrl} width={250} alt={`Bild på ${product.title}`}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <Link to={`/products/${product.id}`} >
            <h5>{product.title}</h5>
          </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary" >
            <p>Beskrivning: {product.description}</p>
            <p>Pris: {`${product.price} kr`}</p>
            </Typography>
          </CardContent>
        </Card>   
        </Paper> 
      </Grid>
    </>
    );

    
    
    
}

export default ProductItemSmall;