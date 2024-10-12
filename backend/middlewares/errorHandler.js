const errorHandler = (err,req,res,next) =>{


    const statusCode = err.statusCode || 500;


    res.status(statusCode).json({


        success:false,

        message:err.message || "Server Error",

        stack: process.env.NODE_ENV === "production" ? null : err.stack,


    })


}


module.exports = errorHandler;