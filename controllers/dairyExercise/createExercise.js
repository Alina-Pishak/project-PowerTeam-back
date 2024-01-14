const { ctrlWrapper, dateToShortFormat } = require("../../helpers");
const DiaryExercise = require("../../models/diaryExercise");
const Exercise = require("../../models/exercise");

const createExercise = async (req, res) => {
  const { _id: owner } = req.user;
  const { time: actualTime, date } = req.body;
  req.body.date = dateToShortFormat(date);
  const { exerciseId } = req.params;
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
    exerciseId,
    ...req.body,
    bodyPart,
    equipment,
    name,
    target,
    burnedCalories: ((basicCalories / basicTime) * actualTime).toFixed(2),
  });
  res.status(201).json(result);
};

module.exports = ctrlWrapper(createExercise);
