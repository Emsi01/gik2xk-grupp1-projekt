
/* import Image from '../assets/img/{product.imageUrl}'; */




function ProductItemLarge({product}) {
    
    /* const Image = require(`${product.imageUrl}`); */
    return (
        <div>
            <img src={product.imageUrl}  width={200} alt={`Bild på ${product.title}`}/>
       
            
            <h3>{product.title}</h3>
            <p>Pris: {product.price}</p>
            <p>Beskrivning: {product.description}</p>
            
            
        </div>
    );
}

export default ProductItemLarge;
