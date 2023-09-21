const Joi = require("joi");

// create-team
const createTeam = {
  body: Joi.object().keys({
    team_name: Joi.string().required().trim(),
    country: Joi.string().required().trim(),
    coach: Joi.string().allow().trim(),
    player: Joi.string().required().trim(),
    user: Joi.string().required().trim(),
  }),
};
module.exports = {
  createTeam,
};
