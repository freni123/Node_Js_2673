const Joi = require("joi");

// create-user
const createUser = {
  body: Joi.object().keys({
    user_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.number().integer().required(),
    // role: Joi.array().allow().trim(),
  }),
};
module.exports = {
  createUser,
};
