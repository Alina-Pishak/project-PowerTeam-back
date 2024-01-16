const express = require("express");
const ctrl = require("../controllers/dairyExercise");
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
  validateRequestParam(schemas.dairyExercise.getDairyByDate),
  normalizeDateInParam,
  ctrl.getDiaryByDate
);

router.post(
  "/exercises",
  authenticate,
  validateBody(schemas.dairyExercise.createExercise),
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
router.get("/:date", authenticate, productCtrl.getAllByDate);

module.exports = router;
