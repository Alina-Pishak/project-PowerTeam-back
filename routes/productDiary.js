const express = require("express");
const ctrl = require("../controllers/diaryProducts");
const {
  authenticate,
  validateBody,
  isValidProductParams,
} = require("../middlewares");
const { productSchema } = require("../schemas/productDiarySchema");
const router = express.Router();
// const combinedController = require("../controllers/getAllByDate");

router.post("/", authenticate, validateBody(productSchema), ctrl.addProduct);
router.delete(
  "/:productId",
  authenticate,
  isValidProductParams,
  ctrl.deleteById
);
router.get("/", authenticate, ctrl.getAllByDate);
// router.get(
//   "/combined-data/:date", authenticate, combinedController.getProductsAndExercisesByDate
// );

module.exports = router;
