import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='sticky top-0 z-50 bg-white shadow-lg'>
            <div className="container mx-auto flex justify-between items-center py-4 px-6 max-w-7xl">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link to="/" className="text-2xl font-bold text-[#005EB8]">
                        Booked
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <Link to="/" className="text-gray-700 hover:text-[#005EB8] transition duration-200 font-medium">
                        Home
                    </Link>
                    <Link to="/how-it-works" className="text-gray-700 hover:text-[#005EB8] transition duration-200 font-medium">
                        How it Works
                    </Link>
                    <Link to="/services" className="text-gray-700 hover:text-[#005EB8] transition duration-200 font-medium">
                        Services
                    </Link>
                    <Link to="/features" className="text-gray-700 hover:text-[#005EB8] transition duration-200 font-medium">
                        Features
                    </Link>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link to="/appointment" className="bg-[#D32F2F] text-white py-2 px-6 rounded-full hover:bg-[#B71C1C] transition duration-200 font-medium">
                        Book Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="container mx-auto px-6 py-4 space-y-4">
                        <Link to="/" className="block text-gray-700 hover:text-[#005EB8] transition duration-200 font-medium">
                            Home
                        </Link>
                        <Link to="/how-it-works" className="block text-gray-700 hover:text-[#005EB8] transition duration-200 font-medium">
                            How it Works
                        </Link>
                        <Link to="/services" className="block text-gray-700 hover:text-[#005EB8] transition duration-200 font-medium">
                            Services
                        </Link>
                        <Link to="/features" className="block text-gray-700 hover:text-[#005EB8] transition duration-200 font-medium">
                            Features
                        </Link>
                        <Link to="/appointment" className="block bg-[#D32F2F] text-white py-2 px-6 rounded-full hover:bg-[#B71C1C] transition duration-200 font-medium text-center">
                            Book Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
