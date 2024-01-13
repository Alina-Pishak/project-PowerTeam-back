const express = require("express");
const ctrl = require("../controllers/productController");
const { authenticate, validateBody } = require("../middlewares");
const router = express.Router();

router.post("/diary/products", authenticate, validateBody, ctrl.addProduct);
router.delete("/diary/products/:productId", authenticate, ctrl.deleteById);
router.get("/diary/products", authenticate, ctrl.getAllByDate);

module.exports = router;
