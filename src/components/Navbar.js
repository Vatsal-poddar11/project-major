import React from 'react';
import { NavLink, useLocation, matchPath, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from "../assets/logo.jpeg";
import { AiFillMedicineBox } from "react-icons/ai";
import { logout } from "../services/operations/authAPI";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const location = useLocation();

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    };

    return (
        <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
            <div className="flex w-11/12 max-w-maxContent items-center justify-between">
                <NavLink to="/">
                    <div className="flex items-center gap-x-2 rounded-md p-2 bg-transparent">
                        <AiFillMedicineBox className="text-black h-5 w-5" />
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-[50px] h-[50px] rounded-full shadow-lg mix-blend-multiply transition-all duration-300 ease-in-out hover:scale-110"
                            loading="lazy"
                        />
                    </div>
                </NavLink>

                {/* Navigation links */}
                <div className="flex gap-x-5 items-center">
                    <NavLink to="/">
                        <p className={`${matchRoute("/") ? "text-yellow-100" : "text-black"}`}>
                            Home
                        </p>
                    </NavLink>
                    <NavLink to="/about">
                        <p className={`${matchRoute("/about") ? "text-yellow-100" : "text-black"}`}>
                            About
                        </p>
                    </NavLink>
                    <NavLink to="/blog">
                    <p className={`${matchRoute("/blog") ? "text-yellow-100" : "text-black"}`}>
                    Blogs
                    </p>
                    </NavLink>
                    <NavLink to="/contact">
                        <p className={`${matchRoute("/contact") ? "text-yellow-200" : "text-black"}`}>
                            Contact
                        </p>
                    </NavLink>
                    <NavLink to="/catalog">
                        <p className={`${matchRoute("/catalog") ? "text-yellow-200" : "text-black"}`}>
                            Catalog
                        </p>
                    </NavLink>
                    <NavLink to="/consult">
                        <p className={`${matchRoute("/consult") ? "text-yellow-200" : "text-black"}`}>
                            Consult
                        </p>
                    </NavLink>
                </div>

                {/* Authentication buttons */}
                <div className="flex gap-x-2 items-center">
                    {token === null && (
                        <>
                            <NavLink to="/login">
                                <button className="border border-richblack-700 bg-richblack-800 hover:bg-[#1414140b] px-4 py-2 text-richblack-100 rounded-md">
                                    Log in
                                </button>
                            </NavLink>
                            <NavLink to="/signup">
                                <button className="border border-richblack-700 bg-richblack-800 hover:bg-[#1414140b] px-4 py-2 text-richblack-100 rounded-md">
                                    Sign Up
                                </button>
                            </NavLink>
                        </>
                    )}

                    {token !== null && (
                        <>  
                            <NavLink to="/cart">
                                <div>
                                    <FaShoppingCart className="text-[#333333] hover:text-[#048663bd] text-xl transition ease-in duration-100"/>
                                </div>
                            </NavLink>
                            <NavLink to="/dashboard">
                                <CgProfile className={`${matchRoute("/dashboard") ? "text-yellow-25" : "text-richblack-25"} text-richblack-25 h-6 w-6`} />
                            </NavLink>
                            <NavLink to="/">
                                <button
                                    onClick={() => {
                                        dispatch(logout(navigate));
                                    }}
                                    className="border border-richblack-500 bg-richblack-700 hover:bg-[#1414140b] px-4 py-2 text-richblack-100 rounded-md"
                                >
                                    Log out
                                </button>
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
