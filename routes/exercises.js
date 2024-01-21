const express = require("express");

const ctrl = require("../controllers/exercises");
const { authenticate, isValidId } = require("../middlewares");

const router = express.Router();

router.get("/", authenticate, ctrl.getExercises);

router.get("/filters", authenticate, ctrl.getFilters);

router.get("/:id", authenticate, isValidId, ctrl.exerciseById);

module.exports = router;
