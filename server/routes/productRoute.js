const router = require('express').Router();
const db = require('../models');
const productService = require('../services/productService');



// Hämta alla produkter
router.get('/', (req, res) => {
        productService.getAll().then((result) => {
        res.status(result.status).json(result.data);
      }); 
});



// Hämta alla produkter och inkludera betyg 
router.get('/:id', (req, res) => {

    productService.getAll().then((result) => {
      res.status(result.status).json(result.data);
    });
  });

// Ge produkt betyg 
  router.post('/:id/addRating', (req, res) => {
    productService.getAll().then((result) => {
      res.status(result.status).json(result.data);
    });
  });

// Nedan följer crud funktioner för produkt 
  router.post('/:id', (req, res) => {
    const post = req.body;
    productService.create(post).then((result) => {
    res.status(result.status).json(result.data);
    });
  });

  router.put('/', (req, res) => {
    const post = req.body;
    const id = post.id;

  productService.update(post, id).then((result) => {
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