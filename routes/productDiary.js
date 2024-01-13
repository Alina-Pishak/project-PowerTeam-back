const express = require("express");
const ctrl = require("../controllers/diaryProducts");
const { authenticate, validateBody } = require("../middlewares");
const { productSchema } = require("../schemas/productDiarySchema");
const router = express.Router();

router.post("/", authenticate, validateBody(productSchema), ctrl.addProduct);
router.delete("/:productId", authenticate, ctrl.deleteById);
router.get("/", authenticate, ctrl.getAllByDate);

module.exports = router;
