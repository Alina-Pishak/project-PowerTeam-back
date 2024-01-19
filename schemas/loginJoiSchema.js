const Joi = require("joi");
const { emailRegexp } = require("../helpers");

const loginJoiSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "string.pattern.base": "Invalid email format",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password should be at least {#limit} characters long",
    "any.required": "Password is required",
  }),
});

module.exports = loginJoiSchema;
