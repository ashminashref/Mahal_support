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
        <video src="/Animations/loader.webm"
        className='loader' 
        autoPlay
        muted
        loop
        ></video>
    </div>
  )
}

export default Preloader