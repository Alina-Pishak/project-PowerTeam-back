const DiaryExercise = require("../models/diaryExercise");
const Exercise = require("../models/exercise");
const { dateToShortFormat, HttpError, ctrlWrapper } = require("../helpers");

const createExercise = async (req, res) => {
  const { _id: owner } = req.user;
  const { time: actualTime, date, exerciseId } = req.body;
  req.body.date = dateToShortFormat(date);
  const exercise = await Exercise.findById(exerciseId);
  req.exercise = exercise;
  const {
    time: basicTime,
    burnedCalories: basicCalories,
    bodyPart,
    equipment,
    name,
    target,
  } = req.exercise;

  const result = await DiaryExercise.create({
    owner,
    ...req.body,
    bodyPart,
    equipment,
    name,
    target,
    burnedCalories: ((basicCalories / basicTime) * actualTime).toFixed(2),
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

const getExerciseByDate = async (req, res) => {
  const { _id: owner } = req.user;
  const { date } = req.params;
  req.params.date = dateToShortFormat(date);
  const result = await DiaryExercise.find(req.params).where("owner", owner);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  createExercise: ctrlWrapper(createExercise),
  deleteExercise: ctrlWrapper(deleteExercise),
  getExerciseByDate: ctrlWrapper(getExerciseByDate),
};
