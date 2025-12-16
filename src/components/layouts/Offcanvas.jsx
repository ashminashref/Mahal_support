import React from 'react'
import { Link } from 'react-router-dom'
// MUI
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import GroupIcon from '@mui/icons-material/Group';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DescriptionIcon from '@mui/icons-material/Description';
import CampaignIcon from '@mui/icons-material/Campaign';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './Offcanvas.css'

function Offcanvas() {
  return (
    <div className='mt-5 pt-5 d-flex flex-column justify-content-between align-items-start p-3 sidebar'>
        
        {/* Dashboard */}
        <button className='side-btn d-flex align-items-center gap-2'> 
            <SpaceDashboardIcon/> 
            <span className="d-none d-md-block">Dashboard</span>
        </button>

        {/* Users */}
        <button className='side-btn d-flex align-items-center gap-2'> 
            <GroupIcon/> 
            <span className="d-none d-md-block">Users</span>
        </button>

        {/* Families */}
        <button className='side-btn d-flex align-items-center gap-2'>
            <FamilyRestroomIcon/> 
            <span className="d-none d-md-block">Families</span> 
        </button>

        {/* Payments */}
        <button className='side-btn d-flex align-items-center gap-2'>
            <CurrencyRupeeIcon/> 
            <span className="d-none d-md-block">Payments</span> 
        </button>

        {/* Announcements */}
        <button className='side-btn d-flex align-items-center gap-2'>
            <CampaignIcon/> 
            <span className="d-none d-md-block">Announcements</span> 
        </button>

        {/* Certificates */}
        <button className='side-btn d-flex align-items-center gap-2'>
            <DescriptionIcon/>
            <span className="d-none d-md-block">Certificates</span> 
        </button>

        {/* Notifications */}
        <button className='side-btn d-flex align-items-center gap-2'>
            <NotificationsNoneIcon/>
            <span className="d-none d-md-block">Notifications</span>
        </button>

    </div>
  )
}

export default Offcanvas