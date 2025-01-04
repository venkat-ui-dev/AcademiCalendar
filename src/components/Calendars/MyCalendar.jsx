import React, { useState, useEffect } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import enUS from 'date-fns/locale/en-US'
import myEvents from '../../Services/Json/MyEvents.json'

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

const MyCalendar = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const colors = ['#FFEBEE', '#FFF3E0', '#E3F2FD', '#E8F5E9', '#F3E5F5']

    const parsedEvents = myEvents.map((event, index) => ({
      ...event,
      start: new Date(event.start), // Parse the start time
      end: new Date(event.end), // Parse the end time
      color: colors[index % colors.length] // Assign soft colors cyclically
    }))

    setEvents(parsedEvents)
  }, [])

  return (
    <div className='h-screen p-4'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: '100%', width: '100%' }}
        eventPropGetter={event => ({
          style: {
            backgroundColor: event.color,
            color: '#000',
            borderRadius: '5px',
            padding: '5px',
            border: '1px solid #ddd'
          }
        })}
        components={{
          event: ({ event }) => (
            <div>
              <strong>{event.title}</strong>
              <p className='text-xs capitalize'>{event.status}</p>
            </div>
          )
        }}
      />
    </div>
  )
}

export default MyCalendar
