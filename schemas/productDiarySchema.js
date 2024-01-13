const Joi = require("joi");
Joi.extend(require("@joi/date"));

const productSchema = Joi.object({
  productId: Joi.string().required(),
  date: Joi.date().format("DD/MM/YYYY").required(),
  amount: Joi.number().min(1).required(),
  calories: Joi.number().min(1).required(),
});
module.exports = productSchema;
