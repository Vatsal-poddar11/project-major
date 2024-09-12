import React, { useState } from 'react';
import data from '../utils/medicinelist';
import Medicines from '../components/Medicines';
import SearchBar from '../components/SearchBar';
import toast from 'react-hot-toast';

const Catalog = () => {
  const [query, setQuery] = useState('');

  // Filter the medicines based on user search
  const filteredMedicines = data.filter((medicine) =>
    medicine.name.toLowerCase().includes(query.toLowerCase()) || 
    medicine.info.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='container mx-auto p-6'>
      <SearchBar query={query} setQuery={setQuery} />

      {/* Check if there are no matching results */}
      {filteredMedicines.length > 0 ? (
        <Medicines medicines={filteredMedicines} />
      ) : (
        <div className='text-center'>
          <p className='text-2xl mt-20 font-semibold mb-4'>Sorry, the medicine is unavailable right now.</p>
          <button
            className="px-5 py-2 bg-[#fbb92cc7] text-richblack-600 text-md font-medium rounded-full shadow-lg hover:bg-[#ddaa3c] transition duration-300"
            onClick={() => toast.success('Request Submitted!')} 
          >
            Request Product
          </button>
        </div>
      )}
    </div>
  );
}

export default Catalog;

