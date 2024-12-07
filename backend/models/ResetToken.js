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

    createdAt:{

        type:Date,

        default:Date.now,

    },

    expires:{

        type:String,

        required:true

    }


})

const ResetToken = mongoose.model('ResetToken',resetTokenSchema);


module.exports = ResetToken