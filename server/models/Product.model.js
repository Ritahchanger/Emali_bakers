const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    downloadUrl: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["bread", "cake", "pastry", "beverage", "other"],
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  image: [imageSchema],
  stock: {
    type: Number,
    required: true,
    min: 0,
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

productSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Product", productSchema);
