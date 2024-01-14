const { HttpError } = require("../helpers");
const { isValidObjectId } = require("mongoose");

const isValidExerciseBody = async (req, res, next) => {
  const { exerciseId } = req.body;
  if (!isValidObjectId(exerciseId)) {
    next(HttpError(400, `${exerciseId} is not valid exercise ID`));
  }
  next();
};

module.exports = isValidExerciseBody;
