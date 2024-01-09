const express = require("express");

const cartController = require("../controllers/cart.controller");

// construct the Router object
const router = express.Router();

router.post("/items", cartController.addCartItem); // /cart/items

module.exports = router;
