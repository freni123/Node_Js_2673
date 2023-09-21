const { teamService } = require("../services");
// create-team
const createTeam = async (req, res) => {
  try {
    const reqBody = req.body;
    const team = await teamService.createTeam(reqBody);
    if (!team) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "team created successfully!",
      data: team,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// get team list
const getTeamList = async (req, res) => {
  try {
    const getTeam = await teamService.getTeamList(req, res);
    res.status(200).json({
      success: true,
      message: "Team details get successfully!",
      data: getTeam,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// delete team list
const deleteTeam = async (req, res) => {
  try {
    const teamId = req.params.teamId;
    const teamExist = await teamService.getTeamById(teamId);
    if (!teamExist) {
      throw new Error("Team not found!");
    }
    await teamService.deleteTeam(teamId);
    res.status(200).json({
      success: true,
      message: "Team data delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// update team data
const updateTeam = async (req, res) => {
  try {
    const teamId = req.params.teamId;
    const teamExist = await teamService.getTeamById(teamId);
    if (!teamExist) {
      throw new Error("Team not found!");
    }
    await teamService.updateTeam(teamId, req.body);
    res.status(200).json({
      success: true,
      message: "team data update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createTeam,
  getTeamList,
  deleteTeam,
  updateTeam,
};
