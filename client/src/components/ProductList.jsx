import ProductItemSmall from "./ProductItemSmall";
import { getAll } from '../services/ProductService';
import {useState, useEffect} from 'react';
import { Grid } from '@mui/material';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAll().then(products => {
            setProducts(products);
        })
    }, []) 
    
    return (

        

        
        <div>
            <Grid  container spacing={1} gap={2} mt={5} justifyContent={"center"}>
            {products?.length > 0 ? products.map(product => (
                
            <div key={`products_${product.id}`}> 
                <ProductItemSmall product={product} />
            </div>
            
            )) : (
                <h3>Kunde inte hämta produkt</h3>
                )}
                </Grid>
        </div>
          
    
        
    );
}

export default ProductList;