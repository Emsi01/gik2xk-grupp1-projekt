const router = require('express').Router();
const productService = require('../services/productService');



// Hämta alla produkter
router.get('/', (req, res) => {
        productService.getAll().then((result) => {
        res.status(result.status).json(result.data);
      }); 
});

// Hämta alla produkter och inkludera betyg 
router.get('/:id', (req, res) => {
  const id = req.params.id; 
    productService.getById(id).then((result) => {
      res.status(result.status).json(result.data);
    });
  });
  

// Ge produkt betyg 
  router.post('/:id/addRating', (req, res) => {
    const rating = req.body;
    const id = req.params.id;
    productService.addRating(id, rating).then((result) => {
      res.status(result.status).json(result.data);
     });
  });

  router.post('/:id/addToCart', (req, res) => {
    const amount = req.body;
    const id = req.params.id;
    productService.addToCart(id, amount).then((result) => {
      res.status(result.status).json(result.data);
     });
  });

// Nedan följer crud funktioner för produkt 
  router.post('/', (req, res) => {
    const product = req.body;
    productService.create(product).then((result) => {
    res.status(result.status).json(result.data);
    });
  });

  router.put('/', (req, res) => {
    const product = req.body;
    const id = product.id;

    productService.update(product, id).then((result) => {
    res.status(result.status).json(result.data);
    });
  });

  router.delete('/', (req, res) => {
    const id = req.body.id;
  productService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
    });
  });


  module.exports = router;