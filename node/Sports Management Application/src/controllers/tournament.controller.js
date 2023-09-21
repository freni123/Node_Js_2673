const { tournamentService } = require("../services");
// create-Tournament
const createTournament = async (req, res) => {
  try {
    const reqBody = req.body;
    const tournament = await tournamentService.createTournament(reqBody);
    if (!tournament) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Tournament created successfully!",
      data: tournament,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// get Tournament list
const getTournamentList = async (req, res) => {
  try {
    const getTournament = await tournamentService.getTournamentList(req, res);
    res.status(200).json({
      success: true,
      message: "Tournament details get successfully!",
      data: getTournament,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// delete Tournament list
const deleteTournament = async (req, res) => {
  try {
    const tournamentId = req.params.tournamentId;
    const tournamentExist = await tournamentService.getTournamentById(tournamentId);
    if (!tournamentExist) {
      throw new Error("Tournament not found!");
    }
    await tournamentService.deleteTournament(tournamentId);
    res.status(200).json({
      success: true,
      message: "Tournament data delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// update Tournament data
const updateTournament = async (req, res) => {
  try {
    const tournamentId = req.params.tournamentId;
    const tournamentExist = await tournamentService.getTournamentById(tournamentId);
    if (!tournamentExist) {
      throw new Error("Tournament not found!");
    }
    await tournamentService.updateTournament(tournamentId, req.body);
    res.status(200).json({
      success: true,
      message: "Tournament data update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createTournament,
  getTournamentList,
  deleteTournament,
  updateTournament,
};
