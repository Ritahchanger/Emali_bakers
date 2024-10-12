const mongoose = require("mongoose");

require("dotenv").config();

const connectDatabase = () =>{

    mongoose.connect(process.env.MONGO_URI).then(()=>{

        console.log('The database was successfully connected');

    }).catch((error)=>{

        console.log(`There was an error connecting to the database ${error.message}`);

    })

    
}

module.exports = connectDatabase;