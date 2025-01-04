import React, { useState } from 'react'
import {
  HomeIcon,
  AcademicCapIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline'

const SideBarNavigation = ({ selectedPage, setSelectedPage }) => {
  const [isAcademiOpen, setIsAcademiOpen] = useState(true)

  const toggleAcademi = () => setIsAcademiOpen(!isAcademiOpen)

  return (
    <div className='mb-6'>
      <ul className='space-y-4'>
        {/* Home */}
        <li
          className={`flex items-center space-x-2 text-gray-700 hover:text-blue-500 cursor-pointer ${
            selectedPage === 'Home' ? 'text-blue-500 font-semibold' : ''
          }`}
          onClick={() => setSelectedPage('Home')}
        >
          <HomeIcon className='w-5 h-5' />
          <span>Home</span>
        </li>

        {/* Academi Menu */}
        <li>
          <div
            className='flex items-center justify-between text-gray-700 hover:text-blue-500 cursor-pointer'
            onClick={toggleAcademi}
          >
            <div className='flex items-center space-x-2'>
              <AcademicCapIcon className='w-5 h-5' />
              <span>Academi</span>
            </div>
            {isAcademiOpen ? (
              <ChevronUpIcon className='w-4 h-4 text-gray-500' />
            ) : (
              <ChevronDownIcon className='w-4 h-4 text-gray-500' />
            )}
          </div>
          {isAcademiOpen && (
            <ul className='ml-6 mt-2 space-y-2 text-gray-600'>
              <li
                className={`flex items-center space-x-2 pl-4 border-l-2 ${
                  selectedPage === 'Academi Calendar'
                    ? 'bg-blue-100 text-blue-500 font-semibold rounded-md'
                    : 'hover:text-blue-500 cursor-pointer'
                }`}
                onClick={() => setSelectedPage('Academi Calendar')}
              >
                <span>Academi Calendar</span>
              </li>
              <li
                className={`flex items-center space-x-2 pl-4 border-l-2 ${
                  selectedPage === 'My Calendar'
                    ? 'bg-blue-100 text-blue-500 font-semibold rounded-md'
                    : 'hover:text-blue-500 cursor-pointer'
                }`}
                onClick={() => setSelectedPage('My Calendar')}
              >
                <span>My Calendar</span>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  )
}

export default SideBarNavigation
