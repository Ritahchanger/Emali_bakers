const mongoose = require("mongoose");

const cartItems = new mongoose.Schema(
  {
    product: {
      type: String,

      required: true,
    },

    quantity: {
      type: Number,

      required: true,

      default: 0,
    },
  },
  { _id: false }
);

const CartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "Business",

      required: true,
    },
    items: [cartItems],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
