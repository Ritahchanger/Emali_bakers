import "./Authentication.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { GrHide } from "react-icons/gr";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleShowPassword = () => {
    setShowPassword((previous) => !previous);
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,}$/;

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!emailRegex.test(email)) {
      tempErrors["email"] = "Please enter a valid email.";
      isValid = false;
    }

    if (!password.trim().length <= 1) {
      tempErrors["password"] = "Please enter password";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(`Form submitted successfully.`);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    // Remove email error when user starts typing again
    if (errors.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    // Remove password error when user starts typing again
    if (errors.password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };

  return (
    <div className="authentication-container login">
      <p className="home-navigator">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </p>
      <div className="container">
        <p className="auth-forms-title">LOGIN</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
            </p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="input-group">
            <p>
              <FontAwesomeIcon icon={faLock} />
            </p>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password..."
              value={password}
              onChange={handlePasswordChange}
            />
            <span className="password-controls" onClick={handleShowPassword}>
              {!showPassword ? <BiShow /> : <GrHide />}
            </span>
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>

          <div className="input_group">
            <input type="submit" value="LOGIN" className="submit-btn" />
          </div>
          <div className="formFooter">
            <p>
              <Link to="#">Forgot password?</Link>
            </p>
            <p>
              Have an account?<Link to="/authentication/signup">Create</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
