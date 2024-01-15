const express = require("express");
const ctrl = require("../controllers/dairyExercise");
const {
  validateBody,
  isValidExerciseBody,
  isValidExerciseParams,
  normalizeDateInBody,
  authenticate,
  normalizeDateInParam,
  validateRequestParam,
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

module.exports = router;
