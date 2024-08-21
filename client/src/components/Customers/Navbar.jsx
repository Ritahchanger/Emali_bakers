import "./Navbar.css";

import Profile from "../../assets/icons/profile.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="logo-div">
          <a href="#" className="logo">
            Shoppi<span>en</span>
          </a>
        </div>
        <div className="navigation_menu">
          <ul className="nav_ul">
            <li className="nav_li">
              <a href="#">Home</a>
            </li>
            <li className="nav_li">
              <a href="#">Products</a>
            </li>
            <li className="nav_li">
              <a href="#">Cart</a>
            </li>
            <li className="nav_li">
              <a href="#">Checkout</a>
            </li>
          </ul>
          <div className="credential-buttons">
            <button className="credential-btn">
              <a href="#">Signup</a>
            </button>
            <button className="credential-btn">
              <a href="#">Login</a>
            </button>
          </div>
        </div>
        <div className="profile-icon">
          <img src={Profile} alt="profile-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
