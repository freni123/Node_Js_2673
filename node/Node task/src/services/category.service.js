const { category } = require("../models");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createCategory = async (reqBody) => {
    return category.create(reqBody);
  };
  // ** get category list*/
  const getCategoryList = async(req,res) => {
    return book.find();
  }
  module.exports = {createCategory,getCategoryList};
