import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className=''>
            <div className="container mx-auto flex justify-between gap-5 items-center mt-4 fixed top-0 left-0 z-30 right-0 max-w-5xl bg-white shadow-md py-2 px-6 rounded-full">
                <div>
                    <a to="/">
                        <img src="/images/logo.png" alt="logo" className=" max-w-24 max-h-8 " />
                    </a>
                </div>

                <div className="flex space-x-6 text-xs md:text-base">
                    <a to="/how-it-works" className="text-gray-700 hover:text-gray-900">How it Works</a>
                    <a to="/services" className="text-gray-700 hover:text-gray-900">Services</a>
                    <a to="/features" className="text-gray-700 hover:text-gray-900">Features</a>
                    <a to="/business" className="text-gray-700 hover:text-gray-900">Business</a>
                </div>

                <div>
                    <button className="bg-[#D32F2F] text-white py-2 px-4 rounded-full hover:bg-[#B71C1C] transition duration-200 text-xs md:text-base">
                        Download Now
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
