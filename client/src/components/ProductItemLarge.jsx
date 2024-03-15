
/* import Image from '../assets/img/{product.imageUrl}'; */




function ProductItemLarge({product}) {
    
    /* const Image = require(`${product.imageUrl}`); */
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
