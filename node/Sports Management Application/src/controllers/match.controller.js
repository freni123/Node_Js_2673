const { matchService } = require("../services");
// create-match
const createMatch = async (req, res) => {
  try {
    const reqBody = req.body;
    const match = await matchService.createMatch(reqBody);
    if (!match) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "match created successfully!",
      data: match,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// get match list
const getMatchList = async (req, res) => {
  try {
    const getMatch = await matchService.getMatchList(req, res);
    res.status(200).json({
      success: true,
      message: "match details get successfully!",
      data: getMatch,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// delete match list
const deleteMatch = async (req, res) => {
  try {
    const matchId = req.params.matchId;
    const matchExist = await matchService.getMatchById(matchId);
    if (!matchExist) {
      throw new Error("match not found!");
    }
    await matchService.deleteMatch(matchId);
    res.status(200).json({
      success: true,
      message: "match data delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// update match data
const updateMatch = async (req, res) => {
  try {
    const matchId = req.params.matchId;
    const matchExist = await matchService.getMatchById(matchId);
    if (!matchExist) {
      throw new Error("match not found!");
    }
    await matchService.updateMatch(matchId, req.body);
    res.status(200).json({
      success: true,
      message: "match data update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
    createMatch,
    getMatchList,
    deleteMatch,
    updateMatch,
};
