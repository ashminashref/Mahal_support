import React from 'react'
import {Link} from 'react-router-dom'
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
    <div className='mt-5 pt-5   d-flex flex-column gap-4 align-items-start p-3 sidebar'>
                <button className='side-btn d-flex align-items-center gap-2'> <SpaceDashboardIcon/>Dashboard</button>
        <button className='side-btn d-flex align-items-center gap-2'> <GroupIcon/>Users</button>
        <button className='side-btn d-flex align-items-center gap-2'><FamilyRestroomIcon/> Families </button>
        <button className='side-btn d-flex align-items-center gap-2'><CurrencyRupeeIcon/> Payments </button>
        <button className='side-btn d-flex align-items-center gap-2'><CampaignIcon/> Announcements </button>
        <button className='side-btn d-flex align-items-center gap-2'><DescriptionIcon/>Certificates </button>
        <button className='side-btn d-flex align-items-center gap-2'><NotificationsNoneIcon/>Notifications</button>
     

    </div>
  )
}

export default Offcanvas