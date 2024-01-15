const Joi = require("joi");
const { emailRegexp } = require("../helpers");

const registerJoiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

module.exports = registerJoiSchema;
