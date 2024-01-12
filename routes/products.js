const express = require("express");
const ctrl = require("../controllers/products");
const { authenticate } = require("../middlewares");
const router = express.Router();

router.get("/",ctrl.listProducts);
router.get("/blood", authenticate,ctrl.listProductBloodType);

module.exports = router;
