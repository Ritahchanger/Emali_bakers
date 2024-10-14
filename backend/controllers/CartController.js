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

const addItemsToCart = async (req,res,next)=>{

    try{

        const { userId,productId,quantity} = req.body;

        const product = await Product.findById(productId);

        if(!product){

            return res.status(404).json({message:'Product not found'})

        }

        let cart = await Cart.findOne({user:userId});

        if(!cart){

            cart = new Cart({user:userId,items:[]});

        }

        const existingItem = cart.items.find(item => item.product.toString()===productId);

        if(existingItem){

            existingItem.quantity += quantity
        }

        cart.items.push({product:productId,quantity});

        await cart.save()

        res.status(201).json({ success:true,data:cart })
    
    }catch(error){
        next(error)
    }

}

const updateItemQuantity = async (req,res,next) => {

    const { userId,productId,quantity } = req.body;

    try{

        const cart = await Cart.findOne({user:userId});

        if(!cart){

            return res.status(200).json({status:404,success:false,message:'Cart not found'});

        }

        const item = cart.items.find(item=>item.product.toString()===productId);

        if(!item){

            return res.status(200).json({status:404,success:false,message:'Items not found in cart'})
        }

        item.quantity = quantity;

        await cart.save();

        res.status(200).json({status:200,success:true,data:Cart})

    }catch(error){

        next(error)

    }


}



module.exports = { getCartItems,updateItemQuantity }