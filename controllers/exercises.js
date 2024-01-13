const { ctrlWrapper, HttpError } = require("../helpers");
const Exercises = require("../models/exercise");
const Filters = require("../models/filter");

const getAllExercises = async (req, res) => {
  const result = await Exercises.find();
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const getAllByCategory = async (req, res) => {
  const { category } = req.params;
  const arrayCategories = ["bodyparts", "muscles", "equipment"];
  if (!arrayCategories.includes(category)) {
    throw HttpError(400, "Bad request");
  }
  const filterCategory = {
    bodyparts: "Body parts",
    muscles: "Muscles",
    equipment: "Equipment",
  };
  const result = await Filters.find({
    filter: filterCategory[category],
  });

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getAllExercises: ctrlWrapper(getAllExercises),
  getAllByCategory: ctrlWrapper(getAllByCategory),
};
