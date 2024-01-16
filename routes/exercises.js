const express = require("express");

const ctrl = require("../controllers/exercises");
// const { authenticate } = require("../middlewares");

const router = express.Router();

router.get("/", ctrl.getAllExercises);

router.get("/filters", ctrl.getAllFilters);

module.exports = router;
