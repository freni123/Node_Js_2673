const { User } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createUser = async (reqBody) => {
    return User.create(reqBody);
  };
  /**
 * Get user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
 const getUserList = async(req, res) => {
  return User.find();
}
  module.exports = {
    createUser,
    getUserList,
   };