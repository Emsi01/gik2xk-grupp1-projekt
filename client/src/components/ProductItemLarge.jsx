
/* import Image from '../assets/images/bottle.jpg'; */



function ProductItemLarge({product}) {
    
    /* const Image = require(`${product.imageUrl}`); */
    return (
        <div>
            <img src={Image} height={200} width={200} alt="Bottle"/>
            <h3>{product.title}</h3>
            <p>Pris: {product.price}</p>
            <p>Beskrivning: {product.description}</p>
            <p>Beskrivning: {product.imageUrl}</p>
            
        </div>
    );
}

export default ProductItemLarge;
