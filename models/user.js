const { Schema, model } = require("mongoose");
//const handleMongooseError = require("../middlewares/handleMongooseError");// !!!
const handleMongooseError = require('../helpers/handleMongooseError') 

const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      default: 'Igor'
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
      default: 'https://res.cloudinary.com/ditdqzoio/image/upload/v1689380120/avatars/noname.png',
    },
    bodyData: {
      type: Boolean,
      default: 'false',
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
      enum: ['male', 'female'],
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
  { versionKey: false, }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = { User };
