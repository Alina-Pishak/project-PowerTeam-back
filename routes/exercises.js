const express = require("express");

const ctrl = require("../controllers/exercises");
const { authenticate, isValidExerciseParams } = require("../middlewares");

const router = express.Router();

router.get("/", authenticate, ctrl.getExercises);

router.get("/filters", authenticate, ctrl.getAllFilters);

router.get(
  "/:exerciseId",
  authenticate,
  isValidExerciseParams,
  ctrl.exerciseById
);

module.exports = router;
