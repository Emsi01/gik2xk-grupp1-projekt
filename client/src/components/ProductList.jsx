import ProductItemSmall from "./ProductItemSmall";
import { getAll } from '../services/ProductService';

function ProductList() {
    const products = [ {
        "id": 1,
        "title": "Test produkt", 
        "description": "Testar testar...",
        "price": 1234,
        "imageUrl": "../assets/img/bottle.jpg"
    }, 
    {
        "id": 2,
        "title": "Test produkt 2", 
        "description": "Testar testar... 2",
        "price": 12342,
        "imageUrl": "../assets/img/toothbrush.jpg"
    }];
    
    getAll().then((products) => console.log(products));
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