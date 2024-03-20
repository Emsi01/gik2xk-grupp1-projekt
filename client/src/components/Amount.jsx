import * as React from 'react';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {getOne, addToCart} from '../services/ProductService';


function Amount() {
  const [count, setCount] = React.useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
    useEffect(() => {
      getOne(id).then((product) => setProduct(product));
    }, [id]); 
  
  function onAdd() {
    try {
      const userId=1;
      const amount = count;
      console.log(amount)
      addToCart(userId, product.id, amount)
      .then(() => getOne(product.id))
      .then((product) => setProduct(product))
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  } 
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <p>Antal: {count}</p>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
                setCount(Math.max(count - 1, 0));
            }}
            >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
                setCount(count + 1);
            }}
            >
            <AddIcon fontSize="small" />
          </Button>
          <Button 
            onClick={onAdd} 
            size="small" 
            color="info" 
            variant="contained">Lägg till i varukorg 
            </Button>
        </ButtonGroup>
      </div>
    </Box>
  );
}

export default Amount;