import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/main/main";
import { FaArrowRightLong } from "react-icons/fa6";

const Work = () => {
    const work = [
        {
            title: 'Find a Service',
            description: 'Search for a service or location'
        },
        {
            title: 'Choose a Time',
            description: 'Select a convenient time slot'
        },
        {
            title: 'Confirm Booking',
            description: 'Finalize and confirm your booking'
        }
    ];

    return (
        <div>
            <Navbar />
            <Main />

            <div className="container px-6 md:mx-auto">
                <div className="grid grid-cols-2 py-10">
                    <div className="">
                    <h1 className="text-xl italic inline-block pb-1 relative">
  How it Works
  <span className="absolute left-0 bottom-0 h-1 w-full bg-[#D32F2F]"></span>
</h1>

                        <div className="py-5">
                            {work.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${item.title === "Find a Service" ? 'bg-[#F6F6F6]' : ''} rounded-lg my-2 p-4 flex flex-row justify-between items-center`}
                                >
                                    <div>
                                        <h2 className="text-base md:text-lg font-semibold">{item.title}</h2>
                                        <p className="text-sm md:text-base text-gray-600">{item.description}</p>
                                    </div>

                                    {/* Conditionally render the arrow icon only for the first item */}
                                    {index === 0 && (
                                        <div>
                                            <FaArrowRightLong />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="flex justify-center relative">
                            {/* Original Image */}
                            <img
                                src="/images/Rectangle.png"
                                alt="description"
                                className="max-h-80 md:max-h-96 relative z-10 md:left-32"
                            />

                            {/* Shadow Image */}
                            <img
                                src="/images/Rectangle1.png"
                                alt="shadow"
                                className="max-h-80 md:max-h-96 absolute top-4 right-2 opacity-50"
                            />
                        </div>

                </div>
            </div>
        </div>
    );
};

export default Work;
