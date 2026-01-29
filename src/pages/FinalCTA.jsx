import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#005EB8] via-[#0047A3] to-[#003880] text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="text-center">
          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Ready to Book Your <br className="hidden md:block" />
            Perfect Wellness <span className="text-yellow-300">Experience?</span>
          </h2>

          {/* Subheading */}
          <p className="text-base md:text-lg text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed">
            Join 50,000+ happy users who have discovered their favorite wellness services
          </p>

          {/* Stats Preview */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-12 mb-10 md:mb-12 py-6 md:py-8">
            <div>
              <p className="text-3xl md:text-4xl font-bold">10K+</p>
              <p className="text-white/80 text-xs md:text-sm">Services</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">4.8★</p>
              <p className="text-white/80 text-xs md:text-sm">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">24/7</p>
              <p className="text-white/80 text-xs md:text-sm">Support</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16">
            <button className="bg-yellow-400 text-[#005EB8] py-4 px-8 md:px-10 rounded-full hover:bg-white transition duration-300 font-bold text-base md:text-lg flex items-center justify-center gap-2 group">
              Download App Now
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </button>
            <button className="border-2 border-white text-white py-4 px-8 md:px-10 rounded-full hover:bg-white/10 transition duration-300 font-bold text-base md:text-lg">
              Schedule Demo
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 text-xs md:text-sm text-white/80">
            <div className="flex items-center gap-2">
              <span>✓</span> Free First Booking
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span> No Hidden Fees
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span> Money Back Guarantee
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 md:mt-20 max-w-xl mx-auto bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-bold mb-3">Get Updates & Exclusive Offers</h3>
          <p className="text-white/80 text-xs md:text-sm mb-6">
            Subscribe to our newsletter for wellness tips, exclusive discounts, and early access to new features.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white text-sm"
            />
            <button className="bg-yellow-400 text-[#005EB8] px-6 py-3 rounded-lg hover:bg-white transition duration-300 font-bold text-sm md:text-base whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
