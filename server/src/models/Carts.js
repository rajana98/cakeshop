const mongoose = require("mongoose");
const cartsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
    
},
{collection:"carts"}
);

module.exports = mongoose.model("Carts", cartsSchema);