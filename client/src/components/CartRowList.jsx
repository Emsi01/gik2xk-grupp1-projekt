import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import axios from 'axios';

function CartRowList() {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    const userId = 1; 

    axios.get(`/users/${userId}/getCart`)
      .then(response => {
        setCart(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  let invoiceTotal = 0;
  if (cart) {
      invoiceTotal = cart.reduce((total, cartRow) => {
          let productTotal = cartRow.products.reduce((productTotal, product) => {
              return productTotal + (product.cartRow.amount * product.price);
          }, 0);
          return total + productTotal;
      },0);
  

  if (!cart) {
    return <div>Loading...</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="spanning table" >
        <TableHead>
          <TableRow>
          </TableRow>
          <TableRow>
            <TableCell>Produkt</TableCell>
            <TableCell align="right">Kvantitet</TableCell>
            <TableCell align="right">Pris st</TableCell>
            <TableCell align="right">Summa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map(cartRow => (
            cartRow.products.map(product => (
              <TableRow key={product.id}>
                <TableCell>{product.title}</TableCell>
                <TableCell align="right">{product.cartRow.amount}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.cartRow.amount * product.price}</TableCell>
              </TableRow>
            ))
          ))}
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            
             <TableCell colSpan={2} align="right">{invoiceTotal} kr</TableCell>  
            
          </TableRow>
        </TableBody>
      </Table>
      <Stack direction="row" spacing={1}>
      </Stack>
      <Button
        startIcon={<ChevronLeftIcon />}
         sx={{ mr: 1 }}
         variant="contained"
        onClick={() => navigate(-1)}>
          Tillbaka
              </Button>
    </TableContainer>
    
  );
}
}

export default CartRowList;