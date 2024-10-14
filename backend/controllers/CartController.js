const Cart = require("../models/Cart.model");

const Product = require("../models/Payment.model");

const getCartItems = async (req,res,next)=>{

    try{

        const cartItems = await Cart.find({});

        if(!cartItems){

            return res.status(200).json({status:404,success:false,message:'Items not found'})

        }

        res.status(200).json({status:200,success:true,data:cartItems});

    }catch(error){

        next(error)

    }


}



module.exports = { getCartItems }