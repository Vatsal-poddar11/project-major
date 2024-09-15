import React from 'react';
import MedcartDelivery from '../assets/MedcartDelivery.jpeg';

const About = () => {
  return (
    <div className="min-h-screen bg-[#e0e7ff] flex items-center justify-center">
      <div className="container mx-auto p-6">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Modernized Header Section */}
          <div className="relative bg-gradient-to-r bg-richblack-800 text-center text-white py-20 px-6">
            <div className="absolute inset-0 opacity-50"></div>
            <div className="relative z-10">
              <h1 className="text-5xl font-extrabold mb-8 drop-shadow-lg transform transition-transform duration-500 hover:scale-105">
                Welcome to India's Leading Digital Healthcare Platform
              </h1>
              <p className="text-lg text-richblack-25 mb-10 max-w-2xl mx-auto drop-shadow-lg">
                MedKart Pharmacy is one of India's most trusted pharmacies,
                offering quality medicines. Enjoy fast online access to medications
                with convenient home delivery, backed by exceptional customer service.
              </p>
              <div className="flex justify-center mt-6">
                <a
                  href="#services"
                  className="px-8 py-3 bg-[#fbb92ce7] text-white text-lg font-medium rounded-full shadow-lg hover:bg-[#ddaa3c] transition duration-300"
                >
                  Explore Our Services
                </a>
              </div>
            </div>
            <div className="relative z-0 mt-10 flex justify-center">
              <img
                src={MedcartDelivery}
                alt="MedKart"
                className="w-96 h-auto mx-auto mt-4 mb-4 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Our Services Section */}
          <div className="text-center py-10 bg-gradient-to-r from-[#eef2ff] to-[#e0e7ff]">
            <h2 className="text-3xl font-bold text-[#3e415b] mb-6">Our Services</h2>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  icon: 'fas fa-hand-holding-medical',
                  title: 'Wellness',
                  description:
                    'We offer more than just medicines — discover our range of wellness products, vitamins, supplements, and beauty care essentials!',
                },
                {
                  icon: 'fa fa-medkit',
                  title: 'Medicine',
                  description:
                    'Getting your medicines from MedKart Pharmacy is fast, easy, and hassle-free — just a few clicks away!',
                },
                {
                  icon: 'fas fa-user-md',
                  title: 'Online Doctor Consultation',
                  description:
                    'With online consultations, accessing healthcare is now just a click away — no hospital visits needed!',
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 p-4 text-center hover:scale-105 transform transition duration-300"
                >
                  <div className="bg-white shadow-lg p-8 rounded-lg hover:bg-[#3e415b] hover:text-white transition-all duration-300">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#3bb896] rounded-full mx-auto mb-4 text-white shadow-md">
                      <i className={service.icon}></i>
                    </div>
                    <h3 className="text-xl font-semibold text-[#3bb896] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 hover:text-gray-100">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Contact Info Section */}
          <div className="py-10 bg-[#f4f7fb]">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#3e415b]">Contact Us</h2>
              <p className="text-gray-600">We're here to assist you with any inquiries you may have!</p>
            </div>

            <div className="grid grid-cols-1 scale-90 md:grid-cols-2 gap-8">
              {/* Contact Info Card */}
              <div className="bg-white shadow-lg p-8 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-[#3bb896] mb-6">Get in Touch</h3>
                <ul className="space-y-6 text-left">
                  <li className="flex items-center">
                    <i className="fas fa-map-marker-alt text-[#3bb896] text-2xl mr-4"></i>
                    <div>
                      <p className="font-bold">Address:</p>
                      <p>Bhubaneswar, Odisha, India</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-phone-alt text-[#3bb896] text-2xl mr-4"></i>
                    <div>
                      <p className="font-bold">Phone:</p>
                      <p>+94112375888</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <i className="far fa-envelope text-[#3bb896] text-2xl mr-4"></i>
                    <div>
                      <p className="font-bold">Email:</p>
                      <p>storelinks1@gmail.com</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Interactive Map */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <iframe
                  title="MedKart Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.705699973638!2d85.82005917377549!3d20.35377311062224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093de6b8a739%3A0x562cc3cfa4de965e!2sSJ%20Complex%2C%20Thrishna%20Villa%20Phase-II%20Rd%2C%20Aryapalli%2C%20Patia%2C%20Bhubaneswar%2C%20Odisha%20751024!5e0!3m2!1sen!2sin!4v1726251348645!5m2!1sen!2sin"
                  className="w-full h-full"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
         
          {/* Follow Us Section */}
          <div className="bg-[#eef2ff] text-center py-6">
            <h2 className="text-2xl font-bold text-[#3e415b] mb-4">Follow Us</h2>
            <div className="flex justify-center mt-4 space-x-6">
              {[
                { icon: 'fab fa-facebook-f', hoverBg: 'hover:bg-[#3b5999]' },
                { icon: 'fab fa-twitter', hoverBg: 'hover:bg-[#46c1f6]' },
                { icon: 'fab fa-instagram', hoverBg: 'hover:bg-[#e1306c]' },
                { icon: 'fab fa-youtube', hoverBg: 'hover:bg-[#de463b]' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`p-4 rounded-full bg-[#3e415b] text-[#3bb896] shadow-lg ${social.hoverBg} hover:text-white transition-all duration-300`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
