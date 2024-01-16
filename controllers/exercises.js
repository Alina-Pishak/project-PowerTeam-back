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

const getAllFilters = async (req, res) => {
  const result = await Filters.find();
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getAllExercises: ctrlWrapper(getAllExercises),
  getAllFilters: ctrlWrapper(getAllFilters),
};
