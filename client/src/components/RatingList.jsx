import * as React from 'react';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import {Grid} from '@mui/material';


function RatingList({product}) { 
 
  return (
    <Grid container spacing={1} >
      {product.ratings.map((ratingObj, index) => (<Grid  component="section" item xs={6} sm={3} >
        <Card elevation={3}><div align="center">
            <p  key={index} style={{fontFamily: 'Gill Sans',}}>Användare {index + 1}: 
        <Rating name="half-rating-read" value={ratingObj.rating} precision={0.5} readOnly /></p>
        </div>
        </Card></Grid>
      ))}
    </Grid>

     );
    }
  
  export default RatingList; 

  
