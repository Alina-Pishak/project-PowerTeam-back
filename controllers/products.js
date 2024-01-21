const Product = require("../models/product");
const { HttpError, ctrlWrapper } = require("../helpers");
const fs = require("fs");
const path = require("path");

const listProducts = async (_, res) => {
  const categoryPath = path.resolve(
    __dirname,
    "../products/productsCategories.json"
  );

  const categoriesData = fs.readFileSync(categoryPath, "utf8");
  const categories = JSON.parse(categoriesData);

  if (!categories) {
    throw HttpError(404, "Not found");
  }
  res.json(categories);
};

const listFilterProducts = async (req, res) => {
  const { title, category, filterType } = req.query;
  const { blood } = req.user;
  const validSearch = decodeURIComponent(category);

  const searchConditions = {};

  if (title) {
    searchConditions.title = {
      $regex: title,
      $options: "i",
    };
  }

  if (category !== "all") {
    searchConditions.category = validSearch;
  }

  if (blood && filterType !== "none") {
    searchConditions[`groupBloodNotAllowed.${blood}`] = filterType;
  }

  const projection = {
    idProduct: "$_id",
    title: 1,
    category: 1,
    calories: 1,
    weight: 1,
    recommend: `$groupBloodNotAllowed.${blood}`,
    _id: 0,
  };

  const results = await Product.find(searchConditions, projection);

  if (!results) {
    throw HttpError(404, "Not found");
  }
  res.json(results);
};

const productById = async (req, res) => {
  const { id } = req.params;
  const { blood } = req.user;

  const projection = {
    idProduct: "$_id",
    title: 1,
    category: 1,
    calories: 1,
    weight: 1,
    recommend: `$groupBloodNotAllowed.${blood}`,
    _id: 0,
  };

  const findProduct = await Product.findById(id, projection);

  if (!findProduct) {
    throw HttpError(404, "Not found");
  }

  res.json(findProduct);
};

module.exports = {
  listProducts: ctrlWrapper(listProducts),
  listFilterProducts: ctrlWrapper(listFilterProducts),
  productById: ctrlWrapper(productById),
};
