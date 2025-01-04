import React from 'react'
import logo from '../../assets/logo.png'

const LogoSection = () => (
  <div className={`flex items-center`}>
    <img
      src={logo}
      alt='Logo'
      className='w-10 h-10 object-contain hidden sm:block'
    />
  </div>
)

export default LogoSection
