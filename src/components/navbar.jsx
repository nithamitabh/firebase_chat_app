import React from 'react'
import Profile from '../img/profile.jpg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Pyaari Baate</span>
      <div className="user">
        <img src= {Profile} alt="" />
        <span>Amitabh</span>
        <button>logout</button>


      </div>
    </div>
  )
}

export default Navbar
