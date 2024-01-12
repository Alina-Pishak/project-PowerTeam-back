const { Product, schemas } = require("../models/product");
const { HttpError, ctrlWrapper } = require("../helpers");

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Product.create({ ...req.body, owner });
  res.status(201).json(result);
};

const deleteById = async (req, res) => {
  const { productId } = req.params;
  const { _id: owner } = req.user;
  const result = await Product.findOneAndDelete({ _id: productId, owner });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "product deleted" });
};

const getAllByDate = async (req, res) => {
  const { _id: owner } = req.user;
  const { date } = req.query;
  const limit = 3;
  const result = await Product.find({ owner, date: new Date(date) })
    .limit(limit)
    .select("title category calories weight");
  res.json(result);
};

module.exports = {
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  getAllByDate: ctrlWrapper(getAllByDate),
};
