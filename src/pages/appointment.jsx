import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { IoLogoApple } from "react-icons/io5";

const Appointment = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#005EB8] via-[#0047A3] to-[#003880] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Phone Image */}
          <div className="flex justify-center relative">
            <div className="relative w-full max-w-sm">
              {/* Decorative Circles */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>

              {/* Phone Mockup */}
              <div className="bg-black/30 backdrop-blur rounded-3xl p-4 border-8 border-white/20">
                <div className="bg-white rounded-2xl aspect-square flex items-center justify-center text-6xl">
                  📱
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:text-left">
            <p className="text-white/80 font-medium mb-4 uppercase tracking-wide">Download Our App</p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Book Appointments <span className="text-yellow-300">with Ease</span>
            </h2>

            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Experience the ultimate wellness booking platform. Download the Booked mobile app and get instant access to thousands of beauty and wellness services near you.
            </p>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Google Play */}
              <button className="bg-black/50 hover:bg-black/70 border border-white/30 hover:border-white/60 backdrop-blur flex items-center gap-3 py-3 px-4 rounded-lg transition duration-300">
                <BiLogoPlayStore className="text-3xl" />
                <div className="text-left">
                  <p className="text-xs text-white/80">Get it on</p>
                  <p className="font-semibold text-base">Google Play</p>
                </div>
              </button>

              {/* App Store */}
              <button className="bg-black/50 hover:bg-black/70 border border-white/30 hover:border-white/60 backdrop-blur flex items-center gap-3 py-3 px-4 rounded-lg transition duration-300">
                <IoLogoApple className="text-3xl" />
                <div className="text-left">
                  <p className="text-xs text-white/80">Download on the</p>
                  <p className="font-semibold text-base">App Store</p>
                </div>
              </button>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center text-sm font-bold text-blue-900">✓</div>
                <span>Instant booking confirmation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center text-sm font-bold text-blue-900">✓</div>
                <span>Real-time availability updates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center text-sm font-bold text-blue-900">✓</div>
                <span>Exclusive app-only discounts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Pattern */}
      <div className="mt-16 -mb-1">
        <svg className="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="white" opacity="0.1"></path>
        </svg>
      </div>
    </section>
  );
};

export default Appointment;
