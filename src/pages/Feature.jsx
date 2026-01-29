import React from "react";
import Feature1 from "./Features";
import { BiLogoPlayStore } from "react-icons/bi";
import { IoLogoApple } from "react-icons/io5";

const Feature = () => {

  return (
    <div className="">
      <Feature1 />

      <div className="bg-gradient-to-b from-[#005EB8] to-[#58A4ED] mt-32">
        <div className="container md:mx-auto grid grid-cols-2 px-6">
          <div className="relative flex justify-center md:justify-start">
            <img
              src="/images/phone.png"
              alt="appointment"
              className="w-full max-h-[130%] min-h-[80%] object-contain absolute -left-6 md:bottom-0.5 md:-left-48"
            />
          </div>

          <div className="py-12 text-white">
            <p className="font-light">Try it right now!</p>
            <h1 className="text-base md:text-4xl font-bold">Book Appointment <br /> with Ease.</h1>
            <p className="pt-10 font-light">Book unforgettable beauty and wellness <br /> experiences with the Booked Direct mobile app</p>

            <div className="flex flex-col sm:flex-row gap-4 py-3">
              <div className="bg-black flex flex-row items-center gap-1 py-1 px-2 rounded-lg">
                <BiLogoPlayStore className="text-lg md:text-3xl" />
                <div>
                  <p className="text-xs uppercase">get it on</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </div>

              <div className="bg-black flex flex-row items-center gap-1 py-1 px-2 rounded-lg">
                <IoLogoApple className="text-lg md:text-3xl" />
                <div>
                  <p className="text-xs">Download on the</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;