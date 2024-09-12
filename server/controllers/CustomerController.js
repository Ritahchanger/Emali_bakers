const Customer = require("../models/Customer.model");

const asyncWrapper = require("../middlewares/asyncWrapper");

const { StatusCode404, StatusCode200 } = require("../middlewares/StatusCodes");

const getCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.find({});

    if (!customers || customers.length === 0) {
      StatusCode404(res, "Customers not found");
    } else {
      StatusCode200(res, customers);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getCustomers };
