import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'; 

const DoctorCard = ({ id, name, info, image, specialization }) => {
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : `${info.substring(0, 50)}...`;
  const navigate = useNavigate();

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  const proceedHandler = () => {
    toast.success('Further process will be notified accordingly on your email!', {
      duration: 4000, 
    });
    
    navigate(`/upload-prescription`);
  };

  return (
    <div className="bg-[#2b2d42] text-[#ffffff] p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
      <div className="rounded-lg overflow-hidden shadow-md">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-2xl font-bold text-[#8d99ae]">{name}</h3>
        <p className="text-lg font-semibold text-[#f3f4f6]">{specialization}</p>
        <p className="mt-2 text-[#f3f4f6]">{description}</p>

        <span
          className="text-[#00b4d8] cursor-pointer mt-2 block font-medium hover:text-[#0096c7] transition-colors duration-200"
          onClick={readMoreHandler}
        >
          {readMore ? 'Show Less' : 'Read More'}
        </span>

        <button
          className="mt-4 bg-[#00b4d8] text-white font-bold py-2 px-6 rounded-full hover:bg-[#0077b6] transition-all duration-200"
          onClick={proceedHandler}
        >
          Book a Slot
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
