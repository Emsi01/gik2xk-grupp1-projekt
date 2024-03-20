import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { Box} from '@mui/material';
import { useState } from 'react';

import { addRating } from '../services/ProductService'; 


function Ratings({product}) { 
  const average = product.ratings.reduce((total, ratingObj) => total + ratingObj.rating, 0) / product.ratings.length;
  const [value, setValue] = useState(0);
function onSave() {

  addRating(product.id, value)
    .then((response) => {
    })
    .catch((error) => {
      console.error('Error saving rating:', error);
    });
}
 
  return (
    <Box display="flex" alignItems="center" gap={2}>
      
      <Button
        onClick={onSave}
        size="small"
        color="success"
        variant="contained">
        Ge betyg
      </Button>
      <Rating
        name="half-rating"
        defaultValue={0}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <p>Medelbetyg: </p> 
      <Rating name="half-rating-read" defaultValue={average} precision={0.5} readOnly />
      
    </Box>

     );
    }
  
  export default Ratings; 

  
