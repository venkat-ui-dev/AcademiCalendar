import React from 'react'
import eventsData from '../../Services/Json/UpcomingEvents.json'

const UpcomingEvents = () => {
  return (
    <div>
      <h4 className='text-md font-semibold mb-4'>Upcoming Events</h4>
      <ul className='space-y-4'>
        {eventsData.map((event, index) => (
          <li
            key={index}
            className='flex items-center justify-between bg-white shadow-md p-3 rounded-lg hover:bg-gray-100 cursor-pointer'
          >
            <div className='flex items-center space-x-3'>
              <img
                src={event.image}
                alt={event.title}
                className='w-12 h-12 rounded-md object-cover'
              />
              <div>
                <h5 className='text-sm font-semibold'>{event.title}</h5>
                <p className='text-xs text-gray-500'>• {event.description}</p>
              </div>
            </div>
            <div className='text-xs text-gray-500'>{event.time}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UpcomingEvents
