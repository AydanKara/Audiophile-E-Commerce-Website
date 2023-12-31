const Product = require("../models/product.models");
const {
  findCategoryEarphones,
  findCategoryHeadphones,
  findCategorySpeakers,
} = require("../models/product.models");

async function getProducts(req, res, next) {
  try {
    const products = await findCategoryHeadphones();
    res.render("admin/products/all-products", { products: products });
  } catch (error) {
    next(error);
    return;
  }
}

function getNewProducts(req, res) {
  res.render("admin/products/new-product");
}

async function createNewProduct(req, res, next) {
  const product = new Product({
    ...req.body,
    image: req.files.image[0].filename,
    categoryImage: req.files.categoryImage[0].filename,
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
