const { ctrlWrapper, HttpError } = require("../../helpers");
const DiaryExercise = require("../../models/diaryExercise");

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

module.exports = ctrlWrapper(deleteExercise);
