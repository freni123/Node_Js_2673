const Joi = require("joi");

// create-match result
const createResult = {
  body: Joi.object().keys({
    match: Joi.string().allow().trim(),
    contact: Joi.string().allow().trim(),
    prize: Joi.number().integer().required(),
  }),
};
module.exports = {
    createResult,
};
