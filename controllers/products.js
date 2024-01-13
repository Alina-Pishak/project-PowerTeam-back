const  Product  = require("../models/product");
const { HttpError,ctrlWrapper } = require("../helpers");
const fs = require("fs");
const path = require("path");

const listProducts = async (req, res) => {
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
  const { title, category } = req.query;
  const { blood } = req.user;

  const searchConditions = {};

  if (title) {
    searchConditions.name = { $regex: title, $options: "i" };
  }

  if (category) {
    searchConditions.category = category;
  }

  if (blood) {
    searchConditions[`groupBloodNotAllowed.${blood}`] = true;
  }

  const result = await Product.find(searchConditions);
   if (!result) {
     throw HttpError(404, "Not found");
   }
  res.json(result);
};


module.exports = {
  listProducts: ctrlWrapper(listProducts),
  listFilterProducts: ctrlWrapper(listFilterProducts),
};
