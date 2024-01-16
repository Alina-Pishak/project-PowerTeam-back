const { ctrlWrapper } = require("../helpers");
const diaryExercise = require("../models/diaryExercise");
const Exercise = require("../models/exercise");
const { User } = require("../models/user");

const getStatistic = async (req, res) => {
  const userActivity = await diaryExercise.aggregate([
    {
      $group: {
        _id: null,
        totalBurnedCalories: { $sum: "$burnedCalories" },
        totalTime: { $sum: "$time" },
        totalPerformedExercises: { $sum: 1 },
      },
    },
  ]);
  const users = await User.aggregate([
    {
      $group: {
        _id: null,
        totalUsers: { $sum: 1 },
      },
    },
  ]);

  const exercise = await Exercise.aggregate([
    {
      $group: {
        _id: null,
        totalVideoExercises: { $sum: 1 },
      },
    },
  ]);
  const result = {
    totalVideoExercises: exercise[0].totalVideoExercises || null,
    totalBurnedCalories: userActivity[0].totalBurnedCalories || null,
    totalUsers: users[0].totalUsers || null,
    totalTime: userActivity[0].totalTime || null,
    totalPerformedExercises: userActivity[0].totalPerformedExercises || null,
  };
  res.json(result);
};

module.exports = { getStatistic: ctrlWrapper(getStatistic) };
