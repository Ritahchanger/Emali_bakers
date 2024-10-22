const mongoose= require("mongoose");


const PaymentSchema = new mongoose.Schema({

    user:{

        type:mongoose.Schema.Types.ObjectId,

        ref:"Business",

        required:true
    },

    amount:{

        type:Number,
        required:true,

        min:0,

    },

    paymentMethod:{

        type:String,

        required:true,

        enum:["daraja","stripe"],

    },

    transactionId:{

        type:String,

        required:true,
    },

    status:{

        type:String,

        enum:["pending","completed"],

        default:"pending"

    },
    createdAt:{

        type:Date,

        default:Date.now,

    },

    updatedAt:{

        type:Date,


        default:Date.now
    },

    darajaDetails:{
        transactionReference:{
            type:String,

            required:function(){
                return this.paymentMethod ==="daraja"
            }
        }
    },

    stripeDetails:{

        chargeId:{

            type:String,

            required:function(){

                return this.paymentMethod === "stripe"
            }

        }

    }


},{ timestamps:true })


const Payment = mongoose.model("Payment",PaymentSchema)


module.exports = Payment;