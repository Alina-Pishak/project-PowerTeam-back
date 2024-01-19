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

const getExercises = async (req, res) => {
  const { category, subcategory } = req.query;
  const validSearch = decodeURIComponent(subcategory);
  const searchConditions = {};
  if (category && subcategory) {
    searchConditions[category] = validSearch;
  }
  const results = await Exercises.find(searchConditions, projection);
  if (!results) {
    throw HttpError(404, "Not found");
  }
  res.json(results);
};

const getAllFilters = async (req, res) => {
  const result = await Filters.find(searchConditions, projectionFilter);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const exerciseById = async (req, res) => {
  const { exerciseId } = req.params;

  const findExercise = await Exercises.findById(exerciseId, projection);

  if (!findExercise) {
    throw HttpError(404, "Not found");
  }

  res.json(findExercise);
};

module.exports = {
  getExercises: ctrlWrapper(getExercises),
  getAllFilters: ctrlWrapper(getAllFilters),
  exerciseById: ctrlWrapper(exerciseById),
};
