import React from 'react'
import PropTypes from 'prop-types'
import '../styles/main.css'
import { Link } from 'react-router-dom'

export const EventButton = ({title}) => {
  return (
    <div className='flex justify-center pb-6'>
      <button className='text-white text-base w-full bg-[#0052F6] block px-6 py-5 rounded-xl'>
        <Link to='/eventlistings'>
        {title}
        </Link>
      </button>
    </div>
  )
}

EventButton.propTypes = {
  title: PropTypes.string
}
