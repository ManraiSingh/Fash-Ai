import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaApple } from "react-icons/fa";
import "./login.css";

 function Login() {
  return (
    <div className="login-wrapper">
    <div className="login-container">
      <div className="login-left">
        <div className="login-text">
          <h1>Chic.</h1>
          <h1>Secure.</h1>
          <h1>Seamless.</h1>
        </div>
  
        <div className="fashion-image">
          <img src="/sidee.jpeg" alt="Fashion" />
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <h2>Login</h2>

          <label>Email</label>
          <input type="email" placeholder="" />

          <label>Password</label>
          <input type="password" placeholder="" />

          <div className="forgot-password">Forgot your password?</div>

          <div className="social-buttons">
            <button className="google-btn">
              <FaGoogle /> Sign in with Google
            </button>
            <button className="apple-btn">
              <FaApple /> Sign in with Apple
            </button>
          </div>
         <Link to="/signup"><button className="log-in-btn">Log In</button></Link>
         <div className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
         </div>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Login;

