const express = require("express");
const ctrl = require("../controllers/products");
const { authenticate } = require("../middlewares/index");
const router = express.Router();

router.get("/categories", authenticate, ctrl.listProducts);
router.get("/", authenticate, ctrl.listFilterProducts);

module.exports = router;
