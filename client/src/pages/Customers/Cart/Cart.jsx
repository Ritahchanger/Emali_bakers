import React from "react";

import Navbar from "../../../components/Customers/Navbar";

import Footer from "../../../components/Customers/Footer";

import "./Cart.css";

import CartItems from "./CartItems";

import Summary from "./Summary";

import NavigateTop from "../../../components/NavigateTop";

import ProductViewModal from "../../../components/Customers/modals/ProductViewModal";



const Cart = () => {
  return (
    <div className="cart">
      <Navbar />
      <div className="container">
        <p className="empty"></p>
        <div className="row">
          <CartItems />
          <Summary />
        </div>
      </div>
      <NavigateTop />
      <ProductViewModal />
      <Footer />
    </div>
  );
};

export default Cart;
