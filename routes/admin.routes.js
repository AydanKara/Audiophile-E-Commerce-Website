const express = require("express");
const adminController = require("../controllers/admin.controller");
const imageUploadMiddleware = require("../middlewares/image-upload");

// construct the Router object
const router = express.Router();

router.get("/products", adminController.getProducts); // admin/products
router.get("/products/new-product", adminController.getNewProducts); // admin/products/new
router.post(
  "/products",
  imageUploadMiddleware,
  adminController.createNewProduct
);

module.exports = router;
