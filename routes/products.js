const express = require("express");
const ctrl = require("../controllers/products");
const { authenticate, isValidId } = require("../middlewares");
const router = express.Router();

router.get("/categories", authenticate, ctrl.listProducts);
router.get("/", authenticate, ctrl.listFilterProducts);

router.get("/:id", authenticate, isValidId, ctrl.productById);

module.exports = router;
