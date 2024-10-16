import "./Authentication.css";

import { adminHomePath } from "../../PathStore/AdminPath";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { BiShow } from "react-icons/bi";
import { GrHide } from "react-icons/gr";
import { useState } from "react";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  openPreloader,
  closePreloader,
} from "../../Redux/Features/PreloaderSlice";

import Preloader from "../Customers/modals/Preloader";

const MySwal = withReactContent(Swal);

const Login = () => {
  const dispatch = useDispatch();

  const preloaderLoading = useSelector(
    (state) => state.preloader.displayPreloader
  );

  const isAdmin = !!localStorage.getItem("role") || true;
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // useNavigate for redirection

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

    if (!password.trim().length) {
      tempErrors["password"] = "Please enter password.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      MySwal.fire({
        title: <p>Success!</p>,
        text: "Redirecting to admin dashboard",
        icon: "success",
      }).then(() => {
        dispatch(openPreloader());

        setTimeout(() => {
          dispatch(closePreloader());

          navigate(adminHomePath.path);
        }, 5000);
      });
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
            <input
              type="submit"
              value={`${"LOGIN"}`}
              className="submit-btn"
              disabled={loading} // Disable button while loading
            />
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
      {preloaderLoading && <Preloader />}
    </div>
  );
};

export default Login;
