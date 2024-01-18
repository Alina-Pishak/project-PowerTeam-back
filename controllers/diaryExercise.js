const DiaryExercise = require("../models/diaryExercise");
const { DiaryProduct } = require("../models/diaryProduct");
const Exercise = require("../models/exercise");
const { HttpError, ctrlWrapper } = require("../helpers");

const projectionExercises = {
  idExercise: "$_id",
  bodyPart: 1,
  equipment: 1,
  name: 1,
  target: 1,
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
  const { time, date, exerciseId, burnedCalories } = req.body;
  const { bodyPart, equipment, name, target } = await Exercise.findById(
    exerciseId
  );

  const result = await DiaryExercise.create({
    owner,
    exerciseId,
    date,
    time,
    bodyPart,
    equipment,
    name,
    target,
    burnedCalories,
  });

  res.status(201).json({
    exerciseId: result._id,
    date,
    time,
    bodyPart,
    equipment,
    name,
    target,
    burnedCalories,
  });
};

const deleteExercise = async (req, res) => {
  const { _id: owner } = req.user;
  const { exerciseId } = req.params;
  const result = await DiaryExercise.findByIdAndDelete(exerciseId).where(
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
  let diaryExercises = await DiaryExercise.find(
    { date },
    projectionExercises
  ).where("owner", owner);

  if (!diaryExercises.length) {
    diaryExercises = null;
  }
  if (!diaryProducts.length) {
    diaryProducts = null;
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
