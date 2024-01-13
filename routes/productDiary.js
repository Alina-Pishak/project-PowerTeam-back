const express = require("express");
const ctrl = require("../controllers/productController");
const { authenticate, validateBody } = require("../middlewares");
const { productSchema } = require("../schemas/productDiarySchema");
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
  validateBody(productSchema),
  ctrl.deleteById
);
router.get(
  "/diary/products",
  authenticate,
  validateBody(productSchema),
  ctrl.getAllByDate
);

module.exports = router;
