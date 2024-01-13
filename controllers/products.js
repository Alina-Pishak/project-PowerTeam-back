const { Product } = require("../models/product");

const { ctrlWrapper } = require("../helpers");

const listProducts = async (req, res) => {
     const result = await Product.find();
     res.json(result);
};


const listFilterProducts = async (req, res) => {
  const { title, category, groupBloodNotAllowed } = req.user;

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
