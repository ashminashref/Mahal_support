import React from 'react'
import './User.css'
// MUI
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function User() {
  return (
    <div>
        <button className='btn d-flex gap-3 align-items-center justify-content-center'>
            <div className="name_wrapper p-2 d-flex align-items-center justify-content-center rounded-circle">
                <p className='m-0' style={{fontSize:'15px'}}>aa</p>
            </div>
            <div className="user_name_sec text-start">
                <p>Hanna Fathima</p>
                <p>Admin</p>
            </div>
            <div className="btn-icon">
                <ArrowDropDownIcon/>
            </div>
        </button>
    </div>
  )
}

export default User