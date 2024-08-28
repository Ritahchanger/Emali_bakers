import React from "react";

import "./Authentication.css";

import "./Signup.css";

const Signup = () => {
  return (
    <div className="authentication-container signup">
      <div className="container">
        <p className="auth-forms-title">REGISTER BUSINESS </p>
        <form action="#" className="signup">
          <div className="section">
            <p>BUSINESS INFORMATION</p>
            <div className="row rich">
              <div className="input-group">
                <input
                  type="text"
                  name="bName"
                  placeholder="Enter business name"
                />
              </div>
              <div className="input-group">
                <select name="bType">
                  <option value="">Enter business type</option>
                  <option value="cafe">Cafe</option>
                  <option value="restaurant">Enter business type</option>
                  <option value="">Office</option>
                  <option value="">Shop</option>
                  <option value="">Supermarket</option>
                </select>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="bPhone"
                  placeholder="Enter business phoneNo"
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="bEmail"
                  placeholder="Enter business email"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-group">
                <input
                  type="county"
                  name="county"
                  placeholder="Enter county name"
                />
              </div>
              <div className="input-group">
                <input type="city" name="city" placeholder="Enter city name" />
              </div>
              <div className="input-group">
                <input
                  type="street"
                  name="street"
                  placeholder="Enter street name"
                />
              </div>
            </div>
          </div>
          <div className="section">
            <p>CONTACT PERSON</p>
            <div className="row rich">
              <div className="input-group">
                <input type="text" name="fName" placeholder="First name" />
              </div>
              <div className="input-group">
                <input type="text" name="lName" placeholder="Last name" />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="jTitle"
                  placeholder="Enter job title"
                />
              </div>
              <div className="input-group">
                <input type="text" name="pNo" placeholder="Enter phone no" />
              </div>
            </div>
            <p>ACCOUNT INFORMATION</p>
            <div className="row">
              <div className="input-group">
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter username"
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                />
              </div>
            </div>
          </div>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
