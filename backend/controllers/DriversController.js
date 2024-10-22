const Driver = require("../models/Drivers.model");




const getDrivers = async (req,res,next) =>{

    try{

        const drivers = await Driver.find({});

        if(!drivers || drivers.length ===0 ){

            return res.status(200).json({status:404,success:false,message:'There are no drivers currently'});

        }

        res.status(200).json({status:200,success:true,data:drivers});

    }catch(error){

        next(error)

    }


}

const createDriver = async (req,res,next) =>{

    try{

        const { name,idNo,phoneNo,routes } = req.body;

        if(!name || !idNo || !phoneNo || !routes){

            return res.status(200).json({status:false,message:"missing credentials",status:400})

        }

        const checkIdNo =await Driver.findOne({idNo});

        if(checkIdNo){

            return res.status(200).json({status:false,message:"Id no already used",status:400})

        }
        const checkPhoneNo =await Driver.findOne({phoneNo});

        if(checkPhoneNo){

            return res.status(200).json({status:false,message:"The phone number already used",status:400})

        }
      
        const newDriver = new Driver({

            name,
            idNo,
            phoneNo,

            routes,

        })

        await newDriver.save();

        return res.status(201).json({status:true,message:'Driver created successfully',driver:newDriver});


    }catch(error){

        next(error);

    }

}


const addRoute = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { routes } = req.body; 

        if (!id) {
            return res.status(400).json({ status: 400, success: false, message: 'No driver ID provided' });
        }

      
        const driver = await Driver.findById(id);
        if (!driver) {
            return res.status(404).json({ status: 404, success: false, message: "Driver not found" });
        }

    
        if (!routes || (Array.isArray(routes) && routes.length === 0)) {
            return res.status(400).json({ status: 400, success: false, message: "No routes provided" });
        }

      
        if (Array.isArray(routes)) {
            driver.routes.push(...routes); 
        } else {
            driver.routes.push(routes); 
        }

        await driver.save();

        return res.status(201).json({ status: true, message: 'Driver updated successfully', driver });

    } catch (error) {
        next(error); 
    }
};


module.exports = { getDrivers,createDriver,addRoute,getDrivers}