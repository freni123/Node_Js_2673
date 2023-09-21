const { Tournament } = require("../models");

// create-Tournament
const createTournament = async (reqBody) => {
  return Tournament.create(reqBody);
};
// get Tournament list
const getTournamentList = async (req, res) => {
  return Tournament.find().populate("match");
};
// get Tournament details by id
const getTournamentById = async (tournamentId) => {
  return Tournament.findById(tournamentId);
};
// delete Tournament
const deleteTournament = async (tournamentId) => {
  return Tournament.findByIdAndDelete(tournamentId);
};
// update Tournament
const updateTournamentId = async (tournamentId, updateBody) => {
  return Tournament.findByIdAndUpdate(tournamentId, { $set: updateBody });
};
module.exports = {
    createTournament,
    getTournamentList,
    getTournamentById,
    deleteTournament,
    updateTournamentId,
};
