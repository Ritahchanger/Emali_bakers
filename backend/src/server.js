const PORT = process.env.PORT || 8000

const app = require("./app");

const express = require("express")

const cors = require("cors");

const errorHandler = require("../middlewares/errorHandler");

const connectDatabase = require("../database/Database")

app.use(cors());

app.use(errorHandler)

app.use(express.json())


const BusinessRoute = require("../routes/BusinessRoute");


app.get('/',(req,res)=>{


    res.status(200).json({success:true,message:'The server has been gotten'})


})

app.use('/api/auth/business',BusinessRoute);


app.listen(PORT, async ()=>{

    await connectDatabase()

    console.log(`There server is successfully running on PORT ${PORT}`)

})