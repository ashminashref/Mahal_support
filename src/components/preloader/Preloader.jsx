import React from 'react'
import './Preloader.css'
import MosqueIcon from '@mui/icons-material/Mosque';

function Preloader() {
  return (
    <div className='preloader-container'>
<div className="brand-logo mb-3 mt-4">
    <MosqueIcon/>
</div>
        <h3 className='fw-semibold m-0 p-0'>Thalayad Mahal</h3>
        <div className="preloader">
      <span className="dot d1"></span>
      <span className="dot d2"></span>
      <span className="dot d3"></span>
    </div>
    </div>
  )
}

export default Preloader