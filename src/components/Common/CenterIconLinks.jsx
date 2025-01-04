import React from 'react'
import {
  HomeIcon,
  StarIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline'

const CenterIconLinks = () => (
  <div className='flex space-x-6 text-gray-600 mt-2 sm:mt-0'>
    <HomeIcon className='w-6 h-6 hover:text-blue-500 cursor-pointer' />
    <StarIcon className='w-6 h-6 text-blue-500 border-b-2 border-blue-500 cursor-pointer' />
    <CalendarDaysIcon className='w-6 h-6 hover:text-blue-500 cursor-pointer' />
  </div>
)

export default CenterIconLinks
