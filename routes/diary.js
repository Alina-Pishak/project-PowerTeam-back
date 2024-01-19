const express = require("express");
const ctrl = require("../controllers/diaryExercise");
const productCtrl = require("../controllers/diaryProducts");
const {
  validateBody,
  isValidExerciseBody,
  normalizeDateInBody,
  authenticate,
  normalizeDateInParam,
  validateRequestParam,
  isValidId,
} = require("../middlewares");
const schemas = require("../schemas");

const router = express.Router();

router.post(
  "/exercises",
  authenticate,
  validateBody(schemas.diaryExercise.createExercise),
  isValidExerciseBody,
  normalizeDateInBody,
  ctrl.createExercise
);

router.delete("/exercises/:id", authenticate, isValidId, ctrl.deleteExercise);

router.post(
  "/products",
  authenticate,
  validateBody(schemas.productDiary),
  normalizeDateInBody,
  productCtrl.addProduct
);

router.delete("/products/:id", authenticate, isValidId, productCtrl.deleteById);

router.get(
  "/:date",
  authenticate,
  validateRequestParam(schemas.diaryExercise.getDiaryByDate),
  normalizeDateInParam,
  ctrl.getDiaryByDate
);

module.exports = router;
