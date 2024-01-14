const express = require("express");
const ctrl = require("../controllers/dairyExercise");
const {
  validateBody,
  validateOneStringParams,
  isValidExerciseBody,
  isValidExerciseParams,
} = require("../middlewares");
const schemas = require("../schemas");
const { authenticate } = require("../middlewares");

const router = express.Router();

router.post(
  "/",
  authenticate,
  validateBody(schemas.dairyExercise.createExercise),
  isValidExerciseBody,
  ctrl.createExercise
);

router.delete(
  "/:exerciseId",
  authenticate,
  isValidExerciseParams,
  ctrl.deleteExercise
);

router.get(
  "/:date",
  authenticate,
  validateOneStringParams(schemas.dairyExercise.getExerciseByDate),
  ctrl.getExerciseByDate
);

module.exports = router;
