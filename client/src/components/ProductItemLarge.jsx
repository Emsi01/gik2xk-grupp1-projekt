
/* import Image from `${product.img}`; */



function ProductItemLarge({product}) {
    
    /* const Image = require(`${product.imageUrl}`); */
    return (
        <div>
            <img src={Image} height={200} width={200} alt={product.title}/>
            <h3>{product.title}</h3>
            <p>Pris: {product.price}</p>
            <p>Beskrivning: {product.description}</p>
            
            
        </div>
    );
}

export default ProductItemLarge;
