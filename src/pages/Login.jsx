import React from 'react'
import LoginForm from "../components/LoginForm"
import frameImg from "../assets/frame.png";
import image from "../assets/Designer.png";

const Login = () => {
  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-gradient-to-r from-[#2b2d42] to-[#323336] p-4">
        <div className="mx-auto flex flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12 w-full max-w-[1200px]">
            {/* Left section */}
            <div className="mx-auto w-full max-w-[450px] md:mx-0 md:max-w-[40%] text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-[#f8f9fa] mb-8 md:mb-16">
                    Welcome Back
                </h1>
                <LoginForm />
            </div>

            {/* Right section with images */}
            <div className="relative mx-auto w-full max-w-[450px] md:max-w-[50%] flex items-center justify-center">
              {/* Frame */}
              <img
                src={frameImg}
                alt="Pattern Frame"
                className="absolute w-[60%] ml-6 mb-8 scale-105 h-[360px] z-10"
                loading="lazy"
              />
              {/* Image */}
              <img
                src={image}
                alt="Doctor"
                loading="lazy"
                className="relative ml-16 w-[60%] mt-2 h-84 scale-105 z-20 drop-shadow-lg"
              />
            </div>
        </div>
    </div>
  )
}

export default Login;
