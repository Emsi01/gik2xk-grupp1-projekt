import * as React from 'react';
import CartRowList from "../components/CartRowList";
import {Grid} from '@mui/material';
import { addToCart } from '../services/ProductService';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function Cart() {

    return  ( 
        <>
        <Grid container spacing={2}>
            <Grid item xl={12} sm={12}>
                <h2>Varukorg</h2>
            <CartRowList  />
            </Grid>
            <Grid item xs={12} sm={4}>
            </Grid>
        </Grid>
        </>
        );
}

export default Cart;