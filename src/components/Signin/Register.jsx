import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

// MUI Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MosqueIcon from "@mui/icons-material/Mosque";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="register-page d-flex justify-content-center align-items-center">
      <div className="register-container">

        {/* Back to Login */}
        <Link to="/" className="back-link">
          <ArrowBackIosNewIcon className="back-icon" />
          Back 
        </Link>

        {/* Logo */}
       

        {/* Heading */}
        <h2>Create Account</h2>
        <p className="sub-text">Join your Mahal community</p>

        {/* Register Form */}
        <form className="register-card">

          {/* First & Last Name */}
          <div className="row">
            <div className="col">
              <label>First Name</label>
              <input type="text" placeholder="First name" />
            </div>
            <div className="col">
              <label>Last Name</label>
              <input type="text" placeholder="Last name" />
            </div>
          </div>

          <label>House Name</label>
          <input type="text" placeholder="Enter house name" />

          <label>Mobile Number</label>
          <input type="tel" placeholder="Enter mobile number" />

          <label>Email (Optional)</label>
          <input type="email" placeholder="Enter email address" />

          {/* Password */}
          <label>Password</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
          </div>

          {/* Submit */}
          <button className="create-btn">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
