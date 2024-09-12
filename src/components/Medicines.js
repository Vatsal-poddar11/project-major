import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';

const Medicines = ({ medicines }) => {

  const userId = useSelector((state) => state.auth.userId);

  return (
    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {
        medicines.map((medicine) => {
          return <Card key={medicine.id} {...medicine} userId={userId}/>
        })
      }
    </div>
  );
}

export default Medicines;
