const Joi = require("joi");

/** Create jsonwebroken  */
const generateToken = {
  body: Joi.object({
    user: Joi.string().allow().trim(),
  }),
};

module.exports = {
  generateToken,
};
