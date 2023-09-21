const { userService } = require("../services");
// create-user
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;
    const user = await userService.createUser(reqBody);
    if (!user) {
      throw new Error("Couldn't create user");
    }
    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// get user-list
const getUserList = async (req, res) => {
  try {
    const getUser = await userService.getUserList(req, res);
    res.status(200).json({
      success: true,
      message: "User details get successfully!",
      data: {
        getUser,
      },
    });
  } catch (error) {
    res.status(400).json.json({
      success: false,
      message: error.message,
    });
  }
};
//  Delete user list
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }
    await userService.deleteUser(userId);
    res.status(200).json({
      success: true,
      message: "User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// Update user data
const updateDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }
    await userService.updateDetails(userId, req.body);
    res.status(200).json({
      success: true,
      message: "User details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createUser,
  getUserList,
  deleteUser,
  updateDetails,
};
