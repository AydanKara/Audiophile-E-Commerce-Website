const express = require("express");

// construct the Router object
const router = express.Router();

router.get("/products", function (req, res) {
  res.render("customer/products/all-products");
});

module.exports = router;
