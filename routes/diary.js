const express = require("express");
const ctrl = require("../controllers/diaryExercise");
const productCtrl = require("../controllers/diaryProducts");
const {
  validateBody,
  isValidExerciseBody,
  isValidExerciseParams,
  normalizeDateInBody,
  authenticate,
  normalizeDateInParam,
  validateRequestParam,
  isValidProductParams,
} = require("../middlewares");
const schemas = require("../schemas");

const router = express.Router();

router.get(
  "/:date",
  authenticate,
  validateRequestParam(schemas.diaryExercise.getDiaryByDate),
  normalizeDateInParam,
  ctrl.getDiaryByDate
);

router.post(
  "/exercises",
  authenticate,
  validateBody(schemas.diaryExercise.createExercise),
  isValidExerciseBody,
  normalizeDateInBody,
  ctrl.createExercise
);

router.delete(
  "/exercises/:exerciseId",
  authenticate,
  isValidExerciseParams,
  ctrl.deleteExercise
);

router.post(
  "/products",
  authenticate,
  validateBody(schemas.productDiary.productSchema),
  normalizeDateInBody,
  productCtrl.addProduct
);
router.delete(
  "/products/:productId",
  authenticate,
  isValidProductParams,
  productCtrl.deleteById
);

module.exports = router;
