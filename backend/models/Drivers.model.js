const mongoose = require("mongoose");


const driverSchema = new mongoose.Schema({

    name:{

        type:String,

        required:true,

        trim:true
    },

    idNo:{

        type:String,

        required:true,

        trim:true,

        unique:true,

    },

    phoneNo:{
        type:String,

        required:true,

        unique:true,

        trim:true,
    },

    routes:[
        {
            type:String,
            required:true,
        }
    ],


},{timestamps:true});



const Driver = mongoose.model("Driver",driverSchema);

module.exports = Driver;