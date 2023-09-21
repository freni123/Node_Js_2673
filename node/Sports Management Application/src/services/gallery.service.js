const { Gallery } = require("../models");

// create-gallery
const createGallery = async (reqBody) => {
  return Gallery.create(reqBody);
};
//get gallery-list
const getGalleryList = async (req, res) => {
  return Gallery.find()
};
// get gallery details by id
const getGalleryById = async (galleryId) => {
  return Gallery.findById(galleryId);
};
// delete gallery list
const deleteGallery = async (galleryId) => {
  return Gallery.findByIdAndDelete(galleryId);
};
// update gallery
const updateGalleryId = async (galleryId, updateBody) => {
  return Gallery.findByIdAndUpdate(galleryId, {
    $set: updateBody,
  });
};
module.exports = {
  createGallery,
  getGalleryList,
  getGalleryById,
  deleteGallery,
  updateGalleryId,
};
