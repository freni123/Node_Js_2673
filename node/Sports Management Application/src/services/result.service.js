const { matchResult } = require("../models");

// create-result
const createResult = async (reqBody) => {
  return matchResult.create(reqBody);
};
// get result list
const getResultList = async (req, res) => {
  return matchResult.find().populate("match").populate("contact");
};
// get result details by id
const getResultById = async (resultId) => {
  return matchResult.findById(resultId);
};
// delete result
const deleteResult= async (resultId) => {
  return matchResult.findByIdAndDelete(resultId);
};
// update result
const updateResultId = async (resultId, updateBody) => {
  return matchResult.findByIdAndUpdate(resultId, { $set: updateBody });
};
module.exports = {
    createResult,
    getResultList,
    getResultById,
    deleteResult,
    updateResultId,
};
