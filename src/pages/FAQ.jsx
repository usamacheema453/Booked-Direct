import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "Simply search for your desired service, select a time slot that works for you, and confirm your booking. You'll receive instant confirmation and reminders."
    },
    {
      question: "Can I cancel or reschedule?",
      answer: "Yes, you can cancel or reschedule your appointment up to 24 hours before your scheduled time through the app."
    },
    {
      question: "Are payments secure?",
      answer: "Absolutely! We use industry-standard SSL encryption and PCI-DSS compliance to ensure all payments are secure."
    },
    {
      question: "What if I'm late for my appointment?",
      answer: "Please notify the service provider as soon as possible. Late arrivals may result in reduced service time."
    },
    {
      question: "How do I get a refund?",
      answer: "Refunds are processed within 5-7 business days of cancellation. You can request a refund through the app under 'My Bookings'."
    },
    {
      question: "Can I add special requests to my booking?",
      answer: "Yes! During booking, there's a special requests field where you can add notes or preferences for the service provider."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-[#005EB8]">Questions</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Have questions? We've got answers. Check out our most frequently asked questions below.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg hover:border-[#005EB8] transition duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 md:py-5 flex justify-between items-center hover:bg-gray-50 transition duration-200"
              >
                <h3 className="text-left text-base md:text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <FaChevronUp className="text-[#005EB8] text-lg" />
                  ) : (
                    <FaChevronDown className="text-gray-400 text-lg" />
                  )}
                </div>
              </button>

              {/* Expanded Answer */}
              {openIndex === index && (
                <div className="px-6 py-4 md:py-5 bg-gray-50 border-t border-gray-300">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center p-6 md:p-8 bg-gradient-to-br from-[#F6F6F6] to-gray-100 rounded-xl">
          <h3 className="text-xl md:text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <button className="bg-[#D32F2F] text-white py-3 px-6 md:px-8 rounded-full hover:bg-[#B71C1C] transition duration-300 font-semibold text-sm md:text-base">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
