const Product = require("../models/product.models");

async function addCartItem(req, res, next) {
  let product;
  try {
    product = await Product.findById(req.body.productId);
  } catch (error) {
    next(error);
    return;
  }

  const cart = res.locals.cart;
  cart.addItem(product);
  req.session.cart = cart;
  res.status(201).json({
    message: "Cart updated successfully!",
    newTotalItems: cart.totalQuantity,
  });

  console.log(cart);
}

module.exports = {
  addCartItem,
};
