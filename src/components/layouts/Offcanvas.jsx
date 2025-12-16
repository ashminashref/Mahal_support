import React from 'react'
// import {Link} from 'react-router-dom'
// MUI
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import GroupIcon from '@mui/icons-material/Group';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DescriptionIcon from '@mui/icons-material/Description';
import CampaignIcon from '@mui/icons-material/Campaign';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './Offcanvas.css'
function Offcanvas({isOpen }) {
  return (
<div className={` d-flex flex-column justify-content-between align-items-start p-3 sidebar ${isOpen ? 'show' : ''}`}>
    <button className='side-btn d-flex align-items-center gap-2'> <SpaceDashboardIcon className='my_custom_icon'/>Dashboard</button>
        <button className='side-btn d-flex align-items-center gap-2'> <GroupIcon className='my_custom_icon'/>Users</button>
        <button className='side-btn d-flex align-items-center gap-2'><FamilyRestroomIcon className='my_custom_icon'/> Families </button>
        <button className='side-btn d-flex align-items-center gap-2'><CurrencyRupeeIcon className='my_custom_icon'/> Payments </button>
        <button className='side-btn d-flex align-items-center gap-2'><CampaignIcon className='my_custom_icon'/> Announcements </button>
        <button className='side-btn d-flex align-items-center gap-2'><DescriptionIcon className='my_custom_icon'/>Certificates </button>
        <button className='side-btn d-flex align-items-center gap-2'><NotificationsNoneIcon className='my_custom_icon'/>Notifications</button>
     

    </div>
  )
}

export default Offcanvas