import * as React from 'react';
import ProductList from "../components/ProductList";
import {Grid} from '@mui/material';


function Home() {
    return ( 
        <>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
                <h2>Products</h2>
            <ProductList  />
            </Grid>
            <Grid item xs={12} sm={4}>
            </Grid>
        </Grid>
        </>
        );
}

export default Home;  