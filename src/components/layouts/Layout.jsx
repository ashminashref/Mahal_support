// Layout.js
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; // Renders the current page content
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Navbar from './Navbar'; // Your Navbar component
import Offcanvas from './Offcanvas'; // Your Sidebar component

const drawerWidth = 240;

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      
      {/* 1. Mobile Drawer (Temporary) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' }, // Show only on small screens
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {/* Pass the toggle function to close drawer when link is clicked */}
        <Offcanvas handleDrawerToggle={handleDrawerToggle} />
      </Drawer>

      {/* 2. Desktop Drawer (Permanent) */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' }, // Show only on medium+ screens
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {/* No toggle function needed here (it stays open) */}
        <Offcanvas /> 
      </Drawer>

      {/* 3. Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, p: 0, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
        
        {/* Pass toggle to Navbar so Hamburger works */}
        <Navbar handleDrawerToggle={handleDrawerToggle} />
        
        <div className="p-3">
            {/* The <Outlet> is where Dashboard, Users, etc. will appear */}
            <Outlet /> 
        </div>

      </Box>
    </Box>
  );
}

export default Layout;