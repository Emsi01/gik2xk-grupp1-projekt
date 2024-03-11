const db = require('../models');
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage
} = require('../helpers/responseHelper');
const validate = require('validate.js');


async function getAll() {

    try {
      const allProducts = await db.products.findAll();
      return createResponseSuccess(allProducts.map((products) => _formatPost(products)));
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }

  module.exports = {
    getAll
  };