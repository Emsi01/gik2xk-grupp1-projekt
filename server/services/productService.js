const db = require('../models');
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage
} = require('../helpers/responseHelper');
const validate = require('validate.js');
/* const products = require('../models/products'); */
/* const { canTreatArrayAsAnd } = require('sequelize/types/utils'); */

const constraints = {
  title: {
    length: {
      minimum: 2,
      maximum: 100,
      tooShort: '^Titeln måste vara minst %{count} tecken lång.',
      tooLong: '^Titeln får inte vara längre än %{count} tecken lång.'
    }
  }
};

async function getAll() {

    try {
      const allProducts = await db.products.findAll({include : [db.ratings]});
      return createResponseSuccess(allProducts.map((products) => (products)));
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }

  async function getById(id) {
    try {
      const products = await db.products.findOne({
        where: { id },
        include: [
          db.ratings,
        ]
      });
      /* Om allt blev bra, returnera post */
      return createResponseSuccess(products);
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }

  async function addRating(id, ratings) {
    if (!id) {
      return createResponseError(422, 'Id är obligatoriskt');
    }
    try {
      ratings.productId = id;
      const newRating = await db.ratings.create(ratings);
      return createResponseSuccess(newRating);
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }

  async function create(products) {
    const invalidData = validate(products, constraints);
    if (invalidData) {
      return createResponseError(422, invalidData);
    }
    try {
      const newProducts = await db.products.create(products);
      //post tags är en array av namn
  
      return createResponseSuccess(newProducts);
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }

  async function update(products, id) {
    const invalidData = validate(products, constraints);
    if (!id) {
      return createResponseError(422, 'Id är obligatoriskt');
    }
    if (invalidData) {
      return createResponseError(422, invalidData);
    }
    try {
      const existingPost = await db.products.findOne({ where: { id } });
      if (!existingPost) {
        return createResponseError(404, 'Hittade inget inlägg att uppdatera.');
      }
      await db.products.update(products, {
        where: { id }
      });
      return createResponseMessage(200, 'Inlägget uppdaterades.');
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }

  async function destroy(id) {
    if (!id) {
      return createResponseError(422, 'Id är obligatoriskt');
    }
    try {
      await db.products.destroy({
        where: { id }
      });
      return createResponseMessage(200, 'Inlägget raderades.');
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }

async function addToCart(userId, productId, amount) {
  try {
     if (!userId || !productId) {
      return createResponseError(400, 'ID är obligatoriskt');
    }
    const [cart, created] = await db.cart.findOrCreate({
      where: { userId, payed: false},
      defaults: { userId }
    });
    const cartRow = await db.cartRow.upsert({
      cartId: cart.id,
      productId,
      amount
    });
    return {
      status: 200,
      data: cartRow
    };
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}


  module.exports = {
    getAll,
    getById, 
    addRating,
    destroy,
    update,
    create, 
    addToCart
  };