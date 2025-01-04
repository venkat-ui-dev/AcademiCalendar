import React, { useState, useEffect, useRef } from 'react'
import {
  ChevronDownIcon,
  ChevronUpIcon,
  BellIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline'
import profile from '../../assets/profile.png'

const UserProfile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='flex items-center space-x-2 cursor-pointer relative'>
      <div className='relative'>
        <ClipboardDocumentListIcon className='w-6 h-6 text-gray-600 cursor-pointer' />
        <span className='absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center'>
          3
        </span>
      </div>
      <div className='relative'>
        <BellIcon className='w-6 h-6 text-gray-600 cursor-pointer' />
        <span className='absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center'>
          5
        </span>
      </div>
      <div onClick={toggleDropdown} className='flex items-center space-x-2'>
        <img src={profile} alt='User' className='w-10 h-10 rounded-full' />
        <span className='hidden sm:inline'>Jacob Botssh</span>
        {isDropdownOpen ? (
          <ChevronUpIcon className='w-5 h-5 text-gray-600' />
        ) : (
          <ChevronDownIcon className='w-5 h-5 text-gray-600' />
        )}
      </div>
      {isDropdownOpen && (
        <div
          className='absolute right-0 top-12 bg-white shadow-lg rounded-md w-40 z-50'
          ref={dropdownRef}
        >
          <ul className='text-gray-700'>
            <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
              Profile
            </li>
            <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
              Settings
            </li>
            <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500'>
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default UserProfile
