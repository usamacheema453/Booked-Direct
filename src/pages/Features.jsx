import React from "react";
import { FaShieldAlt, FaClipboardList, FaTrophy, FaHeadset, FaLock, FaMobileAlt } from "react-icons/fa";

const Features = () => {
    const features = [
        {
            icon: FaShieldAlt,
            title: 'Secure & Safe',
            describe: 'Your data and payment information are fully protected with SSL encryption'
        },
        {
            icon: FaClipboardList,
            title: 'Easy Management',
            describe: 'Manage all your bookings in one place with instant confirmations'
        },
        {
            icon: FaTrophy,
            title: 'Top Rated',
            describe: 'Choose from verified and highly-rated service providers'
        },
        {
            icon: FaHeadset,
            title: '24/7 Support',
            describe: 'Get instant help from our customer support team anytime'
        },
        {
            icon: FaLock,
            title: 'Privacy First',
            describe: 'Your personal information is never shared with third parties'
        },
        {
            icon: FaMobileAlt,
            title: 'Mobile Friendly',
            describe: 'Book appointments on the go with our fully responsive app'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Why Choose <span className="text-[#005EB8]">Booked</span>?
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Experience the seamless booking platform designed for your wellness journey
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div key={index} className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-lg p-8 hover:border-[#005EB8] hover:shadow-lg transition duration-300">
                                {/* Icon */}
                                <div className="w-16 h-16 bg-gradient-to-br from-[#005EB8] to-[#0047A3] rounded-lg flex items-center justify-center mb-6">
                                    <IconComponent className="text-white text-2xl" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.describe}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <p className="text-gray-700 text-lg mb-6">
                        Join thousands of satisfied customers who trust Booked for their wellness appointments
                    </p>
                    <button className="bg-[#D32F2F] text-white py-3 px-8 rounded-full hover:bg-[#B71C1C] transition duration-300 font-semibold">
                        Download App Now
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Features;
