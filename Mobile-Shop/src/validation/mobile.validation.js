const Joi = require("joi");

//  create-mobile
const createMobile = {
  body: Joi.object().keys({
    brand_name: Joi.string().required().trim(),
    mobile_model: Joi.string().required().trim(),
    storage: Joi.string().required().trim(),
    dispaly_size: Joi.string().required().trim(),
    color: Joi.string().required().trim(),
    camera_resolution: Joi.string().required().trim(),
    release_date: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
  }),
};
module.exports = {
  createMobile,
};