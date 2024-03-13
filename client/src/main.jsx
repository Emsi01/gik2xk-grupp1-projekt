import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ProductsEdit from './views/ProductsEdit.jsx';
import Products from './views/Products.jsx';
import ProductsDetail from './views/ProductsDetail.jsx';
import Home from './views/Home.jsx';
import Carts from './views/Carts.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
/* import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  blueGrey,
  deepPurple,
  green,
  grey,
  orange,
  purple,
  red,
  teal
} from '@mui/material/colors';  */

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products/:id/edit',
        element: <ProductsEdit />
      },
      {
        path: '/products/:id',
        element: <ProductsDetail />
      },
      {
        path: '/products/new',
        element: <ProductsEdit />
      },
      {
        path: '/users/:id/products',
        element: <Products />
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
