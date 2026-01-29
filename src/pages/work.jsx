import React from "react";
import {  FaArrowRight } from "react-icons/fa6";

const Work = () => {
  const steps = [
    {
      id: 1,
      title: "Search & Discover",
      description: "Browse thousands of salons, spas, and wellness centers near you",
      icon: "🔍"
    },
    {
      id: 2,
      title: "View Availability",
      description: "Check real-time availability and service offerings",
      icon: "📅"
    },
    {
      id: 3,
      title: "Book Instantly",
      description: "Secure your appointment with just a few clicks",
      icon: "✓"
    },
    {
      id: 4,
      title: "Get Reminders",
      description: "Receive timely notifications about your upcoming bookings",
      icon: "🔔"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-[#005EB8]">Works</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Booking your wellness appointment has never been easier. Follow these simple steps to get started.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">

              {/* Card */}
              <div className="bg-gradient-to-br from-[#F6F6F6] to-white border-2 border-[#E0E0E0] rounded-xl p-8 hover:border-[#005EB8] hover:shadow-lg transition duration-300 h-full">
                

                {/* Step Number */}
                <div className="inline-block bg-[#005EB8] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-4">
                  {step.id}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#D32F2F] text-white py-3 px-8 rounded-full hover:bg-[#B71C1C] transition duration-300 font-semibold flex items-center gap-3 mx-auto">
            Start Booking Now <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};


export default Work;
