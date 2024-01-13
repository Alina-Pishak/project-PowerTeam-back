const { Product } = require("../models/product");
const { ctrlWrapper } = require("../helpers");
const fs = require("fs");
const path = require("path");

const listProducts = async (req, res) => {
  const categoryPath = path.resolve(
    __dirname,
    "../products/productsCategories.json"
  );

  const categoriesData = fs.readFileSync(categoryPath, "utf8");
  const categories = JSON.parse(categoriesData);

  res.json(categories);
};


const listFilterProducts = async (req, res) => {
  const { title, category } = req.query;
  const { groupBloodNotAllowed } = req.user;

  const searchConditions = {};

  if (title) {
    searchConditions.name = { $regex: title, $options: "i" };
  }

  if (category) {
    searchConditions.category = category;
  }

  if (groupBloodNotAllowed) {
    searchConditions[`groupBloodNotAllowed.${groupBloodNotAllowed}`] = true;
  }

  const result = await Product.find(searchConditions);
  res.json(result);
};


module.exports = {
  listProducts: ctrlWrapper(listProducts),
  listFilterProducts: ctrlWrapper(listFilterProducts),
};
