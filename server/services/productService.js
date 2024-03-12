const db = require('../models');
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage
} = require('../helpers/responseHelper');
const validate = require('validate.js');
const products = require('../models/products');

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

  /* async function addProducts(userId, productId, amount) {
    if (!productId || userId) {
      return createResponseError(422, 'Id är obligatoriskt');
    }
    try {
      products.productId = id;
      const newCartRow = await db.cartRow.create(cartRow);
      return createResponseSuccess(newCartRow);
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  } */
  
/*   async function addToCart(userId, amount) {
    // Kontrollera om productId och userId är angivna
    if (!userId) {
      return createResponseError(422, 'Användar-ID är obligatoriska');
    } 
  
    try {
      // Skapa ett nytt objekt för varukorgsraden
      const cartRow = {
        userId: userId,
        amount: amount
      };
  
      // Skapa den nya varukorgsraden i databasen
      const newCartRow = await db.cartRow.create(cartRow);
  
      // Returnera en framgångsrik respons
      return createResponseSuccess(newCartRow);
    } catch (error) {
      // Om det uppstår ett fel, returnera ett felmeddelande
      return createResponseError(error.status, error.message);
    }
  } */
  
    async function addToCart(userId, amount) {
    const { userId, amount } = req.body;
    const productId = req.params.id;
  
    try {
        // Hämta användarens kundvagn
        let cart = await carts.findOne({ where: { userId } });
  
        // Om användaren inte har en kundvagn, skapa en
        if (!cart) {
            cart = await carts.create({ userId });
        }
  
        // Hämta produktinformation
        const product = await products.findOne({ where: { id: productId } });
        if (!product) {
            return res.status(404).send({ error: 'Produkten hittades inte' });
        }
  
        // Skapa eller uppdatera posten i CartRow
        let cartRows = await cartRows.findOne({ where: { cartId: cart.id, productId } });
        if (cartRows) {
            cartRows.amount += amount;
            await cartRow.save();
        } else {
            cartRows = await cartRow.create({ cartId: cart.id, productId, amount });
        }
  
        res.send({ success: true, cartRow });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Ett fel uppstod vid tillägg av produkt till kundvagnen' });
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