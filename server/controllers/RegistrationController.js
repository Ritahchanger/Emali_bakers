const Customer = require("../models/Customer.model");
const bcrypt = require("bcrypt");

const RegisterCompany = async (req, res, next) => {
  try {
    const existingUsername = await Customer.findOne({
      accountUserName: req.body.userName,
    });
    if (existingUsername) {
      return res.status(200).json({
        success: false,
        message: "Business username is already used by another business",
      });
    }

    const existingEmail = await Customer.findOne({
      businessEmail: req.body.bEmail,
    });
    if (existingEmail) {
      return res.status(200).json({
        success: false,
        message: "Business email is already used by another business",
      });
    }

    const existingBusinessPhoneNumber = await Customer.findOne({
      businessPhoneNo: req.body.bPhone,
    });
    if (existingBusinessPhoneNumber) {
      return res.status(200).json({
        success: false,
        message: "Business phone number is already used by another business",
      });
    }

    const existingPersonContactNumber = await Customer.findOne({
      contactPersonPhoneNumber: req.body.pNo,
    });
    if (existingPersonContactNumber) {
      return res.status(200).json({
        success: false,
        message:
          "This contact phone number is already used by another business owner",
      });
    }

    const clientPassword = req.body.password;

    console.log(clientPassword)

    const hashedPassword = await bcrypt.hash(clientPassword, 10);

    const newCustomer = new Customer({
      businessName: req.body.bName,
      businessType: req.body.bType,
      businessPhoneNo: req.body.bPhone,
      businessEmail: req.body.bEmail,
      countyName: req.body.county,
      cityName: req.body.city,
      streetName: req.body.street,
      contactPersonFirstName: req.body.fName,
      contactPersonLastName: req.body.lName,
      contactPersonJobTitle: req.body.jTitle,
      contactPersonPhoneNumber: req.body.pNo,
      accountUserName: req.body.userName,
      accountPassword: hashedPassword,
      deliveryDay: [req.body.days],
    });

    await newCustomer.save();

    return res.status(201).json({
      success: true,
      message: "Business registered successfully",
    });
  } catch (error) {1
    next(error);
  }
};

module.exports = { RegisterCompany };
