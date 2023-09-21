const { galleryService } = require("../services");
// create-gallery
const createGallery = async (req, res) => {
  try {
    const reqBody = req.body;
    if (req.file) {
      reqBody.image = req.file.filename;
    } else {
      throw new Error("Gallery image is required!");
    }
    const createdGallery = await galleryService.createGallery(reqBody);
    res.status(200).json({
      succcess: true,
      message: "Gallery create successfully!",
      data:createdGallery,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      succcess: false,
      message:
        error?.message || "Something went wrong, please try again or later!",
    });
  }
};

// get gallery list
const getGalleryList = async (req, res) => {
  try {
    const getGallery = await galleryService.getGalleryList(req, res);
    res.status(200).json({
      succcess: true,
      message: "gallery get successfully!",
      data: getGallery,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message: error?.message || "Something went wrong, please try again or later!",
    });
  }
};
// delete gallery list
const deleteGallery = async (req, res) => {
  try {
    const galleryId = req.params.galleryId;
    const galleryExis = await galleryService.getGalleryById(galleryId);
    if (!galleryExis) {
      throw new Error("Gallery not found!");
    }
    await galleryService.deleteGallery(galleryId);
    res.status(200).json({
      succcess: true,
      message: "Gallery delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// update gallery
const updateGallery = async (req, res) => {
  try {
    const galleryId = req.params.galleryId;
    const galleryExis = await galleryService.getGalleryById(galleryId);
    if (!galleryExis) {
      throw new Error("Gallery not found!");
    }
    await galleryService.updateGallery(galleryId.req.body);
    res.status(200).json({
      succcess: true,
      message: "Gallery update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createGallery,
  getGalleryList,
  deleteGallery,
  updateGallery,
};
