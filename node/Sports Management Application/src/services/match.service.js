const { matches } = require("../models");
const { populate } = require("../models/token.model");

// create-match
const createMatch = async (reqBody) => {
  return matches.create(reqBody);
};
//get match-list
const getMatchList = async (req, res) => {
  return matches.find().populate("team").populate("matchResult");
};
// get match details by id
const getMatchById = async (matchId) => {
  return matches.findById(matchId);
};
// delete match list
const deleteMatch = async (matchId) => {
  return matches.findByIdAndDelete(matchId);
};
// update match
const updateMatchId = async (matchId, updateBody) => {
  return matches.findByIdAndUpdate(matchId, {
    $set: updateBody,
  });
};
module.exports = {
  createMatch,
  getMatchList,
  getMatchById,
  deleteMatch,
  updateMatchId,
};
