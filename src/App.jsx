import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import AcademiCalendar from './components/Calendars/AcademiCalendar'
import MyCalendar from './components/Calendars/MyCalendar'

const App = () => {
  const [selectedPage, setSelectedPage] = useState('Academi Calendar') // Manage selected page

  return (
    <div className='flex flex-col h-screen'>
      {/* Header */}
      <Header />

      {/* Sidebar and Main Content */}
      <div className='flex flex-grow mt-4'>
        <Sidebar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        {/* Main Content */}
        <div className='flex-1 p-4'>
          {selectedPage === 'Academi Calendar' && <AcademiCalendar />}
          {selectedPage === 'My Calendar' && <MyCalendar />}
        </div>
      </div>
    </div>
  )
}

export default App
