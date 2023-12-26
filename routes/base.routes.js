const express = require("express");

// construct the Router object
const router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/products");
});

module.exports = router;
