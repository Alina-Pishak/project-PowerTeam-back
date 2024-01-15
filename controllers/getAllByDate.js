// const { DiaryProduct } = require("../models/diaryProduct");
// const DiaryExercise = require("../models/diaryExercise");
// const { dateToShortFormat, ctrlWrapper } = require("../helpers");

// const getProductsAndExercisesByDate = async (req, res) => {
//   const { _id: owner } = req.user;
//   const { date } = req.params;
//   const formattedDate = dateToShortFormat(date);

//   const products = await DiaryProduct.find({
//     owner,
//     date: formattedDate,
//   }).select("title category calories amount");

//   const exercises = await DiaryExercise.find({
//     owner,
//     date: formattedDate,
//   }).select("name bodyPart equipment target burnedCalories");

//   const combinedResults = {
//     date: formattedDate,
//     products,
//     exercises,
//   };

//   res.json(combinedResults);
// };

// module.exports = {
//   getProductsAndExercisesByDate: ctrlWrapper(getProductsAndExercisesByDate),
// };
