import { useNavigate } from 'react-router-dom';
import ProductItemLarge from '../components/ProductItemLarge';
import { Button} from '@mui/material';
import Ratings from '../components/Ratings'
import { addRating, getOne } from '../services/ProductService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Amount from '../components/Amount';
import {Grid, Typography} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import RatingList from '../components/RatingList';


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
      
      <Grid container spacing={2} justifyContent={"center"} >
      <Grid style={{marginBlock: "1rem"}} component="section" item xs={10} md={8} >
      <Typography variant="h4" style={{fontFamily: 'Gill Sans'}}>Produktinformation</Typography>
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
              to={`/products/${product.id}/edit`}>
              Ändra
              </Button>
              </Grid>
        <Grid style={{marginBlock: "1rem"}} component="section" item xs={10} s={9} md={8} lg={7} >
            <ProductItemLarge product={product}/>
            </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent={"center"} >
        <Grid component="section" item xs={5} md={4} >
            <Ratings product={product} onSave={onRatingAdd} /> 
        </Grid>
        <Grid component="section" item xs={5} md={4} >
            <Amount/> 
        </Grid>
        <Grid component="section" item xs={10} md={8}>
          <Typography style={{fontFamily: 'Gill Sans'}}>Alla betyg: </Typography>
             <RatingList product={product}/>
        </Grid>
      </Grid>
      
    </div>
  ) : (<h3>Kunde inte hitta produkt</h3>);
}

export default ProductsDetail;