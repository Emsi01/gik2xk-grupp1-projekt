import ProductItemSmall from "./ProductItemSmall";
import { getAll } from '../services/ProductService';
import {useState, useEffect} from 'react';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAll().then(products => {
            setProducts(products);
        })
    }, []) 
    
    return (
        <div>
            {products?.length > 0 ? products.map(product => (
            <div key={`products_${product.id}`}> 
                <ProductItemSmall product={product} />
            </div>
            )) : (
                <h3>Kunde inte hämta produkt</h3>
            )}
        </div>
    );
}

export default ProductList;