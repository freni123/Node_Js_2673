const  {mobileService} = require('../services');

// Create-Mobile
const createMobile = async (req, res) => {
    try {
        const reqBody = req.body;
        const mobile = await mobileService.createMobile(reqBody);
        if(!mobile){
            throw new Error("Couldn't create Mobile");
        }
        res.status(200).json({
            success:true,
            message:"mobile detail add successfully!",
            data:{mobile},
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
};
// Get Mobile List
const getMobilelist = async (req, res) => {
    try {
      const getMobilelist = await mobileService.getMobilelist(req, res);
      res.status(200).json({
        success: true,
        message: "Get Mobile list successfully!",
        data: getMobilelist,
      });
    } catch (error) {
      res.status(400).json({success: false,message: error.message});
    }
  };
// Delete Mobile Data
const deteleMobileId = async (req, res) => {
    try {
      const mobileId = req.params.mobileId;
      const mobileExists = await mobileService.getMobileId(mobileId);
      if (!mobileExists) {
        throw new Error("Mobile not found!");
      }
      await mobileService.deleteMobileId(mobileId);
      res.status(200).json({
        success: true,
        message: "Mobile data delete successfully!",
      });
    } catch (error) {res.status(400).json({success: false,message: error.message});
    }
  };
// Update Mobile Data By Id
const updateMobile = async (req, res) => {
    try {
      const mobileId = req.params.mobileId;
      const mobileExists = await mobileService.getMobileId(mobileId);
      if (!mobileExists) {
        throw new Error("Mobile Id not found!");
      }
      await mobileService.updateMobileId(mobileId, req.body);
      res.status(200).json({
        success: true,
        message: "Mobile data Upadte successfully!",
      });
    } catch (error) {
      res.status(400).json({success: false,message: error.message});
    }
  };
//  Manage Mobile Status
const manageMobileStatus = async (req,res) => {
  try {
    const manageStatus = await mobileService.manageMobileStatus(
      req.params.mobileId
    );
    let resMessage = manageStatus.is_active
    ? "Mobile can enable to sale"
    : "Mobile can not enable to sale";
    res.status(200).json({success:true,message:resMessage,data:manageStatus});
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success:false,
      message:error?.message ||"Something went wrong, please try again or later!",
    });
  }
}

module.exports = {
    createMobile,
    getMobilelist,
    deteleMobileId,
    updateMobile,
    manageMobileStatus
}
