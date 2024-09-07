require("dotenv").config();

const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    });

    console.log("The database was successfully connected");
  } catch (err) {
    console.log(`The database connection was not successful: ${err.message}`);
  }
};


module.exports = connectDb;
