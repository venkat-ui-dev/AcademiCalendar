import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchBar = () => (
  <div className='relative hidden sm:block'>
    <input
      type='text'
      placeholder='Search...'
      className='pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400'
    />
    <MagnifyingGlassIcon className='w-5 h-5 absolute left-3 top-2 text-gray-500' />
  </div>
)

export default SearchBar
