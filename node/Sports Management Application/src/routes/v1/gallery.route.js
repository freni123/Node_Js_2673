const express = require("express");
const { galleryController } = require("../../controllers");

const router = express.Router();
//create-gallery
router.post("/create-gallery", galleryController.createGallery);
// get gallery list
router.get("/gallery-list", galleryController.getGalleryList);
// delete gallery
router.delete("/delete-gallery/:galleryId", galleryController.deleteGallery);
// update gallery
router.put("/update-gallery/:galleryId", galleryController.updateGallery);
module.exports = router;
