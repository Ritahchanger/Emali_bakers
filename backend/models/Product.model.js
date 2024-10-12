const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
  {
    downloadUrl: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "fruits",
        "vegetables",
        "meat",
        "dairy",
        "grains",
        "beverages",
        "snacks",
      ],
    },
    images: [ImageSchema],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
