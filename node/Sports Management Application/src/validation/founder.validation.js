const Joi = require("joi");

// create-founder
const createFounder = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    age: Joi.number().integer().allow(),
    team: Joi.string().required().trim(),
    sportsInterested: Joi.string().required().trim(),
    foundedTeams_name: Joi.string().required().trim(),
  }),
};
module.exports = {
  createFounder,
};
