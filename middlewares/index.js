const validateBody = require("./validateBody");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const upload = require("./upload");
const isValidExerciseBody = require("./isValidExerciseBody");
const normalizeDateInBody = require("./normalizeDateInBody");
const normalizeDateInParam = require("./normalizeDateInParam");
const validateRequestParam = require("./validateRequestParam");

module.exports = {
  validateBody,
  isValidId,
  authenticate,
  upload,
  isValidExerciseBody,
  validateRequestParam,
  normalizeDateInBody,
  normalizeDateInParam,
};
