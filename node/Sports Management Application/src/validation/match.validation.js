const Joi = require("joi");

// create-match
const createMatch = {
  body: Joi.object().keys({
    match_date: Joi.string().required().trim(),
    venue: Joi.string().required().trim(),
    match_time: Joi.string().required().trim(),
    team: Joi.string().required().trim(),
    matchResult: Joi.string().required().trim(),
  }),
};
module.exports = {
  createMatch,
};
