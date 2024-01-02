const {
  findCategoryEarphones,
  findCategoryHeadphones,
  findCategorySpeakers,
  findById,
} = require("../models/product.models");

async function getCategoryHeadphones(req, res, next) {
  try {
    const products = await findCategoryHeadphones();
    res.render("customer/products/headphones", { products: products });
  } catch (error) {
    next(error);
    return;
  }
}

async function getCategorySpeakers(req, res, next) {
  try {
    const products = await findCategorySpeakers();
    res.render("customer/products/speakers", { products: products });
  } catch (error) {
    next(error);
    return;
  }
}

async function getCategoryEarphones(req, res, next) {
  try {
    const products = await findCategoryEarphones();
    res.render("customer/products/earphones", { products: products });
  } catch (error) {
    next(error);
    return;
  }
}

async function getProductDetails(req, res, next) {
  try {
    const product = await findById(req.params.id);
    res.render("customer/products/product-details", { product: product });
    
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getCategoryEarphones,
  getCategoryHeadphones,
  getCategorySpeakers,
  getProductDetails,
};
