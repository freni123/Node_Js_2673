const express = require("express");
const { tokenController } = require("../../controllers");
const { tokenValidation } = require("../../validation");
const validate = require("../../middlewares/validate");
// const auth = require("../../middlewares/auth");

const router = express.Router();

// createt token
router.post(
  "/create-token",
//   auth(),
  validate(tokenValidation.generateToken),
  tokenController.generateToken
);
/** Verify token to get user details */
// router.get("/verify-token", auth(), tokenController.verifyToken);

module.exports = router;
