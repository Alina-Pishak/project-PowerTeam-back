const { HttpError, ctrlWrapper } = require("../helpers");
const { DiaryProduct } = require("../models/diaryProduct");
const Product = require("../models/product");
const { User } = require("../models/user");

const addProduct = async (req, res) => {
  const { _id: owner } = req.user;
  const { amount, weight, productId, date } = req.body;
  const resultProduct = await Product.findById(productId);

  if (!resultProduct) {
    throw HttpError(404, "Product not found");
  }
  const { blood } = await User.findById(owner);
  if (!blood) {
    throw HttpError(404, "User's data not found");
  }

  const result = await DiaryProduct.create({
    date,
    owner,
    category: resultProduct.category,
    title: resultProduct.title,
    recommended: resultProduct.groupBloodNotAllowed[blood],
    calories: resultProduct.calories,
    amount,
    weight,
  });
  //delete later weight

  res.status(201).json(result);
};

const deleteById = async (req, res) => {
  const { _id } = req.params;

  const result = await DiaryProduct.findByIdAndDelete(_id);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.sendStatus(204);
};

const getAllByDate = async (req, res) => {
  const { _id: owner } = req.user;
  const { date } = req.query;
  console.log(req.query);
  const result = await DiaryProduct.find({
    owner,
    date,
  }).select("title category calories amount");
  res.json(result);
};

module.exports = {
  addProduct: ctrlWrapper(addProduct),
  deleteById: ctrlWrapper(deleteById),
  getAllByDate: ctrlWrapper(getAllByDate),
};