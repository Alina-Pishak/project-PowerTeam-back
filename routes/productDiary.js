const express = require("express");
const ctrl = require("../controllers/diaryProducts");
const {
  authenticate,
  validateBody,
  isValidProductParams,
  normalizeDateInBody,
} = require("../middlewares");
const { productSchema } = require("../schemas/productDiarySchema");
const router = express.Router();

router.post(
  "/",
  authenticate,
  validateBody(productSchema),
  normalizeDateInBody,
  ctrl.addProduct
);
router.delete(
  "/:productId",
  authenticate,
  isValidProductParams,
  ctrl.deleteById
);
router.get("/", authenticate, ctrl.getAllByDate);

module.exports = router;
