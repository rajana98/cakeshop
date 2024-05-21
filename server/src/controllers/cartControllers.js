const Carts = require("../models/Carts");

const PostCart = async (req, res) => {
  try {
    const cartData = req.body;
    const { productId, userId } = cartData;

    // Check if the product is already in the cart
    const existingCartItem = await Carts.findOne({ productId, userId });
    console.log(cartData,existingCartItem,"$$")
    if (existingCartItem) {
      return res.status(400).json({ error: "Product already in cart" });
    }

    const newCart = new Carts(cartData);
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save cart item" });
  }
};


  const GetCart = async(req, res) => {
   await Carts.find()
      .populate('userId', 'email') 
      .populate('productId', 'name price') 
      .exec((err, carts) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: err });
        } else {
          // console.log(carts,"carts")
          res.json(carts);
        }
      });
  }

  const GetCartById = async (req, res) => {
    try {
      const data = await Carts.findOne({ _id: req.params.id });
      if (data) {
        console.log(data);
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Cart not found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

  const DeleteCart = async (req, res) => {
    try {
      const data = await Carts.findOneAndDelete({ productId: req.params.productId });
      console.log(data,"data")
      if (data) {
        res.status(200).json({
          data: data,
          msg: "Cart product deleted successfully",
        });
      } else {
        res.status(404).json({
          msg: "Cart product not found",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: "Internal server error",
      });
    }
  };

  const UpdateCart = async (req, res) => {
    try {
      const data = await Carts.findByIdAndUpdate(
       { userId: req.params.userId },
        { $set: req.body },
        { new: true }
      );
      console.log(data);
      if (data) {
        res.status(200).json({
          msg: "Cart updated successfully",
        });
      } else {
        res.status(404).json({
          msg: "Cart not found",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Server error",
      });
    }
  };

  const GetCartsCount=async (req, res) => {
    try {
      const count = await Carts.countDocuments();
      res.status(200).json(count.toString());
      console.log(count,"count")
    } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving products count');
    }
  }


  exports.PostCart = PostCart;
  exports.GetCart = GetCart;
  exports.GetCartById = GetCartById;
  exports.DeleteCart = DeleteCart;
  exports.UpdateCart = UpdateCart;
  exports.GetCartsCount=GetCartsCount