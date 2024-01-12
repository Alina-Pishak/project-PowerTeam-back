const express = require("express");
const ctrl = require("../controllers/productController");
const { authenticate, validateBody } = require("../middlewares");
const router = express.Router();

router.post("/", authenticate, validateBody, ctrl.addProduct);
router.delete("/:productId", authenticate, ctrl.deleteById);
router.get("/", authenticate, ctrl.getAllByDate);

module.exports = router;
