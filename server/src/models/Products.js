const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
  {
    name: { type: String },
    price: { type: Number },
    productImage:{type:String}
  },
  { collection: "products" }
);
module.exports = mongoose.model("Products", productsSchema);