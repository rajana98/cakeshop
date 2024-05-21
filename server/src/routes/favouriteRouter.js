const express = require("express");
const router = express.Router();
const favouriteControllers = require("../controllers/favouriteControllers")

router.post('/favourites',favouriteControllers.PostFavourite)

router.get('/favourites',favouriteControllers.GetFavourite)

router.delete('/favourites/:productId',favouriteControllers.RemoveFavourite)


module.exports = router;