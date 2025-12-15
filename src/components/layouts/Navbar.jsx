import React from 'react'
import './Navbar.css'
// MUI
import MosqueIcon from '@mui/icons-material/Mosque';
import NotificationBadge from '../UI/NotificationBadge';
import User from '../UI/User';
import Logoutbtn from '../UI/Logoutbtn';
function Navbar() {
  return (
    <div className='p-2 d-flex align-items-center justify-content-between'>
      <div className="toggle lg-d-none"></div>

      <div className="logo-section d-flex gap-2 align-items-center">
        <div className="logo rounded-3">
          <MosqueIcon/>
        </div>
        <div className="logo_name ">
          <h6 className='m-0 p-0 logo-name'>Thalayad Mahal</h6>
          <p className='m-0 logo-p'>Community support</p>
        </div>
      </div>

      <div className="user_section d-flex align-items-center gap-4">
        <div className="icon">
          <NotificationBadge/>
        </div>
        <div className="profile">
          <User/>
        </div>
       <div className="logout d-none d-md-block">
    <Logoutbtn/>
</div>
      </div>
    </div>
  )
}

export default Navbar