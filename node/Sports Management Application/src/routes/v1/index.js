const express = require("express");
const userRoute = require("./user.route");
const founderRoute = require("./founder.route");
const teamRoute = require("./team.route");
const galleryRoute = require("./gallery.route");
const matchRoute = require("./match.route");
const tournamentRoute = require("./tournament.route");
const playersRoute = require("./players.route");
const resultRoute = require("./result.route");
const contactRoute = require("./contact.route");
const tokenRoute = require("./token.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/founder", founderRoute);
router.use("/team", teamRoute);
router.use("/gallery", galleryRoute);
router.use("/match", matchRoute);
router.use("/tournament", tournamentRoute);
router.use("/players", playersRoute);
router.use("/result", resultRoute);
router.use("/contact", contactRoute);
router.use("/token",tokenRoute);

module.exports = router;
