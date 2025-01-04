import React, { useState } from 'react'
import SideBarNavigation from '../Common/SideBarNavigation'
import MySchedule from '../MySchedule/MySchedule'
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Sidebar = ({ selectedPage, setSelectedPage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className='relative'>
      {/* Mobile Toggle Button */}
      <div className='sm:hidden fixed top-2 left-2 z-50'>
        <button
          className='p-2 text-gray-700 bg-gray-100 rounded-md shadow-md'
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <XMarkIcon className='w-6 h-6 text-gray-700' />
          ) : (
            <Bars3Icon className='w-6 h-6 text-gray-700' />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed sm:relative top-0 left-0 h-full bg-gray-50 p-4 border-r border-gray-200 z-40 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 transition-transform duration-300 ease-in-out w-64`}
      >
        <div className='sm:mt-0 mt-16'>
          <SideBarNavigation
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
        <MySchedule />
        <UpcomingEvents />
      </div>
    </div>
  )
}

export default Sidebar
