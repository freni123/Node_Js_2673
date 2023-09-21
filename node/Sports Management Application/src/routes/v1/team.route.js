const express = require("express");
const { teamController } = require("../../controllers");
const { teamValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

// crete-team
router.post(
  "/crete-team",
  validate(teamValidation.createTeam),
  teamController.createTeam
);
// get team list
router.get("/team-list", teamController.getTeamList);
// delete team
router.delete("/delete-team/:teamId", teamController.deleteTeam);
// update team list
router.put("/update-team/:teamId", teamController.updateTeam);
module.exports = router;
