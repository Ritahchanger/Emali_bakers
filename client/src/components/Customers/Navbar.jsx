import "./Navbar.css";

import Profile from "../../assets/icons/profile.png";

import { Link } from "react-router-dom";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHome,
  faBoxOpen,
  faThList,
  faCreditCard,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [sidebar, showSidebar] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSidebar = () => {
    showSidebar(!sidebar);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownItemClick = () => {
    setDropdownOpen(false); // Hide the dropdown when an item is clicked
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
              <Link to="/">
                <span className="icon">
                  <FontAwesomeIcon icon={faHome} size="2x" />
                </span>
                <span className="icon-name"> Home</span>
              </Link>
            </p>
            <p className="nav_li">
              <Link to="/account/products/" onClick={handleDropdownToggle}>
                <span className="icon">
                  <FontAwesomeIcon icon={faBoxOpen} size="2x" />
                </span>
                <span className="icon-name">Products</span>
              </Link>
              <div className={`drop_down ${dropdownOpen ? "show" : ""}`}>
                <ul>
                  <li onClick={handleDropdownItemClick}>
                    <Link to="/account/products/breads">Breads</Link>
                  </li>
                  <li onClick={handleDropdownItemClick}>
                    <Link to="/account/products/pastries">Pastries</Link>
                  </li>
                  <li onClick={handleDropdownItemClick}>
                    <Link to="/account/products/breads">Breads</Link>
                  </li>
                  <li onClick={handleDropdownItemClick}>
                    <Link to="/account/products/cakes">Cakes</Link>
                  </li>
                  <li onClick={handleDropdownItemClick}>
                    <Link to="/account/products/muffins">Muffins</Link>
                  </li>
                </ul>
              </div>
            </p>
            <p className="nav_li mobile">
              <Link to="/customer/cart">
                <span className="icon">
                  <FontAwesomeIcon icon={faThList} size="2x" />
                </span>
                <span className="icon-name">Category</span>
              </Link>
            </p>

            <p className="nav_li">
              <sup className="cart-items">15</sup>
              <Link to="/customer/cart">
                <span className="icon">
                  <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                </span>
                <span className="icon-name">Cart</span>
              </Link>
            </p>
            <p className="nav_li">
              <Link to="/customer/checkout">
                <span className="icon">
                  <FontAwesomeIcon icon={faCreditCard} size="2x" />
                </span>
                <span className="icon-name">Checkout</span>
              </Link>
            </p>
          </div>
          <div className="credential-buttons desktop">
            <Link to="/authentication/signup">
              <button className="credential-btn">Signup</button>
            </Link>

            <Link to="/authentication/login">
              <button className="credential-btn">Login</button>
            </Link>
          </div>
        </div>
        <div className="profile-icon">
          <Link to="/account/profile">
            <img src={Profile} alt="profile-icon" />
          </Link>
          <div className="menu-icon">
            <button onClick={handleSidebar}>&#9776;</button>
          </div>
        </div>

        <div className="credential-buttons mobile">
          <Link to="/authentication/signup">
            <button className="credential-btn">Signup</button>
          </Link>
          <Link to="/authentication/login">
            <button className="credential-btn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
