import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SignIn.css'
// MUI
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MosqueIcon from '@mui/icons-material/Mosque';
function SignIn() {
    const [showPassword, setPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setPassword(!showPassword)
    }
  return (
    <div className='d-flex signin-page flex-column justify-content-center bg-white  align-items-center'>
<div className="brand-logo mb-3 mt-4">
    <MosqueIcon/>
</div>
        <div className='text-center mb-4 '>
             <h5 className='welcome-text'>Welcome Back</h5>
        <h6 className='sub-text'>Sign in to you account</h6>
        </div>
       

    <form method='post' className='sign-card rounded-4 mb-4'>
        <div className="form-group">

        
        <label htmlFor="email" className='form-label'>Email Address</label>
        <input type="email" name="" className='form-control custom-input' id="email" placeholder='someone@gmail.com' />
         </div>
         <div className="form-group mb-2 position-relative">
        <label htmlFor="password" className='form-label'>Password</label>
        <input type={ showPassword? "text":"password"}
         name="password" 
         className='form-control custom-input' 
         id="password"
         placeholder='••••••••'
         />
         {/* eye icon */}
         <span
         className='password-toggle-icon'
         onClick={togglePasswordVisibility}
         >
            { showPassword?<VisibilityIcon className='mui-icon'/> : <VisibilityOffIcon className='mui-icon'/> }
         </span>
        </div>

         {/* forgot pass */}

    <div className="d-flex justify-content-lg-end mb-4">
        <p className='no-account-text'>Forgot password?        <a href="#" className='forgot-link'>Reset</a>
</p>
    </div>
<hr />
    {/* Login Button */}
    <Link to = 'home'>
    <button type='submit' className=' btn-login w-100 mb-3' >
        Login
    </button>
    </Link>

    {/* create account */}
    <div className="text-center mt-3">
        <span className='no-account-text mx-1'>Don't have an account?</span>
        <a href="#" className='create-account-link'>Create Account</a>
    </div>
    </form>
   


    </div>
  )
}

export default SignIn