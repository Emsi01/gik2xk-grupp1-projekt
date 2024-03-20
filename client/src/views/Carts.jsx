import * as React from 'react';
import CartRowList from "../components/CartRowList";
import {Grid} from '@mui/material';


function Cart() {

    return  ( 
        <>
        <Grid container spacing={3} justifyContent={'center'}>
            <Grid item xs={12} sm={12} md={8} lg={8} >
                <h2>Varukorg</h2>
            <CartRowList  />
            </Grid>

        </Grid>
        </>
        );
}

export default Cart;