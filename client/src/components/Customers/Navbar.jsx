import "./Navbar.css";

import Profile from "../../assets/icons/profile.png";

import { Link } from "react-router-dom";

import { useState } from "react";

const Navbar = () => {
  const [sidebar, showSidebar] = useState(false);

  const handleSidebar = () => {
    showSidebar(!sidebar);
  };

  return (
    <div className="nav">
      <div className="container">
        <div className="logo-div">
          <a href="#" className="logo">
            Shoppi<span>en</span>
          </a>
        </div>
        <div className={`navigation_menu ${sidebar ? "active" : null}`}>
          <div className="nav_ul">
            <p className="nav_li">
              <Link to="/">Home</Link>
            </p>
            <p className="nav_li">
              <Link to="#">Products</Link>
            </p>
            <p className="nav_li">
              <Link to="/customer/cart">Cart</Link>
            </p>
            <p className="nav_li">
              <Link to="/customer/checkout">Checkout</Link>
            </p>
          </div>
          <div className="credential-buttons desktop">
            <button className="credential-btn">
              <Link to="/authentication/signup">Signup</Link>
            </button>
            <button className="credential-btn">
              <Link to="/authentication/login">Login</Link>
            </button>
          </div>
        </div>
        <div className="profile-icon">
          <div className="credential-buttons mobile">
            <button className="credential-btn">
              <Link to="/authentication/signup">Signup</Link>
            </button>
            <button className="credential-btn">
              <Link to="/authentication/login">Login</Link>
            </button>
          </div>
          <Link to="/account/profile">
            <img src={Profile} alt="profile-icon" />
          </Link>
          <div className="menu-icon">
            <p onClick={handleSidebar}>&#9776;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
