const Joi = require("joi");

const profileSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
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
