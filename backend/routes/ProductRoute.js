const { uploadMany } = require("../utils/uploadFiles");


const ProductController = require("../controllers/ProductController");


const Router = require("express").Router();





Router.post('/add/product',uploadMany,ProductController.createProduct)








module.exports = Router


