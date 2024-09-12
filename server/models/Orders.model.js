const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  retailer: {
    type: mongoose.Schema.Types.ObjectId,

    ref: "Customer",

    required: true,
  },

  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",

        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "in_progress", "delivered", "cancelled"],
    default: "pending",
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ["daraja", "stripe"],
  },
  paymentStatus: {
    type: String,
    required: true,
    enum: ["paid", "unpaid"],
    default: "unpaid",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order',orderSchema);