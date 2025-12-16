import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// Import Components
import Navbar from './components/layouts/Navbar'
import Offcanvas from './components/layouts/Offcanvas'
import Dashboard from './components/pages/Dashboard'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      {/* THIS is the only place Navbar should be */}
      {/* It passes the toggle function down */}
      <Navbar onToggle={toggleSidebar}/>

      <div className="d-flex" style={{ minHeight: '100vh' }}>
        
        {/* Sidebar listens to the state */}
        <Offcanvas isOpen={isSidebarOpen} />

        {/* Content area */}
        <div className="flex-grow-1 p-3 mt-5 pt-4">
            <Routes>
                <Route path='/' element={<Dashboard/>} />
            </Routes>
        </div>

      </div>
    </>
  )
}

export default App