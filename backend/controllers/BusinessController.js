const Business = require("../models/Business.model");

const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken');

const registerBusiness = async (req,res,next) =>{

    try{

        const {
            businessName,
            businessType,
            businessPhone,
            businessEmail,
            countyName,
            cityName,
            streetName,
            firstName,
            lastName,
            jobTitle,
            phoneNumber,
            userName,
            password, 
            
            deliveryDays,

          } = req.body;

    const existingEmail = await Business.findOne({businessEmail});

    if(existingEmail){

        return res.status(400).json({success:false,message:"Business email used already"})

    }
    const existingUsername = await Business.findOne({userName});

    if(existingUsername){

        return res.status(400).json({success:false,message:"Username used already"})

    }

    
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password,salt);

    const newBusiness = new Business({

        ...req.body,

        password:hashedPassword

  
      })
  

    const savedBusiness = await newBusiness.save();

    return res.status(200).json({success:true,message:'The business registered successfully',data:savedBusiness});

    }catch(error){

        next(error)

    }

}

const loginBusiness = async (req,res,next) =>{

    try{

        const { businessEmail,password } = req.body;
        
        if(!businessEmail || !password){

            return res.status(200).json({status:400, success:false,message:'All credentials required'});

        }

        const business = await Business.findOne({businessEmail});

        if(!business){

            return res.status(200).json({status:404, success:false,message:'The business is not registered'});

        }

        const isMatch = await bcrypt.compare(password,business.password);

        if(!isMatch){

            return res.status(200).json({status:404,success:false,message:'The password is wrong'});
        }
        
        const token = jwt.sign({id:business._id,username:business.userName},process.env.JWT_SECRET,{expiresIn:"1h"})


        return res.status(200).json({status:200, success:true, message:"LoggedIn successfully",token:token})


    }catch(error){


        next(error)

    }

}


module.exports = { registerBusiness,loginBusiness };