import React, { useState } from 'react'
import '../styles/main.css'
import teeketLogo from '../assets/teeket logo.png'
import { Link, useNavigate } from 'react-router-dom'

// interface props {
//   image: String,
// }

function Header () {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const navigate= useNavigate()

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  // alert('code')
  }

  const logout = async () => {
    await localStorage.removeItem('user')
    navigate('/login')
  }

  return (

    <div className='font-manrope flex bg-white shadow-md shadow-black/10 px-4 pt-7 pb-3 sticky top-0 bottom-0 z-50'>
      <div className='flex-1'>
        <Link to='/'>
        <img src={teeketLogo} width='180px' alt='logo' />
        </Link>
      </div>
      <div className={`text-lg text-white bg-[#001133] rounded-2xl px-6 py-4 font-bold shadow-md shadow-black/40 z-50 absolute ${hamburgerOpen ? '' : "hidden"}  right-0 mt-16 mx-4`}>
        <ul>
          <Link to='/home'>
          <li className='hover:overline'>
            Home
          </li>
          </Link>
          <Link to='/eventlistings'>
          <li className='hover:overline'>
            Event Listing
          </li>
          </Link>
          {/* <Link to='/login'> */}
          <li className='hover:overline' onClick={logout}>
            Logout
          </li>
          {/* </Link> */}
        </ul>
      </div>
      <div className='flex-none'>
        <button onClick={toggleHamburger} className='text-white text-lg bg-[#001133] rounded-2xl px-6 py-4 font-bold shadow-md shadow-black/40'>
          Menu
        </button>
      </div>
    </div>

  )
}

export default Header
