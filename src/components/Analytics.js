import React from 'react'
import PropTypes from 'prop-types'
import '../styles/main.css'

export const Analytics = ({name, label, image, writeup}) => {
  return (
    <>
        <div className='flex'>
            <p className='flex-none text-[#2068F7] opacity-50'>{label}</p>
            <p className='flex-1 ml-2 mr-2 text-[#2068F7] font-semibold uppercase'>{name}</p>
        </div>
            <p className='font-light pt-3 pb-8'>{writeup}</p>
            <img src={image} alt='analyticsImage' />
            <div className='border w-full mt-6 mb-6'></div>
    </>
  )
}

Analytics.propTypes = {
  name: PropTypes.string,
  label: PropTypes.number,
  image: PropTypes.string,
  writeup: PropTypes.string
}
