const Joi = require("joi");
const { emailRegexp, constants } = require("../helpers");

const profileSchema = Joi.object({
  name: Joi.string().messages({
    "string.empty": "Name cannot be empty",
  }),
  email: Joi.string().pattern(emailRegexp).messages({
    "string.pattern.base": "Invalid email format",
  }),
  height: Joi.number().min(150).max(240).messages({
    "number.min": "Height should be at least 150",
    "number.max": "Height should not exceed 240",
  }),
  bodyData: Joi.boolean(),
  avatarURL: Joi.string().allow("").messages({
    "string.empty": "Avatar URL cannot be empty",
  }),
  currentWeight: Joi.number().min(35).max(250).messages({
    "number.min": "Current weight should be at least 35",
    "number.max": "Current weight should not exceed 250",
  }),
  desiredWeight: Joi.number().min(35).max(250).messages({
    "number.min": "Desired weight should be at least 35",
    "number.max": "Desired weight should not exceed 250",
  }),
  birthday: Joi.string()
    .regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/)
    .messages({
      "string.pattern.base": "Invalid date format. It should be YYYY-MM-DD",
    }),
  blood: Joi.number().integer().min(1).max(4).messages({
    "number.min": "Blood type should be at least 1",
    "number.max": "Blood type should not exceed 4",
  }),
  sex: Joi.string()
    .valid(constants.genders.MALE, constants.genders.FEMALE)
    .messages({
      "any.only": "Sex should be either male or female",
    }),
  levelActivity: Joi.number().messages({
    "number.base": "Level of activity should be a number",
  }),
  bmr: Joi.number().messages({
    "number.base": "BMR should be a number",
  }),
});

module.exports = profileSchema;
