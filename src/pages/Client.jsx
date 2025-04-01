import React from "react";
import Appointment from "./appointment";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";

const Client = () => {
  const feedback = [
    {
      profile: '/images/avatar.png',
      name: 'Lily',
      comment: 'I’ve been able to focus more on my clients and less on administrative tasks. Booked Directly helps me reach new clients while keeping my schedule organized—definitely worth it.',
    },
    {
      profile: '/images/avatar.png',
      name: 'John',
      comment: 'The best thing about Booked Directly is the exposure! My business is getting noticed by people who wouldn’t have found it otherwise, and the app makes it so easy for them to book. Love it!',
    },
    {
      profile: '/images/avatar.png',
      name: 'Alax',
      comment: 'I’ve been able to focus more on my clients and less on administrative tasks. Booked Directly helps me reach new clients while keeping my schedule organized—definitely worth it.',
    },
    {
      profile: '/images/avatar.png',
      name: 'Smith Ax.',
      comment: 'The best thing about Booked Directly is the exposure! My business is getting noticed by people who wouldn’t have found it otherwise, and the app makes it so easy for them to book. Love it!',
    },
    {
        profile: '/images/avatar.png',
        name: 'Smith Ax.',
        comment: 'The best thing about Booked Directly is the exposure! My business is getting noticed by people who wouldn’t have found it otherwise, and the app makes it so easy for them to book. Love it!',
      },
  ];

  return (
    <>
      <Appointment />

      <div className="my-5">
        <div className="container px-6 md:mx-auto">
          <div className="flex flex-row justify-between gap-5">
          <h1 className="text-base italic inline-block pb-1 relative">
            What client say
            <span className="absolute left-0 bottom-0 h-1 w-full bg-[#D32F2F]"></span>
          </h1>
            <div className="flex flex-row gap-2">
              <FaArrowLeftLong />
              <FaArrowRight />
            </div>
          </div>

          {/* Horizontal Scrollable Feedback Cards */}
          <div className="flex flex-row gap-6 py-6 overflow-x-auto scrollbar-none">
            {feedback.map((item, index) => (
              <div className="bg-[#F6F6F6] rounded-lg p-3 w-[300px] min-w-[250px]" key={index}>
                <div className="flex flex-row gap-4 py-2">
                  <img src={item.profile} className="w-6 h-6 rounded-full bg-[#dddada]" alt="Profile" />
                  <h2 className="font-semibold">{item.name}</h2>
                </div>
                <p className="font-light text-sm">{item.comment}</p>
                <div className="flex items-center pt-4">
                  <IoStarSharp className="text-yellow-500" />
                  <IoStarSharp className="text-yellow-500" />
                  <IoStarSharp className="text-yellow-500" />
                  <IoStarSharp className="text-yellow-500" />
                  <IoStarSharp className="text-yellow-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
