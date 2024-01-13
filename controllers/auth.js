const { ctrlWrapper, HttpError } = require("../helpers/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const { DB_HOST } = process.env;

const register = async (req, res) => {
  const { email, password, name } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ email, password: hashPassword, name });
  res.status(201).json({
    user: { name: newUser.name, email: newUser.email },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }
  const payload = { id: user._id };
  const token = jwt.sign(payload, DB_HOST, {
    expiresIn: "23h",
  });
  await User.findByIdAndUpdate(user._id, { token });
  res.status(200).json({
    token,
    user: {
      email: user.email,
      name: user.name,
      avatarURL: user.avatarURL,
      bodyData: user.bodyData,
      height: user.height,
      currentWeight: user.currentWeight,
      desiredWeight: user.desiredWeight,
      birthday: user.birthday,
      blood: user.blood,
      sex: user.sex,
      levelActivity: user.levelActivity,
      bmr: user.bmr,
    },
  });
};

const logout = async (req, res) => {
  const { _id: id } = req.user;
  await User.findByIdAndUpdate(id, { token: "" });
  res.status(204).send();
};

const getCurrentUser = async (req, res) => {
  const {
    _id: id,
    email,
    name,
    avatarURL,
    bodyData,
    height,
    currentWeight,
    desiredWeight,
    birthday,
    blood,
    sex,
    levelActivity,
    bmr,
  } = req.user;
  const user = await User.findById(id);
  if (!user) {
    throw HttpError(401);
  }

  res.json({
    email,
    name,
    avatarURL,
    userParams: {
      bodyData,
      height,
      currentWeight,
      desiredWeight,
      birthday,
      blood,
      sex,
      levelActivity,
      bmr,
    },
  });
};

const profileSettings = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(
    _id,
    { ...req.body, bodyData: true },
    { new: true }
  );
  res.json({ message: "User data added successfully." });
};

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  getCurrentUser: ctrlWrapper(getCurrentUser),
  profileSettings: ctrlWrapper(profileSettings),
};
