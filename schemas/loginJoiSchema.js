const Joi = require("joi");

// eslint-disable-next-line no-useless-escape
const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const loginJoiSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

module.exports = loginJoiSchema;
