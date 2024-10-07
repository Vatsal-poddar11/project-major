import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaVideo, FaComments } from 'react-icons/fa';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const SubscriptionPlans = () => {
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(null);
  const navigate = useNavigate();

  const proceedToProfile = (price) => {
    setSelectedPlanPrice(price);
    navigate('/doctor-profile', { state: { price } }); 
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-[#2b2d42] to-[#8d99ae] min-h-screen py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#ffffff] mb-4">Consulting Plans</h1>
        <p className="text-lg text-[#ffffff]">Choose the plan that best suits your needs and get expert advice!</p>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-6 w-full md:w-4/5 lg:w-3/5">
        {/* Chat Plan */}
        <div className="flex-1 bg-[#ffffff] p-6 rounded-lg shadow-lg text-center border border-[#d1d5db] mb-6 md:mb-0">
          <div className="flex items-center justify-center mb-4">
            <FaComments size={48} className="text-[#4b5563]" />
          </div>
          <h2 className="text-2xl font-semibold text-[#4b5563] mb-2">Chat Consultation</h2>
          <p className="text-2xl font-bold text-[#1f2937] mb-4">₹ 300</p>
          <ul className="text-left mb-6 space-y-2">
            <li className="flex items-center text-[#1f2937]">
              <BsFillCheckCircleFill className="text-[#4b5563] mr-2" />
              Personalized advice from a certified doctor
            </li>
            <li className="flex items-center text-[#1f2937]">
              <BsFillCheckCircleFill className="text-[#4b5563] mr-2" />
              Secure and confidential chat
            </li>
            <li className="flex items-center text-[#1f2937]">
              <BsFillCheckCircleFill className="text-[#4b5563] mr-2" />
              Available anytime, anywhere
            </li>
          </ul>
          <button
            onClick={() => proceedToProfile(300)}
            className="bg-[#4b5563] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#1f2937] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Buy Now
          </button>
        </div>

        {/* Call Plan */}
        <div className="flex-1 bg-[#ffffff] p-6 rounded-lg shadow-lg text-center border border-[#d1d5db] mb-6 md:mb-0">
          <div className="flex items-center justify-center mb-4">
            <FaPhoneAlt size={48} className="text-[#4b5563]" />
          </div>
          <h2 className="text-2xl font-semibold text-[#4b5563] mb-2">Call Consultation</h2>
          <p className="text-2xl font-bold text-[#1f2937] mb-4">₹ 500</p>
          <ul className="text-left mb-6 space-y-2">
            <li className="flex items-center text-[#1f2937]">
              <BsFillCheckCircleFill className="text-[#4b5563] mr-2" />
              Real-time consultation with a certified doctor
            </li>
            <li className="flex items-center text-[#1f2937]">
              <BsFillCheckCircleFill className="text-[#4b5563] mr-2" />
              Secure and private call
            </li>
            <li className="flex items-center text-[#1f2937]">
              <BsFillCheckCircleFill className="text-[#4b5563] mr-2" />
              Immediate assistance for urgent needs
            </li>
          </ul>
          <button
            onClick={() => proceedToProfile(500)}
            className="bg-[#4b5563] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#1f2937] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Buy Now
          </button>
        </div>

        {/* Video Call Plan */}
        <div className="flex-1 bg-[#ffffff] p-6 rounded-lg shadow-lg text-center border border-[#d1d5db]">
          <div className="flex items-center justify-center mb-4">
            <FaVideo size={48} className="text-[#4b5563]" />
          </div>
          <h2 className="text-2xl font-semibold text-[#4b5563] mb-2">Video Consultation</h2>
          <p className="text-2xl font-bold text-[#1f2937] mb-4">₹ 700</p>
          <ul className="text-left mb-6 space-y-2">
            <li className="flex items-center text-[#1f2937]">
              <BsFillCheckCircleFill className="text-[#4b5563] mr-2" />
              Detailed video consultation with a specialist
            </li>
            <li className="flex items-center text-[#1f2937]">
              <BsFillCheckCircleFill className="text-[#4b5563] mr-2" />
              High-quality video and audio for clear communication
            </li>
            <li className="flex items-center text-[#1f2937]">
              <BsFillCheckCircleFill className="text-[#4b5563] mr-2" />
              Personalized advice and treatment options
            </li>
          </ul>
          <button
            onClick={() => proceedToProfile(700)}
            className="bg-[#4b5563] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#1f2937] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
