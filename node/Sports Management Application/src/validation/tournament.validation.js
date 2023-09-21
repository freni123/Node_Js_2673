const Joi = require("joi");

// create-tournament
const createTournament = {
  body: Joi.object().keys({
    name: Joi.string().required().trim(),
    location: Joi.string().required().trim(),
    match: Joi.string().allow().trim(),
    start_date: Joi.string().required().trim(),
    end_date: Joi.string().required().trim(),
  }),
};
module.exports = {
  createTournament,
};
