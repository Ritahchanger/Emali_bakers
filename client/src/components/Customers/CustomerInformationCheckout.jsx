import React from "react";
import "./CustomerInformationCheckout.css";
import { Link } from "react-router-dom";
const CustomerInformationCheckout = () => {
  return (
    <div className="customer-information">
      <p className="subtitle">CUSTOMER INFORMATION</p>
      <div className="input-group">
        <input type="email" name="email" placeholder="Enter email" />
      </div>
      <div className="shipping-information">
      <p className="subtitle">SHIPPING ADDRESS</p>
        <div className="row">
          <div className="input-group">
            <input type="text" name="" id="" placeholder="First Name" />
          </div>
          <div className="input-group">
            <input type="text" name="" id="" placeholder="Last Name" />
          </div>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="bName"
            id=""
            placeholder="Company [optional]"
          />
        </div>
        <div className="row">
          <div className="input-group">
            <input type="text" name="address" placeholder="Address" />
          </div>
          <div className="input-group">
            <input type="text" name="address" placeholder="Suite" />
          </div>
        </div>
        <div className="input_group">
          <select name="county">
            <option value="Makueni">Makueni</option>
            <option value="Machakos">Machakos</option>
            <option value="Kitui">Kitui</option>
            <option value="Migori">Migori</option>
          </select>
        </div>
        <div className="row">
          <div className="input-group">
            <input
              type="text"
              name="postalcode"
              id=""
              placeholder="Postal Code"
            />
          </div>
          <div className="input-group">
            <input type="text" name="telephone" id="" placeholder="Telephone" />
          </div>
        </div>
        <div className="row checkout-navigation">
            <p>
                <Link to="/customer/cart">Return to Cart</Link>
            </p>
            <button className="hero-btn">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerInformationCheckout;
