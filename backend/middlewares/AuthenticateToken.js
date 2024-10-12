require("dotenv").config();

const jwt = require("jsonwebtoken");



const verifyToken = (req,res,next) =>{

   const token = req.headers['authorization']?.split('  ')[1] || req.cookies.token;

   if(!token){

    return res.sendStatus(401)

   }

   jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{

    if(err){

        return res.sendStatus(403);

    }

    req.businessData =  {

        id:decoded.id,

        username:decoded.username,

    };

    next()

   })
   

}


module.exports = verifyToken