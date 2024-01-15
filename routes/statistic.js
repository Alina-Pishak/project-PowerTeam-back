const express = require("express");
const { getStatistic } = require("../controllers/statistic");
const router = express.Router();

router.get("/", getStatistic);

module.exports = router;
