import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ResetPassword.css";

// MUI Icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MosqueIcon from "@mui/icons-material/Mosque";

function ResetPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="reset-page">
      
      {/* Back to Login */}
      <Link to="/" className="back-link">
        <ArrowBackIosNewIcon className="back-icon" />
        Back to Login
      </Link>

      {/* Logo */}
      <div className="brand-logo mb-3">
        <MosqueIcon />
      </div>

      {/* Heading */}
      <div className="text-center mb-4">
        <h5 className="title-text">Reset Password</h5>
        <p className="sub-text">
          Enter your email or mobile number to receive reset instructions
        </p>
      </div>

      {/* Card */}
      <form className="reset-card">
        <div className="form-group mb-3">
          <label className="form-label">Mobile Number / Email</label>
          <input
            type="text"
            className="form-control custom-input"
            placeholder="Enter mobile or email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="button" className="btn-reset w-100">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
