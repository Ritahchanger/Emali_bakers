const Business = require("../models/Business.model");

const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken');

const ResetToken = require("../models/ResetToken");


const { transporter } = require("../utils/Transporter")


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


        res.cookie('token',token,{

            httpOnly:true,

            secure:process.env.NODE_ENV === "production",


            sameSite:"Strict",

            maxAge:3600000

        })


        return res.status(200).json({status:200, success:true, message:"LoggedIn successfully",token:token})


    }catch(error){


        next(error)

    }

}


const forgetPassword = async (req,res,next) =>{

    try{

        const { businessEmail } = req.body;

        console.log(businessEmail)

        if(!businessEmail){

            return res.status(400).json({success:false,message:'Email is required'});

        }

        const business = await Business.findOne({businessEmail});

        if(!business){

            return  res.status(404).json({success:false, message:'No business found with that email'})

        }

        const resetToken = crypto.randomBytes(32).toString('hex');

        const hashedToken = await bcrypt.hash(resetToken,10);

        const expirationTime = Date.now() + 5 * 60 * 1000;

        const resetTokenDoc = new ResetToken({

            token:hashedToken,

            businessId:business._id,
            
            expires:new Date(expirationTime),

        })

        await resetTokenDoc.save();

        const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${6747384}`;
        // const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

        console.log("Message ready to sent")

        const message = `
            <h1>Password Reset Request</h1>
            <p>You requested a password reset for your account.</p>
            <p>Please click the link below to reset your password (valid for 5 minutes):</p>
            <a href="${resetUrl}" clicktracking=off>${resetUrl}</a>
        `;

        console.log()

        await transporter.sendMail({

            to:businessEmail,

            subject:'Password Reset Request',
            html:message
    
        })

        return res.status(200).json({success:true,message:'Reset link sent to your email'})

    }catch(error){


    }

}



module.exports = { registerBusiness,loginBusiness,forgetPassword };