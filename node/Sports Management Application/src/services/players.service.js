const { Players } = require("../models");

// create-Players
const createPlayers = async (reqBody) => {
  return Players.create(reqBody);
};
// get Players list
const getPlayersList = async (req, res) => {
  return Players.find();
};
// get Players details by id
const getPlayersById = async (playersId) => {
  return Players.findById(playersId);
};
// delete Players
const deletePlayers = async (playersId) => {
  return Players.findByIdAndDelete(playersId);
};
// update Players
const updatePlayersID = async (playersId, updateBody) => {
  return Players.findByIdAndUpdate(playersId, { $set: updateBody });
};
module.exports = {
    createPlayers,
    getPlayersList,
    getPlayersById,
    deletePlayers,
    updatePlayersID,
};
