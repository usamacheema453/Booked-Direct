import React from "react";
import Navbar from "../Navbar/Navbar";
import { FaArrowRightLong } from "react-icons/fa6";
import Circle from "../Circle/Circle";

const Main = () => {
    return (
        <div>
            <Navbar />

            {/* Main content with margin to avoid overlap with fixed navbar */}
            <div className="pt-32  bg-[#F6F6F6] relative">
                <div className="grid grid-cols-2 gap-4 container mx-auto px-6">
                <div className="absolute left-6 ">
                                <Circle color="bg-gradient-to-b from-[#FFD328] to-[#FFA700]"  size="w-4 h-4" />
                            </div>
                    <div className="py-12">
                           
                        
                        <p className="text-xs  sm:text-lg md:text-6xl line-clamp-3 tracking-wider">
                            Book Your Next <br /> 
                            <span className="text-[#005EB8] font-medium">Beauty & Wellness</span> <br /> 
                            Appointment Easily
                        </p>

                        <div className="mt-28 sm:py-20">
                            <p className="pb-4 text-xs sm:text-base">
                                Find local salons, spas, massage therapists, and more.
                            </p>

                            <button className="bg-[#005EB8] text-white flex items-center gap-3 py-2 px-4 text-xs sm:text-base rounded-full hover:bg-[#005EB8] transition duration-200">
                                Get App Now <FaArrowRightLong className="mt-1" />
                            </button>
                        </div>
                    </div>

                    <div className="relative max-h-screen overflow-hidden">

                    <div className="absolute right-0 top-16 ">
                        <Circle color="bg-green-500"  size="w-4 h-4" />
                    </div>
                        
                        <img 
                            src="/images/mainPic.png" 
                            alt="main-pic" 
                            className="object-cover object-top  max-h-[150%]" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
