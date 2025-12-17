import React from 'react'
// lucid-icons
import { House } from 'lucide-react';
import { CreditCard } from 'lucide-react'
import { Users } from 'lucide-react'
import { Newspaper } from 'lucide-react'
import { Bell } from 'lucide-react'
import { User } from 'lucide-react'
import { NavLink } from 'react-router-dom';
// MUI
import MosqueIcon from '@mui/icons-material/Mosque';


const navItems = [
    { name: 'Home', icon: <House size={20}/>, path: '/home'},
    { name: 'Payments', icon: <CreditCard size={20}/>, path: '/Payments'},
    { name: 'Family', icon: <Users  size={20}/>, path: '/family'},
    { name: 'Notifications', icon: <Bell size={20}/>, path: '/notifications'},
    { name: 'Certificates', icon: <Newspaper size={20}/>, path: '/certificates'},
    { name: 'Profile', icon: <User size={20}/>, path: '/profile'},

]
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-header">
            <div className="logo-section d-flex align-items-center gap-2">
                <div className='bg-success p-2 rounded-3'>
<MosqueIcon className='text-white' sx={{fontSize:'20px'}}/>
                </div>
            <h3 className='m-0 p-0'>Mahal</h3>

            </div>
        </div>

        <div className="nav-list">
            {navItems.map((item) => (
                <NavLink
                to={item.path}
                key={item.name}
                className={ ({ isActive }) => isActive ? "nav-item active": "nav-item" }
                >
                    {item.icon}
                    <span className='nav-label'>{item.name}</span>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default Sidebar