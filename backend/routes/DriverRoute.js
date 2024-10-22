const Router = require("express").Router();


const DriversController = require("../controllers/DriversController");


Router.post('/add',DriversController.createDriver);

Router.get('/get',DriversController.getDrivers);



module.exports = Router;