import { useNavigate } from 'react-router-dom';
import ProductItemLarge from '../components/ProductItemLarge';
import { Button } from '@mui/material';
import Ratings from '../components/Ratings'
function ProductsDetail() {
    const product = {
        "id": 1,
        "title": "test",
        "description": "hejhejhejhejhejhej",
        "price": 22,
        "imageUrl": "",
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
    }
    const navigate = useNavigate();
    return ( 
        <div>
            <ProductItemLarge product={product}/>
            <Button onClick={()=> navigate(-1)}>Tillbaka</Button>
            <Button>Lägg till i varukorg</Button>
            <Ratings/>
        
        </div>
     );
}

export default ProductsDetail;