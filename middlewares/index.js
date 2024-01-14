const validateBody = require("./validateBody");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const upload = require("./upload");
const isValidExerciseBody = require("./isValidExerciseBody");
const validateOneStringParams = require("./validateOneStringParams");
const isValidExerciseParams = require("./isValidExerciseParams");

module.exports = {
  validateBody,
  isValidId,
  authenticate,
  upload,
  isValidExerciseBody,
  validateOneStringParams,
  isValidExerciseParams,
};
