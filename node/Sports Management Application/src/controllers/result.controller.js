const {resultService} = require("../services");
// create-result
const createResult = async (req, res) => {
  try {
    const reqBody = req.body;
    const result = await resultService.createResult(reqBody);
    if (!result) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "result created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// get result list
const getResultList = async (req, res) => {
  try {
    const getResult = await resultService.getResultList(req, res);
    res.status(200).json({
      success: true,
      message: "Result details get successfully!",
      data: getResult,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// delete result list
const deleteResult = async (req, res) => {
  try {
    const resultId = req.params.resultId;
    const resultExist = await resultService.getResultById(resultId);
    if (!resultExist) {
      throw new Error("Result not found!");
    }
    await resultService.deleteResult(resultId);
    res.status(200).json({
      success: true,
      message: "Result data delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// update result data
const updateResult = async (req, res) => {
  try {
    const resultId = req.params.resultId;
    const resultExist = await resultService.getTeamById(resultId);
    if (!resultExist) {
      throw new Error("Result not found!");
    }
    await resultService.updateResult(resultId, req.body);
    res.status(200).json({
      success: true,
      message: "Result data update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
    createResult,
    getResultList,
    deleteResult,
    updateResult,
};
