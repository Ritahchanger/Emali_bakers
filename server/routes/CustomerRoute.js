const Router = require("express").Router();


const RegistrationController = require("../controllers/RegistrationController");


Router.post('/registration',RegistrationController.RegisterCompany);




module.exports = Router