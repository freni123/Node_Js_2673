const express = require("express");
const { founderController } = require("../../controllers");
const { founderValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

// crete-founder
router.post(
  "/crete-founder",
  validate(founderValidation.createFounder),
  founderController.createFounder
);
// get founder list
router.get("/founder-list", founderController.getFounderList);
// delete founder
router.delete("/delete-founder/:founderId", founderController.deleteFounder);
// update founder list
router.put("/update-founder/:founderId", founderController.updateFounder);
module.exports = router;
