
import Image from '../assets/img/bottle.jpg';

function ProductItemLarge({product}) {
    return (
        <div>
            <img src={Image} height={200} width={200} alt="Bottle"/>
            <h3>{product.title}</h3>
            <p>Pris: {product.price}</p>
            <p>Beskrivning: {product.description}</p>
        </div>
    );
}

export default ProductItemLarge;
