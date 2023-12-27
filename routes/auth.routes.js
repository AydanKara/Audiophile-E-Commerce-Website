const express = require("express");

const authController = require("../controllers/auth.controller");

// construct the Router object
const router = express.Router();

router.get("/signup", authController.getSignup);
router.post("/signup", authController.signup);
router.get("/login", authController.getLogin);
router.get("/", authController.getHome);
router.post("/login", authController.login);

module.exports = router;
