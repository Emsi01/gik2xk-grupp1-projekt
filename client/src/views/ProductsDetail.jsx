import { useNavigate } from 'react-router-dom';
import ProductItemLarge from '../components/ProductItemLarge';
import { Button } from '@mui/material';
import Ratings from '../components/Ratings'
import { getOne } from '../services/ProductService';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link} from 'react-router-dom';
function ProductsDetail() {
    
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getOne(id).then((product) => setProduct(product));
  }, [id]); 
    const navigate = useNavigate();

    return product ? ( 
        <div>
            <ProductItemLarge product={product}/>
            <Button onClick={()=> navigate(-1)}>Tillbaka</Button>
            <Button>Lägg till i varukorg</Button>
            <Button><Link to={`/products/${product.id}/edit`}>Ändra</Link></Button>
            
            <Ratings/>
        </div>
     ) : (<h3>Kunde inte hitta produkt</h3>);
}

export default ProductsDetail;




























/* const product = {
        "id": 1,
        "title": "test",
        "description": "hejhejhejhejhejhej",
        "price": 22,
        "imageUrl": "../assets/img/bottle.jpg",
        "createdAt": "2024-03-12T12:42:20.000Z",
        "updatedAt": "2024-03-12T12:48:10.000Z",
        "ratings": [
            {
                "id": 1,
                "rating": 5,
                "createdAt": "2024-03-12T13:06:00.000Z",
                "updatedAt": "2024-03-12T13:06:00.000Z",
                "productId": 1
            }
        ]
    } */