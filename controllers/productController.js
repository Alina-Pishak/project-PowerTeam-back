const { DiaryProduct } = require("../models/product"); //проверить путь
const { HttpError, ctrlWrapper } = require("../helpers");
const productSchema = require("../schemas/productDiarySchema");
const Joi = require("joi");

const addProduct = async (req, res, next) => {
  const validationResult = productSchema.validate(req.body);
  if (validationResult.error) {
    return next(HttpError(400, validationResult.error.message));
  }

  const { _id: owner } = req.user;
  const result = await DiaryProduct.create({ ...req.body, owner });
  res.status(201).json(result);
};

const deleteById = async (req, res, next) => {
  const { error } = Joi.string().required().validate(req.params.productId);
  if (error) {
    return next(HttpError(400, error.message));
  }
  const { productId } = req.params;
  const { _id: owner } = req.user;
  const result = await DiaryProduct.findOneAndDelete({ _id: productId, owner });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "product deleted" });
};

const getAllByDate = async (req, res, next) => {
  const { error } = Joi.object({
    date: Joi.date().format("DD/MM/YYYY").required(),
  }).validate(req.query);

  if (error) {
    return next(HttpError(400, error.message));
  }
  const { _id: owner } = req.user;
  const { date } = req.query;
  const limit = 3;
  const result = await DiaryProduct.find({ owner, date: new Date(date) })
    .limit(limit)
    .select("title category calories weight");
  res.json(result);
};

module.exports = {
  addProduct: ctrlWrapper(addProduct),
  deleteById: ctrlWrapper(deleteById),
  getAllByDate: ctrlWrapper(getAllByDate),
};
