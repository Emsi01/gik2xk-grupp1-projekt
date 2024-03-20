import { useNavigate } from 'react-router-dom';
import ProductItemLarge from '../components/ProductItemLarge';
import { Button} from '@mui/material';
import Ratings from '../components/Ratings'
import { addRating, getOne, addToCart } from '../services/ProductService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Amount from '../components/Amount';
import {Grid, Paper, Typography} from '@mui/material';


function ProductsDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getOne(id).then((product) => setProduct(product));
  }, [id]); 

  const navigate = useNavigate();

  function onRatingAdd(product, rating) {
    addRating(product.id, rating)
      .then(() => getOne(id))
      .then((product) => setProduct(product.id));
  }

function onAdd() {
  try {
    const userId=1;
    const amount = 1;
    console.log(amount)
    addToCart(userId, product.id, amount)
    .then(() => getOne(product.id))
    .then((product) => setProduct(product))
  } catch (error) {
    console.error('Error adding product to cart:', error);
  }
} 
  return product ? ( 
    <div>
     {/*  <ProductItemLarge product={product}/>
      <Grid component="section" item xs={12} md={12} lg={12} xl={12} textAlign={'right'}
      maxWidth={900}>
      <Button onClick={()=> navigate(-1)}>Tillbaka</Button>
      <Button onClick={onAdd}>Lägg till i varukorg</Button>
      <Button><Link to={`/products/${product.id}/edit`}>Ändra</Link></Button>
      <Ratings product={product} onSave={onRatingAdd}/> 
      {<Amount/> }
     
      </Grid> */}
      <Typography variant="h4" mt={4}>Produktinformation</Typography>
      <Grid container spacing={2}>
        
      
     {/*  <Paper elevation={3} sx={{ p: 8, mt: 10, , borderRadius: 2 }}> */}
     
        <Grid component="section" item xs={6} md={6} lg={6} xl={6}>
            <ProductItemLarge product={product}/>
            <Button onClick={()=> navigate(-1)}>Tillbaka</Button>
            <Button><Link to={`/products/${product.id}/edit`}>Ändra</Link></Button>
        </Grid>
        <Grid component="section" item xs={6} md={6} >
            <Ratings product={product} onSave={onRatingAdd} /> 
            
            <Amount/> 
            <Button 
            onClick={onAdd} 
            size="small" 
            color="info" 
            variant="contained">Lägg till i varukorg </Button>
           
        </Grid>
      {/*   </Paper> */}
      
      </Grid>
      
    </div>
  ) : (<h3>Kunde inte hitta produkt</h3>);
}

export default ProductsDetail;