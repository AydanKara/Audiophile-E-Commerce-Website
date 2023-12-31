const Product = require("../models/product.models");

function getProducts(req, res) {
  res.render("admin/products/all-products");
}

function getNewProducts(req, res) {
  res.render("admin/products/new-product");
}

async function createNewProduct(req, res, next) {
  const product = new Product({
    ...req.body,
    image: req.files.image.filename,
    categoryImage: req.files.categoryImage.filename,
  });

  try {
    await product.save();
  } catch (error) {
    next(error);
    return;
  }

  res.redirect("/admin/products");
}

module.exports = {
  getProducts,
  getNewProducts,
  createNewProduct,
};
