const db = require('../models');
const {
  createResponseSuccess,
  createResponseError
} = require('../helpers/responseHelper');


async function getByUser(userId) {
    try {
      const users = await db.users.findOne({ where: { id: userId } });
      const allCarts = await users.getCarts({
        where: { userId },
        include: {
            model: db.products 
        }
    });
    
      return createResponseSuccess(allCarts.map((cart) => (cart)));
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }
  

  module.exports = {
    getByUser
  };