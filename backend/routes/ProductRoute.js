const { uploadMany } = require("../utils/uploadFiles");


const ProductController = require("../controllers/ProductController");


const Router = require("express").Router();





Router.post('/add/product',uploadMany,ProductController.createProduct)


Router.get('/get/products',ProductController.getProducts)


Router.get("/get/product/:id",ProductController.getProductById)


module.exports = Router


