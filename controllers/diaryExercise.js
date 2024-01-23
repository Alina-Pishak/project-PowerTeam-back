const DiaryExercise = require("../models/diaryExercise");
const { DiaryProduct } = require("../models/diaryProduct");
const { HttpError, ctrlWrapper } = require("../helpers");

const projectionExercises = {
  idExercise: "$_id",
  burnedCalories: 1,
  time: 1,
  _id: 0,
};

const projectionProducts = {
  idProduct: "$_id",
  category: 1,
  title: 1,
  recommended: 1,
  calories: 1,
  amount: 1,
  _id: 0,
};

const createExercise = async (req, res) => {
  const { _id: owner } = req.user;
  const { time, date, exercise, burnedCalories } = req.body;

  const result = await DiaryExercise.create({
    owner,
    exercise,
    date,
    time,
    burnedCalories,
  });

  res.status(201).json({
    exercise: result._id,
    date,
    time,
    burnedCalories,
  });
};

const deleteExercise = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;

  const result = await DiaryExercise.findByIdAndDelete(id).where(
    "owner",
    owner
  );

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.sendStatus(204);
};

const getDiaryByDate = async (req, res) => {
  const { _id: owner } = req.user;
  const { date } = req.params;

  let diaryProducts = await DiaryProduct.find(
    { date },
    projectionProducts
  ).where("owner", owner);

  let diaryExercises = await DiaryExercise.find({ date }, projectionExercises)
    .where("owner", owner)
    .populate("exercise", "bodyPart equipment name target -_id");

  if (!diaryExercises.length) {
    diaryExercises = [];
  }
  if (!diaryProducts.length) {
    diaryProducts = [];
  }

  res.json({
    diaryExercises,
    diaryProducts,
  });
};

module.exports = {
  createExercise: ctrlWrapper(createExercise),
  deleteExercise: ctrlWrapper(deleteExercise),
  getDiaryByDate: ctrlWrapper(getDiaryByDate),
};
