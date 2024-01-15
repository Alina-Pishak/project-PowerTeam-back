const Joi = require("joi");
const { emailRegexp } = require("../helpers");

const loginJoiSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

module.exports = loginJoiSchema;
