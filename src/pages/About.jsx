import React, { useState } from 'react';
import aboutImg from "../assets/about-1.jpg";
import image from '../assets/signup.jpeg';

const About = () => {
    return (
        <div className="container mx-auto"> {/* px-6 py-8 */}
          <div className="bg-white shadow-lg rounded-md"> {/* p-6 */}
            <div className="bg-[#3e415b] text-center text-[#ffffff] p-6 text-4xl font-bold mb-6">
              <h4 className="mt-5 mb-7">Welcome to India's leading digital Healthcare Platform</h4>
              {/* <h6 className="text-2xl mb-4">Know more about us, we are more than a pharmacy...</h6> */}
              <img src={aboutImg} alt="MedKart" className="w-96 mx-auto h-auto mt-4 mb-4" />
              <p className="text-base text-gray-600 mb-4">
                MedKart Pharmacy is one of India's most trusted pharmacies,
                experience in dispensing quality medicines. We help you look
                after your own health effortlessly as well as take care of loved
                ones wherever they may reside in Sri Lanka. We offer fast online
                access to medicines with convenient home delivery. Just log on
                to our website, place your order online and have your medicines
                delivered to you - without leaving the comfort of your home. We
                are committed to provide safe, reliable and affordable medicines
                as well as a customer service philosophy that is worthy of our
                valued customer's loyalty. We offer a superior online shopping
                experience, which includes ease of navigation and absolute
                transactional security.
              </p>
            </div>

            <div className="text-center text-[#121261] py-6">
              <h2 className="text-[#3e415b] text-3xl font-bold">Our Services</h2>
            </div>

            <div className="flex flex-wrap justify-center">
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4 text-center">
                <div className="bg-white shadow-md p-8 rounded-lg transform hover:bg-[#3e415b] transition-all duration-300">
                  <div className="flex items-center justify-center w-10 h-10 text-white bg-[#3bb896] rounded-full mx-auto mb-4">
                    <i className="fas fa-user-md"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-[#3bb896] mb-4">
                    Online Doctor Consultation
                  </h3>
                  <p className="text-sm text-gray-600">
                  With online consultations, accessing healthcare is now just a click away—no hospital visits needed!
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/3 p-4 text-center">
                <div className="bg-white shadow-md p-8 rounded-lg transform hover:bg-[#3e415b] transition-all duration-300">
                  <div className="flex items-center justify-center w-10 h-10 text-white bg-[#3bb896] rounded-full mx-auto mb-4">
                    <i className="fas fa-hand-holding-medical"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-[#3bb896] mb-4">
                    Wellness
                  </h3>
                  <p className="text-sm text-gray-600">
                  We offer more than just medicines—discover our range of wellness products, vitamins, 
                  supplements, and beauty care essentials!
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/3 p-4 text-center">
                <div className="bg-white shadow-md p-8 rounded-lg transform hover:bg-[#3e415b] transition-all duration-300">
                  <div className="flex items-center justify-center w-10 h-10 text-white bg-[#3bb896] rounded-full mx-auto mb-4">
                    <i className="fa fa-medkit"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-[#3bb896] mb-4">
                    Medicine
                  </h3>
                  <p className="text-sm text-gray-600">
                  Getting your medicines from MedKart Pharmacy is fast, easy, and hassle-free—just a few clicks away!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center py-8">
              <div className="md:w-1/3">
                <img src={image} className="w-full h-auto mb-4" alt="MedKart" />
              </div>
              <div className="md:w-2/3 px-6">
                <ul>
                  <li className="flex items-center mb-4">
                    <i className="fas fa-paper-plane text-[#3e415b] mr-4"></i>
                    <p>Address: <span className="ml-4">New Delhi, India</span></p>
                  </li>
                  <li className="flex items-center mb-4">
                    <i className="fas fa-phone-alt text-[#3e415b] mr-4"></i>
                    <p>Phone No: <span className="ml-4">+94112375888</span></p>
                  </li>
                  <li className="flex items-center mb-4">
                    <i className="far fa-envelope text-[#3e415b] mr-4"></i>
                    <p>Email: <span className="ml-4">medkart@gmail.com</span></p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#f4f7fb] text-center py-6">
              <h2 className="text-2xl font-bold text-[#3e415b]">Follow Us</h2>
              <div className="flex justify-center mt-4">
                <a href="#" className="mx-2 p-3 rounded-full bg-[#3e415b] text-[#3bb896] shadow hover:bg-[#3b5999] hover:text-white transition-all duration-200">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="mx-2 p-3 rounded-full bg-[#3e415b] text-[#3bb896] shadow hover:bg-[#46c1f6] hover:text-white transition-all duration-200">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="mx-2 p-3 rounded-full bg-[#3e415b] text-[#3bb896] shadow hover:bg-[#e1306c] hover:text-white transition-all duration-200">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="mx-2 p-3 rounded-full bg-[#3e415b] text-[#3bb896] shadow hover:bg-[#de463b] hover:text-white transition-all duration-200">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}

export default About