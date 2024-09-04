import "./Authentication.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import { faLock } from "@fortawesome/free-solid-svg-icons";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { BiShow } from "react-icons/bi";

import { GrHide } from "react-icons/gr";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((previous) => !previous);
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
        <form action="#">
          <div className="input-group">
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
            </p>
            <input
              type="email"
              name="email"
              id="#"
              placeholder="Enter your email..."
            />
          </div>
          <div className="input-group">
            <p>
              <FontAwesomeIcon icon={faLock} />
            </p>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="#"
              placeholder="Enter your password..."
            />

            <span className="password-controls" onClick={handleShowPassword}>
              {!showPassword ? <BiShow /> : <GrHide />}
            </span>
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
