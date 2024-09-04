import React from "react";

import "./Authentication.css";

import "./Signup.css";

import { Link } from "react-router-dom";

import { GrHide } from "react-icons/gr";
import { useState } from "react";

import { BiShow } from "react-icons/bi";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((previous) => !previous);
  };

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
              <div className="input-group password">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                />
                <span
                  className="password-controls"
                  onClick={handleShowPassword}
                >
                  {!showPassword ? <BiShow /> : <GrHide />}
                </span>
              </div>
              <div className="input-group password">
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm password"
                />
                <span
                  className="password-controls"
                  onClick={handleShowPassword}
                >
                  {!showPassword ? <BiShow /> : <GrHide />}
                </span>
              </div>
            </div>
          </div>
          <div className="section">
            <p>DELIVERY INFORMATION</p>
            <div className="row">
              <div className="input-group">
                <select name="days">
                  <option value="">Which day you prefer</option>
                  <option value="monday">MONDAY</option>
                  <option value="tuesday">TUESDAY</option>
                  <option value="wednesday">WEDNESDAY</option>
                  <option value="thursday">THURSDAY</option>
                  <option value="friday">FRIDAY</option>
                </select>
              </div>
            </div>
          </div>

          <input type="submit" value="SUBMIT" />
          <div className="formFooter">
            <p>
              <Link to="#">Forgot password?</Link>
            </p>
            <p>
              Have an account?<Link to="/authentication/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
