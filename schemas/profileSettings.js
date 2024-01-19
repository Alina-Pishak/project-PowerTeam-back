const Joi = require("joi");
const { emailRegexp } = require("../helpers");

const profileSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().pattern(emailRegexp),
  height: Joi.number().integer().min(150).max(240),
  currentWeight: Joi.number().min(35).max(250),
  desiredWeight: Joi.number().min(35).max(250),
  birthday: Joi.string().regex(
    /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
  ),
  blood: Joi.number().integer().min(1).max(4),
  sex: Joi.string().valid("male", "memale"),
  levelActivity: Joi.number(),
});

module.exports = profileSchema;
