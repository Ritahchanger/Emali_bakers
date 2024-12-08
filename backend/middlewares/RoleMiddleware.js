const RoleMiddleware = (roles) =>{

    return (req,res,next)=>{

        const user = req.user;

        if(!user){

            return res.status(200).json({status:401,success:false,message:"Authentication required"});

        }

        if(!roles.includes(user.role)){

            return res.status(200).json({success:false,message:'Forbidden: You do not have access'});

        }

        next();
    }

}

module.exports = RoleMiddleware;