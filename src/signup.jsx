import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaApple } from "react-icons/fa";
import "./signup.css";

function Signup() {
  return (
    <div className="signup-wrapper">
    <div className="signup-container">
      <div className="signup-left">
        <div className="signup-text">
          <h1>Chic.</h1>
          <h1>Secure.</h1>
          <h1>Seamless.</h1>
        </div>
        
        <div className="fashion-image">
          <img src="/sidee.jpeg" alt="Fashion" />
        </div>
      </div>

      <div className="signup-right">
        <div className="signup-card">
          <h2>Sign-Up</h2>

          <label>Email</label>
          <input type="email" placeholder="" />

          <label>Password</label>
          <input type="password" placeholder="" />

           <div className="or-sign-in">OR SIGN-IN WITH </div> 

          <div className="social-buttons">
            <button className="google-btn">
              <FaGoogle /> Sign in with Google
            </button>
            <button className="apple-btn">
              <FaApple /> Sign in with Apple
            </button>
          </div>

         <Link to="/signup"><button className="sign-in-btn">Sign In</button></Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signup;

