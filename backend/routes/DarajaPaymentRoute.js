const Router = require("express").Router();

const DarajaPaymentController = require("../controllers/DarajaPaymentController");



Router.post('/',DarajaPaymentController.createToken, DarajaPaymentController.stkPush)



module.exports = Router;