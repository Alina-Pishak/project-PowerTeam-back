const { ctrlWrapper, HttpError } = require("../helpers/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { email, password, name } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ email, password: hashPassword, name });
  const payload = { id: newUser._id };
  const token = jwt.sign(payload, SECRET_KEY);
  await User.findByIdAndUpdate(newUser._id, { token });
  res.status(201).json({
    token,
    user: {
      name: newUser.name,
      email: newUser.email,
      avatarURL: "",
      bodyData: false,
    },
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
  const token = jwt.sign(payload, SECRET_KEY);
  await User.findByIdAndUpdate(user._id, { token });
  res.status(200).json({
    token,
    user: {
      email: user.email,
      name: user.name,
      avatarURL: user.avatarURL,
      bodyData: user.bodyData,
    },
    userParams: {
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

  res.json({
    user: { email, name, avatarURL, bodyData },
    userParams: {
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
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (user && user._id !== _id) {
    throw HttpError(400, "Email is already in use by another user");
  }

  const updateUser = await User.findByIdAndUpdate(
    _id,
    { ...req.body, bodyData: true },
    { new: true }
  );
  res.json({
    height: updateUser.height,
    currentWeight: updateUser.currentWeight,
    desiredWeight: updateUser.desiredWeight,
    birthday: updateUser.birthday,
    blood: updateUser.blood,
    sex: updateUser.sex,
    levelActivity: updateUser.levelActivity,
    bmr: updateUser.bmr,
  });
};

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  if (!req.file) {
    throw HttpError(400, "File not found");
  }

  const avatarURL = req.file.path;

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  getCurrentUser: ctrlWrapper(getCurrentUser),
  profileSettings: ctrlWrapper(profileSettings),
  updateAvatar: ctrlWrapper(updateAvatar),
};
