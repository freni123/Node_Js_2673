const express = require('express');
const {mobileController} = require('../../controller');
const {mobileValidation} = require('../../validation');
const validate = require('../../middlewares/validate');

const router = express.Router();

// Create Mobile Data
router.post(
    "/create-mobile",
    validate(mobileValidation.createMobile),
    mobileController.createMobile
);
// Get Mobile List
router.get(
    "/mobile-list",
    mobileController.getMobilelist
);
// Delete Mobile Data
router.delete(
    "/delete-mobile/:mobileId",
    mobileController.deteleMobileId
);
// Update Mobile Data
router.put(
    "/update-mobile/:mobileId",
    mobileController.updateMobile
);

module.exports = router;