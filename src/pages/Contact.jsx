import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_0p83vff', 'template_xmjemeg', form.current, {
        publicKey: 'TyHjc7OXbc5iouQ6Y',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          if (form.current) {
            form.current.reset();
          }
          toast.success('Email sent successfully!', {
            position: 'top-right',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send email. Please try again later.', {
            position: 'top-right',
          });
        },
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#2b2d42] to-[#8d99ae] p-4">
      <form 
        ref={form} 
        onSubmit={sendEmail} 
        className="flex flex-col gap-6 w-full max-w-md p-6 bg-[#ffffff] border border-[#d1d5db] rounded-md shadow-md"
      >
        {/* Name Field */}
        <div className="flex items-center gap-4">
          <label className="text-[#1f2937] w-1/3 text-sm">Name</label>
          <input 
            type="text" 
            name="user_name" 
            className="border border-[#d1d5db] bg-[#f3f4f6] text-[#1f2937] p-2 rounded-md w-2/3" 
            placeholder="Enter your name" 
            required
          />
        </div>

        {/* Email Field */}
        <div className="flex items-center gap-4">
          <label className="text-[#1f2937] w-1/3 text-sm">Email</label>
          <input 
            type="email" 
            name="user_email" 
            className="border border-[#d1d5db] bg-[#f3f4f6] text-[#1f2937] p-2 rounded-md w-2/3" 
            placeholder="Enter your email" 
            required
          />
        </div>

        {/* Phone Number Field */}
        <div className="flex items-center gap-4">
          <label className="text-[#1f2937] w-1/3 text-sm">Phone</label>
          <input 
            type="tel" 
            name="user_phone" 
            className="border border-[#d1d5db] bg-[#f3f4f6] text-[#1f2937] p-2 rounded-md w-2/3" 
            placeholder="Enter your phone number" 
            required
          />
        </div>

        {/* Subject Field */}
        <div className="flex items-center gap-4">
          <label className="text-[#1f2937] w-1/3 text-sm">Subject</label>
          <select 
            name="subject" 
            className="border border-[#d1d5db] bg-[#f3f4f6] text-[#1f2937] p-2 rounded-md w-2/3" 
            required
          >
            <option value="">Select Subject</option>
            <option value="Prescription Refill">Prescription Refill</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="flex items-start gap-4">
          <label className="text-[#1f2937] w-1/3 text-sm">Message</label>
          <textarea 
            name="message" 
            className="border border-[#d1d5db] bg-[#f3f4f6] text-[#1f2937] p-2 rounded-md w-2/3 h-24 resize-none" 
            placeholder="Enter your message" 
            required
          />
        </div>

        {/* Preferred Contact Method */}
        <div className="flex items-center gap-4">
          <label className="text-[#1f2937] w-1/3 text-sm">Preferred Contact</label>
          <div className="flex gap-4">
            <label className="flex items-center text-[#1f2937]">
              <input type="radio" name="contact_method" value="Email" className="mr-1" required />
              Email
            </label>
            <label className="flex items-center text-[#1f2937]">
              <input type="radio" name="contact_method" value="Phone" className="mr-1" required />
              Phone
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-6 rounded-[8px] bg-[#3b82f6] text-[#ffffff] py-[8px] px-[12px] font-medium cursor-pointer hover:bg-[#2563eb] transition-colors duration-200"
          >
            Send
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
