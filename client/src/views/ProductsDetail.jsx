import { useNavigate } from 'react-router-dom';
import ProductItemLarge from '../components/ProductItemLarge';
import { Button} from '@mui/material';
import Ratings from '../components/Ratings'
import { addRating, getOne, addToCart } from '../services/ProductService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Amount from '../components/Amount';
import {Grid, Typography} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


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

  return product ? ( 
    
    <div>
      <Typography variant="h4" mt={4}>Produktinformation</Typography>
      <Button
            startIcon={<ChevronLeftIcon />}
            sx={{ mr: 1 }}
            variant="contained"
            onClick={() => navigate(-1)}>
            
            Tillbaka
              </Button>
              <Button
              sx={{ mr: 1 }}
              variant="contained"
              component={Link}
              to={`/products/${product.id}/edit`}
              >
              Ändra
              </Button>
      <Grid container spacing={2} >
        <Grid  component="section" item xs={12} s={12} md={12} lg={12} xl={12} >
            <ProductItemLarge product={product}/>
            
        </Grid>
        <Grid component="section" item xs={6} s={6} md={6} >
            <Ratings product={product} onSave={onRatingAdd} /> 
        </Grid>
        <Grid component="section" item xs={6} s={6} md={6} >
            <Amount/> 
        </Grid>
      </Grid>
      
    </div>
  ) : (<h3>Kunde inte hitta produkt</h3>);
}

export default ProductsDetail;