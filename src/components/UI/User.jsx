import React, { useState } from 'react';
import './User.css';

// MUI Components
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';

function User() {
  // 1. State to track which element the menu is attached to
  const [anchorEl, setAnchorEl] = useState(null);
  
  // 2. Boolean to check if the menu is currently open
  const open = Boolean(anchorEl);

  // 3. Open Handler: Sets the clicked button as the "anchor"
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // 4. Close Handler: Resets the anchor to null (hides menu)
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* 5. The Trigger Button */}
      {/* Added onClick={handleClick} and aria attributes for accessibility */}
      <button 
        className='btn d-flex gap-2 align-items-center justify-content-center'
        onClick={handleClick}
        aria-controls={open ? 'user-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <div className="name_wrapper d-flex align-items-center justify-content-center rounded-circle">
          {/* Removed unnecessary Stack wrapper */}
          <Avatar sx={{ bgcolor: deepOrange[500], width: 32, height: 32, fontSize: 16 }}>N</Avatar>
        </div>
        
        <div className="user_name_sec text-start d-none d-md-block">
          <p className='user-name m-0'>Hanna Fathima</p>
          <p className='designation m-0'>Admin</p>
        </div>
        
        <div className="btn-icon">
          <ArrowDropDownIcon />
        </div>
      </button>

      {/* 6. The Dropdown Menu */}
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose} // Closes menu when any item is clicked
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5, // Margin top to separate it from button
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default User;