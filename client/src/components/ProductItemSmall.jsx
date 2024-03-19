import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

/* import Image from '../assets/img/bottle.jpg'; */


function ProductItemSmall({product}) {
    return (
    <>
        <Card sx={{ maxWidth: 350 , mb: 2} }>
           <img src={product.imageUrl} width={350} alt={`Bild på ${product.title}`}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <Link to={`/products/${product.id}`}>
            <h3>{product.title}</h3>
          </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <p>Beskrivning: {product.description}</p>
            <p>Pris: {`${product.price} kr`}</p>
            </Typography>
          </CardContent>
        </Card>   
      
    </>
    );

    
    
    
}

export default ProductItemSmall;