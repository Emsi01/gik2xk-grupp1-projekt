import ProductItemSmall from "./ProductItemSmall";

function ProductList() {
    const products = [ {
        "id": 1,
        "title": "Test produkt", 
        "description": "Testar testar...",
        "price": 1234,
        "imageUrl": "http://fuljävlabild.com"
    }, 
    {
        "id": 2,
        "title": "Test produkt 2", 
        "description": "Testar testar... 2",
        "price": 12342,
        "imageUrl": "http://fuljävlabild2.com"
    }];
    
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