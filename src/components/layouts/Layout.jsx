import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Navbar from '../components/Navbar'; // Import your updated Navbar

// The width of the fixed sidebar
const drawerWidth = 240;

function Layout(props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // This function is passed to the Navbar to open the menu
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // The content of your sidebar (Put your list of links here)
  const drawerContent = (
    <div style={{ padding: '20px' }}>
      <h3>Sidebar Menu</h3>
      <ul>
        <li>Dashboard</li>
        <li>Members</li>
        <li>Settings</li>
      </ul>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      
      {/* 1. Mobile Drawer (Temporary / Offcanvas) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // Better open performance on mobile
        sx={{
          display: { xs: 'block', md: 'none' }, // Only show on small screens
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* 2. Desktop Drawer (Permanent / Fixed) */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' }, // Only show on medium+ screens
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawerContent}
      </Drawer>

      {/* 3. Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, p: 0, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
        
        {/* Pass the toggle function to Navbar */}
        <Navbar handleDrawerToggle={handleDrawerToggle} />
        
        {/* This is where your page content (Dashboard, etc.) goes */}
        <div className="p-3">
            {props.children} 
        </div>

      </Box>
    </Box>
  );
}

export default Layout;