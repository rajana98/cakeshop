const Orders= require("../models/Orders")

const PostOrder = async (req, res) => {
    try {
      const orderData = req.body;
      console.log(orderData)
      const newOrder = new Orders(orderData);
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to order" });
    }
  };

  const GetOrders = (req, res) => {
    Orders.find()
    .populate({
        path: 'cartId',
        populate: {
          path: 'userId',
          select: 'email phoneNumber firstName'
        }
      })
    .populate({
      path: 'cartId',
      populate: {
        path: 'productId',
        select: 'name price'
      }
    })
    .exec((err, orders) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: err });
      } else {
        res.json(orders);
      }
    });
}

const GetMyOrdersById = (req, res) => {
  console.log(req.params,"%%")
  Orders.find({userId:req.params.userId})
  .populate({
      path: 'cartId',
      populate: {
        path: 'userId',
        select: 'email phoneNumber firstName'
      }
    })
  .populate({
    path: 'cartId',
    populate: {
      path: 'productId',
      select: 'name price'
    }
  })
  .exec((err, myOrders) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: err });
    } else {
      console.log(myOrders,"orders")
      res.json(myOrders);
    }
  });
}

// const PutOrder = async (req, res) => {
//   console.log(req.query,"req")
//   try {
//     const data = await Orders.findByIdAndUpdate(req.query.cartId, 
//       { quantity: req.body.quantity },
//       {new:true});
//     if (!data) {
//       return res.status(404).json({ error: "Order not found" });
//     }
//     console.log(data,"data");
//     res.json({ message: "Order updated successfully",data });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to update order" });
//   }
// };



  exports.PostOrder=PostOrder
  exports.GetOrders=GetOrders
  exports.GetMyOrdersById=GetMyOrdersById
  // exports.PutOrder=PutOrder