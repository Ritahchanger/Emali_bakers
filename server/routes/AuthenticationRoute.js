const Router = require("express").Router()


const AuthenticationController = require("../controllers/AuthenticationController");


Router.post('/login',AuthenticationController.Login)




module.exports = Router