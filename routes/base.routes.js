const express = require("express");

// construct the Router object
const router = express.Router();

router.get("/", function (req, res) {
    res.render("customer/home/home");
});

module.exports = router;
