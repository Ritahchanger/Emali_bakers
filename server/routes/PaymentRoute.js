const Router = require("express").Router();


const { createCheckOutSession } = require("../controllers/StripeController");


Router.post('/stripe/create-checkout-session',createCheckOutSession);


module.exports = Router