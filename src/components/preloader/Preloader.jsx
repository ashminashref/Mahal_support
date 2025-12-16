import React from 'react'
import './Preloader.css'
function Preloader() {
  return (
    <div className='preloader-container'>
        <div className="spinner"></div>
        <p>Loading...</p>
    </div>
  )
}

export default Preloader