const { options } = require("joi");
const { user } = require("../models");

//create-user
const createUser = async (reqBody) => {
  return user.create(reqBody);
};
//get user-list
const getUserList = async (req, res) => {
  return user.find({ $or: [{ is_active: true }] });
};
// get user details by id
const getUserById = async (userId) => {
  return user.findById(userId);
};
// delete user list
const deleteUser = async (userId) => {
  return user.findByIdAndDelete(userId);
};
// update user
const updateUserId = async (userId, updateBody) => {
  return user.findByIdAndUpdate(userId, {
    $set: updateBody,
  });
};
module.exports = {
  createUser,
  getUserList,
  deleteUser,
  getUserById,
  updateUserId,
};
