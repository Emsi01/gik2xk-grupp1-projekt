const db = require('../models');
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage
} = require('../helpers/responseHelper');
const validate = require('validate.js');

async function getByUser(userId) {
    try {
      const users = await db.users.findOne({ where: { id: userId } });
      const allCarts = await users.getCarts({ where: { userId }});
      /* Om allt blev bra, returnera allPosts */
      return createResponseSuccess(allCarts.map((cart) => (cart)));
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }
  

  module.exports = {
    getByUser
  };