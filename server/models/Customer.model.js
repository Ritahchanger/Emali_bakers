const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const CustomerSchemaModel = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
  },
  businessType: {
    type: String,
    required: true,
    enum: ["cafe", "office", "shop", "supermarket", "hotel", "institution"],
  },
  businessPhoneNo: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(v); 
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  businessEmail: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); 
      },
      message: props => `${props.value} is not a valid email address!`
    }
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
  contactPersonFirstName: {
    type: String,
    required: true,
  },
  contactPersonLastName: {
    type: String,
    required: true,
  },
  contactPersonJobTitle: {
    type: String,
    required: true,
  },
  contactPersonPhoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(v); 
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  accountUserName: {
    type: String,
    required: true,
    unique: true,
  },
  accountPassword: {
    type: String,
    required: true,
  },
  deliveryDay: {
    type: String,
    required: true,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], 
  },
});


CustomerSchemaModel.pre('save', function(next) {
  if (!this.isModified('accountPassword')) return next();

  bcrypt.hash(this.accountPassword, 10, (err, hashedPassword) => {
    if (err) return next(err);
    this.accountPassword = hashedPassword;
    next();
  });
});

const Customer = mongoose.model("Customer", CustomerSchemaModel);

module.exports = Customer;
