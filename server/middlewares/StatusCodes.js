const StatusCode200 = (res, data) => {
  return res.status(200).json({status:200, success: true, data: data });
};


const StatusCode400 = (res, message) => {
  return res.status(200).json({status:400, success: false,message:message });
};


const StatusCode401 = (res, message) => {
  return res.status(200).json({  status:401, success:false, message:message});
};



const StatusCode500 = (error,req,res,next) =>{

    console.error(error.stack);

    return res.status(500).json({ success:false,message: `${error.message}` })

}

module.exports = { StatusCode200,StatusCode400,StatusCode401,StatusCode500}



