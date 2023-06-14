import React from 'react'
import PropTypes from 'prop-types'
import '../styles/main.css'

export const Button = ({title}) => {
  return (
    <div className='flex justify-center pb-6'>
      <button className='text-white text-base bg-[#0052F6] block w-full px-6 py-5 rounded-xl'>
        {title}
      </button>
    </div>
  )
}

Button.propTypes = {
  title: PropTypes.string
}
