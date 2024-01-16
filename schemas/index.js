const userSchema = require("./userSchema");
const profileSettingsSchema = require("./profileSettings");
const loginJoiSchema = require("./loginJoiSchema");
const registerJoiSchema = require("./registerJoiSchema");
const dairyExercise = require("./dairyExerciseSchemas");
const productDiary = require("./productDiarySchema");

module.exports = {
  userSchema,
  profileSettingsSchema,
  loginJoiSchema,
  registerJoiSchema,
  dairyExercise,
  productDiary,
};
