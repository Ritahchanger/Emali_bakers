const nodemailer = require("nodemailer");

require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",

  port: 465,
  secure: true,

  auth: {
    user: process.env.COMPANY_EMAIL || "codewithmunyao@gmail.com",

    pass: process.env.COMPANY_EMAIL_PASSWORD,
  },
});

module.exports = { transporter };
