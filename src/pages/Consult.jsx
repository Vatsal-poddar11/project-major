import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserMd } from "react-icons/fa";

const Consult = () => {
  const navigate = useNavigate();

  const handleConsultClick = () => {
    navigate("/subscription");
  };

  const handleSuggestions = () => {
    navigate("/ai-suggestions");
  };

  return (
    <div className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#2b2d42] to-[#8d99ae]">
      <h1 className="text-2xl sm:text-3xl font-bold mb-10 text-[#ffffff]">
        Consult a Doctor or Explore AI-Powered Health Suggestions
      </h1>

      <div className="flex flex-col sm:flex-row sm:justify-center gap-8 sm:gap-10 mt-8 sm:mt-16">
        <div className="border border-[#d1d5db] p-6 sm:p-8 rounded-lg shadow-md w-full sm:w-80 lg:w-1/3 max-w-md bg-[#ffffff]">
          <div className="flex flex-col gap-4 items-center mb-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1f2937]">
              Book an Appointment
            </h2>
            <FaUserMd className="text-5xl sm:text-7xl text-[#1f2937] mb-4" />
          </div>
          <p className="mb-4 text-[#4b5563]">
            Get personalized consultation from a doctor.
          </p>
          <button
            onClick={handleConsultClick}
            className="bg-[#3b82f6] text-[#ffffff] px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-[#2563eb]"
          >
            Consult
          </button>
        </div>

        <div className="border border-[#d1d5db] p-6 sm:p-8 rounded-lg shadow-md w-full sm:w-80 lg:w-1/3 max-w-md bg-[#ffffff]">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#1f2937]">
            Health Assistant Bot
          </h2>
          <p className="mb-6 sm:mb-7 text-[#4b5563]">
            Enter your symptoms to get suggestions from our AI bot.
          </p>

          <button 
            onClick={handleSuggestions} 
            className="bg-[#10b981] text-[#ffffff] px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-[#059669]"
          >
            Get Suggestions
          </button>

          <p className="text-xs sm:text-sm text-[#ef4444] mt-6 sm:mt-10">
            *AI-generated suggestions. Please consult a doctor for professional advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Consult;
