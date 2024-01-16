const Joi = require("joi");
const { emailRegexp } = require("../helpers");

const profileSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  height: Joi.number().integer().min(150).max(230).required(),
  currentWeight: Joi.number().min(35).max(200).required(),
  desiredWeight: Joi.number().min(35).max(200).required(),
  birthday: Joi.string()
    .regex(/^\d{2}\.\d{2}\.\d{4}$/)
    .required(),
  blood: Joi.number().integer().min(1).max(4).required(),
  sex: Joi.string().valid("Male", "Female").required(),
  levelActivity: Joi.number().required(),
});

module.exports = profileSchema;
