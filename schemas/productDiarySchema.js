const Joi = require("joi");
Joi.extend(require("@joi/date"));
const { HttpError } = require("../helpers");

const productSchema = Joi.object({
  productId: Joi.string().required(),
  date: Joi.date().format("DD/MM/YYYY").required(),
  amount: Joi.number().min(1).required(),
  calories: Joi.number().min(1).required(),
});

const validateDateQuery = (req, res, next) => {
  const schema = Joi.object({
    date: Joi.date().format("DD/MM/YYYY").required(),
  });

  const { error } = schema.validate(req.query);
  if (error) {
    return next(HttpError(400, error.message));
  }
  next();
};

module.exports = { productSchema, validateDateQuery };
