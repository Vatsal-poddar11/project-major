import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, matchPath, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose, AiOutlineEnvironment } from "react-icons/ai";
import { logout } from "../services/operations/authAPI";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const API_KEY = process.env.REACT_APP_PINCODE_API_KEY;

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const location = useLocation();
    const [userLocation, setUserLocation] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    };

            // Function to get the user's current location
        useEffect(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        const pincode = await fetchPincodeFromLatLng(latitude, longitude);
                        setUserLocation(pincode);
                    },
                    (error) => {
                        setUserLocation("Location unavailable");
                    }
                );
            } else {
                setUserLocation("Geolocation not supported");
            }
        }, []);

        // Function to fetch pincode based on latitude and longitude
        const fetchPincodeFromLatLng = async (lat, lng) => {
            try {
                const response = await fetch(
                    `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=${API_KEY}`
                );
                const data = await response.json();
                console.log(data);

                // Extract the pincode from the API response
                if (data && data.address && data.address.postcode) {
                    return data.address.postcode;
                } else {
                    return "Pincode not available";
                }
            } catch (error) {
                console.error("Error fetching pincode:", error);
                return "Error fetching pincode";
            }
        };


    return (
        <div className="flex h-14 items-center justify-center border-b-[1px] border-b-[#1F2937]">
            <div className="flex w-11/12 max-w-maxContent items-center justify-between">

                <NavLink to="/">
                    <div className="flex items-center gap-x-2 rounded-md p-2 bg-transparent justify-start">
                        <MdOutlineHealthAndSafety className="text-[#000000] h-5 w-5" />
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-[120px] bg-transparent h-[50px] gap-x-2 mix-blend-multiply"
                            loading="lazy"
                        />

                        {userLocation && (
                            <div className="flex items-center font-medium gap-x-1">
                                <AiOutlineEnvironment className="ml-2 font-black text-[#222222] h-6 w-4" />
                                <p className="text-[#2c2c2c] text-xs">{userLocation}</p>
                            </div>
                        )}
                    </div>
                </NavLink>

                <div className="hidden md:flex gap-x-5 items-center">
                    <NavLink to="/">
                        <p className={`${matchRoute("/") ? "text-[#FFD700]" : "text-[#000000]"}`}>
                            Home
                        </p>
                    </NavLink>
                    <NavLink to="/about">
                        <p className={`${matchRoute("/about") ? "text-[#FFD700]" : "text-[#000000]"}`}>
                            About
                        </p>
                    </NavLink>
                    <NavLink to="/blog">
                    <p className={`${matchRoute("/blog") ? "text-yellow-100" : "text-black"}`}>
                    Blogs
                    </p>
                    </NavLink>
                    <NavLink to="/contact">
                        <p className={`${matchRoute("/contact") ? "text-[#FFD700]" : "text-[#000000]"}`}>
                            Contact
                        </p>
                    </NavLink>
                    <NavLink to="/catalog">
                        <p className={`${matchRoute("/catalog") ? "text-[#FFD700]" : "text-[#000000]"}`}>
                            Catalog
                        </p>
                    </NavLink>
                    <NavLink to="/consult">
                        <p className={`${matchRoute("/consult") ? "text-[#FFD700]" : "text-[#000000]"}`}>
                            Consult
                        </p>
                    </NavLink>
                    <NavLink to="/reminder">
                        <p className={`${matchRoute("/reminder") ? "text-[#FFD700]" : "text-[#000000]"}`}>
                            Reminder
                        </p>
                    </NavLink>
                </div>

                <div className="hidden md:flex gap-x-2 items-center">
                    {token === null && (
                        <div className="flex">
                            <NavLink to="/login">
                                <button className="border border-[#111827] bg-[#111827] hover:bg-[#111827] px-5 py-2 text-[#F3F4F6] rounded-l-full transition-all duration-150">
                                    Log in
                                </button>
                            </NavLink>
                            <NavLink to="/signup">
                                <button className="border border-[#2E384D] bg-[#2E384D] hover:bg-[#111827] px-5 py-2 text-[#F3F4F6] rounded-r-full transition-all duration-150">
                                    Sign Up
                                </button>
                            </NavLink>
                        </div>
                    )}

                    {token !== null && (
                        <>  
                            <NavLink to="/cart">
                                <FaShoppingCart className="text-[#333333] hover:text-[#048663bd] text-xl transition ease-in duration-100" />
                            </NavLink>
                            <NavLink to="/dashboard">
                                <CgProfile className={`${matchRoute("/dashboard") ? "text-[#FFD700]" : "text-[#555555]"} h-6 w-6`} />
                            </NavLink>
                            <button
                                onClick={() => {
                                    dispatch(logout(navigate));
                                }}
                                className="border border-[#1F2937] bg-[#111827] hover:bg-[#1414140b] px-4 py-2 text-[#F3F4F6] rounded-md transition-all duration-150"
                            >
                                Log out
                            </button>
                        </>
                    )}
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#000000]">
                        {mobileMenuOpen ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
    <div className="md:hidden flex flex-col gap-y-3 bg-[#1F2937] text-[#F3F4F6] fixed top-0 left-0 w-full h-full p-4 z-50">
        <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
            Home
        </NavLink>
        <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>
            About
        </NavLink>
        <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
        </NavLink>
        <NavLink to="/catalog" onClick={() => setMobileMenuOpen(false)}>
            Catalog
        </NavLink>
        <NavLink to="/consult" onClick={() => setMobileMenuOpen(false)}>
            Consult
        </NavLink>

        {/* Mobile Authentication buttons */}
        {token === null ? (
            <>
                <NavLink to="/login" onClick={() => setMobileMenuOpen(false)}>
                    <button className="border border-[#F3F4F6] px-4 py-2 rounded-md">
                        Log in
                    </button>
                </NavLink>
                <NavLink to="/signup" onClick={() => setMobileMenuOpen(false)}>
                    <button className="border border-[#F3F4F6] px-4 py-2 rounded-md">
                        Sign Up
                    </button>
                </NavLink>
            </>
        ) : (
            <>
                <NavLink to="/cart" onClick={() => setMobileMenuOpen(false)}>
                    Cart
                </NavLink>
                <NavLink to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                    Profile
                </NavLink>
                <button
                    onClick={() => {
                        dispatch(logout(navigate));
                        setMobileMenuOpen(false);
                    }}
                    className="border border-[#F3F4F6] px-4 py-2 rounded-md"
                >
                    Log out
                </button>
            </>
        )}
    </div>
)}
        </div>
    );
};

export default Navbar;
