const express = require("express");
const ctrl = require("../controllers/productController");
const { authenticate, validateBody } = require("../middlewares");
const {
  productSchema,
  validateDateQuery,
} = require("../schemas/productDiarySchema");
const router = express.Router();

router.post(
  "/diary/products",
  authenticate,
  validateBody(productSchema),
  ctrl.addProduct
);
router.delete(
  "/diary/products/:productId",
  authenticate,
  validateDateQuery,
  ctrl.deleteById
);
router.get(
  "/diary/products",
  authenticate,
  validateDateQuery,
  ctrl.getAllByDate
);

module.exports = router;
