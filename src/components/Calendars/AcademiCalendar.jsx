import React, { useState, useEffect } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import enUS from 'date-fns/locale/en-US'
import eventsData from '../../Services/Json/UpcomingEvents.json'

const locales = {
  'en-US': enUS
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const AcademiCalendar = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const parsedEvents = eventsData.map((event, index) => ({
      title: event.title,
      start: new Date(2025, 0, 4, 10 + index * 2, 0),
      end: new Date(2025, 0, 4, 10 + index * 2 + 1, 0),
      description: event.description,
      image: event.image
    }))
    setEvents(parsedEvents)
  }, [])

  return (
    <>
      <div className='ml-5'>
        <h3 className='text-md font-semibold mb-4'>Academi Calendar</h3>
      </div>
      <div className='flex h-screen'>
        {/* Calendar */}
        <div className='flex-1 p-4'>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor='start'
            endAccessor='end'
            style={{ height: '100%', width: '100%' }}
            eventPropGetter={() => ({
              style: { backgroundColor: '#f0f8ff', color: '#000' }
            })}
            components={{
              event: ({ event }) => (
                <div className='flex items-center space-x-2'>
                  <img
                    src={event.image}
                    alt={event.title}
                    className='w-6 h-6 rounded-full'
                  />
                  <span>{event.title}</span>
                </div>
              )
            }}
          />
        </div>
      </div>
    </>
  )
}

export default AcademiCalendar
