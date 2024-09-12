const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ["daraja", "stripe"],
  },
  paymentStatus: {
    type: String,
    required: true,
    enum: ["completed", "pending", "failed"],
    default: "pending",
  },
  paymentDetails: {
    type: Object,
    required: true,
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

module.exports = mongoose.model("Payment", paymentSchema);
