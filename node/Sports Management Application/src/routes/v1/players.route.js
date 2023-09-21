const express = require("express");
const { playersController } = require("../../controllers");
const { playersValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

// crete-players
router.post(
  "/crete-players",
  validate(playersValidation.createPlayers),
  playersController.createPlayers
);
// get players list
router.get("/players-list", playersController.getPlayersList);
// delete players
router.delete("/delete-players/:playersId", playersController.deletePlayers);
// update players list
router.put("/update-players/:playersId", playersController.updatePlayers);
module.exports = router;
