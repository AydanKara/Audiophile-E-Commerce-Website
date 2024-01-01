const db = require("../data/database");

class Product {
  constructor(productData) {
    this.title = productData.title;
    this.image = productData.image;
    this.imagePath = `product-data/images/${productData.image}`;
    this.imageUrl = `/products/assets/images/${productData.image}`;
    this.category = productData.category;
    this.categoryImage = productData.categoryImage;
    this.categoryImagePath = `product-data/images/${productData.categoryImage}`;
    this.categoryImageUrl = `/products/assets/images/${productData.categoryImage}`;
    this.new = productData.new;
    this.price = +productData.price;
    this.description = productData.description;
    this.features = productData.features;
  }

  async save() {
    const productData = {
      title: this.title,
      image: this.image,
      category: this.category,
      categoryImage: this.categoryImage,
      new: this.new,
      price: this.price,
      description: this.description,
      features: this.features,
    };
    await db.getDb().collection("products").insertOne(productData);
  }
}

module.exports = Product;
