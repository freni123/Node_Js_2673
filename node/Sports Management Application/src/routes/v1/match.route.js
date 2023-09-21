const express = require("express");
const { matchController } = require("../../controllers");
const { matchValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

// crete-matches
router.post(
  "/crete-match",
  validate(matchValidation.createMatch),
  matchController.createMatch
);
// get matches list
router.get("/match-list", matchController.getMatchList);
// delete matches
router.delete("/delete-match/:matchId", matchController.deleteMatch);
// update matches list
router.put("/update-match/:matchId", matchController.updateMatch);
module.exports = router;
