import * as React from 'react';
import {Link} from 'react-router-dom';
/* import Image from '../assets/img/bottle.jpg'; */


function ProductItemSmall({product}) {
    return (
    <>
          <Link to={`/products/${product.id}`}>
            <h3>{product.title}</h3>
          </Link>
          <img src={Image} height={200} width={200} alt={`Bild på ${product.title}`}/>
            <p>Beskrivning: {product.description}</p>
            <p>Pris: {product.price}</p>
           
    </>
    );

/* function ProductItemSmall() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
          <Button size="small"><Link to={`/products/${product.id}`}>
          <h3>{product.title}</h3>
          </Link></Button>
        <Button size="small">Lägg till i kundvagn</Button>
      </CardActions>
    </Card>
  );
} */
}

export default ProductItemSmall;