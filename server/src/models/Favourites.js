const mongoose = require("mongoose");
const favouritesSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products',
      required: true
    },
    userId:{type:String},
    color:{type:String}
  },
  { collection: "favourites" }
);
module.exports = mongoose.model("Favourites", favouritesSchema);