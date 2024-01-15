const Joi = require("joi");
const { emailRegexp } = require("../helpers");

const profileSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().pattern(emailRegexp),
  height: Joi.number().positive().required(),
  currentWeight: Joi.number().positive().required(),
  desiredWeight: Joi.number().positive().required(),
  birthday: Joi.string()
    .regex(/^\d{2}\.\d{2}\.\d{4}$/)
    .required(),
  blood: Joi.number().required(),
  sex: Joi.string().valid("Male", "Female").required(),
  levelActivity: Joi.number().required(),
});

module.exports = profileSchema;
