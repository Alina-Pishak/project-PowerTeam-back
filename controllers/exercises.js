const { ctrlWrapper, HttpError } = require("../helpers");
const Exercises = require("../models/exercise");
const Filters = require("../models/filter");

const searchConditions = {};
const projection = {
  idExercise: "$_id",
  bodyPart: 1,
  equipment: 1,
  gifUrl: 1,
  name: 1,
  target: 1,
  burnedCalories: 1,
  time: 1,
  _id: 0,
};

const projectionFilter = {
  idFilter: "$_id",
  filter: 1,
  name: 1,
  imgURL: 1,
  _id: 0,
};

const getAllExercises = async (req, res) => {
  const result = await Exercises.find(searchConditions, projection);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const getAllFilters = async (req, res) => {
  const result = await Filters.find(searchConditions, projectionFilter);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getAllExercises: ctrlWrapper(getAllExercises),
  getAllFilters: ctrlWrapper(getAllFilters),
};
