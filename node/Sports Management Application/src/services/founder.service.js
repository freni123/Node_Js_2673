const { Foundr } = require("../models");

// create-founder
const createFounder = async (reqBody) => {
  return Foundr.create(reqBody);
};
// get founder list
const getFounderList = async (req, res) => {
  return Foundr.find().populate("team");
};
// get founder details by id
const getFounderById = async (founderId) => {
  return Foundr.findById(founderId);
};
// delete founder
const deleteFounder = async (founderId) => {
  return Foundr.findByIdAndDelete(founderId);
};
// update founder
const updateFounderId = async (founderId, updateBody) => {
  return Foundr.findByIdAndUpdate(founderId, { $set: updateBody });
};
module.exports = {
  createFounder,
  getFounderList,
  getFounderById,
  deleteFounder,
  updateFounderId,
};
