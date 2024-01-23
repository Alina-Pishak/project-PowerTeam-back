const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const diaryExerciseSchema = new Schema(
  {
    exercise: {
      type: String,
      ref: "exercise",
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    date: {
      type: String,
      format: "dd/mm/YYYY",
      required: true,
    },
    time: {
      type: Number,
      min: 0.01,
      required: true,
    },
    burnedCalories: {
      type: Number,
      min: 1,
      required: true,
    },
  },
  { versionKey: false }
);

diaryExerciseSchema.post("save", handleMongooseError);

const DiaryExercise = model("diaryExercise", diaryExerciseSchema);

module.exports = DiaryExercise;
