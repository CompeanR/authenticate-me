/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./SignupForm.css";

const SignupFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ username, email, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }

    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form onSubmit={handleSubmit} className="login-signup">
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                className="login__input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="User"
                required
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-at"></i>
              <input
                className="login__input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                className="login__input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                className="login__input"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
              />
            </div>
            <button type="submit" className="button login__submit">
              <span className="button__text">Sign Up</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div className="social-login">
            <h3>log in via</h3>
            <div className="social-icons">
              <Link
                to="#"
                className="social-login__icon fab fa-instagram"
              ></Link>
              <Link
                to="#"
                className="social-login__icon fab fa-facebook"
              ></Link>
              <Link to="#" className="social-login__icon fab fa-twitter"></Link>
            </div>
          </div>
        </div>

        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default SignupFormPage;
