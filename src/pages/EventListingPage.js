import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Search from '../components/Search'

function EventListingPage () {
  return (
    <div className='font-monrope'>
      <Header/>
      <div className='mx-auto w-[100%] min-[548px]:w-[60%] lg:w-[30%] border'>
        <p className='font-light text-2xl mt-16 mb-4 pl-4'>
          Discover events near you
        </p>
        <div>
          <Search/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default EventListingPage
