import React from "react";

import Home from "./pages/Customers/Home/Home";

import Cart from "./pages/Customers/Cart/Cart";

import Checkout from "./pages/Customers/Checkout/Checkout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Authentication/Login";

import Signup from "./components/Authentication/Signup";

import Profile from "./pages/Customers/Profile/Profile";

import ProductPage from "./pages/Customers/Product/ProductPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer/checkout" element={<Checkout />} />
        <Route path="/customer/cart" element={<Cart />} />
        <Route path="/authentication/login" element={<Login />} />
        <Route path="/authentication/signup" element={<Signup />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/products/1" element={<ProductPage />} />
        <Route path="/account/products/" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
