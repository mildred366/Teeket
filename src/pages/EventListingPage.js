import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import search from '../assets/Elipse.png'
import music from '../assets/musicnote.png'
import list from '../assets/SlidersHorizontal.png'

import { eventArray } from '../Data'
import { useState } from 'react'
import { remainEvents } from '../Data'

function EventListingPage () {

  // Button functionality
  // eslint-disable-next-line no-unused-vars
  const [displayedObjects, setDisplayedObjects] = useState([])
  const [showHiddenObjects, setShowHiddenObjects] = useState(false)
  const handleButtonClick = () => {
    setShowHiddenObjects(true)
    setDisplayedObjects(remainEvents)
  }

  const [searchQuery, setSearchQuery] = useState('')
  const [newSearch, setSearchResults] = useState(eventArray)

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase()
    setSearchQuery(query)

    const filteredResults = eventArray.filter((object) => object.title.toLowerCase().includes(query)
    )
    setSearchResults(filteredResults)
  }

  return (
    <div className='font-manrope'>
      <Header/>
      <div className='mx-auto w-[100%] min-[548px]:w-[60%] lg:w-[100%]'>
        <p className='font-light text-xl mt-16 mb-4 pl-6 tracking-wide lg:text-4xl'>
          Discover events near you
        </p>
        <div className='flex mb-6'>
          <div className='flex text-[#101010] text-base bg-[#EDEDED] p-3 rounded-xl ml-4 mr-6 flex-1 lg:p-5'>
            <img
              src={search}
              width='30px'
              height='30px'
              alt='iconSearch'
              className='flex-none' />
            <input
              className='ml-2 bg-[#EDEDED] focus:outline-none focus:border-sky-500 placeholder:text-lg placeholder:text-[#101010] opacity-30 lg:placeholder:text-2xl'
              type='text'
              value={searchQuery}
              onChange={handleSearch}
              placeholder='Search all events' />
          </div>
          <div className='flex-none mx-4'>
            <button className='text-white bg-[#001133] rounded-xl p-3 lg:p-5 font-bold shadow-md shadow-black/40'>
              <img
                src={list}
                width='30px'
                height='30px'
                alt='iconList' />
            </button>
          </div>
        </div>
        <div className='m-4 mb-6 lg:mt-10'>
          <div className='flex'>
            <div className='flex-1 bg-[#FBBF0A] rounded-xl pl-4 py-4 mr-4'>
              <img
                src={music}
                width='30px'
                height='30px'
                alt='iconMusic'
                className='ml-1' />
              <p className='text-xl mt-2 font-light lg:text-2xl'>
                Music
              </p>
            </div>
            <div className='flex-1 bg-[#EEEEEE] rounded-xl pl-4 py-4 ml-4'>
              <img
                src={music}
                width='30px'
                height='30px'
                alt='iconMusic'
                className='ml-1' />
              <p className='text-xl mt-2 font-light lg:text-2xl'>
                Tech
              </p>
            </div>
          </div>
          <div className='flex mt-6'>
            <div className='flex-1 bg-[#B0E298] rounded-xl pl-4 py-4 mr-4'>
              <img
                src={music}
                width='30px'
                height='30px'
                alt='iconMusic'
                className='ml-1' />
              <p className='text-xl mt-2 font-light font-monrope lg:text-2xl'>
                Arts & culture
              </p>
            </div>
            <div className='flex-1 bg-[#FFC971] rounded-xl pl-4 py-4 ml-4'>
              <img
                src={music}
                width='30px'
                height='30px'
                alt='iconMusic'
                className='ml-1' />
              <p className='text-xl mt-2 font-light lg:text-2xl'>
                Business
              </p>
            </div>
          </div>
        </div>
        <h2 className='text-2xl font-medium mx-4 mt-16 mb-10 tracking-widest lg:text-4xl'>Upcoming Events</h2>
        {newSearch.map(function (item) {
           return (
             <div className='m-4 lg:m-10 center h-auto flex border-2 border-[#4d4d4d10] shadow-sm p-4 lg:p-6 rounded-xl overflow-hidden' key={item.id}>
               <div className='w-[45%] lg:w-[100%] lg:p-6'>
                 <div className='flex mr-2 mt-2 mb-2 lg:mb-6'>
                   <span className='text-[#989898] text-center lg:text-xl'>{item.date}</span>
                   <span className='text-[#FF0303] bg-[#ff09092e] w-16 lg:w-28 text-md font-semibold text-center rounded-md ml-4 lg:ml-6 lg:text-xl'>{item.price}</span>
                 </div>
                 <h3 className='lg:mb-6 text-md font-semibold lg:text-3xl'>{item.title}</h3>
                 <div className='flex lg:w-[30%]'>
                   <img src={item.icon} alt='iconimage' className='w-[20%] mt-1 lg:w-[30%]' />
                   <p className='lg:text-lg  ml-2 text-center mt-2 lg:mt-6 lg:ml-4'>
                     {item.name}
                   </p>
                 </div>
                 <div className='flex lg:w-[30%]'>
                   <img src={item.mapline} alt='mapline' className='w-[20%] mt-4 lg:mt-10 lg:w-[30%]' />
                   <span className='lg:text-lg ml-2 text-center mt-4 lg:mt-14 lg:ml-4'>{item.location}</span>
                 </div>
               </div>
               <div className='w-[55%] pl-6'>
                 <img src={item.image} alt='creatorimage' />
               </div>
             </div>
           )
         })}
        <div className='flex justify-center w-full'>
          <button type='button' onClick={handleButtonClick} className='text-black text-base w-full bg-[#E1E4EB] block px-6 py-5 rounded-xl mx-4 my-6 lg:text-2xl lg:mx-10'>
            Discover more
          </button>
        </div>
        {showHiddenObjects
           ? remainEvents.map((item) => (
             <div>
               <h2 className='text-2xl font-medium mx-4 mt-16 mb-10 tracking-widest lg:text-4xl'>{item.heading}</h2>
               <div className='m-4 lg:m-10 center h-auto flex border-2 border-[#4d4d4d10] shadow-sm p-4 lg:p-6 rounded-xl overflow-hidden' key={item.id}>
                 <div className='w-[45%] lg:w-[100%] lg:p-6'>
                   <div className='flex mr-2 mt-2 mb-2 lg:mb-6'>
                     <span className='text-[#989898] text-center lg:text-xl'>{item.date}</span>
                     <span className='text-[#FF0303] bg-[#ff09092e] w-16 lg:w-28 text-md font-semibold text-center rounded-md ml-4 lg:ml-6 lg:text-xl'>{item.price}</span>
                   </div>
                   <h3 className='lg:mb-4 text-md font-semibold lg:text-3xl'>{item.title}</h3>
                   <div className='flex lg:w-[30%]'>
                     <img src={item.icon} alt='iconimage' className='w-[20%] mt-4 lg:mt-10 lg:w-[30%]' />
                     <p className='lg:text-lg ml-2 text-center mt-4 lg:mt-14 lg:ml-4'>
                       {item.name}
                     </p>
                   </div>
                   <div className='flex lg:w-[30%]'>
                     <img src={item.mapline} alt='mapline' className='w-[20%] mt-4 lg:mt-10 lg:w-[30%]' />
                     <span className='lg:text-lg ml-2 text-center mt-4 lg:mt-14 lg:ml-4'>{item.location}</span>
                   </div>
                 </div>
                 <div className='w-[55%] pl-6'>
                   <img src={item.image} alt='creatorimage' />
                 </div>
               </div>
             </div>
           ))
           : null}
      </div>
      <Footer/>
    </div>
  )
}

export default EventListingPage
