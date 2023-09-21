const express = require("express");
const { tournamentController } = require("../../controllers");
const { tournamentValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

// crete-tournament
router.post(
  "/crete-tournament",
  validate(tournamentValidation.createTournament),
  tournamentController.createTournament
);
// get tournament list
router.get("/tournament-list", tournamentController.getTournamentList);
// delete tournament
router.delete(
  "/delete-tournament/:tournamentId",
  tournamentController.deleteTournament
);
// update tournament list
router.put(
  "/update-tournament/:tournamentId",
  tournamentController.updateTournament
);
module.exports = router;
