import "./Authentication.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <div className="authentication-container login">
      <div className="container">
        <p className="auth-forms-title">
          LOGIN
        </p>
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
              type="password"
              name="password"
              id="#"
              placeholder="Enter your password..."
            />
          </div>

          <div className="input_group">
            <input type="submit" value="LOGIN" className="submit-btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
