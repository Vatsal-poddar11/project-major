import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className='flex justify-center my-6'>
      <div className='relative w-full max-w-md'>
        <input
          type="text"
          placeholder="Search for medicines or category..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 border border-gray-300 p-3 rounded-lg shadow-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl' />
      </div>
    </div>
  );
};

export default SearchBar;
