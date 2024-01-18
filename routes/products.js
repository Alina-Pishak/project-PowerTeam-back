const express = require("express");
const ctrl = require("../controllers/products");
const {
  authenticate,
  isValidProductParams,
} = require("../middlewares");
const router = express.Router();

router.get("/categories", authenticate, ctrl.listProducts);
router.get("/", authenticate, ctrl.listFilterProducts);

router.get(
  "/:productId",
  authenticate,
  isValidProductParams,
  ctrl.productById
);

module.exports = router;
