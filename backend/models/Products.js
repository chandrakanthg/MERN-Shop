const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  countInStock: {
    type: Number,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
});
const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
