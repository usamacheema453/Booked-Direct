import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/main/main";
import Work from "./work";
import { FaArrowRightLong } from "react-icons/fa6";

const Popular = () => {
    const services = [
        {
            href: '/images/services/rectangle10.png',
            title: 'Massage & Spa Saloon'
        },
        {
            href: '/images/services/rectangle11.png',
            title: 'Nail Services'
        },
        {
            href: '/images/services/rectangle12.png',
            title: 'Eyebrows & Lashes'
        },
        {
            href: '/images/services/rectangle13.png',
            title: 'Facial & Skincare'
        },
        {
            href: '/images/services/rectangle14.png',
            title: 'Makeup'
        },
        {
            href: '/images/services/rectangle15.png',
            title: 'Haircut & Styling'
        }
    ];

    return (
        <>
            <div>
                <Work />

                <div className="container px-6 md:mx-auto">
                    <div className="flex flex-row justify-between">
                    <h1 className="text-xl italic inline-block pb-1 relative">
                        Popular Services
                    <span className="absolute left-0 bottom-0 h-1 w-full bg-[#D32F2F]"></span>
                    </h1>
                        <h1 className="flex flex-row gap-2">
                            Explore All <FaArrowRightLong className="mt-1" />
                        </h1>
                    </div>

                    <div className="py-5 flex flex-row gap-5 overflow-x-auto scrollbar-none">
                        {services.map((item, index) => (
                            <div className="min-w-28" key={index}>
                                <img src={item.href} alt={item.title} className="" />
                                <h1 className="text-center italic text-sm md:text-base">{item.title}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popular;
