const express = require("express");
const router = express.Router();
const uploadProductImage = require("../middlewares/uploadProductImage")
const productControllers = require("../controllers/productControllers")


router.post("/products", uploadProductImage.upload, productControllers.PostProducts);

router.get("/products", productControllers.GetProducts);

router.delete("/products", productControllers.DeleteProducts);

router.put("/products", productControllers.EditProducts);

router.get("/search/:key", productControllers.GetSearchResults);

router.get("/products/count", productControllers.GetProductsCount);

module.exports = router;