import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { create, getOne, remove, update } from '../services/ProductService';
import {
  Box,
  Button,
  Chip,
  Container,
  TextField,
  Typography
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

function productsEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const emptyproduct = {
    id: 0,
    title: '',
    description: '',
    price: '',
    imageUrl: ''
  };
  const [product, setproduct] = useState(emptyproduct);

  useEffect(() => {
    if (id) {
      getOne(id).then((product) => setproduct(product));
    } else {
      setproduct(emptyproduct);
    }
  }, [id]);

  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    const newproduct = { ...product, [name]: value };
    setproduct(newproduct);
  }

  function onSave() {
    if (product.id === 0) {
      create(product).then((response) => {
        navigate('/', {
          replace: true,
          state: { message: `Produkten ${response.title} skapades.` }
        });
      });
    } else {
      update(product).then((response) =>
        navigate(`/products/${product.id}`, { replace: true, state: response })
      );
    }
  }

  function onDelete() {
    remove(product.id).then((response) =>
      navigate('/', { replace: true, state: response })
    );
  }


  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h2">
        {product.id ? 'Ändra produkt' : 'Skapa produkt'}
      </Typography>
      <Box mt={4}>
        <form>
          <Box>
            <TextField
              fullWidth
              margin="normal"
              onChange={onChange}
              value={product.title}
              name="title"
              id="title"
              placeholder="Titel"
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              margin="normal"
              onChange={onChange}
              value={product.description}
              name="description"
              id="description"
              multiline
              placeholder="Beskrivning"
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              margin="normal"
              onChange={onChange}
              value={product.price}
              name="price"
              id="price"
              placeholder="Pris"
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              margin="normal"
              onChange={onChange}
              value={product.imageUrl}
              name="imageUrl"
              id="imageUrl"
              placeholder="Sökväg till bild"
            />
          </Box>
          <Box mt={2}>
          </Box>
          <Box display="flex" mt={2}>
            <Box flexGrow={1}>
              <Button
                startIcon={<ChevronLeftIcon />}
                sx={{ mr: 1 }}
                variant="contained"
                onClick={() => navigate(-1)}>
                Tillbaka
              </Button>
              {id && (
                <Button
                  startIcon={<DeleteIcon />}
                  onClick={onDelete}
                  variant="contained"
                  color="error">
                  Ta bort
                </Button>
              )}
            </Box>
            <Button
              startIcon={<SaveIcon />}
              onClick={onSave}
              variant="contained"
              color="success">
              Spara
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default productsEdit;