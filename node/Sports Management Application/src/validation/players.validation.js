const Joi = require("joi");

// create-players
const createPlayers = {
  body: Joi.object().keys({
    full_name: Joi.string().required().trim(),
    date_of_birth: Joi.string().required().trim(),
    country: Joi.string().allow().trim(),
    // role: Joi.array().required().trim(),
  }),
};
module.exports = {
  createPlayers,
};
