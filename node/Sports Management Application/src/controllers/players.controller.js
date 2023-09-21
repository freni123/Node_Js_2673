const { playersService } = require("../services");
// create-players
const createPlayers = async (req, res) => {
  try {
    const reqBody = req.body;
    const players = await playersService.createPlayers(reqBody);
    if (!players) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "players created successfully!",
      data: players,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// get players list
const getPlayersList = async (req, res) => {
  try {
    const getPlayers = await playersService.getPlayersList(req, res);
    res.status(200).json({
      success: true,
      message: "players details get successfully!",
      data: getPlayers,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// delete players list
const deletePlayers = async (req, res) => {
  try {
    const playersId = req.params.playersId;
    const playersExist = await playersService.getPlayersById(playersId);
    if (!playersExist) {
      throw new Error("players not found!");
    }
    await playersService.deletePlayers(playersId);
    res.status(200).json({
      success: true,
      message: "players data delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// update players data
const updatePlayers = async (req, res) => {
  try {
    const playersId = req.params.playersId;
    const playersExist = await playersService.getPlayersById(playersId);
    if (!playersExist) {
      throw new Error("players not found!");
    }
    await playersService.updatePlayers(playersId, req.body);
    res.status(200).json({
      success: true,
      message: "players data update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
    createPlayers,
    getPlayersList,
    deletePlayers,
  updatePlayers,
};
