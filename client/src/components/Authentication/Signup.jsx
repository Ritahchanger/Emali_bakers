import React, { useState } from "react";
import "./Authentication.css";
import "./Signup.css";
import { Link } from "react-router-dom";
import { GrHide } from "react-icons/gr";
import { BiShow } from "react-icons/bi";

import Config from "../../Config";

import { toast, ToastContainer } from "react-toastify";

import axios from "axios";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    bName: "",
    bType: "",
    bPhone: "",
    bEmail: "",
    county: "",
    city: "",
    street: "",
    fName: "",
    lName: "",
    jTitle: "",
    pNo: "",
    userName: "",
    password: "",
    confirmPassword: "",
    days: "",
  });

  const [errors, setErrors] = useState({
    bName: "",
    bType: "",
    bPhone: "",
    bEmail: "",
    county: "",
    city: "",
    street: "",
    fName: "",
    lName: "",
    jTitle: "",
    pNo: "",
    userName: "",
    password: "",
    confirmPassword: "",
    days: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formValues.bName) {
      newErrors.bName = "Business name is required.";
      valid = false;
    }
    if (!formValues.bType) {
      newErrors.bType = "Business type is required.";
      valid = false;
    }
    if (!formValues.bPhone) {
      newErrors.bPhone = "Business phone number is required.";
      valid = false;
    }
    if (!formValues.bEmail || !/\S+@\S+\.\S+/.test(formValues.bEmail)) {
      newErrors.bEmail = "Valid business email is required.";
      valid = false;
    }
    if (!formValues.county) {
      newErrors.county = "County name is required.";
      valid = false;
    }
    if (!formValues.city) {
      newErrors.city = "City name is required.";
      valid = false;
    }
    if (!formValues.street) {
      newErrors.street = "Street name is required.";
      valid = false;
    }
    if (!formValues.fName) {
      newErrors.fName = "First name is required.";
      valid = false;
    }
    if (!formValues.lName) {
      newErrors.lName = "Last name is required.";
      valid = false;
    }
    if (!formValues.userName) {
      newErrors.userName = "Username is required.";
      valid = false;
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formValues.password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (!passwordRegex.test(formValues.password)) {
      newErrors.password =
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";
      valid = false;
    }

    if (formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }
    if (!formValues.days) {
      newErrors.days = "Preferred delivery day is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          `${Config.backendUrl}/api/customers/registration`,
          formValues,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success) {
          alert(response.data.message || "Business registered successfully!");
        } else {
          alert(response.data.message || "Registration failed.");
        }
      } catch (error) {
        alert("An error occurred during registration.");
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="authentication-container signup">
      <div className="container">
        <p className="auth-forms-title">REGISTER BUSINESS </p>
        <form action="#" className="signup" onSubmit={handleSubmit}>
          <div className="section">
            <p>BUSINESS INFORMATION</p>
            <div className="row rich">
              <div className="input-group">
                <input
                  type="text"
                  name="bName"
                  placeholder="Enter business name"
                  value={formValues.bName}
                  onChange={handleInputChange}
                />
                {errors.bName && <p className="error">{errors.bName}</p>}
              </div>
              <div className="input-group">
                <select
                  name="bType"
                  value={formValues.bType}
                  onChange={handleInputChange}
                >
                  <option value="">Enter business type</option>
                  <option value="cafe">Cafe</option>
                  <option value="office">Office</option>
                  <option value="supermarket">Supermarket</option>
                  <option value="shop">Shop</option>
                  <option value="hotel">Hotel</option>
                  <option value="institution">Institution</option>
                </select>
                {errors.bType && <p className="error">{errors.bType}</p>}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="bPhone"
                  placeholder="Enter business phoneNo"
                  value={formValues.bPhone}
                  onChange={handleInputChange}
                />
                {errors.bPhone && <p className="error">{errors.bPhone}</p>}
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="bEmail"
                  placeholder="Enter business email"
                  value={formValues.bEmail}
                  onChange={handleInputChange}
                />
                {errors.bEmail && <p className="error">{errors.bEmail}</p>}
              </div>
            </div>
            <div className="row">
              <div className="input-group">
                <input
                  type="text"
                  name="county"
                  placeholder="Enter county name"
                  value={formValues.county}
                  onChange={handleInputChange}
                />
                {errors.county && <p className="error">{errors.county}</p>}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="city"
                  placeholder="Enter city name"
                  value={formValues.city}
                  onChange={handleInputChange}
                />
                {errors.city && <p className="error">{errors.city}</p>}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="street"
                  placeholder="Enter street name"
                  value={formValues.street}
                  onChange={handleInputChange}
                />
                {errors.street && <p className="error">{errors.street}</p>}
              </div>
            </div>
          </div>
          <div className="section">
            <p>CONTACT PERSON</p>
            <div className="row rich">
              <div className="input-group">
                <input
                  type="text"
                  name="fName"
                  placeholder="First name"
                  value={formValues.fName}
                  onChange={handleInputChange}
                />
                {errors.fName && <p className="error">{errors.fName}</p>}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="lName"
                  placeholder="Last name"
                  value={formValues.lName}
                  onChange={handleInputChange}
                />
                {errors.lName && <p className="error">{errors.lName}</p>}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="jTitle"
                  placeholder="Enter job title"
                  value={formValues.jTitle}
                  onChange={handleInputChange}
                />
                {errors.jTitle && <p className="error">{errors.jTitle}</p>}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="pNo"
                  placeholder="Enter phone no"
                  value={formValues.pNo}
                  onChange={handleInputChange}
                />
                {errors.pNo && <p className="error">{errors.pNo}</p>}
              </div>
            </div>
            <p>ACCOUNT INFORMATION</p>
            <div className="row">
              <div className="input-group">
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter username"
                  value={formValues.userName}
                  onChange={handleInputChange}
                />
                {errors.userName && <p className="error">{errors.userName}</p>}
              </div>
              <div className="input-group password">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={formValues.password}
                  onChange={handleInputChange}
                />
                <span
                  className="password-controls"
                  onClick={handleShowPassword}
                >
                  {!showPassword ? <BiShow /> : <GrHide />}
                </span>
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <div className="input-group password">
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formValues.confirmPassword}
                  onChange={handleInputChange}
                />
                <span
                  className="password-controls"
                  onClick={handleShowPassword}
                >
                  {!showPassword ? <BiShow /> : <GrHide />}
                </span>
                {errors.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
              </div>
            </div>
          </div>
          <div className="section">
            <p>DELIVERY INFORMATION</p>
            <div className="row">
              <div className="input-group">
                <select
                  name="days"
                  value={formValues.days}
                  onChange={handleInputChange}
                >
                  <option value="">Which day you prefer</option>
                  <option value="Monday">MONDAY</option>
                  <option value="Tuesday">TUESDAY</option>
                  <option value="Wednesday">WEDNESDAY</option>
                  <option value="Thursday">THURSDAY</option>
                  <option value="Friday">FRIDAY</option>
                </select>
                {errors.days && <p className="error">{errors.days}</p>}
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
