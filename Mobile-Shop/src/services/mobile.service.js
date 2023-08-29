const {mobile} = require('../models');

// Create Mobile
const createMobile = async (reqBody) => {
    return mobile.create(reqBody);
};
// Get Mobile List
const getMobilelist = async (req, res) => {
    return mobile.find();
};
// Get Mobile Details By Id
const getMobileId = async (mobileId) => {
    return mobile.findById(mobileId);
};
// Delete Mobile
const deleteMobileId = async (mobileId) => {
    return mobile.findByIdAndDelete(mobileId);
};
// Update Mobile
const updateMobileId = async (mobileId,updateBody) => {
    return mobile.findByIdAndUpdate(mobileId,{$set:updateBody});
};
module.exports = {
    createMobile,
    getMobilelist,
    getMobileId,
    deleteMobileId,
    updateMobileId
}