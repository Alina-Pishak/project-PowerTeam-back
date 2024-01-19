const { HttpError, ctrlWrapper } = require("../helpers");
const { DiaryProduct } = require("../models/diaryProduct");
const Product = require("../models/product");

const addProduct = async (req, res) => {
  const { _id: owner, blood } = req.user;
  const { amount, calories, productId, date } = req.body;
  const resultProduct = await Product.findById(productId);
  if (!resultProduct) {
    throw HttpError(404, "Product not found");
  }
  if (!blood) {
    throw HttpError(404, "User's data not found");
  }

  const result = await DiaryProduct.create({
    productId,
    date,
    owner,
    category: resultProduct.category,
    title: resultProduct.title,
    recommended: resultProduct.groupBloodNotAllowed[blood],
    calories,
    amount,
  });

  res.status(201).json({
    idProduct: result._id,
    category: resultProduct.category,
    title: resultProduct.title,
    recommended: resultProduct.groupBloodNotAllowed[blood],
    calories,
    amount,
  });
};

const deleteById = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const result = await DiaryProduct.findByIdAndDelete(id).where("owner", owner);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.sendStatus(204);
};

module.exports = {
  addProduct: ctrlWrapper(addProduct),
  deleteById: ctrlWrapper(deleteById),
};
