import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='app-container'>
        <Sidebar/>

        {/* main content area */}
        <main className='main-content'>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout