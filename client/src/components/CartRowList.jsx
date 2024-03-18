import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getAll } from '../services/UserService';
import {useState, useEffect} from 'react';
import axios from 'axios';

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function total(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1),
  createRow('Paper (Case)', 10, 65.5),
  createRow('Waste Basket', 2, 17.99),
];

const invoiceTotal = total(rows);


function CartRowList() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const userId = 1; // Byt ut mot det faktiska userId

    axios.get(`/users/${userId}/getCart`)
      .then(response => {
        setCart(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!cart) {
    return <div>Loading...</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>Varukorg</TableCell>
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
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell align="right">{invoiceTotal}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Stack direction="row" spacing={1}>
        <Button>Ta bort</Button>
        <Button>Kassa</Button>
      </Stack>
    </TableContainer>
  );
}
  


export default CartRowList;