import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { Box} from '@mui/material';
import {useState, useEffect} from 'react';
/* import {useState, useEffect} from 'react'; */
/* import {onSave} from '../views/ProductsEdit'  */

import { addRating } from '../services/ProductService'; // Importera din addRating-funktion här

function onSave(productId, rating) {
  // Anropa addRating-funktionen för att spara betyget för produkten
  addRating(productId, rating)
    .then((response) => {
      // Om betyget sparades framgångsrikt, navigera till lämplig sida med meddelande
      navigate(`/products/${productId}/addRating`, {
        replace: true,
        state: { message: `Produkten med ID ${productId} betygsattes.` }
      });
    })
    .catch((error) => {
      console.error('Error saving rating:', error);
      // Hantera fel här, t.ex. visa ett felmeddelande för användaren
    });
}



 
function Ratings({product, onSave}) { 

  const average = product.ratings.reduce((total, ratingObj) => total + ratingObj.rating, 0) / product.ratings.length;
  const [value, setValue] = useState(0);
  
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Stack spacing={1}>
      <Rating
        name="half-rating"
        defaultValue={0}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        <Rating name="half-rating-read" defaultValue={average} precision={0.5} readOnly />
        <p>Betyget är: {value}</p>
      </Stack>
      
      <Button
        onClick={onSave} 
        size="small"
        color="success"
        variant="contained">
        Ge betyg
      </Button>
    </Box>

     );
    }
  

  export default Ratings; 

  
