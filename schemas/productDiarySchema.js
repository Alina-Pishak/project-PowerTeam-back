const Joi = require("joi");
Joi.extend(require("@joi/date"));

const productSchema = Joi.object({
  productId: Joi.string().required().messages({
    "any.required": "The product ID field is required.",
  }),
  date: Joi.date().format("dd/mm/YYYY").required().messages({
    "any.required": "The date field is required.",
    "date.format": "Invalid date format. Please use dd/mm/YYYY format.",
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

module.exports = { productSchema };

// date: Joi.string().required().messages({
//     "any.required": "The date field is required.",
//     "date.format": "Invalid date format. Please use dd/mm/YYYY format.",
//   }),
