require("dotenv").config()
const PORT = process.env.PORT || 8000

const app = require("./app");

const express = require("express")

const cors = require("cors");

const errorHandler = require("../middlewares/errorHandler");

const { verifyToken } = require("../middlewares/AuthenticateToken");

const connectDatabase = require("../database/Database")

const admin = require("firebase-admin");

app.use(cors());


app.use(errorHandler)


app.use(express.json())


const firebaseConfig = JSON.parse(process.env.FIREBASE_CREDENTIALS)


admin.initializeApp({

    credential:admin.credential.cert(firebaseConfig),
    

    storageBucket:process.env.STORAGE_BUCKET

})




const BusinessRoute = require("../routes/BusinessRoute");

const ProductRoute = require("../routes/ProductRoute");



app.get('/',(req,res)=>{


    res.status(200).json({success:true,message:'The server has been gotten'})


})

app.use('/api/auth/business',BusinessRoute);

app.use('/api/auth/business',ProductRoute);


app.listen(PORT, async ()=>{

    await connectDatabase()

    console.log(`There server is successfully running on PORT ${PORT}`)

})