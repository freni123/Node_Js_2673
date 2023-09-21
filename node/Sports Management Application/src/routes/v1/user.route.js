const express = require("express");
const { userController } = require("../../controllers");
const { userValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create-user
router.post(
  "/create-user",
  validate(userValidation.createUser),
  userController.createUser
);
// get user list
router.get("/user-list", userController.getUserList);
// delete user list
router.delete("/delete-user/:userId", userController.deleteUser);
// update user list
router.put("/update-user/:userId", userController.updateDetails);
module.exports = router;
