const { Router } = require('express');
const app = Router();
const cartControllers=require("../controllers/cartControllers")

app.post('/carts', cartControllers.PostCart)
app.get('/carts',cartControllers.GetCart)
app.get('carts/:id',cartControllers.GetCartById)
app.delete('/carts/:productId',cartControllers.DeleteCart)
app.patch('/carts/:id',cartControllers.UpdateCart)
app.get('/carts/count',cartControllers.GetCartsCount)

module.exports = app;

