const { HttpError } = require("../helpers");
const { isValidObjectId } = require("mongoose");

const isValidExerciseParams = async (req, res, next) => {
  const { exerciseId } = req.params;
  if (!isValidObjectId(exerciseId)) {
    next(HttpError(400, `${exerciseId} is not valid exercise ID`));
  }
  next();
};

module.exports = isValidExerciseParams;
