import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { EventButton } from '../components/EventButton'
import user from '../assets/userpictures.png'
import analytics1 from '../assets/analytics1.png'
import analytics2 from '../assets/analytics2.png'
import analytics3 from '../assets/analytics3.png'
import { Analytics } from '../components/Analytics'
import phone from '../assets/phone.png'
import chat from '../assets/chat.png'
import arrows from '../assets/arrows.png'
import '../styles/homepage.css'

function Home () {
  return (
    <div classHome='font-manrope'>
      <Header />
      <div className='mx-auto w-[100%] min-[548px]:w-[60%] lg:w-[30%] -z-3000'>
        <div className='homepage p-6 pb-14 rounded-b-3xl'>
          <h2 className='text-white font-normal text-4xl mt-20 mb-4'>Struggling to sell ticket?</h2>
          <p className='text-white font-light mb-4'>
            Create events and sell tickets in minutes - at no cost - with the only event platform you need
          </p>
          <EventButton to='eventlistings' title={"Create an Event"} />
        </div>
        <div>
          <h2 className='text-center font-semibold text-2xl mt-14 mb-4'>Empowering event creators everywhere</h2>
          <p className='font-medium mb-4 text-center'>
            More than 1 million people across 5 continents choose Teeket
          </p>
        </div>
        <div className='w-full pb-6'>
          <img src={user} alt='userpictures' />
        </div>
        <div className='bg-gradient-to-b from-[#d0dbf1] opacity-100 p-4 mt-8 font-manrope rounded-t-3xl'>
          <p className='text-[#0052F6] font-extrabold text-lg mb-6'>
            Teeket Features
          </p>
          <Analytics
            label={'01'}
            name={"Analytics and feedback"}
            writeup={"Create events and sell tickets with our seamless and secure checkout feature for attendees in your event."}
            image={analytics1} />
          <Analytics
            label={'02'}
            name={"Analytics and feedback"}
            writeup={"Use real-time analytics and reports to learn more about your buyers and what your attendees are saying about your event."}
            image={analytics2} />
          <Analytics
            label={'03'}
            name={"Marketing and promotion"}
            writeup={"Boost event visibility and ticket sales when you market and promote your event with our tools and partners"}
            image={analytics3} />
        </div>
        <div className='bg-gradient-to-b from-white to-[#FAFAFA]'>
          <p className='text-center font-semibold text-lg mb-4'>
            Do more with the Teeket app
          </p>
          <p className='text-center font-light mb-4 px-10'>
            Organize events like a Pro with our easy to use <span className='text-[#0354F5]'>Teeket app</span> featuring tools like check in, curated guestlists, marketing
            tools and much more
          </p>
          <div className='w-full pb-6'>
            <img src={phone} alt='teeketphone' />
          </div>
          <p className='text-[#2068F7] font-semibold text-center'>
            That's not all!
          </p>
          <p className='text-center font-light mb-4 px-10'>
            Get 30 days free access to promotion by our partners to attract more attendees and boost ticket sales for your events.
          </p>
          <div className='border w-full mt-6 mb-6'></div>
          <p className='font-semibold text-2xl mb-4 px-2'>
            Don’t take our word for it
          </p>
          <div className='w-full pb-6 pl-4'>
            <img src={chat} alt='chatbox' />
          </div>
          <div className='pb-6 w-[30%] mx-32'>
            <img src={arrows} alt='scroll' />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
