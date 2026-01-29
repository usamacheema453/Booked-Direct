import React from "react";
import { FaStar, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const Popular = () => {
  const services = [
    {
      id: 1,
      name: "Luxury Hair Salon",
      category: "Hair Styling",
      rating: 4.8,
      reviews: 245,
      location: "Downtown Center",
      image: "💇",
      price: "$50-80"
    },
    {
      id: 2,
      name: "Wellness Spa",
      category: "Spa & Massage",
      rating: 4.9,
      reviews: 312,
      location: "North District",
      image: "🧖",
      price: "$60-120"
    },
    {
      id: 3,
      name: "Beauty Studio",
      category: "Makeup & Nails",
      rating: 4.7,
      reviews: 198,
      location: "Main Street",
      image: "💄",
      price: "$30-60"
    },
    {
      id: 4,
      name: "Fitness Center",
      category: "Fitness & Training",
      rating: 4.6,
      reviews: 156,
      location: "East Side",
      image: "💪",
      price: "$25-50"
    },
    {
      id: 5,
      name: "Derma Clinic",
      category: "Skincare",
      rating: 4.9,
      reviews: 287,
      location: "Medical Plaza",
      image: "✨",
      price: "$40-100"
    },
    {
      id: 6,
      name: "Yoga Studio",
      category: "Wellness",
      rating: 4.8,
      reviews: 223,
      location: "Green Park",
      image: "🧘",
      price: "$15-30"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Popular <span className="text-[#005EB8]">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the most-booked wellness services in your area
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              {/* Service Image */}
              <div className="h-48 bg-gradient-to-br from-[#005EB8] to-[#0047A3] flex items-center justify-center text-6xl">
                {service.image}
              </div>

              {/* Service Info */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block bg-[#FFA700] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {service.category}
                </span>

                {/* Name & Location */}
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <FaMapMarkerAlt className="mr-2 text-[#D32F2F]" />
                  {service.location}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(service.rating) ? "text-yellow-400" : "text-gray-300"} size={14} />
                    ))}
                  </div>
                  <span className="text-sm font-semibold ml-2">{service.rating}</span>
                  <span className="text-sm text-gray-500 ml-2">({service.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-[#005EB8] font-bold">{service.price}</span>
                  <button className="bg-[#D32F2F] text-white py-2 px-4 rounded-lg hover:bg-[#B71C1C] transition duration-200 text-sm font-semibold">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-[#005EB8] text-white py-3 px-8 rounded-full hover:bg-[#004A94] transition duration-300 font-semibold flex items-center gap-3 mx-auto">
            View All Services <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Popular;
