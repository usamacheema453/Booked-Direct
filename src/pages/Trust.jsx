import React from "react";
import { FaShieldAlt, FaCertificate, FaTrophy } from "react-icons/fa";

const Trust = () => {
  const trustPoints = [
    {
      icon: FaShieldAlt,
      title: "100% Secure",
      description: "Your data is protected with bank-level SSL encryption and GDPR compliance.",
      stat: "2M+ Safe Transactions"
    },
    {
      icon: FaTrophy,
      title: "Verified Professionals",
      description: "All service providers are verified and background checked for your safety.",
      stat: "10,000+ Verified Pros"
    },
    {
      icon: FaCertificate,
      title: "Certified Platforms",
      description: "We're certified by industry leaders in data protection and service quality.",
      stat: "ISO 27001 Certified"
    }
  ];

  const stats = [
    { number: "4.8★", label: "Average Rating" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" },
    { number: "50K+", label: "Happy Users" }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="text-[#005EB8]">Trust</span> Booked?
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Join thousands of customers who trust us with their wellness bookings
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {trustPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-[#005EB8] hover:shadow-lg transition duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-[#005EB8] to-[#0047A3] p-4 rounded-full">
                    <IconComponent className="text-white text-3xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                  {point.description}
                </p>
                <p className="text-[#005EB8] font-semibold text-sm">
                  {point.stat}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#005EB8] to-[#0047A3] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-white/90 text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 bg-white rounded-xl p-8 md:p-12 border-2 border-[#F6F6F6] text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Community Today
          </h3>
          <p className="text-gray-600 mb-8 text-sm md:text-base max-w-xl mx-auto">
            Start booking your wellness appointments with confidence. Get instant confirmation and 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#005EB8] text-white py-3 px-8 rounded-full hover:bg-[#004A94] transition duration-300 font-semibold text-sm md:text-base order-2 sm:order-1">
              Download App
            </button>
            <button className="border-2 border-[#005EB8] text-[#005EB8] py-3 px-8 rounded-full hover:bg-[#005EB8] hover:text-white transition duration-300 font-semibold text-sm md:text-base order-1 sm:order-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
