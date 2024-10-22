const Router = require("express").Router();


const DriversController = require("../controllers/DriversController");


Router.post('/add',DriversController.createDriver);

Router.get('/get',DriversController.getDrivers);

Router.patch('/update/routes/:id',DriversController.addRoute);


module.exports = Router;