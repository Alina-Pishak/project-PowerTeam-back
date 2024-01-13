const express = require("express");

const ctrl = require("../controllers/exercises");
const { authenticate } = require("../middlewares");

const router = express.Router();

router.get("/", authenticate, ctrl.getAllExercises);

router.get("/:category", authenticate, ctrl.getAllByCategory);

module.exports = router;
