const { HttpError } = require("../helpers");
const { isValidObjectId } = require("mongoose");

const isValidExerciseBody = async (req, res, next) => {
  const { exercise } = req.body;
  if (!isValidObjectId(exercise)) {
    next(HttpError(400, `${exercise} is not valid exercise ID`));
  }
  next();
};

module.exports = isValidExerciseBody;
