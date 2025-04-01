import React from "react";
import Popular from "./popular";
import { FaScissors } from "react-icons/fa6";

const Features = () => {
    const features = [
        {
            href: "/images/features/vector1.png",
            describe: 'Wide range of saloons & Spa '
        },
        {
            href: '/images/features/vector2.png',
            describe: 'Hassle-Free 24/7 Booking'
        },
        {
            href: '/images/features/vector3.png',
            describe: 'Exclusive Deals & Offers'
        },
        {
            href: '/images/features/vector4.png',
            describe: 'Feedback Rating & Reviews'
        }
    ];

    return (
        <>
            <div>
                <Popular />

                <div className="container px-6 md:mx-auto bg-[#F5F5F5] rounded-2xl ">
                    <div className="p-8">
                    <h1 className="text-xl italic inline-block pb-1 relative">
                        Features
                        <span className="absolute left-0 bottom-0 h-1 w-full bg-[#D32F2F]"></span>
                        </h1>
                        <p className="text-base md:text-2xl py-3">
                            Travelling all the way from home and <br /> getting your appointment booked.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {features.map((item, index) => (
                                <div className="flex flex-col  bg-white p-4 rounded-lg" key={index}>
                                    {/* Icon at the start, centered */}
                                    <img src={item.href} alt={item.describe} className="w-7 h-7 mb-2 " />
                                    {/* Description centered */}
                                    <p className=" pt-5">{item.describe}</p>
                                </div>
                            ))}
                        </div>



                    </div>
                </div>
            </div>
        </>
    );
}

export default Features;
