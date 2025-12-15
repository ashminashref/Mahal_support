import React from 'react'
// MUI
import LogoutIcon from '@mui/icons-material/Logout';
function Logoutbtn() {
  return (
    <div>
        <button className='btn' style={{fontSize:'13px'}}><LogoutIcon sx={{fontSize:'19px'}}/> Logout</button>
    </div>
  )
}

export default Logoutbtn