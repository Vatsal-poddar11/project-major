import React from 'react';
import { useSelector } from 'react-redux';
import { FaPhoneAlt, FaVideo, FaComments } from 'react-icons/fa';
import { BsFillCheckCircleFill } from 'react-icons/bs';



const SubscriptionPlans = () => {
  const token = useSelector((state) => state.auth.token); // Fetch the token from Redux store

// Load the Razorpay SDK dynamically
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
  });
};

// Handle checkout process and Razorpay payment
const handlePayment = async (amount, planType) => {
  const isScriptLoaded = await loadRazorpayScript();
  if (!isScriptLoaded) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
  }

  try {
      // Call backend to create a Razorpay order and get order details
      const response = await fetch('http://localhost:4000/api/v1/payment/capture-payment', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,  // Use token here
          },
          body: JSON.stringify({
              totalAmount: amount,
          }),
      });

      const data = await response.json();
      console.log('Data from backend : ', data);
      if (!response.ok) {
          console.error('Failed to create order:', data.message);
          return;
      }

      const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID,
          amount: data.amount,
          currency: data.currency,
          name: "Your Store",
          description: `Payment for ${planType}`,
          order_id: data.orderId,
          handler: function (response) {
              const paymentData = {
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
              };

              fetch('http://localhost:4000/api/v1/payment/verify-signature', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`, // Use token here
                  },
                  body: JSON.stringify(paymentData),
              })
                  .then((res) => res.json())
                  .then((data) => {
                      if (data.success) {
                          alert('Payment successful!');
                          console.log('Payment verified:', data);
                      } else {
                          alert('Payment verification failed.');
                      }
                  });
          },
          prefill: {
              name: "Customer Name",
              email: "customer@example.com",
              contact: "9999999999",
          },
          notes: {
              address: "Customer's Address",
          },
          theme: {
              color: "#4A90E2",
          },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();

  } catch (error) {
      console.error('Error during checkout:', error);
  }
};

    return (
        <div className="flex flex-col items-center bg-[#F7F7F7] min-h-screen py-10">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-[#4A90E2] mb-4">Consulting Plans</h1>
                <p className="text-lg text-[#333333]">Choose the plan that best suits your needs and get expert advice!</p>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-6 w-full md:w-4/5 lg:w-3/5">
                {/* Chat Plan */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-lg text-center border border-[#E0E0E0] mb-6 md:mb-0">
                    <div className="flex items-center justify-center mb-4">
                        <FaComments size={48} className="text-[#F5A623]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-[#F5A623] mb-2">Chat Consultation</h2>
                    <p className="text-2xl font-bold text-[#333333] mb-4">₹ 300</p>
                    <ul className="text-left mb-6 space-y-2">
                        <li className="flex items-center text-[#333333]">
                            <BsFillCheckCircleFill className="text-[#4A90E2] mr-2" />
                            Personalized advice from a certified doctor
                        </li>
                        <li className="flex items-center text-[#333333]">
                            <BsFillCheckCircleFill className="text-[#4A90E2] mr-2" />
                            Secure and confidential chat
                        </li>
                        <li className="flex items-center text-[#333333]">
                            <BsFillCheckCircleFill className="text-[#4A90E2] mr-2" />
                            Available anytime, anywhere
                        </li>
                    </ul>
                    <button
                        onClick={() => handlePayment(300, 'Chat Consultation')}
                        className="bg-[#F5A623] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#F7C948] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Proceed to Pay
                    </button>
                </div>

                {/* Call Plan */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-lg text-center border border-[#E0E0E0] mb-6 md:mb-0">
                    <div className="flex items-center justify-center mb-4">
                        <FaPhoneAlt size={48} className="text-[#4A90E2]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-[#4A90E2] mb-2">Call Consultation</h2>
                    <p className="text-2xl font-bold text-[#333333] mb-4">₹ 500</p>
                    <ul className="text-left mb-6 space-y-2">
                        <li className="flex items-center text-[#333333]">
                            <BsFillCheckCircleFill className="text-[#4A90E2] mr-2" />
                            Real-time consultation with a certified doctor
                        </li>
                        <li className="flex items-center text-[#333333]">
                            <BsFillCheckCircleFill className="text-[#4A90E2] mr-2" />
                            Secure and private call
                        </li>
                        <li className="flex items-center text-[#333333]">
                            <BsFillCheckCircleFill className="text-[#4A90E2] mr-2" />
                            Immediate assistance for urgent needs
                        </li>
                    </ul>
                    <button
                        onClick={() => handlePayment(500, 'Call Consultation')}
                        className="bg-[#4A90E2] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#357ABD] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Proceed to Pay
                    </button>
                </div>

                {/* Video Call Plan */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-lg text-center border border-[#E0E0E0]">
                    <div className="flex items-center justify-center mb-4">
                        <FaVideo size={48} className="text-[#E94E77]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-[#E94E77] mb-2">Video Consultation</h2>
                    <p className="text-2xl font-bold text-[#333333] mb-4">₹ 700</p>
                    <ul className="text-left mb-6 space-y-2">
                        <li className="flex items-center text-[#333333]">
                            <BsFillCheckCircleFill className="text-[#E94E77] mr-2" />
                            Detailed video consultation with a specialist
                        </li>
                        <li className="flex items-center text-[#333333]">
                            <BsFillCheckCircleFill className="text-[#E94E77] mr-2" />
                            High-quality video and audio for clear communication
                        </li>
                        <li className="flex items-center text-[#333333]">
                            <BsFillCheckCircleFill className="text-[#E94E77] mr-2" />
                            Personalized advice and treatment options
                        </li>
                    </ul>
                    <button
                        onClick={() => handlePayment(700, 'Video Consultation')}
                        className="bg-[#E94E77] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#F06680] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Proceed to Pay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPlans;
