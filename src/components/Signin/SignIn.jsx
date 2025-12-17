import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignIn.css'

// MUI
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import MosqueIcon from '@mui/icons-material/Mosque'

function SignIn() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // ✅ LOGIN HANDLER
  const handleLogin = (e) => {
    e.preventDefault() // prevent page reload

    // TEMP LOGIN CHECK (replace with backend API)
    if (username.trim() !== "" && password.trim() !== "") {
      navigate("/home")   // ✅ GO TO HOME PAGE
    } else {
      alert("Please enter valid credentials")
    }
  }

  return (
    <div className="signin-page">
      
      {/* Logo */}
      <div className="brand-logo mb-3">
        <MosqueIcon />
      </div>

      {/* Heading */}
      <div className="text-center mb-4">
        <h5 className="welcome-text">Welcome Back</h5>
        <h6 className="sub-text">Sign in to your Mahal account</h6>
      </div>

      {/* Card */}
      <form className="sign-card" onSubmit={handleLogin}>

        {/* Email / Mobile */}
        <div className="form-group mb-3">
          <label className="form-label">Mobile Number / Email</label>
          <input
            type="text"
            className="form-control custom-input"
            placeholder="Enter mobile or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="form-group mb-2 position-relative">
          <label className="form-label">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control custom-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            className="password-toggle-icon"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </span>
        </div>

        {/* Forgot */}
        <div className="text-end mb-3">
          <Link to="/reset-password" className="forgot-link">
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button type="submit" className="btn-login w-100 mb-3">
          Login
        </button>

        {/* Register */}
        <div className="text-center">
          <span className="no-account-text">Don't have an account?</span>
          <Link to="/register" className="create-account-link ms-1">
            Create Account
          </Link>
        </div>

      </form>
    </div>
  )
}

export default SignIn
