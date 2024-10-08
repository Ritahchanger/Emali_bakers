const express = require("express");

const app = express();

require("dotenv").config();

const connectDb = require("../database/Database");

const PORT = process.env.PORT || 5000;

const cors = require("cors");

const helmet = require("helmet");

const morgan = require("morgan");

const cookieParser = require("cookie-parser");

const { StatusCode500 } = require("../middlewares/StatusCodes");

const errorHandler = require("../middlewares/errorHandler");

const authenticateToken = require("../middlewares/AuthenticateToken")

app.use(express.json());



app.use(morgan("combined"));

app.use(helmet());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(StatusCode500);


const CustomerRoute = require("../routes/CustomerRoute");

const PaymentRoute  = require("../routes/PaymentRoute");

const AuthenticationRoute = require("../routes/AuthenticationRoute");







app.use('/api/authentication',AuthenticationRoute);

app.use('/api/customers',CustomerRoute);

// app.use('/api/customers',authenticateToken,CustomerRoute);


app.use('/api/payment',PaymentRoute);





const connectServer = async () => {
  await connectDb();

  app.listen(PORT, () => {
    console.log(
      `The server was successfully connected and its running on PORT ${PORT}`
    );
  });
};

connectServer();
