const Joi = require("joi");

const productSchema = Joi.object({
  productId: Joi.string().required().messages({
    "any.required": "The product ID field is required.",
  }),
  date: Joi.date().iso().required().messages({
    "date.base":
      "Date must have a valid ISO date format, for example YYYY-MM-DD.",
    "any.required": "The date field is required.",
  }),

  amount: Joi.number().min(1).required().messages({
    "any.required": "The amount field is required.",
    "number.min": "The amount must be greater than or equal to 1.",
  }),
  calories: Joi.number().min(1).required().messages({
    "any.required": "The calories field is required.",
    "number.min": "The calories must be greater than or equal to 1.",
  }),
});

module.exports = productSchema;
