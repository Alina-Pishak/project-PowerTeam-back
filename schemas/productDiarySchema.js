const Joi = require("joi");
Joi.extend(require("@joi/date"));

const productSchema = Joi.object({
  productId: Joi.string().required(),
  date: Joi.date().format("DD/MM/YYYY").required().messages({
    "any.required":
      "The date field is required. Please provide a valid date in DD/MM/YYYY format.",
    "date.format": "Invalid date format. Please use DD/MM/YYYY format.",
  }),
  amount: Joi.number().min(1).required(),
  calories: Joi.number().min(1).required(),
});

module.exports = { productSchema };
