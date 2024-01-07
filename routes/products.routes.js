const express = require("express");
const customerController = require("../controllers/customer.controller");

// construct the Router object
const router = express.Router();

router.get("/products/headphones", customerController.getCategoryHeadphones);
router.get("/products/earphones", customerController.getCategoryEarphones);
router.get("/products/speakers", customerController.getCategorySpeakers);

router.get("/products/:id", customerController.getProductDetails);

module.exports = router;
