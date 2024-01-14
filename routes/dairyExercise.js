const express = require("express");
const ctrl = require("../controllers/dairyExercise");
const {
  validateBody,
  isValidExercise,
  validateOneStringParams,
} = require("../middlewares");
const schemas = require("../schemas");
const { authenticate } = require("../middlewares");

const router = express.Router();

router.post(
  "/:exerciseId",
  authenticate,
  validateBody(schemas.dairyExercise.createExercise),
  isValidExercise,
  ctrl.createExercise
);

router.delete(
  "/:exerciseId",
  authenticate,
  isValidExercise,
  ctrl.deleteExercise
);

router.get(
  "/:date",
  authenticate,
  validateOneStringParams(schemas.dairyExercise.getExerciseByDate),
  ctrl.getExerciseByDate
);

module.exports = router;
