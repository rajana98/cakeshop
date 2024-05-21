const mongoose = require("mongoose");
const ordersSchema = new mongoose.Schema({
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Carts',
    required: true
  },
    quantity: {
      type: Number,
      required: true
    },
    totalPrice: {
      type: Number,
      required: true
    }
},
{timestamps:true},
{ collection: "orders" }
);

module.exports = mongoose.model("Orders", ordersSchema);