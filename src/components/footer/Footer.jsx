import React from "react";
import { FaFacebookSquare, FaTwitter, FaLinkedin, FaInstagram, FaPhone,  } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
    const solutions = [
        { href: '/', title: 'How it Works' },
        { href: '/', title: 'Popular Services' },
        { href: '/', title: 'Pricing' },
        { href: '/', title: 'Features' },
        { href: '/', title: 'Download App' }
    ];

    const company = [
        { href: '/', title: 'About Us' },
        { href: '/', title: 'Blog' },
        { href: '/', title: 'Careers' },
        { href: '/', title: 'Contact Us' },
        { href: '/', title: 'Press' }
    ];

    const support = [
        { href: '/', title: 'Help Center' },
        { href: '/', title: 'Privacy Policy' },
        { href: '/', title: 'Terms of Service' },
        { href: '/', title: 'FAQs' },
        { href: '/', title: 'Report Issue' }
    ];

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold text-[#005EB8] mb-4">Booked</h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Your ultimate wellness booking platform. Book appointments seamlessly.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <FaPhone className="text-[#005EB8]" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <FaEnvelope className="text-[#005EB8]" />
                                <span>support@booked.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <FaMapMarkerAlt className="text-[#005EB8]" />
                                <span>123 Wellness St, NY 10001</span>
                            </div>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Solutions</h3>
                        <ul className="space-y-3">
                            {solutions.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="text-gray-400 hover:text-[#005EB8] transition duration-200 text-sm">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
                        <ul className="space-y-3">
                            {company.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="text-gray-400 hover:text-[#005EB8] transition duration-200 text-sm">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
                        <ul className="space-y-3">
                            {support.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="text-gray-400 hover:text-[#005EB8] transition duration-200 text-sm">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="bg-[#005EB8] p-3 rounded-lg hover:bg-[#004A94] transition duration-200">
                                <FaFacebookSquare size={20} />
                            </a>
                            <a href="#" className="bg-[#005EB8] p-3 rounded-lg hover:bg-[#004A94] transition duration-200">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="bg-[#005EB8] p-3 rounded-lg hover:bg-[#004A94] transition duration-200">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="bg-[#005EB8] p-3 rounded-lg hover:bg-[#004A94] transition duration-200">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>&copy; 2024 Booked. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#005EB8] transition duration-200">Privacy Policy</a>
                        <a href="#" className="hover:text-[#005EB8] transition duration-200">Terms of Service</a>
                        <a href="#" className="hover:text-[#005EB8] transition duration-200">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;