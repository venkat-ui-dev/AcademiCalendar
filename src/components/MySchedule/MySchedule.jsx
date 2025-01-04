import React from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'
import eventsData from '../../Services/Json/MyEvents.json'

const MySchedule = () => {
  // Generate unique colors for each event
  const generateUniqueColor = index => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF']
    return colors[index % colors.length]
  }

  return (
    <div className='mb-6'>
      <h4 className='text-md font-semibold mb-4'>My Schedule</h4>
      <ul className='space-y-3'>
        {eventsData.map((event, index) => (
          <li key={index} className='flex items-center space-x-2'>
            <span
              className='w-5 h-5 flex items-center justify-center rounded-md'
              style={{
                backgroundColor: generateUniqueColor(index) || '#6c757d'
              }}
            >
              <CheckIcon className='w-4 h-4 text-white' />
            </span>
            {/* Event Title */}
            <span className='text-gray-700'>{event.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MySchedule
