import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UploadPrescription = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tags, setTags] = useState('');

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the selected file
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.error('Please select a file to upload.', {
        position: 'top-right',
      });
      return; 
    }

    const formData = new FormData();
    formData.append('imageFile', file); 
    formData.append('name', name);
    formData.append('email', email);
    formData.append('tags', tags);

    try {
      const response = await axios.post('http://localhost:4000/api/v1/upload/imageUpload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully', response.data);
      toast.success('Prescription uploaded successfully!', {
        position: 'top-right',
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Failed to upload prescription. Please try again later.', {
        position: 'top-right',
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#2b2d42] to-[#8d99ae] p-4">
      <form
        onSubmit={handleUpload}
        className="flex flex-col gap-6 w-full max-w-md p-6 bg-[#ffffff] border border-[#d1d5db] rounded-md shadow-md"
      >
        {/* File Upload */}
        <div className="flex items-center gap-4">
          <label className="text-[#1f2937] w-1/3 text-sm">Prescription</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="border border-[#d1d5db] bg-[#f3f4f6] text-[#1f2937] p-2 rounded-md w-2/3"
            required
          />
        </div>

        {/* Name Field */}
        <div className="flex items-center gap-4">
          <label className="text-[#1f2937] w-1/3 text-sm">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#d1d5db] bg-[#f3f4f6] text-[#1f2937] p-2 rounded-md w-2/3"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Tags Field */}
        <div className="flex items-center gap-4">
          <label className="text-[#1f2937] w-1/3 text-sm">Tags</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="border border-[#d1d5db] bg-[#f3f4f6] text-[#1f2937] p-2 rounded-md w-2/3"
            placeholder="Enter tags (optional)"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-6 rounded-[8px] bg-[#3b82f6] text-[#ffffff] py-[8px] px-[12px] font-medium cursor-pointer hover:bg-[#2563eb] transition-colors duration-200"
          >
            Upload
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UploadPrescription;
