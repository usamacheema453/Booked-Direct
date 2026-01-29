import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaStar } from "react-icons/fa6";

const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Beauty Salon Owner',
      comment: 'I\'ve been able to focus more on my clients and less on administrative tasks. Booked helps me reach new clients while keeping my schedule organized—definitely worth it.',
      rating: 5,
      image: '👩'
    },
    {
      id: 2,
      name: 'James Wilson',
      role: 'Spa Manager',
      comment: 'The best thing about Booked is the exposure! My business is getting noticed by people who wouldn\'t have found it otherwise, and the app makes it so easy for them to book. Love it!',
      rating: 5,
      image: '👨'
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Hair Stylist',
      comment: 'I\'ve been able to focus more on my clients and less on administrative tasks. Booked helps me reach new clients while keeping my schedule organized—definitely worth it.',
      rating: 5,
      image: '👩'
    },
    {
      id: 4,
      name: 'Alex Martinez',
      role: 'Wellness Coach',
      comment: 'The best thing about Booked is the exposure! My business is getting noticed by people who wouldn\'t have found it otherwise, and the app makes it so easy for them to book. Love it!',
      rating: 5,
      image: '👨'
    },
    {
      id: 5,
      name: 'Lisa Chen',
      role: 'Makeup Artist',
      comment: 'I\'ve been able to focus more on my clients and less on administrative tasks. Booked helps me reach new clients while keeping my schedule organized—definitely worth it.',
      rating: 5,
      image: '👩'
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-[#005EB8]">Customers Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied service providers and customers who trust Booked
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left - Avatar & Info */}
              <div className="text-center lg:text-left">
                <div className="text-6xl mb-4">{testimonials[currentIndex].image}</div>
                <h3 className="text-2xl font-bold mb-2">{testimonials[currentIndex].name}</h3>
                <p className="text-[#005EB8] font-semibold mb-6">{testimonials[currentIndex].role}</p>
                
                {/* Stars */}
                <div className="flex justify-center lg:justify-start gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={20} />
                  ))}
                </div>
              </div>

              {/* Right - Comment */}
              <div>
                <p className="text-gray-600 text-lg leading-relaxed italic">
                  "{testimonials[currentIndex].comment}"
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="bg-[#005EB8] text-white p-3 rounded-full hover:bg-[#004A94] transition duration-300"
            >
              <FaArrowLeft size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition duration-300 ${
                    index === currentIndex
                      ? 'bg-[#005EB8] w-8'
                      : 'bg-gray-300 w-3 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="bg-[#005EB8] text-white p-3 rounded-full hover:bg-[#004A94] transition duration-300"
            >
              <FaArrowRight size={20} />
            </button>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Client;
