const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    token: String,
    avatarURL: {
      type: String,
      required: true,
      default: "https://www.gravatar.com/avatar/12621825cc13ae051332f9275187e605?s=250",
    },
    bodyData: {
      type: Boolean,
      default: "false",
    },
    height: {
      type: Number,
      min: 150,
    },
    currentWeight: {
      type: Number,
      min: 35,
    },
    desiredWeight: {
      type: Number,
      min: 35,
    },
    birthday: {
      type: Date,
      min: 18,
    },
    blood: {
      type: Number,
      enum: [1, 2, 3, 4],
    },
    sex: {
      type: String,
      enum: ["male", "female"],
    },
    levelActivity: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
    },
    bmr: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = { User };
