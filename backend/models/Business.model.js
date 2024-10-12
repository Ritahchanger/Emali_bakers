const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const BusinessSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
  },
  businessType: {
    type: String,
    required: true,
    enum: ["cafe", "coffee", "office", "hostel", "institution"],
  },
  businessPhone: {
    type: String, 
    required: true,
  },
  businessEmail: {
    type: String,
    required: true,
  },
  countyName: {
    type: String,
    required: true,
  },
  cityName: {
    type: String,
    required: true,
  },
  streetName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String, 
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  deliveryDays: {
    type: [String],
    enum: ["mon", "tue", "wed", "thu", "fri"],
  },
});



const Business = mongoose.model("Business", BusinessSchema);

module.exports = Business;
