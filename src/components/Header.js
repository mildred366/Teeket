import React from 'react'
import '../styles/main.css'
import teeketLogo from '../assets/teeket logo.png'
import { Link } from 'react-router-dom';

// interface props {
//   image: String,
// }

function Header () {
  

  return (
    <>
    <div className='font-manrope flex bg-red shadow-md shadow-black/10 px-4 pt-7 pb-3 sticky top-0'>
      <div className='flex-1'>
        <Link to="/">
          <img src={teeketLogo } width="180px" alt="logo" />
        </Link>
      
      </div>
      <div className='flex-none'>
      <button className="text-white bg-[#001133] rounded-2xl px-6 py-4 font-bold shadow-md shadow-black/40">Menu</button>
      </div>
    </div>
    </>
  )
}

export default Header;
