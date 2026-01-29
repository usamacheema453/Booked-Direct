import React from "react";
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Search services",
        "View availability",
        "Basic booking",
        "Email reminders"
      ],
      color: "border-gray-300",
      bgColor: "bg-white",
      buttonColor: "bg-gray-200 text-gray-800 hover:bg-gray-300"
    },
    {
      name: "Premium",
      price: "$4.99",
      period: "/ month",
      description: "Most popular choice",
      features: [
        "Everything in Basic",
        "Priority booking",
        "Exclusive deals",
        "SMS + Email reminders",
        "Booking history"
      ],
      color: "border-[#005EB8]",
      bgColor: "bg-gradient-to-br from-blue-50 to-white",
      buttonColor: "bg-[#005EB8] text-white hover:bg-[#004A94]",
      isPopular: true
    },
    {
      name: "Plus",
      price: "$9.99",
      period: "/ month",
      description: "For power users",
      features: [
        "Everything in Premium",
        "Unlimited bookings",
        "Priority customer support",
        "Save favorite providers",
        "Referral rewards"
      ],
      color: "border-[#D32F2F]",
      bgColor: "bg-white",
      buttonColor: "bg-[#D32F2F] text-white hover:bg-[#B71C1C]"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Simple & Transparent <span className="text-[#005EB8]">Pricing</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always flexible, no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl border-2 ${plan.color} ${plan.bgColor} overflow-hidden transition duration-300 hover:shadow-2xl transform hover:-translate-y-1`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="bg-[#005EB8] text-white py-2 px-4 text-center text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              {/* Plan Content */}
              <div className="p-6 md:p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 text-base ml-2">{plan.period}</span>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition duration-300 mb-8 text-sm md:text-base ${plan.buttonColor}`}
                >
                  {plan.price === "Free" ? "Get Started" : "Subscribe Now"}
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <FaCheck className="text-[#005EB8] mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="mt-12 md:mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Custom Pricing?</h3>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            For businesses and service providers with specific needs
          </p>
          <button className="bg-[#005EB8] text-white py-3 px-6 md:px-8 rounded-full hover:bg-[#004A94] transition duration-300 font-semibold text-sm md:text-base">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
