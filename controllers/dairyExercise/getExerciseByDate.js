const { ctrlWrapper, HttpError, dateToShortFormat } = require("../../helpers");
const DiaryExercise = require("../../models/diaryExercise");

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

module.exports = ctrlWrapper(getExerciseByDate);
