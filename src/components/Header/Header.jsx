import React from 'react'
import LogoSection from '../Common/LogoSection'
import SearchBar from '../Common/SearchBar'
import CenterIconLinks from '../Common/CenterIconLinks'
import UserProfile from '../Common/UserProfile'

const Header = () => {
  return (
    <div className='sticky top-0 z-50 flex flex-wrap justify-between items-center bg-white shadow-md px-4 py-2'>
      <div className='flex items-center space-x-4'>
        <LogoSection />
        <SearchBar />
      </div>
      <CenterIconLinks />
      <UserProfile />
    </div>
  )
}

export default Header
