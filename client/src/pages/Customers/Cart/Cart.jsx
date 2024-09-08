import React, { useEffect } from "react";

import Navbar from "../../../components/Customers/Navbar";

import Footer from "../../../components/Customers/Footer";

import "./Cart.css";

import CartItems from "./CartItems";

import Summary from "./Summary";

import NavigateTop from "../../../components/NavigateTop";

import ProductViewModal from "../../../components/Customers/modals/ProductViewModal";

import SearchModal from "../../../components/Customers/modals/SearchModal";

import Preloader from "../../../components/Customers/modals/Preloader";

const Cart = () => {

  useEffect(() => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",
    });

  }, []);

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
      <SearchModal />
      <NavigateTop />
      <ProductViewModal />
      <Preloader/>
      <Footer />
    </div>
  );
};

export default Cart;
