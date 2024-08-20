import React from "react";

import Home from "./pages/Customers/Home/Home";

import Cart from "./pages/Customers/Cart/Cart";

import Checkout from "./pages/Customers/Checkout/Checkout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer/checkout" element={<Checkout />} />
        <Route path="/customer/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
