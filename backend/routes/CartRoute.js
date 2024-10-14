const Router = require("express").Router();


const CartController = require("../controllers/CartController")





Router.get('/get',CartController.getCartItems)







module.exports = Router