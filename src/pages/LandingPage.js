import React from 'react'
import logo from '../assets/teeket logo2.png'
import { Link, useNavigate } from 'react-router-dom'
import frame from '../assets/Frame.png'
import '../styles/landingpage.css'
import Footer from '../components/Footer'
import { EventButton } from '../components/EventButton'

function LandingPage () {
  const navigate = useNavigate(); 
  const createEvent = async () => {
    let isUserLoggedIn = await localStorage.getItem('user')
   if (isUserLoggedIn) {
    return navigate('/home')
   } 
   navigate('/login', {state: 'createEvent'})

  }

  const discoverEvent = async () => {
    let isUserLoggedIn = await localStorage.getItem('user')
    if (isUserLoggedIn) {
      return navigate('/eventlistings')
    } 
    navigate('/login', {state: 'discoverEvent'})
  }
  return (
    <div className='landingpage font-manrope bg-[#030A2E]'>
      <div className='mx-auto w-[90%] min-[548px]:w-[60%] lg:w-[30%]'>
        <div style={{textAlign: 'center', paddingTop: '8em'}}>
          <Link to='/'>
          <img src={logo} alt='logo' style={{width: '40%', margin: '0 auto 4em auto'}} />
          </Link>
        </div>
        <main>
          <div>
            <img src={frame} alt='frame' style={{width: '100%', margin: '2em auto 2em auto'}} />
          </div>
          <p className='text-lg text-center' style={{ fontSize: '20px', margin: '2em auto 2em auto', color: 'white' }}>
            Your one stop platform to create , manage and promote your events at your convenience.
          </p>
          <EventButton to='login' title={"Create an Event"} onClick={createEvent} />
          <div className='flex justify-center w-full'>
              <button onClick={discoverEvent} className='text-black text-base w-full bg-white block px-6 py-5 rounded-xl'>
               Discover events
            </button>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default LandingPage
