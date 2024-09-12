const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },
  lorryDetails: {
    type: String,
    required: true,
  },
  driverName: {
    type: String,
    required: true,
  },
  driverPhone: {
    type: String,
    required: true,
  },
  deliveryStatus: {
    type: String,
    required: true,
    enum: ['scheduled', 'in_transit', 'delivered', 'failed'],
    default: 'scheduled',
  },
  estimatedDeliveryTime: {
    type: Date,
    required: true,
  },
  actualDeliveryTime: {
    type: Date,
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

module.exports = mongoose.model('Delivery', deliverySchema);
