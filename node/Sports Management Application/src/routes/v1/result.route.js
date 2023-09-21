const express = require("express");
const { resultController } = require("../../controllers");
const { resultValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

// crete-result
router.post(
  "/crete-result",
  validate(resultValidation.createResult),
  resultController.createResult
);
// get result list
router.get("/result-list", resultController.getResultList);
// delete result
router.delete("/delete-result/:resultId", resultController.deleteResult);
// update result list
router.put("/update-result/:resultId", resultController.updateResult);
module.exports = router;
