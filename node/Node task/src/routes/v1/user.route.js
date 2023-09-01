const express = require('express');
 const { userValidation } = require('../../validation');
const { userController} = require('../../controllers');
 const validate  = require('../../middlewares/validate');

const router = express.Router();

// Create-User
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);
//GET User List
router.get(
    "/list",
        // validate(userValidation.createUser),
        userController.getUserList
);
module.exports = router;
