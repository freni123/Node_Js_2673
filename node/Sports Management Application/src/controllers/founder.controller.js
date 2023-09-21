const { founderService } = require("../services");
// create-founder
const createFounder = async (req, res) => {
  try {
    const reqBody = req.body;
    const founder = await founderService.createFounder(reqBody);
    if (!founder) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Founder created successfully!",
      data: founder,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// get founder list
const getFounderList = async (req, res) => {
  try {
    const getFounder = await founderService.getFounderList(req, res);
    res.status(200).json({
      success: true,
      message: "Founder details get successfully!",
      data: getFounder,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// delete founder list
const deleteFounder = async (req, res) => {
  try {
    const founderId = req.params.founderId;
    const founderExist = await founderService.getFounderById(founderId);
    if (!founderExist) {
      throw new Error("Founder not found!");
    }
    await founderService.deleteFounder(founderId);
    res.status(200).json({
      success: true,
      message: "Founder data delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// update founder data
const updateFounder = async (req, res) => {
  try {
    const founderId = req.params.founderId;
    const founderExist = await founderService.getFounderById(founderId);
    if (!founderExist) {
      throw new Error("Founder not found!");
    }
    await founderService.updateFounder(founderId, req.body);
    res.status(200).json({
      success: true,
      message: "Founder data update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createFounder,
  getFounderList,
  deleteFounder,
  updateFounder,
};
