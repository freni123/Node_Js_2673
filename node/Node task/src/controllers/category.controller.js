const { categoryService} = require("../services");
/** create user */
const createCategory = async (req, res) => {
    try {
      const reqBody = req.body;
      console.log(reqBody);
      // const userExists = await userService.getUserByEmail(reqBody.email);
      // if (userExists) {
      //   throw new Error("User already created by this email!");
      // }

      const category = await categoryService.createCategory(reqBody);
      if (!category) {
        throw new Error("Something went wrong, please try again or later!");
      }

      res.status(200).json({
        success: true,
        message: reqBody,
        data: { reqBody },
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
  //** get category list */
  const getCategoryList = async (req,res) => {
    try {
      const getCategoryDetails = await categoryService.getCategoryList(req,res);
      res.status(200).json({
        success:true,
        message:"Category details get successfully!",
        data:getCategoryDetails,
      })
    } catch (error) {
      res.status(400);
    }
  }
  module.exports = {createCategory,getCategoryList}

