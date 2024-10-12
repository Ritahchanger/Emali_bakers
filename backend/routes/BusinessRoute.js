const Router = require("express").Router()

const BusinessController = require("../controllers/BusinessController");


Router.get('/',(req,res)=>{

    res.status(200).json({success:true,message:'The backend server is working'})

})


Router.post('/register',BusinessController.registerBusiness)


Router.post('/login',BusinessController.loginBusiness)


module.exports = Router;