import React from 'react'
import PropTypes from 'prop-types'
import '../styles/main.css'

export const EventButton = ({title, to, onClick}) => {
  return (
    <div className='flex justify-center pb-6'>
      <button onClick={onClick} className='text-white text-base w-full bg-[#0052F6] block px-6 py-5 rounded-xl'>
        {title}
      </button>
    </div>
  )
}

EventButton.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string
}
