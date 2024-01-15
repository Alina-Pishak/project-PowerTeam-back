const DiaryExercise = require("../models/diaryExercise");
const { DiaryProduct } = require("../models/diaryProduct");
const Exercise = require("../models/exercise");
const { HttpError, ctrlWrapper } = require("../helpers");

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
  res.status(201).json(result);
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
  const dairyProducts = await DiaryProduct.find({ date }).where("owner", owner);
  const dairyExercises = await DiaryExercise.find({ date }).where(
    "owner",
    owner
  );

  if (!dairyExercises || !dairyProducts) {
    throw HttpError(404, "Not found");
  }
  res.json({ dairyExercises, dairyProducts });
};

module.exports = {
  createExercise: ctrlWrapper(createExercise),
  deleteExercise: ctrlWrapper(deleteExercise),
  getDiaryByDate: ctrlWrapper(getDiaryByDate),
};
