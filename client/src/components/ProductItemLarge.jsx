function ProductItemLarge({product}) {
    
    return (
        <div>
            <img src={product.imageUrl}  width={200} alt={`Bild på ${product.title}`}/>
            <h3>{product.title}</h3>
            <p>Beskrivning: {product.description}</p>
            <p>Pris: {`${product.price} kr`}</p>
        </div>
    );
}

export default ProductItemLarge;



