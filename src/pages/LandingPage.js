import React from 'react'
import logo from '../assets/teeket logo2.png'
import { Link } from 'react-router-dom'
import frame from '../assets/Frame.png'
import '../styles/landingpage.css'
import Footer from '../components/Footer'
import { EventButton } from '../components/EventButton'

function LandingPage () {
  return (
    <div className='landingpage font-manrope'>
      <div className='absolute top-0 bottom-0 w-full h-full bg-gradient-to-b from-[#030A2E]'></div>
      <div className='mx-auto w-[90%] min-[548px]:w-[60%] lg:w-[30%]'>
        <div style={{textAlign: 'center',paddingTop: '4em'}}>
          <Link to='/'>
          <img src={logo} alt='logo' style={{width: '18vw', margin: '0 auto 4em auto'}} />
          </Link>
        </div>
        <main>
          <div>
            <img src={frame} alt='frame' style={{width: '100%', margin: '2em auto 2em auto'}} />
          </div>
          <p className='text-lg text-center' style={{ fontSize: '20px', margin: '2em auto 2em auto', color: 'white' }}>
            Your one stop platform to create , manage and promote your events at your convenience.
          </p>
          <EventButton title={"Create an Event"} />
          <div className='flex justify-center w-full'>
            <button className='text-black text-base w-full bg-white block px-6 py-5 rounded-xl'>
              <Link to='/eventlisting'> Discover events
              </Link>
            </button>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default LandingPage
