const Router = require("express").Router();

const CustomerController = require("../controllers/CustomerController");

const RegistrationController = require("../controllers/RegistrationController");

Router.post("/registration", RegistrationController.RegisterCompany);
Router.get("/get", CustomerController.getCustomers);

module.exports = Router;
