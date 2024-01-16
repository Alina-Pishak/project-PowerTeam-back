const profileSettingsSchema = require("./profileSettings");
const loginJoiSchema = require("./loginJoiSchema");
const registerJoiSchema = require("./registerJoiSchema");
const dairyExercise = require("./dairyExerciseSchemas");
const productDiary = require("./productDiarySchema");

module.exports = {
  profileSettingsSchema,
  loginJoiSchema,
  registerJoiSchema,
  dairyExercise,
  productDiary,
};
