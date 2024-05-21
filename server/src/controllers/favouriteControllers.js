const Favourites=require("../models/Favourites")

const PostFavourite= async (req, res) => {
  try {
      const { productId, userId } = req.body;
      const existingFavourite = await Favourites.findOne({ productId, userId });
      if (existingFavourite) {
          res.status(400).json({ message: 'Product already in favourites' });
          return;
      }
      const favouriteProduct = new Favourites(req.body);
      await favouriteProduct.save();
      res.status(200).json({ message: 'Favorite item added successfully.' });
  } catch (error) {
      res.status(500).json({ message: 'Something went wrong.' });
  }
};


  const GetFavourite=async (req, res) => {
       await Favourites.find({userId: req.query.userId})
      .populate('productId', 'name') 
      .exec((err, favourites) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: err });
        } else {
          // console.log(favourites,"favourites")
          res.json(favourites);
        }
      }
      )
}


  const RemoveFavourite = async (req, res) => {
    console.log(req.params,"req")
    try {
      const data = await Favourites.findOneAndDelete(req.params.productId);
      console.log(data)
      if (data) {
        res.status(200).json({
          data: data,
          message: 'Favorite product removed successfully.'
        });
      } else {
        res.status(404).json({
          message: 'Favorite product not found.'
        });
      }
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong.'
      });
    }
  };

  exports.PostFavourite=PostFavourite
  exports.GetFavourite=GetFavourite
  exports.RemoveFavourite=RemoveFavourite