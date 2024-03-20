import {Grid, Paper} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

function ProductItemLarge({product}) {
    
    return (
       /*  <div>
            <img src={product.imageUrl}  width={200} alt={`Bild på ${product.title}`}/>
            <h3>{product.title}</h3>
            <p>Beskrivning: {product.description}</p>
            <p>Pris: {`${product.price} kr`}</p>
        </div> */
        <>
      <Grid component="section" item xs={12} md={12} lg={12} xl={12}>
        
        <Card sx={{ maxWidth: 350, mb: 0} }>
           <img src={product.imageUrl} width={350} alt={`Bild på ${product.title}`}/>
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
        
      </Grid>
    </>
    );
    
}

export default ProductItemLarge;



