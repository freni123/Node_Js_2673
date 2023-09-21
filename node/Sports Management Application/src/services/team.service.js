const { team } = require("../models");

// create-team
const createTeam = async (reqBody) => {
  return team.create(reqBody);
};
// get team list
const getTeamList = async (req, res) => {
  return team.find().populate("player").populate("user");
};
// get team details by id
const getTeamById = async (teamId) => {
  return team.findById(teamId);
};
// delete team
const deleteTeam = async (teamId) => {
  return team.findByIdAndDelete(teamId);
};
// update team
const updateTeamId = async (teamId, updateBody) => {
  return team.findByIdAndUpdate(teamId, { $set: updateBody });
};
module.exports = {
  createTeam,
  getTeamList,
  getTeamById,
  deleteTeam,
  updateTeamId,
};
