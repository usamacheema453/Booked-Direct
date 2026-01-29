import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Circle from "../Circle/Circle";

const Main = () => {
    return (
        <div className="bg-gradient-to-b from-[#F6F6F6] to-white pt-20 pb-20">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="relative z-10">
                        {/* Decorative Circle */}
                        <div className="absolute -left-4 -top-4 opacity-50">
                            <Circle color="bg-gradient-to-b from-[#FFD328] to-[#FFA700]" size="w-6 h-6" />
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Book Your Next <br />
                            <span className="text-[#005EB8]">Beauty & Wellness</span> <br />
                            Appointment <span className="text-[#D32F2F]">Easily</span>
                        </h1>

                        <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-8 leading-relaxed">
                            Find local salons, spas, massage therapists, and wellness experts. 
                            Book appointments in seconds and manage all your bookings in one place.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-[#005EB8] text-white flex items-center justify-center gap-3 py-3 px-6 rounded-full hover:bg-[#004A94] transition duration-300 font-semibold text-sm md:text-base">
                                Get App Now <FaArrowRightLong />
                            </button>
                            <button className="border-2 border-[#005EB8] text-[#005EB8] py-3 px-6 rounded-full hover:bg-[#005EB8] hover:text-white transition duration-300 font-semibold text-sm md:text-base">
                                Learn More
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-300">
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-[#D32F2F]">10K+</p>
                                <p className="text-gray-600 text-xs md:text-sm">Service Providers</p>
                            </div>
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-[#005EB8]">50K+</p>
                                <p className="text-gray-600 text-xs md:text-sm">Happy Users</p>
                            </div>
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-[#FFA700]">100K+</p>
                                <p className="text-gray-600 text-xs md:text-sm">Bookings</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="absolute top-8 right-4 opacity-50">
                            <Circle color="bg-green-500" size="w-6 h-6" />
                        </div>
                        <div className="absolute bottom-16 left-0 opacity-40">
                            <Circle color="bg-[#D32F2F]" size="w-5 h-5" />
                        </div>
                        
                        <div className="bg-gradient-to-br from-[#005EB8] to-[#0047A3] rounded-2xl p-8 shadow-2xl">
                            <div className="bg-white rounded-lg p-4 h-96 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">📱</div>
                                    <p className="text-gray-600">App Screenshot</p>
                                    <p className="text-sm text-gray-400">Place your app screenshot here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
