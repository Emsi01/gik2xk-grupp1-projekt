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
        <ul>
            {products?.length > 0 ? products.map(product => (
            <li key={`products_${product.id}`}> 
                <ProductItemSmall product={product} />
            </li>
            )) : (
                <h3>Kunde inte hämta produkt</h3>
            )}
        </ul>
    );
}

export default ProductList;