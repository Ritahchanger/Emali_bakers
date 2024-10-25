const mongoose = require('mongoose');


const resetTokenSchema = new mongoose.Schema({


    token:{

        type:String,

        required:true,

    },

    businessId:{

        type:mongoose.Schema.Types.ObjectId,

        ref:'Business',

        required:true,

    },

    expiresAt:{

        type:Date,

        required:true,

    },

    createdAt:{

        type:Date,

        default:Date.now,

        expires:300

    }


})

const ResetToken = mongoose.model('ResetToken',resetTokenSchema);


module.exports = ResetToken