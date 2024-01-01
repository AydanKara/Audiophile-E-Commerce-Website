const express = require("express");
const customerController = require("../controllers/customer.controller")

// construct the Router object
const router = express.Router();


router.get("/products/headphones", customerController.getCategoryHeadphones);

module.exports = router;
