const { DiaryProduct } = require("../models/diaryProduct");
const { HttpError, ctrlWrapper } = require("../helpers");
const Joi = require("joi");
Joi.extend(require("@joi/date"));

const addProduct = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await DiaryProduct.create({ ...req.body, owner });
  res.status(201).json(result);
};

const deleteById = async (req, res) => {
  const { productId } = req.params;
  const { _id: owner } = req.user;
  const { date } = req.query;

  const result = await DiaryProduct.findOneAndDelete({
    _id: productId,
    owner,
    date: new Date(date),
  });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({ message: "Product deleted" });
};

const getAllByDate = async (req, res) => {
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
