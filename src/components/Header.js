import React from 'react'
import '../styles/main.css'
import teeketLogo from '../assets/teeket logo.png'
import { Link } from 'react-router-dom'

// interface props {
//   image: String,
// }

function Header () {
  return (

    <div className='font-manrope flex bg-white shadow-md shadow-black/10 px-4 pt-7 pb-3 sticky top-0 bottom-0 z-3000'>
      <div className='flex-1'>
        <Link to='/LandingPage'>
        <img src={teeketLogo} width='180px' alt='logo' />
        </Link>
      </div>
      <div className='flex-none'>
        <button className='text-white bg-[#001133] rounded-2xl px-6 py-4 font-bold shadow-md shadow-black/40'>
          Menu
        </button>
      </div>
    </div>

  )
}

export default Header
