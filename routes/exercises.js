const express = require("express");

const ctrl = require("../controllers/exercises");
const {
  authenticate,
  isValidExerciseParams,
} = require("../middlewares");
// const { authenticate } = require("../middlewares");

const router = express.Router();

router.get("/", ctrl.getAllExercises);

router.get("/filters", ctrl.getAllFilters);

router.get(
  "/:exerciseId",
  authenticate,
  isValidExerciseParams,
  ctrl.exerciseById
);

module.exports = router;
