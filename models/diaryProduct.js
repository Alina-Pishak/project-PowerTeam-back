const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const diaryProductSchema = new Schema(
  {
    productId: {
      type: String,
      ref: "product",
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    date: {
      type: String,
      required: true,
      format: "dd/mm/YYYY",
    },
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    recommended: {
      type: Boolean,
      default: true,
    },
    calories: {
      type: Number,
      required: true,
      min: 1,
    },
    amount: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { versionKey: false }
);

diaryProductSchema.post("save", handleMongooseError);

const DiaryProduct = model("diaryProduct", diaryProductSchema);

module.exports = { DiaryProduct };
